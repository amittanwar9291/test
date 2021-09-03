using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum SecondaryWallThickeningType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0903107", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        BladderWallInfiltration = 1,

        [RadioReportId("pel_m_0903108", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        BladderWallDisplacement = 2
    }
}