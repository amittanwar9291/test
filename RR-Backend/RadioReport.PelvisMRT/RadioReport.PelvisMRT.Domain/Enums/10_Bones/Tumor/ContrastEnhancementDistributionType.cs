using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1004134", InstanceName =  nameof(BonesFindingType.Tumor))]
        Peripheral = 1,

        [RadioReportId("pel_m_1004135", InstanceName =  nameof(BonesFindingType.Tumor))]
        Central = 2,

        [RadioReportId("pel_m_1004136", InstanceName =  nameof(BonesFindingType.Tumor))]
        EntireLesion = 3,

        [RadioReportId("pel_m_1004137", InstanceName =  nameof(BonesFindingType.Tumor))]
        Septal = 4,

        [RadioReportId("pel_m_1004138", InstanceName =  nameof(BonesFindingType.Tumor))]
        Nidus = 5
    }
}