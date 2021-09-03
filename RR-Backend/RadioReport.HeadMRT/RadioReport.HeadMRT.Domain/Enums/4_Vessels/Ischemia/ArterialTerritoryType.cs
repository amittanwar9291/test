using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum ArterialTerritoryType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040272", InstanceName = nameof(VesselsFindingType.Ischemia))]
        ArteriaSupplyArea = 1,

        [RadioReportId("hea_m_040273", InstanceName = nameof(VesselsFindingType.Ischemia))]
        VenousVascularTerritories = 2
    }
}
