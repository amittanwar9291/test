using System;
using System.Text.RegularExpressions;
using RadioReport.Common.Consts;

namespace RadioReport.Common.Helpers
{
    public static class RridHelper
    {
        private const string _uniPrefix = "uni";

        public static bool CompareRridPageNumber(string rrid, byte pageNumber)
        {
            var pageNumberFromRrid = GetPageNumberFromRrid(rrid);
            return pageNumberFromRrid.HasValue && pageNumberFromRrid.Value == pageNumber;
        }

        public static byte? GetPageNumberFromRrid(string rrid)
        {
            // Assuming the first two digits are always page number
            const string regex = @"\D*(\d{2}).*";
            var matches = Regex.Match(rrid, regex);
            if (matches.Success)
            {
                var rridNumberString = matches.Groups[1].Value;
                return byte.TryParse(rridNumberString, out byte result) ? result : default(byte?);
            }
            return null;
        }

        public static bool CheckRridValidityForPage(string rrid, string moduleName, byte pageNumber)
        {
            if (rrid == null) throw new ArgumentNullException(nameof(rrid));

            return rrid.StartsWith(_uniPrefix, StringComparison.InvariantCulture) ||
                   ReportTypeNames.PrefixesDictionary.TryGetValue(moduleName, out var modulePrefix) &&
                   rrid.StartsWith(modulePrefix, StringComparison.InvariantCulture) &&
                   CompareRridPageNumber(rrid, pageNumber);
        }
    }
}
