using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class LungParenchymaPageRepository : PageRepositoryBase<LungParenchymaPage>, ILungParenchymaPageRepository
    {
        public LungParenchymaPageRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<LungParenchymaPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LungParenchymaPage, bool>> predicate = null) =>
            base.GetByIdAsync(id, GetIncludes());

        protected override void UpdateCollections(LungParenchymaPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
            foreach (var finding in model.Findings ?? Enumerable.Empty<LungParenchymaFinding>())
            {
                if (finding.IsDeleted)
                {
                    SetDeleteForFindingProperties(finding);
                }
                else
                {
                    SetUpdateForFindingProperties(finding);
                }
            }
        }

        public override void Delete(Guid id)
        {
            var model = GetById(id, GetIncludes());
            if (model != null)
            {
                foreach (var finding in model.Findings ?? Enumerable.Empty<LungParenchymaFinding>())
                {
                    SetDeleteForFindingProperties(finding);
                }
                DataContext.Remove(model);
            }
        }

        private static string[] GetIncludes() =>
            new[]
            {
                nameof(LungParenchymaPage.Findings),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.BronchiectasisOrWallThickeningLocalizer),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.MucusPlaqueLocalizer),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.SacculationOrAbscessLocalizer),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.ConsolidationLocalizer),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.OtherAbnormalityLocalizer),
                nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.FunctionLocalizer)
            };

        private void SetDeleteForFindingProperties(LungParenchymaFinding finding)
        {
            SetDeleteForModelProperty(finding, f => f.BronchiectasisOrWallThickeningLocalizer);
            SetDeleteForModelProperty(finding, f => f.MucusPlaqueLocalizer);
            SetDeleteForModelProperty(finding, f => f.SacculationOrAbscessLocalizer);
            SetDeleteForModelProperty(finding, f => f.ConsolidationLocalizer);
            SetDeleteForModelProperty(finding, f => f.OtherAbnormalityLocalizer);
            SetDeleteForModelProperty(finding, f => f.FunctionLocalizer);
        }

        private void SetUpdateForFindingProperties(LungParenchymaFinding finding)
        {
            SetUpdateForModelProperty(finding, f => f.BronchiectasisOrWallThickeningLocalizer);
            SetUpdateForModelProperty(finding, f => f.MucusPlaqueLocalizer);
            SetUpdateForModelProperty(finding, f => f.SacculationOrAbscessLocalizer);
            SetUpdateForModelProperty(finding, f => f.ConsolidationLocalizer);
            SetUpdateForModelProperty(finding, f => f.OtherAbnormalityLocalizer);
            SetUpdateForModelProperty(finding, f => f.FunctionLocalizer);
        }
    }
}
