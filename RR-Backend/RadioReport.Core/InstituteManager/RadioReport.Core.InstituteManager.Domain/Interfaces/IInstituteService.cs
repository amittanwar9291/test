using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface IInstituteService
    {
        Task<List<string>> GetAvailableModules();
        Task<int> GetAvailableModuleCount();
    }
}
