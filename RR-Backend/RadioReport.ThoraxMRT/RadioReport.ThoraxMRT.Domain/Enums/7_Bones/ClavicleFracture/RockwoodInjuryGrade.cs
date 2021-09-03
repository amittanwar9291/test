using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum RockwoodInjuryGrade : byte
    {
        None = 0,

        [RadioReportId("tho_m_070503", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade1 = 1,

        [RadioReportId("tho_m_070504", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade2 = 2,

        [RadioReportId("tho_m_070505", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade3 = 3,

        [RadioReportId("tho_m_070506", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade4 = 4,

        [RadioReportId("tho_m_070507", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade5 = 5,

        [RadioReportId("tho_m_070508", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        Grade6 = 6
    }
}
