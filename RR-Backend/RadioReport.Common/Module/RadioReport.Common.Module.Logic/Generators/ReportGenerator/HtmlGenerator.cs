using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Enums.ReportGenerator;
using RadioReport.Common.Module.Logic.Helpers.ReportGenerator;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace RadioReport.Common.Module.Logic.Generators.ReportGenerator
{
    public class HtmlGenerator : IDocumentGenerator
    {
        private const char Icd10Separator = ',';
        private static readonly List<string> _metadataOnlyForSummaryAndEmpty = new List<string> { ReportConsts.OnlyInSummaryKey, ReportConsts.ShowInEmptySummaryKey };
        private static readonly List<string> _metadataNotEmptySummary = new List<string> { ReportConsts.OnlyInSummaryKey, ReportConsts.ShowInNotEmptySummaryKey };
        private static readonly List<string> _metadataForSummary = new List<string>() { ReportConsts.ShowInSummaryKey, ReportConsts.OnlyInSummaryKey };
        private static readonly List<string> _metadataSummaryEdit = new List<string>() { ReportConsts.SummaryEditTitleKey };
        private static readonly List<string> _metadataFont = new List<string>() { ReportConsts.FontKey };
        private static readonly Regex SpecialPattern = new Regex($"({ReportConsts.SubstitutedLocalizerPattern})|({ReportConsts.ReferenceImagePattern})|({ReportConsts.FontSmallPattern})" +
                                       $"|({ReportConsts.FontItalicPattern})|({ReportConsts.FontUnderlinePattern})", RegexOptions.Compiled);           

        private const string ReferenceImageName = "refimg";
        private const string LocalizerName = "loc";

        private static readonly string SummaryIdAtt = HtmlTagHelper.CreateHtmlAttribute("id", "summary-title");

        public async Task<string> GenerateDocumentFromReport(ReportSchema reportSchema, ReportResult reportSettings, string lang)
        {
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }

            var mainBodyBuilder = new StringBuilder();
            var icd10Set = new HashSet<string>();

            var hasSummary = reportSettings?.ReportSummary?.Any() ?? false;

            await GenerateMainReportBody(mainBodyBuilder, icd10Set, reportSchema, reportSettings, hasSummary);

            if (hasSummary)
            {
                var summaryBody = GenerateReportSummaryBody(reportSettings?.ReportSummary, lang);
                mainBodyBuilder.Replace(ReportConsts.SummaryTag, summaryBody);
            }

            var icd10Body = GenerateICD10Body(icd10Set);
            mainBodyBuilder.Replace(ReportConsts.ICD10Tag, icd10Body);

            var mainBody = JoinImagesNextToEachOther(mainBodyBuilder.ToString());
            return await Task.FromResult(mainBody);
        }

        #region MainReportBody

        private async Task GenerateMainReportBody(StringBuilder builder, HashSet<string> icd10Set, ReportSchema reportSchema,
            ReportResult reportSettings, bool hasSummary)
        {
            foreach (var paragraph in reportSchema.Paragraphs.OrderBy(p => p.Order))
            {
                if (paragraph.Lines?.Count > 0)
                {
                    var exportTags = GetMetadataValues(paragraph.Metadata, ReportConsts.ExportTagKey);

                    AppendOpeningTags(builder, ReportConsts.ExportTagKey, exportTags);

                    var orderedSentences = paragraph.Lines.OrderBy(l => l.LevelOrder);
                    foreach (var sentence in orderedSentences)
                    {
                        await AddSentence(builder, sentence, icd10Set, sentence.PageNumber, reportSettings, 
                            hasSummary);
                    }

                    AppendClosingTags(builder, ReportConsts.ExportTagKey, exportTags);

                    if (!builder.ToString().Contains(SummaryIdAtt, StringComparison.Ordinal))
                    {
                        builder.Replace(ReportConsts.SummaryTag, CreateEmptySummaryTitleTag() + ReportConsts.SummaryTag);
                    }
                }
            }
        }

        private async Task AddSentence(StringBuilder builder, Line sentence, HashSet<string> icd10Set, byte pageNumber,
            ReportResult reportSettings, bool hasSummary)
        {
            // handling of special kind of sentence
            if (sentence.Name != null)
            {
                // summary
                if (sentence.Name.Equals(ReportConsts.SummarySentenceName, StringComparison.OrdinalIgnoreCase))
                {
                    if (hasSummary)
                    {
                        builder.Append(ReportConsts.SummaryTag);
                    }
                    return;
                }

                // ICD-10
                if (sentence.Name.Equals(ReportConsts.ICD10SentenceName, StringComparison.OrdinalIgnoreCase))
                {
                    if (reportSettings.IsICD10)
                    {
                        builder.Append(ReportConsts.ICD10Tag);
                    }
                    return;
                }
            }

            var mainLineBuilder = new LineBuilder()
            {
                CustomLineValidity = CheckValiditityWhenSummary,
                Formatting = ApplyTemporaryFormatting,
                LineText = GetLineText,
                IsMain = true
            };

            if (!hasSummary)
            {
                mainLineBuilder.CustomLineValidity = CheckValidityWhenNoSummary;
            }

            // handling of standard sentence
            CreateSentence(mainLineBuilder, sentence, reportSettings, null, icd10Set);

            var mainSentence = mainLineBuilder.Builder.ToString();
            if (!string.IsNullOrEmpty(mainSentence))
            {
                var exportTags = GetMetadataValues(sentence.Metadata, ReportConsts.ExportTagKey);

                AppendOpeningTags(builder, ReportConsts.ExportTagKey, exportTags);
                await CreateTagsForSentence(builder, mainSentence, pageNumber);
                AppendClosingTags(builder, ReportConsts.ExportTagKey, exportTags);
            }
        }

        private string GetLineText(Line line, string lang) => HttpUtility.HtmlEncode(line.Text);

        private bool CheckValiditityWhenSummary(Line line)
            => !CheckMetadataValue(line.Metadata, _metadataOnlyForSummaryAndEmpty, ReportConsts.TrueValue);

        private bool CheckValidityWhenNoSummary(Line line)
            => !CheckMetadataValue(line.Metadata, _metadataNotEmptySummary, ReportConsts.TrueValue);

        private async Task CreateTagsForSentence(StringBuilder builder, string sentence, byte pageNumber, string styleClass = null)
        {
            // check for special patterns (localizers, reference images and custom fonts)
            var specialMatch = SpecialPattern.Match(sentence);

            // if no special patterns then check for font changes
            if (!specialMatch.Success)
            {
                builder.Append(GetTextWithTag(sentence, pageNumber: pageNumber, styleClass: styleClass));
                return;
            }
            
            // if special pattern then split text occuring before and after
            string[] textParts = sentence.Split(specialMatch.Value, 2);

            // add text occuring before (if exists)
            if (textParts.Length > 0 && textParts[0].Trim().Length > 0)
            {
                builder.Append(GetTextWithTag(AddMissingFormatting(textParts[0]), pageNumber: pageNumber, styleClass: styleClass));
            }

            // case: custom font
            if (specialMatch.Value.Contains(ReportConsts.FontSmallSymbol, StringComparison.Ordinal))
            {
                await CreateTagsForSentence(builder, RemoveFontFormatting(specialMatch.Value), pageNumber, styleClass: "font-small");
            }
            else if (specialMatch.Value.Contains(ReportConsts.FontItalicSymbol, StringComparison.Ordinal))
            {
                await CreateTagsForSentence(builder, RemoveFontFormatting(specialMatch.Value), pageNumber, styleClass: "font-italic");
            }
            else if (specialMatch.Value.Contains(ReportConsts.FontUnderlineSymbol, StringComparison.Ordinal))
            {
                await CreateTagsForSentence(builder, RemoveFontFormatting(specialMatch.Value), pageNumber, styleClass: "font-underline");
                builder.Append(HtmlTagHelper.CreateOpeningHtmlTag(HtmlTag.span) + " " + HtmlTagHelper.CreateClosingHtmlTag(HtmlTag.span));
            }
            // case: reference image
            else if (specialMatch.Value.Contains(ReportConsts.ImageSymbol, StringComparison.Ordinal))
            {
                var content = specialMatch.Value.ReplaceRefImageSymbolWithTags(); 
                builder.Append(
                    $"{HtmlTagHelper.GetImageDivOpeningTag(ReferenceImageName, CreatePageAtt(pageNumber))}{content}{HtmlTagHelper.GetImageDivClosingTag(ReferenceImageName)}");
            }
            // case: localizer
            else
            {
                builder.Append(
                    $"{HtmlTagHelper.GetImageDivOpeningTag(LocalizerName, CreatePageAtt(pageNumber))}{specialMatch.Value}{HtmlTagHelper.GetImageDivClosingTag(LocalizerName, CreatePageAtt(pageNumber))}");
            }

            // create tags for remaining part of sentence (if exists)
            if (textParts.Length > 1 && textParts[1].Trim().Length > 0)
            {
                await CreateTagsForSentence(builder, AddMissingFormatting(textParts[1]), pageNumber, styleClass: styleClass);
            }
        }

        private static void AppendOpeningTags(StringBuilder builder, string tagType, IEnumerable<string> tags)
        {
            foreach (var tag in tags)
            {
                builder.Append(HtmlTagHelper.CreateCommentTag(HtmlTagHelper.CreateOpeningHtmlTag($"{tagType}={tag}")));
            }
        }

        private static void AppendClosingTags(StringBuilder builder, string tagType, IEnumerable<string> tags)
        {
            foreach (var tag in tags.Reverse())
            {
                builder.Append(HtmlTagHelper.CreateCommentTag(HtmlTagHelper.CreateClosingHtmlTag($"{tagType}={tag}")));
            }
        }

        /// <summary>
        /// If localizer and reference image (from the same page) are next to each other then are joined inside single div.
        /// </summary>
        /// <param name="mainBody"></param>
        /// <returns></returns>
        private static string JoinImagesNextToEachOther(string mainBody)
        {
            var openingTag = HtmlTagHelper.GetImageDivOpeningTag(ReferenceImageName, HtmlTagHelper.CreateHtmlAttribute("page", "(\\d+)"));
            var closingTag = HtmlTagHelper.GetImageDivClosingTag(LocalizerName, HtmlTagHelper.CreateHtmlAttribute("page", "(\\d+)"));
            var joinedImagesPattern = $"{closingTag}\\s?{openingTag}";

            return Regex.Replace(mainBody, joinedImagesPattern,
                m =>
                {
                    // if page numbers are the same
                    if (m.Groups.Count == 3 && m.Groups[1].Value == m.Groups[2].Value)
                    {
                        return string.Empty;
                    }
                    return m.Value;
                });
        }

        #endregion MainReportBody

        #region Summary

        public IEnumerable<ReportSummaryModel> GenerateReportSummary(ReportSchema reportSchema, ReportResult reportSettings)
        {
            var summarySentences = new List<(int priority, int paragraph, int sentence, Line line)>();

            foreach (var paragraph in reportSchema?.Paragraphs?.OrderBy(p => p.Order) ?? Enumerable.Empty<Paragraph>())
            {
                if (paragraph.Lines?.Count > 0)
                {
                    var orderedSentences = paragraph.Lines.OrderBy(l => l.LevelOrder);
                    foreach (var sentence in orderedSentences)
                    {
                        FillSummarySentences(sentence, reportSettings);
                        if (sentence.Summary.Any(s => !string.IsNullOrWhiteSpace(s.Text)))
                        {
                            var sentencePriority = GetHighestLinePriority(sentence);
                            summarySentences.Add((sentencePriority, paragraph.Order, sentence.LevelOrder, sentence));
                        }
                    }
                }
            }

            var result = new List<ReportSummaryModel>();

            foreach (var sentence in summarySentences.OrderBy(s => s.priority).ThenBy(s => s.paragraph).ThenBy(s => s.sentence))
            {
                var priority = $"{sentence.priority}_{sentence.paragraph}_{sentence.sentence}_";
                var existingEntries = result.Where(r => r.Priority.StartsWith(priority, StringComparison.Ordinal));
                priority += existingEntries.Count();

                result.Add(new ReportSummaryModel()
                {
                    Priority = priority,
                    PageNumber = sentence.line.PageNumber,
                    Translations = sentence.line.Summary
                });
            }
            return result;
        }

        private static string GenerateReportSummaryBody(IEnumerable<ReportSummaryModel> summary, string lang)
        {
            var lineNumber = 1;
            var summaryBuilder = new StringBuilder();

            foreach (var sentence in summary?.OrderBy(s => s.Order) ?? Enumerable.Empty< ReportSummaryModel>())
            {
                var lineIdentification = summary.Count() > 1 ? $"{lineNumber++}. " : string.Empty;
                var translation = sentence.Translations.FirstOrDefault(t => t.Lang == lang);
                var summaryText = HttpUtility.HtmlEncode(translation?.Text?.Insert(0, ReportConsts.NewLineSymbol + lineIdentification) ?? string.Empty);
                
                string styleClass = null;
                if (sentence.IsAddedByUser && translation != null)
                {
                    styleClass = translation.ActualTextLang == translation.Lang ? "summary-blue" : "summary-red";
                }
                
                summaryBuilder.Append(GetTextWithTag(summaryText, pageNumber: sentence.PageNumber, styleClass: styleClass));
            }
            return summaryBuilder.ToString();
        }

        private void FillSummarySentences(Line sentence, ReportResult reportSettings)
        {
            foreach (var summary in sentence.Summary)
            {
                var summaryLineBuilder = new LineBuilder()
                {
                    CustomLineValidity = CheckIfLineIsInSummary,
                    Formatting = ClearFormatting,
                    LineText = GetSummaryLineText,
                    IsMain = false
                };
                CreateSentence(summaryLineBuilder, sentence, reportSettings, summary.Lang);
                summary.Text = summaryLineBuilder.Builder.ToString();
            }
        }

        private int GetHighestLinePriority(Line line)
            => Math.Min(GetLinePriority(line), GetMinChildrenPriority(line.ChildLines));

        public int GetMinChildrenPriority(List<Line> childLines)
            => childLines?.Count > 0 ? childLines.Min(GetHighestLinePriority) : int.MaxValue;

        private string GetSummaryLineText(Line line, string lang) => line.Summary.FirstOrDefault(l => l.Lang == lang)?.Text ?? string.Empty;

        private bool CheckIfLineIsInSummary(Line line)
            => CheckMetadataValue(line.Metadata, _metadataForSummary, ReportConsts.TrueValue);

        private int GetLinePriority(Line line)
        {
            if (int.TryParse(GetMetadataValue(line.Metadata, ReportConsts.PriorityKey), out int priority))
            {
                return priority;
            }
            else if (CheckIfLineIsInSummary(line))
            {
                return ReportConsts.DefaultPriority;
            }
            else
            {
                return int.MaxValue;
            }
        }

        #endregion Summary

        #region Common

        private void CreateSentence(LineBuilder lineBuilder, Line sentence, ReportResult reportSettings, string lang,
            HashSet<string> icd10Set = null)
        {
            AddLine(lineBuilder, sentence, icd10Set, reportSettings, lang);
            if (lineBuilder.Builder.Length > 0)
            {
                lineBuilder.Builder.Append(' ');
            }
        }

        private void AddLine(LineBuilder lineBuilder, Line line, HashSet<string> icd10Set, ReportResult reportSettings, 
            string lang)
        {
            AppendLineIcd10Data(icd10Set, line);

            var sentenceTypeTags = GetMetadataValues(line.Metadata, ReportConsts.SentenceTypeKey);
            var isSummaryTitle = CheckMetadataValue(line.Metadata, _metadataSummaryEdit, ReportConsts.TrueValue);

            (var isLineValid, var doesLineHaveContent) = getLineStatus(lineBuilder);
            appendLineTextToBuilder();

            var childLinesBuilder = new StringBuilder();
            if (line.ChildLines?.Count > 0)
            {
                var currentChildLineBuilder = new LineBuilder(lineBuilder);
                Line previousValidLine = null;

                foreach (var childLine in line.ChildLines.OrderBy(c => c.LevelOrder))
                {
                    AddLine(currentChildLineBuilder, childLine, icd10Set, reportSettings, lang);
                    if (currentChildLineBuilder.Builder.Length > 0)
                    {
                        appendChildLine(childLinesBuilder, currentChildLineBuilder.Builder, previousValidLine);
                        previousValidLine = childLine;
                    }
                }
            }

            appendLineChildren();


            (bool, bool) getLineStatus(LineBuilder lineBuilder)
            {
                var isLineValid = CheckCommonLineValidity(lineBuilder, line, reportSettings, lang) && lineBuilder.CustomLineValidity(line);
                var doesLineHaveContent = isLineValid && lineBuilder.LineText(line, lang)?.Length > 0;
                return (isLineValid, doesLineHaveContent);
            }

            void appendLineTextToBuilder()
            {
                if (lineBuilder.IsMain && !isSummaryTitle)
                {
                    AppendOpeningTags(lineBuilder.Builder, ReportConsts.SentenceTypeKey, sentenceTypeTags);
                }

                if (CheckIfLineHasTable(line) && isLineValid && lineBuilder.IsMain)
                {
                    lineBuilder.Builder.Append(CreateTableTag(line.Table));
                }
                else if (doesLineHaveContent)
                {
                    var text = lineBuilder.LineText(line, lang);

                    if (isSummaryTitle && lineBuilder.IsMain)
                    {
                        CreateSummaryTitle(text);
                    }
                    else
                    {
                        lineBuilder.Builder.Append(lineBuilder.Formatting(text, line));
                    }
                }
            }

            void appendChildLine(StringBuilder childLinesBuilder, StringBuilder currentChildLineBuilder, Line previousValidLine)
            {
                if (previousValidLine != null)
                {
                    if (!IsLineSeparatorAlways(previousValidLine.LineSeparator))
                    {
                        AppendLineSeparator(childLinesBuilder, HttpUtility.HtmlEncode(previousValidLine.LineSeparator));
                    }

                    childLinesBuilder.Append(' ');
                }

                childLinesBuilder.Append(currentChildLineBuilder);
                currentChildLineBuilder.Clear();
            }

            void appendLineChildren()
            {
                if (doesLineHaveContent && childLinesBuilder.Length > 0)
                {
                    lineBuilder.Builder.Append(' ');
                }

                if (lineBuilder.IsMain && !isSummaryTitle)
                {
                    AppendClosingTags(lineBuilder.Builder, ReportConsts.SentenceTypeKey, sentenceTypeTags);
                }

                lineBuilder.Builder.Append(childLinesBuilder);

                if (IsLineSeparatorAlways(line.LineSeparator) && isLineValid)
                {
                    AppendLineSeparator(lineBuilder.Builder, HttpUtility.HtmlEncode(line.LineSeparator));
                }
            }

            void CreateSummaryTitle(string text)
            {
                lineBuilder.Builder.Append(text.Trim().StartsWith(ReportConsts.NewLineSymbol, StringComparison.Ordinal) ? ReportConsts.NewLineSymbol : string.Empty);
                var postText = text.Trim().EndsWith(ReportConsts.NewLineSymbol, StringComparison.Ordinal) ? ReportConsts.NewLineSymbol : string.Empty;

                lineBuilder.Builder.Append(HtmlTagHelper.CreateClosingHtmlTag(HtmlTag.span));

                var summaryTitleBuilder = new StringBuilder();

                if (lineBuilder.IsMain)
                {
                    AppendOpeningTags(summaryTitleBuilder, ReportConsts.SentenceTypeKey, sentenceTypeTags);
                }

                summaryTitleBuilder.Append(lineBuilder.Formatting(text, line));
                summaryTitleBuilder.Replace(ReportConsts.NewLineSymbol, string.Empty);

                if (lineBuilder.IsMain)
                {
                    AppendClosingTags(summaryTitleBuilder, ReportConsts.SentenceTypeKey, sentenceTypeTags);
                }

                lineBuilder.Builder.Append(GetTextWithTag(summaryTitleBuilder.ToString(), line.PageNumber, isSummaryTitle: true));
                lineBuilder.Builder.Append(HtmlTagHelper.CreateOpeningHtmlTag(HtmlTag.span, CreatePageAtt(line.PageNumber)));
                lineBuilder.Builder.Append(postText);
            }
        }

        private static bool CheckIfLineHasTable(Line line) => line?.Table?.Rows?.Any() ?? false;

        private static bool CheckCommonLineValidity(LineBuilder builder, Line line, ReportResult reportSettings, string lang)
        {
            var lineText = builder.LineText(line, lang);
            return !(lineText?.Contains(ReportConsts.CommentSymbol, StringComparison.Ordinal) ?? false)
                   && CheckIfICDValid(line, reportSettings);
        }

        #endregion

        #region ICD-10

        private static string GenerateICD10Body(HashSet<string> icd10Set)
            => icd10Set is null
                ? string.Empty
                : GetTextWithTag($"{ReportConsts.NewLineSymbol}{string.Join($"{Icd10Separator} ", icd10Set)}");

        private static void AppendLineIcd10Data(HashSet<string> icd10Set, Line line)
        {
            if (icd10Set != null)
            {
                foreach (var value in ExtractLineIcd10Data(line))
                {
                    icd10Set.Add(value);
                }
            }
        }

        private static IEnumerable<string> ExtractLineIcd10Data(Line line)
        {
            var allLineMetadata = line.Metadata ?? new List<Metadata>();
            if (CheckIfLineHasTable(line))
            {
                var tableMetadata = line.Table.Rows.Where(t => t.Columns != null)?.SelectMany(t => t.Columns)
                                        ?.Where(c => c.Metadata != null)?.SelectMany(c => c.Metadata)
                                    ?? Enumerable.Empty<Metadata>();

                allLineMetadata.AddRange(tableMetadata);
            }

            var icd10Metadata = GetMetadataValues(allLineMetadata, ReportConsts.ICD10Key);

            foreach (var value in icd10Metadata?.SelectMany(icd10 => icd10.Split(Icd10Separator))
                                  ?? Enumerable.Empty<string>())
            {
                yield return value.TrimStart().TrimEnd();
            }
        }

        private static bool CheckIfICDValid(Line line, ReportResult reportSettings)
        {
            var icdMetadata = GetMetadataValue(line.Metadata, ReportConsts.ShowInICDKey);
            if (icdMetadata == ReportConsts.TrueValue)
            {
                return reportSettings.IsICD10;
            }
            return true;
        }

        #endregion ICD-10

        #region Metadata

        private static bool CheckMetadataValue(List<Metadata> metadata, List<string> keys, string value)
            => (metadata?.Any(m => keys.Contains(m.Key) && m.Value == value)).GetValueOrDefault();

        private static string GetMetadataValue(List<Metadata> metadata, string key)
            => metadata?.FirstOrDefault(m => m.Key == key && !string.IsNullOrWhiteSpace(m.Value))?.Value;

        private static IEnumerable<string> GetMetadataValues(IEnumerable<Metadata> metadata, string key)
            => metadata?.Where(m => m.Key == key && !string.IsNullOrWhiteSpace(m.Value)).Select(m => m.Value).Distinct()
               ?? Enumerable.Empty<string>();

        #endregion

        #region Tags

        private static string GetTextWithTag(string content, byte? pageNumber = null, string styleClass = null, bool isSummaryTitle = false)
        {           
            content = ApplyFinalFormatting(content, pageNumber);

            var pageAttr = CreatePageAtt(pageNumber);
            var idAttr = isSummaryTitle ? SummaryIdAtt : null; 
            var classAttr = !string.IsNullOrEmpty(styleClass)
                ? HtmlTagHelper.CreateHtmlAttribute("class", styleClass)
                : null;
            
            return HtmlTagHelper.CreateHtmlTagWithContent(HtmlTag.span, content, pageAttr, idAttr, classAttr);
        }

        private static string CreateTableTag(Table table)
        {
            var tableContent = new StringBuilder();
            if (table != null)
            {
                var shouldAddHeader = table.HasHeader;

                foreach (var row in table.Rows?.OrderBy(r => r.Order) ?? Enumerable.Empty<TableRow>())
                {
                    var rowContent = new StringBuilder();
                    var rowTag = shouldAddHeader ? HtmlTag.th : HtmlTag.td;

                    var orderedCells = row.Columns?.OrderBy(c => c.Order) ?? Enumerable.Empty<TableCell>();

                    foreach (var cell in orderedCells)
                    {
                        rowContent.Append(HtmlTagHelper.CreateHtmlTagWithContent(rowTag, ApplyTemporaryFormatting(cell.Text, null)));
                    }
                    tableContent.Append(HtmlTagHelper.CreateHtmlTagWithContent(HtmlTag.tr, rowContent.ToString()));
                    shouldAddHeader = false; // Header is set only to first row (or never). Then this flag should be set to false. 
                }
            }

            return tableContent.Length > 0
                ? HtmlTagHelper.CreateHtmlTagWithContent(HtmlTag.table, tableContent.ToString(),
                    HtmlTagHelper.CreateHtmlAttribute("class", "report-table"))
                : string.Empty;
        }
            
        private static string CreateEmptySummaryTitleTag()
            => HtmlTagHelper.CreateHtmlTagWithContent(HtmlTag.span, HtmlTagHelper.CreateSelfClosingHtmlTag(HtmlTag.br))
            + HtmlTagHelper.CreateHtmlTagWithContent(HtmlTag.span, string.Empty, SummaryIdAtt);

        private static string CreatePageAtt(byte? pageNumber)
        {
            if (pageNumber.HasValue && pageNumber.Value == 0) pageNumber = null; // ignore page 0
            return pageNumber.HasValue
                ? HtmlTagHelper.CreateHtmlAttribute("page", pageNumber.Value.ToString(CultureInfo.InvariantCulture))
                : null;
        }
        #endregion Tags

        #region Formatting

        private static string AddMissingFormatting(string text) => text?.AddMissingBoldSymbols();
        private static string RemoveFontFormatting(string text) => text?.RemoveFontSymbols();
        private static string ApplyTemporaryFormatting(string text, Line line) 
        {
            text = text?.AddTemporaryBoldSymbols();
            if(line != null)
            {
                if(CheckMetadataValue(line.Metadata, _metadataFont, ReportConsts.FontSmallValue))
                {
                    text = text?.AddTemporaryFontSymbols(ReportConsts.FontSmallSymbol, ReportConsts.FontSmallEndSymbol);
                }
                if(CheckMetadataValue(line.Metadata, _metadataFont, ReportConsts.FontItalicValue))
                {
                    text = text?.AddTemporaryFontSymbols(ReportConsts.FontItalicSymbol, ReportConsts.FontItalicEndSymbol);
                }
                if(CheckMetadataValue(line.Metadata, _metadataFont, ReportConsts.FontUnderlineValue))
                {
                    text = text?.AddTemporaryFontSymbols(ReportConsts.FontUnderlineSymbol, ReportConsts.FontUnderlineEndSymbol);
                }
            }
            return text;
        }

        private static string ClearFormatting(string text, Line line) => text?.RemoveAllFormatting();

        private static string ApplyFinalFormatting(string text, byte? pageNumber) =>
            text?.ReplaceNewLineSymbolsWithTags()
                ?.ReplaceBoldSymbolsWithTags(CreatePageAtt(pageNumber));

        #endregion Formatting

        #region Separators

        private static bool IsLineSeparatorAlways(string separator)
            => separator?.Contains(ReportConsts.AlwaysShowSeparatorSymbol, StringComparison.Ordinal) ?? false;

        private static void AppendLineSeparator(StringBuilder builder, string separator)
        {
            if (separator != null)
            {
                builder.Append(separator.Replace(ReportConsts.AlwaysShowSeparatorSymbol, string.Empty, StringComparison.Ordinal));
            }
        }

        #endregion Separators
    }
}
