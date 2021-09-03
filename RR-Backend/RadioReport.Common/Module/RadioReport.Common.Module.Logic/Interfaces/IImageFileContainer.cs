using RadioReport.Common.Module.Logic.Models.Pages;
using System;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IImageFileContainer
    {
        Guid Id { get; set; }

        void SetImageFile(ImageFile imageFile, string fileType = null);

        void DropImageFile(Guid? imageFileId = null);

        Guid? GetImageFileGuid(string fileType = null);
    }
}