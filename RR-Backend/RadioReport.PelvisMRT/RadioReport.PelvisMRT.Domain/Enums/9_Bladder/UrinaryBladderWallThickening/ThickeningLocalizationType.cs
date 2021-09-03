using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum ThickeningLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0902143", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        Diffuse = 1,

        [RadioReportId("pel_m_0902144", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        Focal = 2
    }
}