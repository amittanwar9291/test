using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum WithoutAVShuntType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040375", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        DevelopmentalVenousanomaliesDVA = 1,

        [RadioReportId("hea_m_040376", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        Cavernoma = 2,

        [RadioReportId("hea_m_040377", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        CapillaryTelangiectasia = 3
    }
}
