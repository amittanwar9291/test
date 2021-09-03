using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class FindingsVentriclesPageRepository : PageWithImageRepositoryBase<FindingsVentriclesPage, FindingsVentriclesPage>, IFindingsVentriclesPageRepository
    {
        public FindingsVentriclesPageRepository(CardioMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<FindingsVentriclesPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(CardioMRT), logger)
        {
        }

        protected override Expression<Func<Guid, FindingsVentriclesPage, bool>> HasImageFile => (Guid imageFileId, FindingsVentriclesPage f) =>
            f.MyocardialStrainImageId == imageFileId || f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, GetIncludes());

            if (toRemove != null)
            {
                await RemoveImageFile(toRemove.MyocardialStrainImageId.Value);
                await RemoveImageFile(toRemove.ImageFileId.Value);

                DataContext.Set<FindingsVentriclesPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<FindingsVentriclesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<FindingsVentriclesPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<FindingsVentriclesPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                pageModel.MyocardialStrainImage = pageModel.MyocardialStrainImageId.HasValue ? await GetImageFile(pageModel.MyocardialStrainImageId.Value) : null;
                pageModel.UploadedImageFile = pageModel.ImageFileId.HasValue ? await GetImageFile(pageModel.ImageFileId.Value) : null;
            }

            return pageModel;
        }

        private string[] GetIncludes() =>
            new[]
            {
                nameof(FindingsVentriclesPage.MyocardialStrainImage),
                nameof(FindingsVentriclesPage.UploadedImageFile)
            };
    }
}
