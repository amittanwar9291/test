using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AngiographyMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public AngiographyMRTReportSchemaRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
