using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum NormVariantVentricleType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090203", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumSeptiPellucidi = 1,

        [RadioReportId("hea_c_090204", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumVergae = 2,

        [RadioReportId("hea_c_090205", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        CavumVeliInterpositi = 3,

        [RadioReportId("hea_c_090206", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.NormVariantVentricle))]
        AplasiaSeptumPellucidum = 4
    }
}
