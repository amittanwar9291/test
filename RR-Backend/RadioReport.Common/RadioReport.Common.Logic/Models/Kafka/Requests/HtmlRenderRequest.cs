using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class HtmlRenderRequest : KafkaCachingRequestBase
    {
        public HtmlRenderRequest() : base(KafkaTopic.Request.HtmlRender)
        {
        }

        public string HtmlContent { get; set; }
        public HtmlRenderFormat HtmlRenderFormat { get; set; }
        public PaperFormat PaperFormat { get; set; }
        public (int width, int height) Viewport { get; set; }
        public bool CacheReturn { get; set; } = true;
    }
}