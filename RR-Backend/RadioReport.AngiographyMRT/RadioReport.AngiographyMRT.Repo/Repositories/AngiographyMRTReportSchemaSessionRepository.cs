using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AngiographyMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public AngiographyMRTReportSchemaSessionRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
