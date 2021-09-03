using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("han_m_040270", InstanceName = nameof(BonesFinding.HomogenityType))]
        [RadioReportId("han_m_040490", InstanceName = nameof(BonesFinding.ContrastHomogenityType))]
        [RadioReportId("han_m_0800505", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("han_m_0800520", InstanceName = nameof(SoftTissueFinding.CMHomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("han_m_040271", InstanceName = nameof(BonesFinding.HomogenityType))]
        [RadioReportId("han_m_040491", InstanceName = nameof(BonesFinding.ContrastHomogenityType))]
        [RadioReportId("han_m_0800506", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("han_m_0800521", InstanceName = nameof(SoftTissueFinding.CMHomogeneityType))]
        Heterogeneous = 2
    }
}