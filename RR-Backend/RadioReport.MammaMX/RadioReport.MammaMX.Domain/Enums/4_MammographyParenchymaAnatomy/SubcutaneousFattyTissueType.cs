using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy
{
    public enum SubcutaneousFattyTissueType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_040202")]
        Normal = 1,

        [RadioReportId("mam_mx_040203")]
        Obliterated = 2
    }
}
