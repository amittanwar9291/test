using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.Import
{
    public class ImportReportRequest
    {
        public IEnumerable<ImportValueDto> ImportValues { get; set; }
        public string LogData { get; set; }
    }
}
