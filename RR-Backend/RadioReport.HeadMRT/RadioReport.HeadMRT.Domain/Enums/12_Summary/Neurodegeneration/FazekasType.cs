using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum FazekasType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120340", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Grade0 = 1,

        [RadioReportId("hea_m_120341", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Grade1 = 2,

        [RadioReportId("hea_m_120342", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Grade2 = 3,

        [RadioReportId("hea_m_120343", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Grade3 = 4
    }
}