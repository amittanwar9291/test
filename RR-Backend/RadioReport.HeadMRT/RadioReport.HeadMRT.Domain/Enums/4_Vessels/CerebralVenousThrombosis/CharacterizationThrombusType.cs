using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum CharacterizationThrombusType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0404102", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        Acute = 1,

        [RadioReportId("hea_m_0404103", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        Subacute = 2,

        [RadioReportId("hea_m_0404104", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        Chronic = 3
    }
}
