using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum PartitumType : byte
    {
        None = 0,

        [RadioReportId("han_m_040420", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        Bipartitum = 1,

        [RadioReportId("han_m_040421", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        Tripartitum = 2
    }
}
