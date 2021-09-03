using RadioReport.Common.Module.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class HeadMRTReportRepository : ReportRepository
    {
        public HeadMRTReportRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
