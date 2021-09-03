using RadioReport.Common.Logic.Interfaces;
using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using System.Threading.Tasks;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Interfaces
{
    public interface ICSPFindingRepository : IRepository<CSPFinding>
    {
        Task<CSPFinding> GetByTypeAsync(CSPFindingType type);
    }
}
