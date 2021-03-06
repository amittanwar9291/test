using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface ILymphaticSystemPageRepository : IPageRepository<LymphaticSystemPage>, IImageFileRepository<LymphaticSystemPage, ImageFile>
    {
    }
}
