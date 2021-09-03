using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum PortalVeinThrombosisType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080221", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        CompleteOcclusion = 1,

        [RadioReportId("ang_c_080222", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        Stenosis = 2
    }
}
