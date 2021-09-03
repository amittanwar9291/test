using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public partial class ReportGenerationManager
    {
        public void SetReportRating(ReportSchema reportSchema)
        {
            
            foreach(var paragraph in reportSchema?.Paragraphs ?? Enumerable.Empty<Paragraph>())
            {
                if(paragraph.Lines?.Any() ?? false)
                {
                    foreach (var line in paragraph.Lines)
                    {
                        _reportRating = GetHighestReportRating(line) > _reportRating ? GetHighestReportRating(line) : _reportRating ;
                    }
                }
            }
            if(_reportRating == int.MinValue)
            {
                _reportRating = 1;
            }
        }

        public static string ReplaceRatingInCondition (string postfixCondition, int rating)
        {
            return string.IsNullOrEmpty(postfixCondition) ? string.Empty : postfixCondition.Replace(ReportConsts.ReportRatingKey, rating.ToString(CultureInfo.CurrentCulture), StringComparison.Ordinal);
        }

        private int GetHighestReportRating(Line line)
            => Math.Max(GetLineRating(line), GetMaxChildrenRating(line.ChildLines));

        private int GetMaxChildrenRating(List<Line> childLines)
           => childLines?.Count > 0 ? childLines.Max(GetHighestReportRating) : int.MinValue;

        private static int GetLineRating(Line line)
        {
            if (int.TryParse(GetMetadataValue(line.Metadata, ReportConsts.ReportRatingKey), out int rating))
            {
                return rating;
            }
            else
            {
                return int.MinValue;
            }
        }

        private static string GetMetadataValue(List<Metadata> metadata, string key)
            => metadata?.FirstOrDefault(m => m.Key == key && !string.IsNullOrWhiteSpace(m.Value))?.Value;
    }
}
