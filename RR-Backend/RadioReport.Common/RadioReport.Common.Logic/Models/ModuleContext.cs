using RadioReport.Common.Enums;

namespace RadioReport.Common.Logic.Models
{
    public class ModuleContext
    {
        public virtual ModuleType Type { get; set; }
        public virtual string ReportTypeName { get; set; }
        public virtual byte TotalPageCount { get; set; }
        public virtual string TechnologyPageName { get; set; }
        public virtual string LocalizationPageName { get; set; }
    }
}
