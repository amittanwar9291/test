using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Interfaces
{
    public interface IDiscPageRepository : IPageRepository<DiscPage>, IImageFileRepository<DiscPage, ImageFile>
    {
    }
}
