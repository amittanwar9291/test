using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum ProgressMonitoringType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040525", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Progression = 1,

        [RadioReportId("tho_m_040526", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Stable = 2,

        [RadioReportId("tho_m_040527", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Regression = 3
    }
}

