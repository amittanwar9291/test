using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050309", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.HomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050432", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0505214", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_060315", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060264", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_060519", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605209", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070317", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.HomogeneityType))]
        [RadioReportId("hea_m_070527", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_080324", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType))]
        [RadioReportId("hea_m_080522", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_090340", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.HomogeneityType), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090442", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100209", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.HomogeneityType))]
        [RadioReportId("hea_m_100524", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_110319", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110525", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110345", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110550", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110379", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_110578", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103145", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103165", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103185", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102221", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103269", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102278", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102341", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_1105201", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Homogeneous = 1,

        [RadioReportId("hea_m_050310", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.HomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050433", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_0505215", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_m_060316", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060265", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_060520", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_0605210", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_m_070318", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.HomogeneityType))]
        [RadioReportId("hea_m_070528", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_080325", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType))]
        [RadioReportId("hea_m_080523", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_090341", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.HomogeneityType), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090443", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_100210", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.HomogeneityType))]
        [RadioReportId("hea_m_100525", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_m_110320", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110526", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110346", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110551", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110380", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_110579", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103146", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103166", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103186", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102222", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103270", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102279", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102342", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.HomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_1105202", InstanceName = nameof(FacialSkullFinding) + nameof(FacialSkullFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        Heterogeneous = 2
    }
}
