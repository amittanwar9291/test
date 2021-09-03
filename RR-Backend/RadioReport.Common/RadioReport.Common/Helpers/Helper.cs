using System.Globalization;
using RadioReport.Common.Extensions;

namespace RadioReport.Common.Helpers
{
    public static class Helper
    {
        public static void SetDisplayLanguage(string languageCode)
        {
            var cultureInfo = new CultureInfo(languageCode.IsNullOrEmpty() ? "en-us" : languageCode);
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;
        }
    }
}
