using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Interfaces
{
    public interface ICurrentCreditScoreManager : IManager<CurrentCreditScore>
    {
        Task<CurrentCreditScore> GetActiveByInstituteId();
        Task<CurrentCreditScore> GetByLicenseId(Guid licenseId);
        Task<CurrentCreditScore> GetActiveByLicenseId(Guid licenseId);
    }
}
