using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum CraniocaudalType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060348", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        ReferenceThoracicVertebra = 1,
        [RadioReportId("tho_m_060349", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        ReferenceRib = 2
    }
}
