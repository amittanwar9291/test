using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum D1Type : byte
    {
        None = 0,

        [RadioReportId("anc_m_060322", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        HalluxValgus = 1,

        [RadioReportId("anc_m_060323", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        SesamoidBones = 2
    }
}