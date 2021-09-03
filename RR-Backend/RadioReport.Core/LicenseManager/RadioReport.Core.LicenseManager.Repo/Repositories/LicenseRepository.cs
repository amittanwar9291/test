using RadioReport.Common.Repository;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Repositories
{
    public class LicenseRepository : RepositoryBase<License>
    {
        public LicenseRepository(LicenseManagerDbContext dbContext) : base(dbContext)
        {
        }
    }
}
