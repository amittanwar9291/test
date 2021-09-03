using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum RuptureType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060408", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        PartialTear = 1,

        [RadioReportId("anc_m_060409", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        CompleteTear = 2
    }
}