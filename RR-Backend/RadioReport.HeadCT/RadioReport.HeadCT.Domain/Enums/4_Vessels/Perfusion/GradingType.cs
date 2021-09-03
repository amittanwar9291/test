using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum GradingType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0402135", InstanceName = nameof(VesselsFinding.MTTGradingType))]
        [RadioReportId("hea_c_0402141", InstanceName = nameof(VesselsFinding.TTPGradingType))]
        Shortened = 1,

        [RadioReportId("hea_c_0402136", InstanceName = nameof(VesselsFinding.MTTGradingType))]
        [RadioReportId("hea_c_0402142", InstanceName = nameof(VesselsFinding.TTPGradingType))]
        [RadioReportId("hea_c_0403188", InstanceName = nameof(VesselsFinding.CBFGradingType))]
        [RadioReportId("hea_c_0403194", InstanceName = nameof(VesselsFinding.CBVGradingType))]
        Normal = 2,

        [RadioReportId("hea_c_0402137", InstanceName = nameof(VesselsFinding.MTTGradingType))]
        [RadioReportId("hea_c_0402143", InstanceName = nameof(VesselsFinding.TTPGradingType))]
        Prolonged = 3,

        [RadioReportId("hea_c_0403187", InstanceName = nameof(VesselsFinding.CBFGradingType))]
        [RadioReportId("hea_c_0403193", InstanceName = nameof(VesselsFinding.CBVGradingType))]
        Decreased = 4,

        [RadioReportId("hea_c_0403189", InstanceName = nameof(VesselsFinding.CBFGradingType))]
        [RadioReportId("hea_c_0403195", InstanceName = nameof(VesselsFinding.CBVGradingType))]
        Increased = 5
    }
}
