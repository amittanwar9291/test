
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models
{
    public class HtmlConfiguration
    {
        public PaperFormat PaperFormat { get; set; }
        public string DateFormat { get; set; }
        
        public string TopMargin { get; set; } = "0px";
        public string BottomMargin { get; set; } = "0px";
        public string RightMargin { get; set; } = "0px";
        public string LeftMargin { get; set; } = "0px";
    }
}
