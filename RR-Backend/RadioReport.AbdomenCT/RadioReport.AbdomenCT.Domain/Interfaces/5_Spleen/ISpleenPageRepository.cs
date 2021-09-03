using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenCT.Domain.Interfaces
{
    public interface ISpleenPageRepository : IPageRepository<SpleenPage>, IImageFileRepository<SpleenPage, ImageFile>
    {
    }
}
