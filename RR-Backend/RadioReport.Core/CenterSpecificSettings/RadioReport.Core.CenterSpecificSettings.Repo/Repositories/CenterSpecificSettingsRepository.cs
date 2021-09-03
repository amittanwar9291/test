using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Extensions;
using RadioReport.Common.Repository;
using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using RadioReport.Core.CenterSpecificSettings.Domain.Interfaces;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.Core.CenterSpecificSettings.Repo
{
    public class CenterSpecificSettingsRepository : RepositoryBase<CSPFinding>, ICSPFindingRepository
    {
        public CenterSpecificSettingsRepository(CenterSpecificSettingsDbContext dbContext) : base(dbContext)
        {
        }

        public override async Task<CSPFinding> GetByIdAsync(Guid id, Expression<Func<CSPFinding, bool>> predicate = null) => await base.GetByIdAsync(id, GetIncludes());

        public async Task<CSPFinding> GetByTypeAsync(CSPFindingType type)
        {
            var query = DataContext.Set<CSPFinding>().AsQueryable();

            foreach (var include in GetIncludes())
            {
                query = query.Include(include);
            }

            return await query.SingleAsync(f => f.FindingType == type);
        }

        protected override void UpdateCollections(CSPFinding model)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            UpdateCollection(model.Sets);

            var sequences = model.Sets.Where(s => !s.Sequences.IsNullOrEmpty()).SelectMany(s => s.Sequences);
            var acquisitions = model.Sets.Where(s => !s.Acquisitions.IsNullOrEmpty()).SelectMany(s => s.Acquisitions);
            var reconstructions = acquisitions.Where(a => !a.Reconstructions.IsNullOrEmpty()).SelectMany(a => a.Reconstructions);

            UpdateCollection(sequences);
            UpdateCollection(acquisitions);
            UpdateCollection(reconstructions);

            base.UpdateCollections(model);
        }

        private static string[] GetIncludes() => new[]
        {
            nameof(CSPFinding.Sets),
            nameof(CSPFinding.Sets) + "." + nameof(CSPSet.Sequences),
            nameof(CSPFinding.Sets) + "." + nameof(CSPSet.Acquisitions),
            nameof(CSPFinding.Sets) + "." + nameof(CSPSet.Acquisitions) + "." + nameof(Acquisition.Reconstructions)
        };
    }
}
