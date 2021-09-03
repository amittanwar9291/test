using System;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Repository;

namespace RadioReport.Common.Module.Repository.Repositories
{
    public class ReportRepository : RepositoryBase<Report>
    {
        public ReportRepository(DbContext dbContext) : base(dbContext)
        {
        }

        protected override void UpdateCollections(Report model)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            UpdateCollection(model.ReportResults);
        }
    }
}
