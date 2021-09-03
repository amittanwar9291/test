using System;

namespace RadioReport.Core.ImportInterface.Domain.Models
{
    public class CheckExistingImportResponse
    {
        public bool IsDuplicateAllowed { get; set; }
        public bool? IsExisting { get; set; }
        public Guid? ReportId { get; set; }
        public string ModuleName { get; set; }
    }
}
