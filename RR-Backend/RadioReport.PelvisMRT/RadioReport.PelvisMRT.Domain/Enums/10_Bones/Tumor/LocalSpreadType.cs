using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum LocalSpreadType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1004145", InstanceName =  nameof(BonesFindingType.Tumor))]
        Intracompartmental = 1,

        [RadioReportId("pel_m_1004146", InstanceName =  nameof(BonesFindingType.Tumor))]
        ExtraCompartmental = 2
    }
}