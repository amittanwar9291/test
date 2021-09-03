using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{

    public enum PatternType : byte
    {
        None = 0,

        [RadioReportId("pel_m_040302")]
        Focal = 1,

        [RadioReportId("pel_m_040303")]
        DiffuseFlat = 2

    }
}