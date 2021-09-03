using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum MinaarClassificationType : byte
    {
        None = 0,

        [RadioReportId("han_m_0405101", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        FibroCartilageFusion = 1,

        [RadioReportId("han_m_0405102", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        IncompleteOsseousFusion = 2,

        [RadioReportId("han_m_0405103", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        CompleteOsseousFusion = 3,

        [RadioReportId("han_m_0405104", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        FurtherCarpalAnomalies = 4
    }
}
