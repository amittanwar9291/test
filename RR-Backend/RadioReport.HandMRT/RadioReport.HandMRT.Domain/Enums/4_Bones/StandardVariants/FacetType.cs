using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum FacetType : byte
    {
        None = 0,

        [RadioReportId("han_m_0403201", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        TypeOne = 1,

        [RadioReportId("han_m_0403202", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        TypeTwo = 2
    }
}
