using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.Common.Core.Logic.Interfaces
{
    public interface IInstituteLogoService
    {
        Task<bool> UploadInstituteLogo(InstituteLogo instituteLogo);
        Task<InstituteLogo> GetInstituteLogo();
        Task<bool> DeleteInstituteLogo();
    }
}
