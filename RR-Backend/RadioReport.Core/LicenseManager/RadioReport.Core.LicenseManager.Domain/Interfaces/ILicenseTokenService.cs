using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace RadioReport.Core.LicenseManager.Domain.Interfaces
{
    public interface ILicenseTokenService
    {
        Task UploadLicenseFile(IFormFile file);
        Task ValidateAndAddLicense(string jwtTokenString);
    }
}
