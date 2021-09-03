using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("hea_c_060111", InstanceName = InstanceNames.Cortex)]        
        [RadioReportId("hea_c_050111", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070111", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080112", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_090111", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100111", InstanceName = InstanceNames.SellarRegion)]
        IDescribe = 1,

        [RadioReportId("hea_c_060112", InstanceName = InstanceNames.Cortex)]
        [RadioReportId("hea_c_050112", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070112", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_080113", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_090112", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100112", InstanceName = InstanceNames.SellarRegion)]
        IKnow = 2
    }
}
