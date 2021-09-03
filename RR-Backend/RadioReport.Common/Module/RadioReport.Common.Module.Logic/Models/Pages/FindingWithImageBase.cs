using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using System;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public abstract class FindingWithImageBase : FindingBase, IImageFileContainer
    {
        public Guid? ImageFileId { get; set; }

        public abstract ImageFile UploadedImageFile { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            UploadedImageFile = imageFile;
            ImageFileId = imageFile?.Id;
        }
    }
}
