using System;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class LymphNodesPageRepository : PageRepositoryBase<LymphNodesPage>, ILymphNodesPageRepository
    {
        public LymphNodesPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        protected override void UpdateCollections(LymphNodesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings)
            {
                if (finding.IsDeleted)
                {
                    if (finding.RightLymphNodeDetails != null)
                    {
                        finding.RightLymphNodeDetails.IsDeleted = true;
                    }
                    if (finding.LeftLymphNodeDetails != null)
                    {
                        finding.LeftLymphNodeDetails.IsDeleted = true;
                    }
                }
            }
     
            var details = model.Findings?
                .SelectMany(f => new List<LymphNodeDetails> { f.LeftLymphNodeDetails, f.RightLymphNodeDetails }.Where(l => l != null));
            UpdateCollection(details);
            UpdateCollection(model.Findings);
        }
    }
}