using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060474", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        Sesamoiditis = 1,

        [RadioReportId("anc_m_060475", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        Osteonecrosis = 2
    }
}