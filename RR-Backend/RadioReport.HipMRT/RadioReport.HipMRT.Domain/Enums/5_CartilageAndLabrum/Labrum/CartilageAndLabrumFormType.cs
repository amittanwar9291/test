using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum CartilageAndLabrumFormType : byte
    {
        None = 0,

        [RadioReportId("hip_m_050305")]
        Partial = 1,

        [RadioReportId("hip_m_050306")]
        Complete = 2,

        [RadioReportId("hip_m_050307")]
        Delamination = 3

    }
}
