using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
    public enum PortalVeinThrombosisType : byte
    {
        None = 0,

        [RadioReportId("ang_m_070221", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        CompleteOcclusion = 1,

        [RadioReportId("ang_m_070222", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        Stenosis = 2
    }
}
