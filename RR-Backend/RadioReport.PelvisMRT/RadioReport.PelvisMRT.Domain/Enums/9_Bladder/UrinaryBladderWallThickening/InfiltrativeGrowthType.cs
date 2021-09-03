using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum InfiltrativeGrowthType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0902158", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        MuscularisPropria = 1,

        [RadioReportId("pel_m_0902159", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        PerivesicalFatTissue = 2,

        [RadioReportId("pel_m_0902160", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        UterusOvary = 3,

        [RadioReportId("pel_m_0902161", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        ProstateSeminalVesicles = 4,

        [RadioReportId("pel_m_0902162", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        PelvicWallAbdominalWall = 5
    }
}