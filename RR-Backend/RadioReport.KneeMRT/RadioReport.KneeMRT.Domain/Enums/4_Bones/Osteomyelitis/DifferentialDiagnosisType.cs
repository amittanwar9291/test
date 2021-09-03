using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040511", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        EwingSarcoma = 1,

        [RadioReportId("kne_m_040512", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chondroblastoma = 2
    }
}