using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040227", InstanceName = nameof(VesselsFindingType.Ischemia))]
        MeningealEnhancement = 1,

        [RadioReportId("hea_m_040228", InstanceName = nameof(VesselsFindingType.Ischemia))]
        ParenchymalEnhancement = 2
    }
}
