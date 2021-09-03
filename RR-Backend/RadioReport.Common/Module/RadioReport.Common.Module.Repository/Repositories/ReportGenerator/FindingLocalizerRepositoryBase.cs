using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Repository;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Repository.Repositories.ReportGenerator
{
    public class FindingLocalizerRepositoryBase : RepositoryBase<FindingLocalizer>, IFindingLocalizerRepository
    {
        public FindingLocalizerRepositoryBase(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<FindingLocalizer> GetLocalizerByCode(string code) =>
            await DataContext.Set<FindingLocalizer>()
            .Where(l => l.Code == code)
            .FirstOrDefaultAsync()
            ; 
    }
}
