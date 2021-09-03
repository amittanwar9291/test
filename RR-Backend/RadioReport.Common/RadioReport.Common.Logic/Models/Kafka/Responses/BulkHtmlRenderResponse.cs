using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class BulkHtmlRenderResponse : KafkaSyncResponseBase
    {
        public Dictionary<string, string> RenderedContent { get; }

        public BulkHtmlRenderResponse(bool isSuccess, Dictionary<string, string> renderedContent)
        {
            IsSuccess = isSuccess;
            RenderedContent = renderedContent;
        }
    }
}
