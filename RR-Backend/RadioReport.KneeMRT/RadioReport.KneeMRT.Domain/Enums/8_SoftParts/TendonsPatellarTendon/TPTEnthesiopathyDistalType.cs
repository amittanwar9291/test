using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TPTEnthesiopathyDistalType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080412", InstanceName = nameof(SoftPartsFindingType.TendonsPatellarTendon))]
        MOsgoodSlatter = 1,

        [RadioReportId("kne_m_080516", InstanceName = nameof(SoftPartsFindingType.TendonsPatellarTendon))]
        ZnOsgoodSchlatter = 2,

        [RadioReportId("kne_m_080520", InstanceName = nameof(SoftPartsFindingType.TendonsPatellarTendon))]
        NonSpecificInsertionStenosisDinopathy = 3
    }
}
