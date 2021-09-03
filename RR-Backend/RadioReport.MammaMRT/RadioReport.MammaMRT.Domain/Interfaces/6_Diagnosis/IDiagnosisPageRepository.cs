using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Interfaces
{
    public interface IDiagnosisPageRepository : IPageRepository<DiagnosisPage>, IImageFileRepository<DiagnosisPage, ImageFile>
    {
    }
}
