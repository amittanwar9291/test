using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum ClassificationMunichConsensusType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060344")]
        MuscleEdema = 1,

        [RadioReportId("elb_m_060345")]
        MinorPartialMuscleTearType3a = 2,

        [RadioReportId("elb_m_060346")]
        ModeratePartiaMuscleTearType3b = 3,

        [RadioReportId("elb_m_060347")]
        SubtotalMuscleTearTendinousAvulsionType4 = 4

    }
}
