using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DiseasesOfTheMTPLocalizationType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060471", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        Medial = 1,

        [RadioReportId("anc_m_060472", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        Lateral = 2,

        [RadioReportId("anc_m_060331", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        DistalInsertionBasePhalanx = 3,

        [RadioReportId("anc_m_060332", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        ProximalMetatarsalHead  = 4
    }
}