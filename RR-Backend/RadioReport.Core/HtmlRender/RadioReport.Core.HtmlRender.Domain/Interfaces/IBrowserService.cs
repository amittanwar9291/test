using System.Collections.Generic;
using System.Threading.Tasks;
using PuppeteerSharp;

namespace RadioReport.Core.HtmlRender.Domain.Interfaces
{
    public interface IBrowserService
    {
        public Browser ChromiumBrowser { get; set; }
        public Task InitBrowser(bool checkHealth = true);
    }
}
