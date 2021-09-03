using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum CmEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040402", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040519", InstanceName = nameof(PharynxFindingType.Mass))]
        No = 1,
        
        [RadioReportId("nec_m_040403", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040520", InstanceName = nameof(PharynxFindingType.Mass))]
        Weak = 2,
        
        [RadioReportId("nec_m_040404", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040521", InstanceName = nameof(PharynxFindingType.Mass))]
        Significant = 3
    }
}
