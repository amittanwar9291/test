using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Interfaces
{
    public interface ILarynxPageRepository : IPageRepository<LarynxPage>, IImageFileRepository<LarynxPage, ImageFile>
    {
    }
}
