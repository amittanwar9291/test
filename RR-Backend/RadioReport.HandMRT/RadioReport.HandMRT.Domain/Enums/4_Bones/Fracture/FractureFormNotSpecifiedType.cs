using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum FractureFormNotSpecifiedType : byte
    {
        None = 0,

        [RadioReportId("han_m_0404100", InstanceName = nameof(BonesFindingType.Fracture))]
        FractureConsolidation = 1,

        [RadioReportId("han_m_0404101", InstanceName = nameof(BonesFindingType.Fracture))]
        Suspected = 2,
    }
}
