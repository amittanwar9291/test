using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class HtmlTemplateRenderRequest : KafkaCachingRequestBase
    {
        public HtmlTemplateRenderRequest() : base(KafkaTopic.Request.HtmlTemplateRender)
        {
        }

        public string HeaderSection { get; set; } = "";
        public string BodySection { get; set; } = "";
        public string FooterSection { get; set; } = "";
        public string CssSection { get; set; } = "";
        public string TopMargin { get; set; } = "0px";
        public string BottomMargin { get; set; } = "0px";
        public string RightMargin { get; set; } = "0px";
        public string LeftMargin { get; set; } = "0px";
        public PaperFormat PaperFormat { get; set; } = PaperFormat.A4;
        public bool CacheReturn { get; set; } = true;
    }
}
