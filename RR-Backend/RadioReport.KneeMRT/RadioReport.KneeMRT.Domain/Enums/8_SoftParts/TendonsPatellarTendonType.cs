using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TendonsPatellarTendonType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080337", InstanceName = nameof(SoftPartsFinding.EnthesiopathyType))]
        [RadioReportId("kne_m_080242", InstanceName = nameof(SoftPartsFinding.TPTLocalizationType))]
        Proximal = 1,

        [RadioReportId("kne_m_080411", InstanceName = nameof(SoftPartsFinding.EnthesiopathyType))]
        [RadioReportId("kne_m_080243", InstanceName = nameof(SoftPartsFinding.TPTLocalizationType))]
        Distal = 2,
    }
}
