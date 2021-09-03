using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum AtraumaticEtiologyType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120426", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        RupturedAneurysm = 1,

        [RadioReportId("hea_m_120427", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        PerimesencephalicHemorrhage = 2,

        [RadioReportId("hea_m_120428", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        AVM = 3,

        [RadioReportId("hea_m_120429", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        OtherGenesis = 4
    }
}