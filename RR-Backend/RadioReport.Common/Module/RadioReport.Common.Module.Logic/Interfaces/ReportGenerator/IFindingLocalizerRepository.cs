using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IFindingLocalizerRepository : IRepository<FindingLocalizer>
    {
        Task<FindingLocalizer> GetLocalizerByCode(string code); 
    }
}
