using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Repository;

namespace RadioReport.Common.Module.Repository.Repositories
{
    public class ReportSessionRepository : RepositoryBase<ReportSession>
    {
        public ReportSessionRepository(DbContext dbContext) : base(dbContext)
        {
        }
    }
}
