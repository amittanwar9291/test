using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0904107", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0903118", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        Strong = 1,

        [RadioReportId("pel_m_0904108", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0903119", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        Low = 2,
        
        [RadioReportId("pel_m_0904109", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0903120", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        No = 3
    }
}