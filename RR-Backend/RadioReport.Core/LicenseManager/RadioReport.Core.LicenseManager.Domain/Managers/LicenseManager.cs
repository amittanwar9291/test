using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Managers
{
    public class LicenseManager : Manager<License, IRepository<License>>, ILicenseManager
    {
        private readonly HttpAuthContext _httpAuthContext;

        public LicenseManager(IRepository<License> repository, HttpAuthContext httpAuthContext) : base(repository)
        {
            _httpAuthContext = httpAuthContext;
        }

        public Task<License> GetActiveByInstituteId() => Repository.GetSingleOrDefaultAsync(l => l.InstituteId == _httpAuthContext.InstituteId && l.IsActive,
            new[] { nameof(License.LicenseFractions) });
    }
}
