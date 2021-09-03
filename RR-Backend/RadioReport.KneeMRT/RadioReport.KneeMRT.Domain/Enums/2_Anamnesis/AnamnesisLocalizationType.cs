using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum AnamnesisLocalizationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_020505", InstanceName = nameof(AnamnesisPage.InstabilityLocalizationType))]
        [RadioReportId("kne_m_020511", InstanceName = nameof(AnamnesisPage.KneePainLocalizationType))]
        Medial = 1,

        [RadioReportId("kne_m_020506", InstanceName = nameof(AnamnesisPage.InstabilityLocalizationType))]
        [RadioReportId("kne_m_020512", InstanceName = nameof(AnamnesisPage.KneePainLocalizationType))]
        Lateral = 2,

        [RadioReportId("kne_m_020507", InstanceName = nameof(AnamnesisPage.InstabilityLocalizationType))]
        [RadioReportId("kne_m_020513", InstanceName = nameof(AnamnesisPage.KneePainLocalizationType))]
        Anterior = 3,

        [RadioReportId("kne_m_020508", InstanceName = nameof(AnamnesisPage.InstabilityLocalizationType))]
        [RadioReportId("kne_m_020514", InstanceName = nameof(AnamnesisPage.KneePainLocalizationType))]
        Posterior = 4
    }
}
