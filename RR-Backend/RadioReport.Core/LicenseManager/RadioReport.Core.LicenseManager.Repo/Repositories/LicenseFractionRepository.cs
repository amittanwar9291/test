using RadioReport.Common.Repository;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Repositories
{
    public class LicenseFractionRepository : RepositoryBase<LicenseFraction>
    {
        public LicenseFractionRepository(LicenseManagerDbContext dbContext) : base(dbContext)
        {
        }
    }
}
