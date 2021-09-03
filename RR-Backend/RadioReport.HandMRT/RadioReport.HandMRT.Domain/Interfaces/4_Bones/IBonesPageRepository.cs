using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Interfaces
{
    public interface IBonesPageRepository : IPageRepository<BonesPage>, IImageFileRepository<BonesPage, ImageFile>
    {
    }
}
