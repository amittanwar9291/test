using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class ConfigurationPageRepository : PageRepositoryBase<ConfigurationPage>, IConfigurationPageRepository
    {
        public ConfigurationPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
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
