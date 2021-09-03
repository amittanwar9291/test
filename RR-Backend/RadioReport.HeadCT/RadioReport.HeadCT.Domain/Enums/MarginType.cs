using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Models;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0603203", InstanceName = nameof(CortexFinding.MarginType) , CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060261", InstanceName = nameof(CortexFinding.MarginType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_050223", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070314", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080258", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080261", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_0902115", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100206", InstanceName = InstanceNames.SellarRegion)]
        Circumscribed = 1,

        [RadioReportId("hea_c_0603204", InstanceName = nameof(CortexFinding.MarginType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060262", InstanceName = nameof(CortexFinding.MarginType), CustomConditionName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_050224", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070315", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080259", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080262", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_0902116", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100207", InstanceName = InstanceNames.SellarRegion)]
        NonCircumscribed = 2,

        [RadioReportId("hea_c_0603206", InstanceName = nameof(CortexFinding.ConfigurationMarginType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_100229", InstanceName = InstanceNames.SellarRegion)]
        Nodular = 3,

        [RadioReportId("hea_c_0603207", InstanceName = nameof(CortexFinding.ConfigurationMarginType), CustomConditionName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_100230", InstanceName = InstanceNames.SellarRegion)]
        Multinodular = 4
    }
}
