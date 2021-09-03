using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum HistologicallySecuredType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0404125", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Benign = 1,

        [RadioReportId("kne_m_0404126", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Malignant = 2
    }
}