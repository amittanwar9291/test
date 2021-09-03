using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones.Dislocation
{
    public enum DislocationStageType : byte
    {
        None = 0,

        [RadioReportId("anc_m_0404202", InstanceName = nameof(BonesFindingType.Dislocation))]
        GradeI = 1,

        [RadioReportId("anc_m_0404203", InstanceName = nameof(BonesFindingType.Dislocation))]
        GradeII = 2,

        [RadioReportId("anc_m_0404204", InstanceName = nameof(BonesFindingType.Dislocation))]
        GradeIII = 3
    }
}
