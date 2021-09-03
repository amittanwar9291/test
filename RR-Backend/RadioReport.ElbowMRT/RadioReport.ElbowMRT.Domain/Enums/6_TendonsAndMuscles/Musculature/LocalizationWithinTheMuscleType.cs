using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum LocalizationWithinTheMuscleType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060219")]
        ProximalEnthesis = 1,

        [RadioReportId("elb_m_060220")]
        ProxMyotendinousJunction = 2,

        [RadioReportId("elb_m_060221")]
        ProximalesOneThird = 3,

        [RadioReportId("elb_m_060222")]
        MiddleOneThird = 4
    }
}
