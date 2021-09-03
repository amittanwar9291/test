using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum MatrixType : byte
    {
        None = 0,

        [RadioReportId("tho_m_070537")]
        Osseous = 1,

        [RadioReportId("tho_m_070538")]
        Chondroid = 2
    }
}
