using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TendonPatternsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080502", InstanceName = nameof(SoftPartsFinding.DistributionPatternsType))]
        [RadioReportId("kne_m_080227", InstanceName = nameof(SoftPartsFinding.EdemaType))]
        Diffuse = 1,

        [RadioReportId("kne_m_080503", InstanceName = nameof(SoftPartsFinding.DistributionPatternsType))]
        [RadioReportId("kne_m_080221", InstanceName = nameof(SoftPartsFinding.EdemaType))]
        Focal = 2
    }
}
