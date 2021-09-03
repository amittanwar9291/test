using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.ThoraxCT.Domain.Interfaces
{
    public interface ILungInterstitiumPageRepository : IPageRepository<LungInterstitiumPage>, IImageFileRepository<LungInterstitiumPage, ImageFile>
    {
    }
}
