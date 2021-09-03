using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Interfaces
{
    public interface ILungParenchymaPageRepository : IPageRepository<LungParenchymaPage>, IImageFileRepository<LungParenchymaPage, ImageFile>
    {
    }
}
