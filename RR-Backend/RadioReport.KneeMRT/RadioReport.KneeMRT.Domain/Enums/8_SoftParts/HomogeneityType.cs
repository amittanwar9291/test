using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.SoftParts.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0804233", InstanceName = nameof(SoftPartsFinding.TissueTumorHomogeneityType))]
        [RadioReportId("kne_m_0804225", InstanceName = nameof(SoftPartsFinding.VesselsNervesHomogeneityType))]
        [RadioReportId("kne_m_0804239", InstanceName = nameof(SoftPartsFinding.QuantitativeType))]
        Homogeneous = 1,

        [RadioReportId("kne_m_0804234", InstanceName = nameof(SoftPartsFinding.TissueTumorHomogeneityType))]
        [RadioReportId("kne_m_0804226", InstanceName = nameof(SoftPartsFinding.VesselsNervesHomogeneityType))]
        [RadioReportId("kne_m_0804240", InstanceName = nameof(SoftPartsFinding.QuantitativeType))]
        Heterogeneous = 2

    }
}
