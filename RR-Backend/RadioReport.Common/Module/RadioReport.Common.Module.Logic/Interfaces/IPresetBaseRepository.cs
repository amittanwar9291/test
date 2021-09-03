using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis();
    }
}
