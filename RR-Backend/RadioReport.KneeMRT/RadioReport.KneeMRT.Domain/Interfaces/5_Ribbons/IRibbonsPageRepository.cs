using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Interfaces
{
    public interface IRibbonsPageRepository : IPageRepository<RibbonsPage>, IImageFileRepository<RibbonsPage, ImageFile>
    {
    }
}
