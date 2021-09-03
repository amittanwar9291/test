using System;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class UltrasoundFindingPageRepository : PageRepositoryBase<UltrasoundFindingPage>, IUltrasoundFindingPageRepository
    {
        public UltrasoundFindingPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        protected override void UpdateCollections(UltrasoundFindingPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}