using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("hea_c_060206", InstanceName = InstanceNames.Cortex)]
        [RadioReportId("hea_c_050206", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070244", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080251", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080254", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090241", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100218", InstanceName = InstanceNames.SellarRegion)]
        Benign = 1,

        [RadioReportId("hea_c_060207", InstanceName = InstanceNames.Cortex)]
        [RadioReportId("hea_c_050207", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070245", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080252", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080255", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090242", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100219", InstanceName = InstanceNames.SellarRegion)]
        Malignant = 2
    }
}
