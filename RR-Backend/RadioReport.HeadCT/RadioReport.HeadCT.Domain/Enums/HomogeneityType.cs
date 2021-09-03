using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using RadioReport.HeadCT.Domain.Enums.Meninges;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,
        
        [RadioReportId("hea_c_050309", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.HomogeneityType))]
        [RadioReportId("hea_c_050432", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504238", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070317", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.HomogeneityType))]
        [RadioReportId("hea_c_070540", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_0604223", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060264", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_060519", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604246", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080456", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType), CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080522", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_080468", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType), CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090484", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.HomogeneityType))]
        [RadioReportId("hea_c_0903109", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_100209", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.HomogeneityType))]
        [RadioReportId("hea_c_100429", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.ContrastEnhancementHomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("hea_c_050310", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.HomogeneityType))]
        [RadioReportId("hea_c_050433", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504239", InstanceName = nameof(MeningesFinding) + nameof(MeningesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070318", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.HomogeneityType))]
        [RadioReportId("hea_c_070541", InstanceName = nameof(BasalNucleiFinding) + nameof(BasalNucleiFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_0604224", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060265", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.HomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_060520", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604247", InstanceName = nameof(CortexFinding) + nameof(CortexFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080457", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType), CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080523", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_080469", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(BrainstemCranialNervesFinding.HomogeneityType), CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090485", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.HomogeneityType))]
        [RadioReportId("hea_c_0903110", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(CerebrospinalFluidSpaceFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("hea_c_100210", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.HomogeneityType))]
        [RadioReportId("hea_c_100430", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.ContrastEnhancementHomogeneityType))]
        Heterogeneous = 2
    }
}
