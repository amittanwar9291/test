using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    public enum FollowUpType : byte
    {
        None = 0,

        [RadioReportId("ang_m_060403", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        Progression = 1,

        [RadioReportId("ang_m_060404", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        NoChange = 2,

        [RadioReportId("ang_m_060405", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        Regression = 3
    }
}
