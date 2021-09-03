using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace RadioReport.Common.Module.Logic.Helpers.ReportGenerator
{
    public static class LocalizerImageHelper
    {
        public static int GetSvgSizeElement(string svg, string elementName, int defaultValue)
        {
            var elementMatch = Regex.Match(svg, GetElementSizePattern(elementName));
            if (elementMatch.Success && elementMatch.Groups.Count >= 3)
            {
                if (int.TryParse(elementMatch.Groups[2].Value, out var result))
                {
                    return result;
                }
            }
            return defaultValue;
        }

        public static int? ChangeSvgSizeElement(ref string svg, string newSizeElementName, string elementName)
        {
            var newSizeElementMatch = Regex.Match(svg, GetElementSizePattern(newSizeElementName));
            var elementMatch = Regex.Match(svg, GetElementSizePattern(elementName));

            if (newSizeElementMatch.Success && newSizeElementMatch.Groups.Count >= 3
                && elementMatch.Success && elementMatch.Groups.Count >= 3)
            {
                if (int.TryParse(newSizeElementMatch.Groups[2].Value, out var result))
                {
                    svg = Regex.Replace(svg, GetElementSizePattern(elementName), $"{elementName}=\"{result}\"");
                    svg = Regex.Replace(svg, GetElementSizePattern(newSizeElementName), string.Empty);
                    return result;
                }
            }

            return null;
        }

        private static string GetElementSizePattern(string elementName) => $"{elementName}=['\"]((\\d+)(.\\d+)?)['\"]";

        public static string GetLocalizerEnumMapping(Type localizerType)
        {
            var enumValues = Enum.GetNames(localizerType).Where(v => v != "None");
            return string.Join(',', enumValues);
        }
    }
}
