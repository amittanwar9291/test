using RadioReport.Common.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Import
{
    public class StringImportValue
    {
        private StringImportValue(string radioReportId, string value)
        {
            RadioReportId = radioReportId;
            Value = value;
        }

        public string RadioReportId { get; }
        public string Value { get; }

        public static Result<StringImportValue> Create(ImportValueDto dto)
        {
            if (!(dto?.Value is string) || ((string) dto.Value).IsNullOrEmpty() || dto.ImportValueIdentifier.IsNullOrEmpty())
            {
                return Result<StringImportValue>.Fail();
            }

            var importValue = new StringImportValue(dto.ImportValueIdentifier, dto.Value.ToString());

            return Result<StringImportValue>.Success(importValue);
        }
    }
}
