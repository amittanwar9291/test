using RadioReport.Common.Repository;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Repositories
{
    public class CurrentCreditScoreRepository : RepositoryBase<CurrentCreditScore>
    {
        public CurrentCreditScoreRepository(LicenseManagerDbContext dbContext) : base(dbContext)
        {
        }
    }
}
