using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SacroiliacJointPageRepository : PageWithImageRepositoryBase<SacroiliacJointPage, SacroiliacJointFinding>, ISacroiliacJointPageRepository
    {
        public SacroiliacJointPageRepository(SpineCTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<SacroiliacJointPageRepository> logger) 
            : base(dbContext, minIOWrapper, nameof(SpineCT), logger)
        {
        }

        protected override Expression<Func<Guid, SacroiliacJointFinding, bool>> HasImageFile =>
            (Guid imageFileId, SacroiliacJointFinding finding) => imageFileId == finding.ImageFileId;

        public override Task<SacroiliacJointPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SacroiliacJointPage, bool>> predicate = null) =>
            GetByIdAsync(id, includes, false);

        public override async Task<SacroiliacJointPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);
            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Findings?.Any(f => f.ImageFile != null) ?? false;
                if (isAnyUploadedFile)
                {
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.ImageFile?.Id != null);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.ImageFile = await GetImageFile(finding.ImageFileId.Value);
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(SacroiliacJointPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<SacroiliacJointFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }

            UpdateCollection(model.Findings);
        }

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[] { nameof(SacroiliacJointPage.Findings), nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.ImageFile) });
            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<SacroiliacJointFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<SacroiliacJointPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }
    }
}
