using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum WithAVShuntType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040474", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        ArteriovenousMalformation = 1,

        [RadioReportId("hea_m_040475", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        DuralAVFistula = 2,

        [RadioReportId("hea_m_040477", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        VeinOfGalenMalformation = 3
    }
}
