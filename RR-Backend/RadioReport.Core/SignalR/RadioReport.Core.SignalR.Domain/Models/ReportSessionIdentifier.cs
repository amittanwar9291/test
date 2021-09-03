using System;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;

namespace RadioReport.Core.SignalR.Domain.Models
{
    public class ReportSessionIdentifier
    {
        private const string Separator = "_";

        public ReportSessionIdentifier(ReportData data)
        {
            if (data == null) throw new ArgumentNullException(nameof(data));

            Value = $"{data.ReportId}{Separator}{data.ModuleType}";
        }

        public string Value { get; }

        public static implicit operator string(ReportSessionIdentifier identifier) => identifier?.Value;

        public static string ToString(ReportSessionIdentifier identifier) => identifier?.Value;

        public static Result<ReportData> Parse(string cacheKeyString)
        {
            if (cacheKeyString == null) throw new ArgumentNullException(nameof(cacheKeyString));

            var split = cacheKeyString.Split(Separator);

            return split.Length != 2 ? Result<ReportData>.Fail() : ReportData.Create(split[0], split[1]);
        }
    }
}
