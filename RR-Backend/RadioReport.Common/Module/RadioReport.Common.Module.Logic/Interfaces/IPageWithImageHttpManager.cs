using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPageWithImageHttpManager<T> : IPageHttpManager<T> where T : PageModelBase<T>, new()
    {
        Task<ImageFile> DownloadImageFile(Guid imageId);
        Task RemoveImageFile(Guid reportId, Guid imageId);
        Task RemoveImageFileRange(Guid reportId, [FromBody] IEnumerable<Guid> idsToDelete);
        Task<ImageFile> AddImageFile(Guid reportId, Guid entityId, IFormFile file, string fileType = null);
        UploadImageResult VerifyFileType(string fileType);
    }
}
