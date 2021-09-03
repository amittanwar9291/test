using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Core.Logic.Interfaces
{
    public interface IHtmlTemplateService
    {
        Task<HtmlTemplates> GetHtmlTemplates();
        Task<RequestResponse> UploadHtmlTemplates(HtmlTemplates htmlTemplates);
        Task<RequestResponse> RemoveHtmlTemplates(HtmlTemplates htmlTemplates);
    }
}
