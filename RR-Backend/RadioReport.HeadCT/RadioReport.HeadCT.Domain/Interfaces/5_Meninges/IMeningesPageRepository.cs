using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Interfaces
{
    public interface IMeningesPageRepository : IPageRepository<MeningesPage>, IImageFileRepository<MeningesPage, ImageFile>
    {
    }
}
