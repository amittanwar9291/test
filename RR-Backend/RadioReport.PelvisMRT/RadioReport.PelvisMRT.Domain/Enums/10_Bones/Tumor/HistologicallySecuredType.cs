using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum HistologicallySecuredType : byte
    {
        None = 0,

        [RadioReportId("pel_m_100590", InstanceName =  nameof(BonesFindingType.Tumor))]
        Benign = 1,

        [RadioReportId("pel_m_100591", InstanceName =  nameof(BonesFindingType.Tumor))]
        Malignant = 2
    }
}