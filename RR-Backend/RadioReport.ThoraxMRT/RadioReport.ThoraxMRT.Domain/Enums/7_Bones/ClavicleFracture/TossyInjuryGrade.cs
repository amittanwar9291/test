using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum TossyInjuryGrade : byte
    {
        None = 0,

        [RadioReportId("tho_m_070511", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Tossy1 = 1,

        [RadioReportId("tho_m_070512", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Tossy2 = 2,

        [RadioReportId("tho_m_070513", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Tossy3 = 3
    }
}
