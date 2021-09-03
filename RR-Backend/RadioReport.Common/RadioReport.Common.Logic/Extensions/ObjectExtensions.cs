using Newtonsoft.Json;

namespace RadioReport.Common.Logic.Extensions
{
    public static class ObjectExtensions
    {
        public static string AsJson(this object obj) => JsonConvert.SerializeObject(obj);

        public static string AsIndentedJson(this object obj) => JsonConvert.SerializeObject(obj, Formatting.Indented);
    }
}
