using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPageWithImageManager<T> : IPageManager<T>, IImageFileManager<ImageFile> where T : PageModelBase
    {
    }
}
