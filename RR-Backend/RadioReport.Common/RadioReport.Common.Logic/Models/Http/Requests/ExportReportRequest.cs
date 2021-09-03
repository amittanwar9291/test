using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Http.Requests
{
    public class ExportReportRequest
    {
        public Guid ReportId { get; set; }
        public ModuleType ModuleType { get; set; }
        public ExportFormatType ExportFormatType { get; set; }
        public string LanguageCode { get; set; }
    }
}
