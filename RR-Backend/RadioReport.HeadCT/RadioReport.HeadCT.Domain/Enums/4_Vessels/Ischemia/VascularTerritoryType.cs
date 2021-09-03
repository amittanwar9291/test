using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum VascularTerritoryType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040278", InstanceName = nameof(VesselsFindingType.Ischemia))]
        MultipleSmallInfarcts = 1,

        [RadioReportId("hea_c_040279", InstanceName = nameof(VesselsFindingType.Ischemia))]
        BilateralThalamicInfarcts = 2,

        [RadioReportId("hea_c_040280", InstanceName = nameof(VesselsFindingType.Ischemia))]
        DorsolateralInfarct = 3
    }
}
