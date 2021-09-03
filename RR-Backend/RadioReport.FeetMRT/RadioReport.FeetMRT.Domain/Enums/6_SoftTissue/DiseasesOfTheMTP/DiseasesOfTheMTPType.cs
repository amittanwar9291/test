using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DiseasesOfTheMTPType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060214", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        D1 = 1,

        [RadioReportId("anc_m_060215", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        RuptureOfThePlantarPlate = 2
    }
}