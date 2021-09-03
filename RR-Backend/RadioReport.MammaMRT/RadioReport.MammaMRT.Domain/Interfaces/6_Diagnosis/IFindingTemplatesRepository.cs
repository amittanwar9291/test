using System.Threading.Tasks;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Interfaces
{
    public interface IFindingTemplatesRepository : IRepository<DiagnosisFindingTemplate>, IPresetBaseRepository
    {
        Task<DiagnosisFindingTemplate> GetByDiagnosisValue(DiagnosisType diagnosisValue);
    }
}
