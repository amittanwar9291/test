using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Interfaces
{
    public interface ISoftTissuesPageRepository : IPageRepository<SoftTissuesPage>, IImageFileRepository<SoftTissuesPage, ImageFile>
    {
    }
}
