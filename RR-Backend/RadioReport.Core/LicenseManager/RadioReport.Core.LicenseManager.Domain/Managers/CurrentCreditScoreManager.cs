using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Managers
{
    public class CurrentCreditScoreManager : Manager<CurrentCreditScore, IRepository<CurrentCreditScore>>, ICurrentCreditScoreManager
    {
        private readonly HttpAuthContext _httpAuthContext;

        public CurrentCreditScoreManager(IRepository<CurrentCreditScore> repository, HttpAuthContext httpAuthContext) : base(repository)
        {
            _httpAuthContext = httpAuthContext;
        }

        public Task<CurrentCreditScore> GetActiveByInstituteId() =>
            Repository.GetManyQueryable(s => s.InstituteId == _httpAuthContext.InstituteId && s.IsActive).SingleOrDefaultAsync();

        public Task<CurrentCreditScore> GetByLicenseId(Guid licenseId) => Repository.GetManyQueryable(s => s.LicenseId == licenseId).SingleOrDefaultAsync();

        public Task<CurrentCreditScore> GetActiveByLicenseId(Guid licenseId) =>
            Repository.GetManyQueryable(s => s.LicenseId == licenseId && s.IsActive).SingleOrDefaultAsync();
    }
}
