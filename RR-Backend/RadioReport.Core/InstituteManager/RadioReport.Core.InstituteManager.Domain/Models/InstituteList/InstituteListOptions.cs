using RadioReport.Common.Logic.Enums;

namespace RadioReport.Core.InstituteManager.Domain.Models.InstituteList
{
    public class InstituteListOptions
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public InstituteDetailLevel DetailLevel { get; set; } = InstituteDetailLevel.InstituteOnly;
        public InstituteSearchOptions SearchOptions { get; set; }
    }
}
