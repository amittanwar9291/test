using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum EtiologyType : byte
    {
        None = 0,

        [RadioReportId("han_m_040413", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        PrimaryCoalitions = 1,

        [RadioReportId("han_m_040418", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        SecondaryCoalitions = 2
    }
}
