using Newtonsoft.Json;

namespace RadioReport.Common.Module.Logic.Helpers.ReportGenerator
{
    public static class ReportHelpers
    {
        public static T CloneUsingJson<T>(T source) where T : class
        {
            if (source is null)
            {
                return null;
            }

            return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(source));
        }
    }
}
