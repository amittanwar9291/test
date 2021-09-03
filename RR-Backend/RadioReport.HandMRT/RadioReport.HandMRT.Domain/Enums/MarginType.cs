using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("han_m_040266", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("han_m_0800502", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Sharp = 1,

        [RadioReportId("han_m_040267", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("han_m_0800503", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        IllDefined = 2,

        [RadioReportId("han_m_040268", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        MixedForm = 3,

    }
}