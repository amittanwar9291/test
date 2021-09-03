using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.SellarRegion
{
    public enum RelationToThePituitaryGlandType : byte
    {
        None = 0,

        [RadioReportId("hea_c_100304", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        Extrahypophyseal = 1,

        [RadioReportId("hea_c_100305", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        Intrahypophyseal = 2
    }
}
