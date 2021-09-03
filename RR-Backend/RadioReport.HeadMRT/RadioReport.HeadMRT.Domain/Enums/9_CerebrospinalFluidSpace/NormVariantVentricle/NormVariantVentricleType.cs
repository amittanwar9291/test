using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum NormVariantVentricleType : byte
    {
        None = 0,

        [RadioReportId("hea_m_090203", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumSeptiPellucidi = 1,

        [RadioReportId("hea_m_090204", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumVergae = 2,

        [RadioReportId("hea_m_090205", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumVeliInterpositi = 3,

        [RadioReportId("hea_m_090206", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        AplasiaSeptumPellucidum = 4
    }
}
