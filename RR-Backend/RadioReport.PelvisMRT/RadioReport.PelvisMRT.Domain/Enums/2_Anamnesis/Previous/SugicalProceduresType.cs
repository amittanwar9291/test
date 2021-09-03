using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums
{
    public enum SugicalProceduresType : byte
    {
        None = 0,

        [RadioReportId("pel_m_020425", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        Anterior = 1,

        [RadioReportId("pel_m_020427", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        AdbominoPerineal = 2
    }
}
