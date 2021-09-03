using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_c_040104", InstanceName = InstanceNames.Vessels)]
        [RadioReportId("hea_c_050104", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_080104", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_090104", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100104", InstanceName = InstanceNames.SellarRegion)]
        False = 1,

        [RadioReportId("hea_c_040105", InstanceName = InstanceNames.Vessels)]
        [RadioReportId("hea_c_050105", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_080106", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_c_090105", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100105", InstanceName = InstanceNames.SellarRegion)]
        True = 2
    }
}
