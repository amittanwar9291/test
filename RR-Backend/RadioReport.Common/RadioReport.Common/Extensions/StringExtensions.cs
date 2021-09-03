using System;
using System.Text.RegularExpressions;

namespace RadioReport.Common.Extensions
{
    public static class StringExtensions
    {
        private static readonly Regex InvalidCharRegex = new Regex("[" + Regex.Escape(new string(System.IO.Path.GetInvalidPathChars())) + "]", RegexOptions.Compiled);
        public static           bool  IsNullOrEmpty(this string str) => string.IsNullOrEmpty(str);

        public static bool IsNullOrWhiteSpace(this string str) => string.IsNullOrWhiteSpace(str);

        public static string StringBetween(this string source, string startTerm, string endTerm)
        {
            if (source == null) throw new ArgumentNullException(nameof(source));
            if (startTerm == null) throw new ArgumentNullException(nameof(startTerm));
            if (endTerm == null) throw new ArgumentNullException(nameof(endTerm));

            var startTermEndIndex = source.IndexOf(startTerm, StringComparison.Ordinal) + startTerm.Length;
            var endTermIndex = source.IndexOf(endTerm, StringComparison.Ordinal);
            return source.Substring(startTermEndIndex, endTermIndex - startTermEndIndex);
        }

        public static string SubstringAfter(this string str, string startTerm, StringComparison stringComparison = StringComparison.Ordinal,
            bool includeStartTerm = true)
        {
            if (str == null) throw new ArgumentNullException(nameof(str));
            if (startTerm == null) throw new ArgumentNullException(nameof(startTerm));


            return includeStartTerm
                ? str.Substring(str.IndexOf(startTerm, stringComparison))
                : str.Substring(str.IndexOf(startTerm, stringComparison) + startTerm.Length + 1);
        }

        public static bool IsValidFileName(this string fileName)
        {
            if (fileName == null) throw new ArgumentNullException(nameof(fileName));

            if (InvalidCharRegex.IsMatch(fileName) || fileName.Contains('/', StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            return true;
        }

        public static bool Match(this string input, string pattern) => Regex.IsMatch(input, pattern);
    }
}
