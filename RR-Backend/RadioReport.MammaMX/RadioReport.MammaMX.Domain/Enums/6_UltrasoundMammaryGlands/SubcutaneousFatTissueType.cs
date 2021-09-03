
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands
{
    public enum SubcutaneousFatTissueType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_060302")]
        Normal = 1,
        
        [RadioReportId("mam_mx_060303")]
        Obliterated = 2 
    }
}
