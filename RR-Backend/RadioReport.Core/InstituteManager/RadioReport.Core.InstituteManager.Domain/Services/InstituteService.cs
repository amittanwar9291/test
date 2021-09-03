using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Interfaces;

namespace RadioReport.Core.InstituteManager.Domain.Services
{
    public class InstituteService : IInstituteService
    {
        private readonly ICacheService _cacheService;

        public InstituteService(ICacheService cacheService)
        {
            _cacheService = cacheService;
        }

        public async Task<List<string>> GetAvailableModules()
        {
            var (exists, value) = await _cacheService.TryGet(Redis.ReservedKeys.AvailableModulesPointer);
            if (!exists)
            {
                return new List<string>();
            }

            var availableModules = await _cacheService.GetList(value);

            return availableModules.ToList();
        }

        public async Task<int> GetAvailableModuleCount() => (await GetAvailableModules()).Count;
    }
}
