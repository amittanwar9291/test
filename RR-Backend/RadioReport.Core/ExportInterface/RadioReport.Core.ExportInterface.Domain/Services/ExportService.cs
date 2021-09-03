using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Resources;
using RadioReport.Core.ExportInterface.Domain.Consts;
using RadioReport.Core.ExportInterface.Domain.Interfaces;
using RadioReport.Core.ExportInterface.Domain.Models;

namespace RadioReport.Core.ExportInterface.Domain.Services
{
    public class ExportService : IExportService
    {
        private static readonly Regex ExportTagPattern = new Regex("<!-- <(.+?)> -->", RegexOptions.Compiled);
        
        public JObject FormatExport(ExportFormatType exportFormatType, string reportHtml, string languageCode) =>
            exportFormatType switch
            {
                ExportFormatType.RawHtml => RawHtmlFormatting(reportHtml),
                ExportFormatType.iSolutions => ISolutionsFormatting(reportHtml, languageCode),
                _ => throw new InvalidEnumArgumentException(nameof(exportFormatType))
            };

        private static JObject RawHtmlFormatting(string reportHtml) => JObject.FromObject(RequestResponse.Success(reportHtml));

        // ReSharper disable once InconsistentNaming
        private static JObject ISolutionsFormatting(string reportHtml, string languageCode)
        {
            var exportSectionMap = ExtractSectionMap(reportHtml);
            var groupedTopLevelExportSections = exportSectionMap.SubSections.GroupBy(section => section.SectionName);
            var result = new JObject
            {
                { "locale", languageCode }
            };
            var text = new JObject();
            foreach (var groupedTopLevelExportSection in groupedTopLevelExportSections)
            {
                var joinedSectionContent = "";
                foreach (var subSectionMap in groupedTopLevelExportSection)
                {
                    if (subSectionMap.SubSections.Any())
                    {
                        joinedSectionContent += subSectionMap.PreSubSectionContent;
                        joinedSectionContent = subSectionMap.SubSections.Aggregate(joinedSectionContent,
                            (current, sectionMapSubSection) => current + RecursiveJoinSectionContent(sectionMapSubSection));
                        joinedSectionContent += subSectionMap.PostSubSectionContent;
                    }
                    else
                    {
                        joinedSectionContent += subSectionMap.SectionContent;
                    }
                }
                text.Add(groupedTopLevelExportSection.Key, joinedSectionContent);
            }

            var report = new JObject
            {
                { "text", text },
                { "attachments", new JArray() }
            };
            result.Add("report", report);
            result.Add("success", true);

            return result;
        }

        private static ExportSectionMap ExtractSectionMap(string reportHtml)
        {
            var exportTagMatches = ExportTagPattern.Matches(reportHtml).Where(match => match.Groups[0].Value.Contains(ExportValues.ExportTag, StringComparison.InvariantCultureIgnoreCase)).ToList();
            if (exportTagMatches.Count == 0) throw new Exception(ErrorMessageResources.Export_NoExportTagsFound);

            var sectionMap = new ExportSectionMap
            {
                SectionName = "root",
            };
            sectionMap.SubSections.AddRange(RecursiveExportSectionMapping(reportHtml, exportTagMatches));

            return sectionMap;
        }

        private static List<ExportSectionMap> RecursiveExportSectionMapping(string sourceText, IReadOnlyList<Match> matches)
        {
            var exportSectionMapList = new List<ExportSectionMap>();
            for (var i = 0; i < matches.Count - 1; i++)
            {
                if (matches[i].Groups[1].Value.StartsWith("/", StringComparison.CurrentCultureIgnoreCase)) continue;

                if ("/" + matches[i].Groups[1].Value == matches[i + 1].Groups[1].Value)
                {
                    var subSectionText = sourceText.StringBetween(matches[i].Groups[0].Value, matches[i + 1].Groups[0].Value);
                    subSectionText = Regex.Replace(subSectionText, "<!-- <sentence-type=title> -->(.+?)<!-- </sentence-type=title> -->", "");
                    
                    var exportSectionMap = new ExportSectionMap
                    {
                        SectionName = matches[i].Groups[1].Value.Replace(' ', '-'),
                        SectionContent = subSectionText,
                    };

                    exportSectionMapList.Add(exportSectionMap);

                    var exportSectionEndIndex =
                        sourceText.IndexOf(matches[i + 1].Groups[0].Value, StringComparison.Ordinal) +
                        (matches[i + 1].Groups[0].Value).Length;
                    sourceText = sourceText.Substring(exportSectionEndIndex);

                    i += 1;
                    continue;
                }

                for (var j = 2; j < matches.Count - i; j++)
                {
                    if ("/" + matches[i].Groups[1].Value != matches[i + j].Groups[1].Value)
                    {
                        if (i + j == matches.Count - 1)
                            throw new Exception($"Invalid HTML Export! No end to export tag \"{matches[i].Groups[1].Value}\" found!");

                        continue;
                    }

                    var subMatches = matches.Skip(i + 1).Take(j - 1).ToList();
                    var subSectionText = sourceText.StringBetween(matches[i].Groups[0].Value, matches[i + j].Groups[0].Value);
                    var commentStartIndex = subSectionText.IndexOf("<!--", StringComparison.Ordinal);
                    var preSections = subSectionText.Substring(0, commentStartIndex);
                    var commentEndIndex = subSectionText.LastIndexOf("-->", StringComparison.Ordinal);
                    var postSections = subSectionText.Substring(commentEndIndex + "-->".Length);
                    var exportSectionMap = new ExportSectionMap
                    {
                        SectionName = matches[i].Groups[1].Value.Replace(' ', '-'),
                        PreSubSectionContent = preSections,
                        PostSubSectionContent = postSections
                    };
                    exportSectionMap.SubSections.AddRange(RecursiveExportSectionMapping(subSectionText, subMatches));

                    exportSectionMapList.Add(exportSectionMap);
                    var exportSectionEndIndex = sourceText.IndexOf(matches[i + j].Groups[0].Value, StringComparison.Ordinal) +
                                                matches[i + j].Groups[0].Value.Length;
                    sourceText = sourceText.Substring(exportSectionEndIndex);

                    i += j;
                    break;
                }
            }

            return exportSectionMapList;
        }

        private static string RecursiveJoinSectionContent(ExportSectionMap exportSectionMap)
        {
            if (!exportSectionMap.SubSections.Any()) return exportSectionMap.SectionContent;

            var joinedSectionContent = exportSectionMap.SubSections.Aggregate(exportSectionMap.PreSubSectionContent,
                (current, subSection) => current + RecursiveJoinSectionContent(subSection));
            joinedSectionContent += exportSectionMap.PostSubSectionContent;

            return joinedSectionContent;
        }
    }
}
