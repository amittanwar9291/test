using System;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SacroiliacJointPageRepository : PageRepositoryBase<SacroiliacJointPage>, ISacroiliacJointPageRepository
    {
        public SacroiliacJointPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SacroiliacJointPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SacroiliacJointPage, bool>> predicate = null) =>
            base.GetByIdAsync(id, GetIncludes());

        protected override void UpdateCollections(SacroiliacJointPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
            foreach (var finding in model.Findings ?? Enumerable.Empty<SacroiliacJointFinding>())
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
                foreach (var finding in model.Findings ?? Enumerable.Empty<SacroiliacJointFinding>())
                {
                    SetDeleteForFindingProperties(finding);
                }
                DataContext.Remove(model);
            }
        }

        private static string[] GetIncludes() =>
            new[]
            {
                nameof(SacroiliacJointPage.Findings),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score1),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score2),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score3),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score4),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score5),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.Score6)
            };

        private void SetDeleteForFindingProperties(SacroiliacJointFinding finding)
        {
            SetDeleteForModelProperty(finding, f => f.Score1);
            SetDeleteForModelProperty(finding, f => f.Score2);
            SetDeleteForModelProperty(finding, f => f.Score3);
            SetDeleteForModelProperty(finding, f => f.Score4);
            SetDeleteForModelProperty(finding, f => f.Score5);
            SetDeleteForModelProperty(finding, f => f.Score6);
        }

        private void SetUpdateForFindingProperties(SacroiliacJointFinding finding)
        {
            SetUpdateForModelProperty(finding, f => f.Score1);
            SetUpdateForModelProperty(finding, f => f.Score2);
            SetUpdateForModelProperty(finding, f => f.Score3);
            SetUpdateForModelProperty(finding, f => f.Score4);
            SetUpdateForModelProperty(finding, f => f.Score5);
            SetUpdateForModelProperty(finding, f => f.Score6);
        }
    }
}
