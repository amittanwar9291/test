using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050111", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_m_060111", InstanceName = InstanceNames.Cortex)]
        [RadioReportId("hea_m_070111", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_m_080112", InstanceName = InstanceNames.BrainstemCranialNerves)]   
        [RadioReportId("hea_m_090111", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_m_100111", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110111", InstanceName = InstanceNames.FacialSkull)]
        IDescribe = 1,

        [RadioReportId("hea_m_050112", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_m_060112", InstanceName = InstanceNames.Cortex)]
        [RadioReportId("hea_m_070112", InstanceName = InstanceNames.BasalNuclei)]      
        [RadioReportId("hea_m_080113", InstanceName = InstanceNames.BrainstemCranialNerves)]
        [RadioReportId("hea_m_090112", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_m_100112", InstanceName = InstanceNames.SellarRegion)]
        [RadioReportId("hea_m_110112", InstanceName = InstanceNames.FacialSkull)]
        IKnow = 2
    }
}
