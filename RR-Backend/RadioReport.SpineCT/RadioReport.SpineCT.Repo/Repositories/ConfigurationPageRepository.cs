using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class ConfigurationPageRepository : PageRepositoryBase<ConfigurationPage>, IConfigurationPageRepository
    {
        public ConfigurationPageRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<ConfigurationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ConfigurationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(ConfigurationPage.Findings) });
        }

        protected override void UpdateCollections(ConfigurationPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
