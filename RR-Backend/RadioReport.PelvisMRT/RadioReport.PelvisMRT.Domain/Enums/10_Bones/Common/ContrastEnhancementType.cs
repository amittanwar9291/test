using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1004127", InstanceName =  nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_100440", InstanceName = nameof(BonesFindingType.Bursitis))]
        Strong = 1,

        [RadioReportId("pel_m_1004131", InstanceName =  nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_100441", InstanceName = nameof(BonesFindingType.Bursitis))]
        Low = 2,

        [RadioReportId("pel_m_1004132", InstanceName =  nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_100442", InstanceName = nameof(BonesFindingType.Bursitis))]
        No = 3
    }
}