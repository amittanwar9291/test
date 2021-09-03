using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum WithoutAVShuntType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040375", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        DevelopmentalVenousanomalies = 1,

        [RadioReportId("hea_c_040376", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        Cavernoma = 2,

        [RadioReportId("hea_c_040377", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        CapillaryTelangiectasia = 3
    }
}
