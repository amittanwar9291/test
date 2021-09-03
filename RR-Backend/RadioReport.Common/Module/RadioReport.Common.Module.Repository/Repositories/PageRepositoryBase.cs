using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Repository;
using System;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Module.Repository.Repositories
{
    public class PageRepositoryBase<T> : RepositoryBase<T>
        where T : PageModelBase
    {
        public PageRepositoryBase(DbContext dbContext) : base(dbContext)
        {
        }

        public virtual async Task<T> GetByReportIdAsync(Guid reportId) => await GetByReportIdAsync(reportId, null);

        public virtual async Task<T> GetByReportIdAsync(Guid reportId, string[] includes)
        {
            var query = DataContext.Set<T>().AsQueryable();
            if (includes == null || includes.Length <= 0)
            {
                return await query.FirstOrDefaultAsync(m => m.ReportId == reportId);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return await query.FirstOrDefaultAsync(m => m.ReportId == reportId);
        }

        public virtual void RemoveByReportId(Guid reportId)
        {
            var toRemove = DataContext.Set<T>().FirstOrDefault(m => m.ReportId == reportId);
            if (toRemove != null)
            {
                DataContext.Remove(toRemove);
            }
        }

        public override async Task<int> SaveChangesAsync()
        {
            try
            {
                return await base.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                var sqlException = e.InnerException as SqlException;
                if (sqlException?.Number == 2601)
                {
                    throw new DuplicatedPageException(sqlException.Message, e);
                }

                throw;
            }
        }
    }
}
