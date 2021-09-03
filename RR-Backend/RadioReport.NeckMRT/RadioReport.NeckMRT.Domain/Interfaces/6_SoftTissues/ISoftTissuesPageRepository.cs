using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Interfaces
{
    public interface ISoftTissuesPageRepository : IPageRepository<SoftTissuesPage>, IImageFileRepository<SoftTissuesPage, ImageFile>
    {
    }
}
