using System;

namespace RadioReport.Common.Logic.Models
{
    public class PageInfo : ModelBase
    {
        public Guid PageId { get; set; }
        public Guid ReportId { get; set; }
        public string TypeName { get; set; }
        public byte PageNumber { get; set; }
        public bool IsBlocked { get; set; }
        public bool WasModified { get; set; }
    }
}
