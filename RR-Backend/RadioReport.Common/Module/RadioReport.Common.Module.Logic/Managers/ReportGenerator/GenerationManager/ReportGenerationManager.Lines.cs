using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Helpers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportGenerationManager
    {
        /// <summary>
        /// Evaluate if line should be shown. If true, replace correct values
        /// </summary>
        /// <param name="line">Line to evaluate</param>
        /// <param name="rrDict">Dictionary of rrid's and values</param>
        /// <param name="languageCode">Language code of line</param>
        /// <param name="isLocalizer">Information whether we are dealing with localizers</param>
        private void ProcessLine(Line line, RadioReportValueDictionary rrDict, List<RadioReportValue> images, string lastFinding, string languageCode,
            bool isLocalizer, out List<Line> newFindingLines, bool ignoreRating)
        {
            newFindingLines = new List<Line>();
            var shouldDeleteLine = !string.IsNullOrEmpty(line.FindingType) && line.PageNumber == 0;

            if (ignoreRating && !string.IsNullOrEmpty(line.FindingType) && line.PageNumber > 0 && line.FindingType != lastFinding)
            {
                line.FindingType = line.FindingType.Trim();
                lastFinding = line.FindingType;
                var allMatchingFindingKeys = rrDict.GetFindingKeysByFinding(line.FindingType, line.PageNumber).ToList();

                var findingsCount = allMatchingFindingKeys.Count;
                var shouldBeDuplicated = findingsCount > 1;

                if (shouldBeDuplicated)
                {
                    for (int i = 1; i < findingsCount; i++)
                    {
                        var copyOfLine = ReportHelpers.CloneUsingJson(line);
                        newFindingLines.Add(copyOfLine);
                        var validKeys = rrDict.GetRelatedKeys(allMatchingFindingKeys[i]).Append(allMatchingFindingKeys[i]);
                        var subSizedDictionary = rrDict.GetSubsetDictionary(validKeys);
                        ProcessLine(copyOfLine, subSizedDictionary, images, lastFinding, languageCode, isLocalizer, out List<Line> newSubFindingLines, ignoreRating);
                        AddAndCleanChildLines(copyOfLine, newSubFindingLines);
                    }
                }

                if (findingsCount > 0)
                {
                    var matchingKey = allMatchingFindingKeys.FirstOrDefault();
                    var validKeys = rrDict.GetRelatedKeys(matchingKey).Append(matchingKey);
                    rrDict = rrDict.GetSubsetDictionary(validKeys);
                }
                else
                {
                    shouldDeleteLine = true;
                }
            }

            if(ignoreRating)
            {
                line.PostFixCondition = ReplaceRridInCondition(line.PostFixCondition, rrDict, line.FindingType);
            }
            else
            {
                line.PostFixCondition = ReplaceRatingInCondition(line.PostFixCondition, _reportRating);
            }
            
            line.IsDeleted = shouldDeleteLine || !_booleanExpressionManager.EvaluateExpression(line.PostFixCondition, ignoreRating);
          
            if (!line.IsDeleted)
            {
                if (ignoreRating)
                {
                    var translation = GetTranslation(line.Translations, languageCode);
                    line.Text = translation?.Text ?? string.Empty;
                    line.Summary = GetSummaryTranslations(line, rrDict);
                    line.Text = ReplaceRridInText(line.Text, rrDict, languageCode, line.FindingType, isLocalizer, images);
                    ProcessLineTable(line, rrDict, languageCode);
                }
                               
                if (line.ChildLines?.Count > 0)
                {
                    var newLines = new List<Line>();
                    foreach (var childLine in line.ChildLines)
                    {
                        ProcessLine(childLine, rrDict, images, lastFinding, languageCode, isLocalizer, out List<Line> newFindingChildLines, ignoreRating);
                        if(ignoreRating)
                        {
                            newLines.AddRange(newFindingChildLines);
                        }                       
                    }
                    AddAndCleanChildLines(line, newLines);
                }
            }
        }

        private IEnumerable<ReportSummaryTextModel> GetSummaryTranslations(Line line, RadioReportValueDictionary rrDict)
        {
            var result = new List<ReportSummaryTextModel>();

            foreach (var lang in _alternativeLanguagesList)
            {
                var translation = GetTranslation(line.Translations, lang);
                result.Add(new ReportSummaryTextModel()
                {
                    Lang = lang,
                    Text = ReplaceRridInText(translation?.Text ?? string.Empty, rrDict, lang, line.FindingType, false)
                });
            }

            return result;
        }

        private void ProcessLineTable(Line line, RadioReportValueDictionary rrDict, string languageCode)
        {           
            if (!(line.Table?.Rows?.Any() ?? false))
            {
                return;
            }

            var header = line.Table.HasHeader ? line.Table.Rows.OrderBy(r => r.Order).First() : null;

            var rowsToRemove = new List<TableRow>();
            foreach (var row in line?.Table?.Rows ?? Enumerable.Empty<TableRow>())
            {
                foreach (var cell in row?.Columns ?? Enumerable.Empty<TableCell>())
                {
                    var translation = GetTranslation(cell.Translations, languageCode);
                    cell.Text = translation?.Text ?? string.Empty;
                    cell.Text = ReplaceRridInTableCell(cell.Text, rrDict, languageCode, line.FindingType);
                }

                // if the whole row is empty it is removed (it doesn't concern headers)
                if ((row?.Columns?.All(c => string.IsNullOrWhiteSpace(c.Text)) ?? true) && row != header)
                {
                    rowsToRemove.Add(row);
                }
            }
            rowsToRemove.ForEach(r => line.Table?.Rows?.Remove(r));

            // if the whole column is empty (except header) it is removed
            var columnsToRemove = line.Table?.Rows?.Where(r => r != header && r.Columns != null)?.SelectMany(r => r.Columns)
                ?.GroupBy(c => c.Order)?.Where(oc => oc.All(c => string.IsNullOrWhiteSpace(c.Text)))?.Select(oc => oc.Key);

            if (columnsToRemove?.Count() > 0)
            {
                foreach (var row in line?.Table?.Rows ?? Enumerable.Empty<TableRow>())
                {
                    row.Columns?.RemoveAll(c => columnsToRemove.Contains(c.Order));
                }
            }
        }

        private static Translation GetTranslation(List<Translation> translations, string languageCode) =>
            translations?.FirstOrDefault(t => t.LanguageCode.Equals(languageCode, StringComparison.OrdinalIgnoreCase))
            ?? GetAlternativeTranslation(translations);

        private static Translation GetAlternativeTranslation(List<Translation> translations)
        {
            foreach (var alternativeLanguage in _alternativeLanguagesList)
            {
                var alternativeTranslation = translations?.FirstOrDefault(t => t.LanguageCode.Equals(alternativeLanguage, StringComparison.OrdinalIgnoreCase));
                if (alternativeTranslation != null)
                {
                    return alternativeTranslation;
                }
            }
            return null;
        }

        private static string GetPatientData(ReportSchema schema)
        {
            var patientParagraph = schema.Paragraphs.FirstOrDefault(p => p.Name.Equals(_patientParagraphDefaultName, StringComparison.CurrentCulture));

            var result = patientParagraph?.Lines[0]?.Text ?? "No patient data found";

            return result;
        }

        private static void AddAndCleanChildLines(Line line, IEnumerable<Line> newChildLines)
        {
            var resultLines = line.ChildLines
                .Concat(newChildLines)
                .Where(l => l.IsDeleted is false)
                .OrderBy(l => l.LevelOrder)
                .ToList();

            line.ChildLines.Clear();
            line.ChildLines.AddRange(resultLines);
        }
    }
}
