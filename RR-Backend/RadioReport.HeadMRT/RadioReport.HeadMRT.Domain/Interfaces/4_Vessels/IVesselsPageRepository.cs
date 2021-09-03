using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface IVesselsPageRepository : IPageRepository<VesselsPage>, IImageFileRepository<VesselsPage, ImageFile>
    {
    }
}
