using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum TClassificationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1004148", InstanceName =  nameof(BonesFindingType.Tumor))]
        T1LessThan8cm = 1,

        [RadioReportId("pel_m_1004149", InstanceName =  nameof(BonesFindingType.Tumor))]
        T2MoreThan8cm = 2,

        [RadioReportId("pel_m_1004150", InstanceName =  nameof(BonesFindingType.Tumor))]
        T3DiscontinuousSpread = 3
    }
}