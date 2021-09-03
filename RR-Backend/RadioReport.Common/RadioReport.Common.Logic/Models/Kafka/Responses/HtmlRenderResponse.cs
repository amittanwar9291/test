using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class HtmlRenderResponse : KafkaSyncResponseBase
    {
        public string RenderContent { get; set; }
    }
}