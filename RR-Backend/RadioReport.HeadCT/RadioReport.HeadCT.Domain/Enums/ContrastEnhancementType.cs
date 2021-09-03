using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using RadioReport.HeadCT.Domain.Enums.Meninges;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("hea_c_050429", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504235", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070537", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_060516", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604243", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080519", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903106", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100426", InstanceName = InstanceNames.SellarRegion)]
        No = 1,

        [RadioReportId("hea_c_050430", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504236", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070538", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_060517", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604244", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080520", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903107", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100427", InstanceName = InstanceNames.SellarRegion)]
        Low = 2,

        [RadioReportId("hea_c_050431", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504237", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070539", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_060518", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604245", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080521", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_0903108", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100428", InstanceName = InstanceNames.SellarRegion)]
        Strong = 3
    }
}