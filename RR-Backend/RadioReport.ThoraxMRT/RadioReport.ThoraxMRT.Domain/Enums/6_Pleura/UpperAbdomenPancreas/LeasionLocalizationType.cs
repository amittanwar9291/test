using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum LeasionLocalizationType : byte
    {
        None = 0,
        [RadioReportId("tho_m_0602117", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        Head = 1,
        [RadioReportId("tho_m_0602118", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        Body = 2,
        [RadioReportId("tho_m_0602119", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        Tail = 3,
        [RadioReportId("tho_m_0602120", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        UncinateProcess = 4
    }
}
