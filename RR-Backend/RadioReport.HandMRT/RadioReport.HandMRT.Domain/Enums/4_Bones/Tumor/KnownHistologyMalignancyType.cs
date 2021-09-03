using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum KnownHistologyMalignancyType : byte
    {
        None = 0,

        [RadioReportId("han_m_0402113", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Benign = 1,

        [RadioReportId("han_m_0402114", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Malignant = 2
    }
}
