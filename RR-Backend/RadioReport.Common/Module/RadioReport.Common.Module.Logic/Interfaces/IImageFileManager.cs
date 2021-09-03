using Microsoft.AspNetCore.Http;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IImageFileManager<T> where T : ImageFile
    {
        Task<T> GetImageFile(Guid imageId, ImageDownloadType imageDownloadType);
        Task<T> AddImageFile(Guid reportId, Guid entityId, IFormFile file, string fileType = null);
        Task RemoveImageFile(Guid reportId, Guid imageId);
        Task RemoveImageFileRange(Guid reportId, IEnumerable<Guid> idsToDelete);
    }
}