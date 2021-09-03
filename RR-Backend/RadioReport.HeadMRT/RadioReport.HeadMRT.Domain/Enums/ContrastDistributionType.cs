using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum ContrastDistributionType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050435", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060522", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605212", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070530", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080525", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090538", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100527", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110528", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110553", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110581", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103168", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102224", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102281", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105204", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Peripheral = 1,

        [RadioReportId("hea_m_060523", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_080526", InstanceName = InstanceNames.BrainstemCranialNerves)]
        RimEnhancement = 2,

        [RadioReportId("hea_m_050436", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060524", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605214", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070532", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080527", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090539", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100528", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110529", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110554", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110582", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103169", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102225", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102282", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105205", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        EntireLesion = 3,

        [RadioReportId("hea_m_050437", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060525", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605213", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070533", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080528", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090540", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100529", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110530", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110555", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110583", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103170", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102226", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102283", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105206", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Central = 4,

        [RadioReportId("hea_m_050438", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060526", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605215", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070534", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080529", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090541", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100530", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110531", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110556", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110584", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103171", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102227", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102284", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105207", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Septal = 5,

        [RadioReportId("hea_m_050439", InstanceName = nameof(InstanceNames.Meninges), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_060527", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_100531", InstanceName = InstanceNames.SellarRegion)]
        InNidus = 6,

        [RadioReportId("hea_m_070531", InstanceName = InstanceNames.BasalNuclei)]
        RingShaped = 7,

        [RadioReportId("hea_m_110532", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110557", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110585", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103172", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102228", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102285", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105208", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Nodular = 8
    }
}
