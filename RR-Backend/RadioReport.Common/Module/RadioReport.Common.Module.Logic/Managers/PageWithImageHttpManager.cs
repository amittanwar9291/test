using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Managers
{
    public class PageWithImageHttpManager<T> : PageHttpManager<T>, IPageWithImageHttpManager<T> where T : PageModelBase<T>, new()
    {
        private readonly IPageWithImageManager<T> _pageWithImageManager;

        public PageWithImageHttpManager(IPageWithImageManager<T> pageWithImageManager) : base(pageWithImageManager)
        {
            _pageWithImageManager = pageWithImageManager;
        }

        public Task<ImageFile> DownloadImageFile(Guid imageId) => _pageWithImageManager.GetImageFile(imageId, ImageDownloadType.FullSized);

        public Task RemoveImageFile(Guid reportId, Guid imageId) => _pageWithImageManager.RemoveImageFile(reportId, imageId);

        public Task RemoveImageFileRange(Guid reportId, IEnumerable<Guid> idsToDelete) => _pageWithImageManager.RemoveImageFileRange(reportId, idsToDelete);

        public Task<ImageFile> AddImageFile(Guid reportId, Guid entityId, IFormFile file, string fileType = null) =>
            _pageWithImageManager.AddImageFile(reportId, entityId, file, fileType);

        public UploadImageResult VerifyFileType(string fileType)
        {
            var attribute = typeof(T).GetCustomAttribute<GeneratedControllerPageWithImageModelAttribute>();
            if (attribute == null || attribute.AllowedFileTypes.IsNullOrEmpty()) return UploadImageResult.Valid;

            if (fileType.IsNullOrEmpty()) return UploadImageResult.MissingFileType;

            return attribute.AllowedFileTypes.Contains(fileType, StringComparer.OrdinalIgnoreCase)
                ? UploadImageResult.Valid
                : UploadImageResult.InvalidFileType;
        }
    }
}
