using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class HeadMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public HeadMRTReportSchemaSessionRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
