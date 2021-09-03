using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.CardioMRT.Domain.Interfaces
{
    public interface ILeftVentriclePageRepository : IPageRepository<LeftVentriclePage>, IImageFileRepository<LeftVentriclePage, ImageFile>
    {
    }
}
