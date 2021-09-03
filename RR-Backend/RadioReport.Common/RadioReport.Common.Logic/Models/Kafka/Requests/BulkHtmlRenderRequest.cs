using System.Collections.Generic;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class BulkHtmlRenderRequest : KafkaCachingRequestBase
    {
        public BulkHtmlRenderRequest() : base(KafkaTopic.Request.BulkHtmlRender)
        {
        }

        public Dictionary<string, (string htmlContent, (int width, int height) viewport)> HtmlContentMap { get; } =
            new Dictionary<string, (string htmlContent, (int width, int height) viewport)>();

        public HtmlRenderFormat HtmlRenderFormat { get; set; }
        public PaperFormat PaperFormat { get; set; }
        public (int width, int height) Viewport { get; set; }
        public bool CacheReturn { get; set; } = true;
    }
}
