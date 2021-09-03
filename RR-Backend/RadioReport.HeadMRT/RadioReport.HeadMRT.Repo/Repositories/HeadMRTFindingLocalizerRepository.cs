using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class HeadMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public HeadMRTFindingLocalizerRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
