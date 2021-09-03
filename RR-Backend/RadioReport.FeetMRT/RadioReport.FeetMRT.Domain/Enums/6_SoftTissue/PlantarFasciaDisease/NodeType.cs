using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum NodeType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060429", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        SignalArmInT1wOrT2w = 1,

        [RadioReportId("anc_m_060430", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        SignalRichInT2w = 2
    }
}