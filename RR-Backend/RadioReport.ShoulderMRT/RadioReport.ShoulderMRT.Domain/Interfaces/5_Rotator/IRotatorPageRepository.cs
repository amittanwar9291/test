using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Interfaces
{
    public interface IRotatorPageRepository : IPageRepository<RotatorPage>, IImageFileRepository<RotatorPage, ImageFile>
    {
    }
}
