using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum LocalizationAneurysmaType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040256", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        CircleOfWilliscerebral = 1,

        [RadioReportId("hea_m_040257", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        VertebralArtery = 2,

        [RadioReportId("hea_m_040258", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        InternalCarotidArtery = 3
    }
}
