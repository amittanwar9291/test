using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportGenerationManager
    {
        private static string ReplaceRridInCondition(string postfixCondition, RadioReportValueDictionary rrDict, string currentFindingType)
        {
            var newPostFixCondition = Regex.Replace(postfixCondition, ReportConsts.RadioReportIdPattern,
                m =>
                {
                    var rrValue = rrDict.GetRadioReportValue(m.Value, currentFindingType);
                    return string.IsNullOrEmpty(rrValue?.Value?.ToString()) ? _nullConst : ReplaceSpecialCharacters(rrValue?.Value?.ToString());                   
                });
            return newPostFixCondition;
        }

        /// <summary>
        /// Replaces rr-ids in text the following way:
        /// IF localizer THEN
        ///     substitute with localizer temporary string in following format:
        ///     IF regular localizer THEN
        ///         [rr-id:localizer-code|list-of-values-to-check]
        ///     ELSE
        ///         [rr-id:localizer-code|list-of-values-to-check;rr-id:localizer-code|list-of-values-to-check;...]
        /// ELSE
        ///     substitute with value corresponding to the rr-id.
        /// </summary>
        /// <param name="lineText">line text to be replaced</param>
        /// <param name="rrDict">dictionary of values corresponding to rr-ids</param>
        /// <param name="languageCode">current language code</param>
        /// <param name="currentFindingType">current finding type - if exists</param>
        /// <param name="generateLocalizers">indication if localizer pictures should be generated</param>
        /// <param name="images">collection to append picture values</param>
        /// <returns>line contents with substituted values</returns>
        private string ReplaceRridInText(string lineText, RadioReportValueDictionary rrDict, string languageCode,
            string currentFindingType, bool generateLocalizers, List<RadioReportValue> images = null)
        {
            return Regex.Replace(lineText, ReportConsts.RadioReportIdInTextPattern,
                m =>
                {
                    var dictKey = m.Value.TrimStart('<').TrimEnd('>');
                    var isLocalizerFound = m.Groups.Values.FirstOrDefault(g => Regex.IsMatch(g.Value, ReportConsts.LocalizerIdPattern)) != null;

                    if (generateLocalizers && isLocalizerFound)
                    {
                        return ReplaceRridInTextForLocalizer(dictKey, rrDict, currentFindingType);
                    }
                    else
                    {
                        // get rr-id from rr-id:L*** string
                        if (isLocalizerFound)
                        {
                            return string.Empty;
                        }

                        var key = dictKey;
                        var rrValue = rrDict.GetRadioReportValue(key, currentFindingType);
                        if (rrValue?.Value is byte[] file)
                        {
                            if (images is null)
                            {
                                return string.Empty;
                            }

                            images.Add(rrValue);
                            return ReportConsts.ImageSymbol + rrValue.RadioReportId + ReportConsts.ImageEndSymbol;
                        }
                        if (rrValue?.Value != null)
                        {
                            return _reportTranslationManager.GetValueTranslation(rrValue, languageCode);
                        }                      
                            return dictKey;                       
                    }
                });
        }

        private string ReplaceRridInTextForLocalizer(string dictKey, RadioReportValueDictionary rrDict, string currentFindingType)
        {
            var localizerCode = dictKey;

            var localizerParts = dictKey.Split(':');
            var localizerId = localizerParts.Length > 1 ? localizerParts[1] : localizerParts[0];

            var specialLocalizer = SpecialLocalizers.FirstOrDefault(sl => sl.LocalizerId == localizerId);

            var processedLocalizers = new List<string>();
            if (specialLocalizer is null) // regular localizer
            {
                if (localizerParts.Length == ReportConsts.LocalizerCodeParts)
                {
                    var value = getRrIdValuesForLocalizer(localizerParts[0]);
                    if (!string.IsNullOrEmpty(value))
                    {
                        processedLocalizers.Add($"{localizerCode}|{value}");
                    }
                }
            }
            else // special localizer
            {
                foreach (var localizerRrId in specialLocalizer.Items.Select(i => i.Rrid).Distinct())
                {
                    if (localizerRrId != null)
                    {
                        var value = getRrIdValuesForLocalizer(localizerRrId);
                        if (!string.IsNullOrEmpty(value) && !value.EndsWith(specialLocalizer.NoneValue, StringComparison.Ordinal))
                        {
                            processedLocalizers.Add($"{localizerRrId}:{specialLocalizer.LocalizerId}|{value}");
                        }
                    }
                    else
                    {
                        if (localizerParts.Length == ReportConsts.LocalizerCodeParts)
                        {
                            var value = getRrIdValuesForLocalizer(localizerParts[0]);
                            if (!string.IsNullOrEmpty(value) && !value.EndsWith(specialLocalizer.NoneValue, StringComparison.Ordinal))
                            {
                                processedLocalizers.Add($"{localizerCode}|{value}");
                            }
                        }
                    }
                }
            }

            return processedLocalizers.Any() ? $"[{string.Join(';', processedLocalizers)}]" : string.Empty;

            string getRrIdValuesForLocalizer(string rrid)
            {
                var rrValue = rrDict.GetRadioReportValue(rrid, currentFindingType);
                if (rrValue?.TranslationKey != null)
                {
                    // all values of localizer are in translation key (enum flags)
                    var translationKey = rrValue.AlternativeTranslationSuffix is null
                        ? rrValue.TranslationKey
                        : rrValue.TranslationKey.Replace($"_{rrValue.AlternativeTranslationSuffix}", string.Empty, StringComparison.Ordinal);
                    return Regex.Replace(translationKey, @"\s", string.Empty);
                }
                return string.Empty;
            }
        }

        private string ReplaceRridInTableCell(string cellText, RadioReportValueDictionary rrDict, string languageCode, string currentFindingType)
        {
            try
            {
                return Regex.Replace(cellText, ReportConsts.RadioReportIdInTextPattern,
                    m =>
                    {
                        var dictKey = m.Value.TrimStart('<').TrimEnd('>');
                        var rrValue = rrDict.GetRadioReportValue(dictKey, currentFindingType);
                        if (rrValue?.Value != null)
                        {
                            return _reportTranslationManager.GetValueTranslation(rrValue, languageCode);
                        }
                        throw new NotFoundException();
                    });
            }
            catch (NotFoundException)
            {
                return string.Empty;
            }
        }
        private static string ReplaceSpecialCharacters(string value)
        {
            value = value.Replace(ReportConsts.OperandSep.ToString(), ReportConsts.SemicolonPlaceholder, StringComparison.Ordinal)
                .Replace(ReportConsts.ConditionCommentSep.ToString(), ReportConsts.HashPlaceholder, StringComparison.Ordinal)
                .Replace(ReportConsts.ExpressionSep.ToString(), ReportConsts.PipePlaceholder, StringComparison.Ordinal);
            return value;
        }
    }
}
