using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using RadioReport.HeadCT.Domain.Enums.Meninges;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0504216", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504228", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070436", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0603209", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_080352", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080361", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090397", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100313", InstanceName = InstanceNames.SellarRegion)]
        FattyDensity = 1,

        [RadioReportId("hea_c_070437", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080353", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080362", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090398", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100314", InstanceName = InstanceNames.SellarRegion)]
        Hypodense = 2,

        [RadioReportId("hea_c_0504217", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504229", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070438", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0603210", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_080354", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080363", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090399", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100315", InstanceName = InstanceNames.SellarRegion)]
        LiquidDensity = 3,

        [RadioReportId("hea_c_0504218", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504230", InstanceName = InstanceNames.Meninges, CustomConditionName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_070439", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0603211", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_080355", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080364", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_0903100", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100316", InstanceName = InstanceNames.SellarRegion)]
        SoftTissueDensity = 4,

        [RadioReportId("hea_c_070440", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080356", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080365", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_0903101", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100317", InstanceName = InstanceNames.SellarRegion)]
        Hyperdense = 5
    }
}
