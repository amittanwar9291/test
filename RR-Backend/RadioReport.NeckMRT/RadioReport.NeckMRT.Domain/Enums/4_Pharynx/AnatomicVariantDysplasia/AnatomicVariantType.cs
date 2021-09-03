using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum AnatomicVariantType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040203", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        ChoanalAtresia = 1,
        
        [RadioReportId("nec_m_040204", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        CleftLipAndCleftPalate = 2,
        
        [RadioReportId("nec_m_040205", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        PharyngealDiverticulum = 3,
        
        [RadioReportId("nec_m_040206", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        DermoidEpidermoid = 4
    }
}
