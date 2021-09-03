using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060233", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("anc_m_0604105", InstanceName = nameof(SoftTissueFinding.QuantitativeHomogeneityType))]
        [RadioReportId("anc_m_0603133", InstanceName = nameof(SoftTissueFinding.PowerfulHomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("anc_m_060234", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("anc_m_0604106", InstanceName = nameof(SoftTissueFinding.QuantitativeHomogeneityType))]
        [RadioReportId("anc_m_0603134", InstanceName = nameof(SoftTissueFinding.PowerfulHomogeneityType))]
        Heterogeneous = 2
    }
}