using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum TendonsLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0902134", InstanceName = nameof(BladderFindingType.Tendons))]
        IliotibialTract = 1,

        [RadioReportId("pel_m_0902135", InstanceName = nameof(BladderFindingType.Tendons))]
        RectusFemorisMuscle = 2,

        [RadioReportId("pel_m_0902136", InstanceName = nameof(BladderFindingType.Tendons))]
        GluteusMinimusMuscle = 3,

        [RadioReportId("pel_m_0902137", InstanceName = nameof(BladderFindingType.Tendons))]
        GluteusMediusMuscle = 4
    }
}
