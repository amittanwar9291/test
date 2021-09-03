using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IImageFileRepository<TModel, TFile>
        where TModel : PageModelBase
        where TFile : ImageFile
    {
        Task<TFile> AddImageFile(IImageFileContainer imageFileContainer, ImageSaveDto image);
        Task RemoveImageFile(Guid imageFileId);
        Task RemoveImageFileRange(IEnumerable<Guid> idsToDelete);
        Task<TFile> GetImageFile(Guid imageFileId, ImageDownloadType imageDownloadType);
        Task<IImageFileContainer> GetImageContainingEntity(Guid containerId);
        Task<TModel> GetByIdAsync(Guid id, string[] includes, bool getStream);
        Task Delete(Guid id);
    }
}
