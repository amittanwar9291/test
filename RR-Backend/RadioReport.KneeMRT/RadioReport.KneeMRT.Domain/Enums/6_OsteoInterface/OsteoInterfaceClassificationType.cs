using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OsteoInterfaceClassificationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060340", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        CartilageIntactStableLesion = 1,

        [RadioReportId("kne_m_060342", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        ChondralLesionUnstableLesion = 2,

        [RadioReportId("kne_m_060349", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        OldLesionEntirelyFilledWithFluid = 3
    }
}