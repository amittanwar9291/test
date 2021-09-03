using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class HeadMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public HeadMRTReportSchemaRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
