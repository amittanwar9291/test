using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Repository;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Repo.Repositories
{
    public class InstituteRepository : RepositoryBase<Institute>, IInstituteRepository
    {
        public InstituteRepository(InstituteManagerDbContext dbContext) : base(dbContext)
        {
        }

        public Institute GetByInstituteToken(string instituteToken) => DataContext.Set<Institute>().SingleOrDefault(i => i.InstituteToken == instituteToken);

        public Institute SearchInstituteToken(string instituteToken) => DataContext.Set<Institute>().FirstOrDefault(i => i.InstituteToken == instituteToken);
        public async Task<Institute> GetFullInstituteNoTracking(Guid id)
        {
            var dbContext = DataContext as InstituteManagerDbContext;
            return await dbContext.Institutes
                    .Include(a => a.Address).ThenInclude(g => g.Geometry)
                    .Include(a => a.Address).ThenInclude(p => p.Properties)
                    .AsNoTracking().FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Institute> GetInstitute(Guid instituteId, InstituteDetailLevel level) =>
            await GetInstituteAsQueryable(level).FirstOrDefaultAsync(i => i.Id == instituteId);

        public async Task<PagedList<Institute>> GetInstitutes(InstituteListOptions listOptions)
        {
            listOptions ??= new InstituteListOptions();

            var queryable = GetInstituteAsQueryable(listOptions.DetailLevel);
            if (listOptions.SearchOptions != null)
            {
                if (!string.IsNullOrEmpty(listOptions.SearchOptions.Name))
                {
                    queryable = queryable.Where(i => i.Name.Contains(listOptions.SearchOptions.Name));
                }
                if (listOptions.SearchOptions.InstituteId != null)
                {
                    queryable = queryable.Where(i => i.Id.ToString().Contains(listOptions.SearchOptions.InstituteId));
                }
            }
            return await PagedList<Institute>.ToPagedList(queryable.OrderBy(i => i.Name), listOptions.Page, listOptions.PageSize);
        }

        private IQueryable<Institute> GetInstituteAsQueryable(InstituteDetailLevel level)
        {
            var dbContext = DataContext as InstituteManagerDbContext;
            
            if (level == InstituteDetailLevel.WithAddress)
            {
                return dbContext.Institutes
                    .Include(a => a.Address).ThenInclude(g => g.Geometry)
                    .Include(a => a.Address).ThenInclude(p => p.Properties)
                    .AsQueryable();
            }
            return dbContext.Institutes.AsQueryable();
        }
    }
}
