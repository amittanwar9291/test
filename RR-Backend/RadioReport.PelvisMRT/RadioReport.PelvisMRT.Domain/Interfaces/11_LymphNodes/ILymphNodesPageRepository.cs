using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Interfaces
{
    public interface ILymphNodesPageRepository : IPageRepository<LymphNodesPage>, IImageFileRepository<LymphNodesPage, ImageFile>
    {
    }
}
