using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class RadioReportValueDictionary
    {
        private readonly Dictionary<string, RadioReportValue> _commonDictionary;
        private readonly Dictionary<FindingKey, Dictionary<string, RadioReportValue>> _findingsDicitionary;

        /// <summary>
        /// Main constructor, creates two private dictionaries from given collection of rr values
        /// </summary>
        /// <param name="radioReportValues">Collection of values from which to create inner dictionaries</param>
        public RadioReportValueDictionary(IEnumerable<RadioReportValue> radioReportValues)
        {
            radioReportValues ??= Enumerable.Empty<RadioReportValue>();
            _commonDictionary = new Dictionary<string, RadioReportValue>();
            _findingsDicitionary = new Dictionary<FindingKey, Dictionary<string, RadioReportValue>>();
            ProcessReportValues(radioReportValues);
        }

        /// <summary>
        /// Shallow copy constructor, used for creating subsized dictionaries containing only relevant findings
        /// Private, used only in GetSubsetDictionary methods
        /// </summary>
        /// <param name="commonDictionary">Common dictionary to copy from, should be the same</param>
        /// <param name="findingDictionary">Dictionary containing only relevant findings</param>
        private RadioReportValueDictionary(Dictionary<string, RadioReportValue> commonDictionary, Dictionary<FindingKey, Dictionary<string, RadioReportValue>> findingDictionary)
        {
            _commonDictionary = commonDictionary;
            _findingsDicitionary = findingDictionary;
        }

        /// <summary>
        /// Gets FindingKeys for given findingtype, return list contains more than one key when there are multiple findings of same type
        /// </summary>
        /// <param name="findingType">Finding type value</param>
        /// <returns>List of matching finding keys to choose valid dictionaries</returns>
        public IEnumerable<FindingKey> GetFindingKeysByFinding(string findingType, byte pageNumber) =>
            _findingsDicitionary
                .Where(pair => pair.Key.FindingType == findingType && pair.Key.PageNumber == pageNumber)
                .Select(pair => pair.Key);

        /// <summary>
        /// Returns keys to finding that are related to given finding.
        /// In case of normal finding - it's details
        /// In case of detail - it's parent finding
        /// </summary>
        /// <param name="findingKey">Key for which lookup related keys</param>
        /// <returns>Collection of realted finding</returns>
        public IEnumerable<FindingKey> GetRelatedKeys(FindingKey findingKey)
        {
            if (findingKey is null)
            {
                throw new ArgumentNullException(nameof(findingKey));
            }
            
            return string.IsNullOrEmpty(findingKey.ParentSuffix) ?
                            GetDetailFindingKeys(findingKey.FindingSuffix, findingKey.PageNumber) :
                            GetFindingKeysBySuffix(findingKey.ParentSuffix, findingKey.PageNumber);
        }
            

        /// <summary>
        /// Method for creating subset dictionary with only one finding and commons
        /// </summary>
        /// <param name="findingKey">Key of selected finding</param>
        /// <returns>Subsized dictionary</returns>
        public RadioReportValueDictionary GetSubsetDictionary(FindingKey findingKey) => GetSubsetDictionary(new[] { findingKey });

        /// <summary>
        /// Method for creating subset dictionary containing only given findings and common.
        /// </summary>
        /// <param name="findingKeys">Collection of finding keys, which the result dictionary will contain</param>
        /// <returns>Subsized dictionary</returns>
        public RadioReportValueDictionary GetSubsetDictionary(IEnumerable<FindingKey> findingKeys)
        {
            var newFindingDictionary = _findingsDicitionary
                .Where(pair => findingKeys.Contains(pair.Key))
                .ToDictionary(pair => pair.Key, pair => pair.Value);

            var result = new RadioReportValueDictionary(_commonDictionary, newFindingDictionary);
            return result;
        }

        /// <summary>
        /// Method for getting value for given rrid
        /// </summary>
        /// <param name="radioReportId">rrid for which we want value</param>
        /// <param name="currentFindingType">Finding type by which method should filter results, if not given first finding is selected</param>
        /// <returns>RadioReportValue for rrid or null if not found</returns>
        public RadioReportValue GetRadioReportValue (string radioReportId, string currentFindingType)
        {
            if (TryGetCommonValue(radioReportId, out RadioReportValue dictValue))
            {
                return dictValue;
            }
            else
            {
                FindingKey findingKey;
                var findingKeys = GetFindingKeysByRrId(radioReportId);
                if (findingKeys?.Count() > 0)
                {   //  when we want value from current finding, case: rrid that is both in finding detail and its parent
                    if (findingKeys.Count() > 1 && !string.IsNullOrEmpty(currentFindingType))
                    {
                        findingKey = findingKeys.FirstOrDefault(f => f.FindingType == currentFindingType);
                    }
                    else
                    {   // case when we are in finding detail and we want value from parent finding or when we want to check if there are any findings in report
                        findingKey = findingKeys.FirstOrDefault();
                    }

                    if (TryGetFindingValue(findingKey, radioReportId, out RadioReportValue findingReportValue))
                    {
                        return findingReportValue;
                    }
                }
            }
            return null;
        }

        /// <summary>
        /// Main constructing method. Splits values in to smaller, unique dictionaries based on -Fx suffix and page number from rrid
        /// </summary>
        /// <param name="radioReportValues">Collection of values, from which the dictionary has to be created</param>
        private void ProcessReportValues(IEnumerable<RadioReportValue> radioReportValues)
        {
            foreach (var rrValue in radioReportValues)
            {
                var findingMatches = Regex.Matches(rrValue.RadioReportId, ReportConsts.RadioReportFindingPattern);

                if (findingMatches.Count == 1 || findingMatches.Count == 2)
                {
                    string findingSuffix = findingMatches[0].Value.TrimStart(ReportConsts.FindingHyphen);

                    if (findingMatches.Count == 2)
                    {
                        findingSuffix += findingMatches[1].Value;
                    }

                    var rrIdWithoutSuffix = rrValue.RadioReportId[0..findingMatches[0].Index];

                    var indexOfNumericPartOfId = rrIdWithoutSuffix.LastIndexOf('_') + 1;
                    var pageNumber = RridHelper.GetPageNumberFromRrid(rrIdWithoutSuffix);
                    if (!pageNumber.HasValue)
                    {
                        continue;
                    }

                    var key = _findingsDicitionary.Keys.SingleOrDefault(key =>
                                                                            key.FindingSuffix == findingSuffix &&
                                                                            key.PageNumber == pageNumber.Value &&
                                                                            key.FindingType == rrValue.CollectionItemType);
                    if (key != null)
                    {
                        _findingsDicitionary[key].Add(rrIdWithoutSuffix, rrValue);
                    }
                    else
                    {
                        var newKey = new FindingKey
                        {
                            FindingSuffix = findingSuffix,
                            PageNumber = pageNumber.Value,
                            FindingType = rrValue.CollectionItemType,
                        };
                        _findingsDicitionary.Add(newKey, new Dictionary<string, RadioReportValue> { { rrIdWithoutSuffix, rrValue } });
                    }
                }
                else
                {
                    _commonDictionary.Add(rrValue.RadioReportId, rrValue);
                }
            }
        }

        /// <summary>
        /// Gets FindingKeys for given rrid, returned list contains more than one key when there are multiple findings containing given rrid 
        /// </summary>
        /// <param name="radioReportId">Key for which we are to get FindingKeys</param>
        /// <returns>List of matching finding keys to choose valid dictionaries</returns>
        private IEnumerable<FindingKey> GetFindingKeysByRrId(string radioReportId) =>
            _findingsDicitionary
                .Where(pair => pair.Value.ContainsKey(radioReportId))
                .Select(pair => pair.Key);

        private IEnumerable<FindingKey> GetFindingKeysBySuffix(string findingSuffix, byte pageNumber) =>
            _findingsDicitionary
                .Where(pair => pair.Key.FindingSuffix == findingSuffix && pair.Key.PageNumber == pageNumber)
                .Select(pair => pair.Key);

        private IEnumerable<FindingKey> GetDetailFindingKeys(string parentSuffix, byte pageNumber) =>
            _findingsDicitionary
                .Where(pair => pair.Key.ParentSuffix == parentSuffix && pair.Key.PageNumber == pageNumber)
                .Select(pair => pair.Key);


        private bool TryGetCommonValue(string radioReportId, out RadioReportValue reportValue) =>
            _commonDictionary.TryGetValue(radioReportId, out reportValue);

        private bool TryGetFindingValue(FindingKey findingKey, string radioReportId, out RadioReportValue radioReportValue)
        {
            if (findingKey != null && _findingsDicitionary.TryGetValue(findingKey, out Dictionary<string, RadioReportValue> findingDict))
            {
                return findingDict.TryGetValue(radioReportId, out radioReportValue);
            }
            radioReportValue = null;
            return false;
        }
    }
}
