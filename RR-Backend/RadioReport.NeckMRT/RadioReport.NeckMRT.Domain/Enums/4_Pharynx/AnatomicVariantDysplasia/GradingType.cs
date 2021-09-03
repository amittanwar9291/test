using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum GradingType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040305", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        Stenosis = 1,

        [RadioReportId("nec_m_040306", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        Occlusion = 2
    }
}
