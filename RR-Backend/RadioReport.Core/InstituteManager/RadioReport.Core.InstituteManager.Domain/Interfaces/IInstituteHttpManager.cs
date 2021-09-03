using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Domain.Models;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface IInstituteHttpManager : IManager<Institute>
    {
        Task<RequestResponse> GetInstituteToken();
        Task<RequestResponse> UpdateInstituteToken();
        Task<RequestResponse> UpdateDuplicateMultiExternalIdentifierAllowed(bool duplicateExternalIdentifierAllowed);
        Task<AvailableModulesResponse> GetAvailableModules();
        Task<RequestResponse> UploadInstituteLogo(InstituteLogo instituteLogo);
        Task<RequestResponse> DeleteInstituteLogo();
        Task<RequestResponse> GetInstituteLogo();
        Task<RequestResponse> GetHtmlTemplates();
        Task<RequestResponse> UploadHtmlTemplates(HtmlTemplates htmlTemplates);
        Task<RequestResponse> RemoveHtmlTemplates(HtmlTemplates htmlTemplates);
        Task<InstituteListResponse> GetInstitutes(InstituteListOptions listOptions);
    }
}
