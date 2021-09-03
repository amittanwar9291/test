using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Models;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.HipMRT.Domain.Interfaces
{
    public interface IBonesPageRepository : IPageRepository<BonesPage>, IImageFileRepository<BonesPage, ImageFile>
    {
    }
}
