using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum CleftLipAndPalateType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040308", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        CleftLip = 1,
        
        [RadioReportId("nec_m_040309", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        CleftLip2 = 2,
        
        [RadioReportId("nec_m_040310", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        CleftLipAndCleftPalate = 3,
        
        [RadioReportId("nec_m_040311", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        IsolatedCleftPalate = 4
    }
}
