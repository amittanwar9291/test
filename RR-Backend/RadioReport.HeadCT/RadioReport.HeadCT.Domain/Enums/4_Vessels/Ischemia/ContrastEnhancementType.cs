using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404124", InstanceName = nameof(VesselsFindingType.Ischemia))]
        MeningealEnhancement = 1,

        [RadioReportId("hea_c_0404125", InstanceName = nameof(VesselsFindingType.Ischemia))]
        ParenchymalEnhancement = 2
    }
}
