using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Interfaces
{
    public interface IBonesPageRepository : IPageRepository<BonesPage>, IImageFileRepository<BonesPage, ImageFile>
    {
    }
}
