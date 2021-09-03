using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Helpers.ReportGenerator
{
    public static class RegexHelper
    {
        public static async Task<string> ReplaceAsync(string input, string pattern, Func<Match, Task<string>> replacementFn)
        {
            if (pattern is null || replacementFn is null || input is null)
            {
                return null;
            }

            var sb = new StringBuilder();
            var lastIndex = 0;

            foreach (Match match in Regex.Matches(input, pattern))
            {
                sb.Append(input, lastIndex, match.Index - lastIndex)
                  .Append(await replacementFn(match));

                lastIndex = match.Index + match.Length;
            }

            sb.Append(input, lastIndex, input.Length - lastIndex);
            return sb.ToString();
        }
    }
}
