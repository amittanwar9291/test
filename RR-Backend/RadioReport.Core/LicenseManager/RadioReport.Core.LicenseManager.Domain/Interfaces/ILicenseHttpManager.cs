using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Interfaces
{
    public interface ILicenseHttpManager : IManager<LicenseFraction>
    {
        Task UploadLicenseFile(IFormFile file);
        Task<List<LicenseListItem>> GetLicenses();
        Task<LicenseFractionListResponse> GetLicenseFractions(GetLicenseFractionsRequest request);
        Task<CurrentCreditScore> GetCurrentCreditScore();
        Task<LicenseDetails> GetLicenseDetails(Guid licenseId);
    }
}
