using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum PerfusionType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040517", InstanceName = nameof(VesselsFinding.HypoPerfusionType))]
        [RadioReportId("hea_c_040520", InstanceName = nameof(VesselsFinding.HyperPerfusionType))]
        Weak = 1,

        [RadioReportId("hea_c_040518", InstanceName = nameof(VesselsFinding.HypoPerfusionType))]
        [RadioReportId("hea_c_040561", InstanceName = nameof(VesselsFinding.HyperPerfusionType))]
        Significant = 2
    }
}
