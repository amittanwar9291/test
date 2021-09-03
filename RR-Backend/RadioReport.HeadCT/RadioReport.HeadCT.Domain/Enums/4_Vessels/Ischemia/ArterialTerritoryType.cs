using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum ArterialTerritoryType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040272", InstanceName = nameof(VesselsFindingType.Ischemia))]
        ArterialSupplyArea = 1,

        [RadioReportId("hea_c_040273", InstanceName = nameof(VesselsFindingType.Ischemia))]
        VenousVascularTerritories = 2
    }
}
