using Newtonsoft.Json;

namespace RadioReport.Common.Logic.Extensions
{
    public static class StringExtensions
    {
        public static T Deserialize<T>(this string str) => JsonConvert.DeserializeObject<T>(str);
    }
}
