using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models
{
    public class HtmlTemplates
    {
        public string Body { get; set; }
        public string Header { get; set; }
        public string Footer { get; set; }
        public string Css { get; set; }

        public HtmlConfiguration HtmlConfiguration { get; set; }

        public HtmlTemplateTypes HtmlTemplateTypes { get; set; }
    }
}
