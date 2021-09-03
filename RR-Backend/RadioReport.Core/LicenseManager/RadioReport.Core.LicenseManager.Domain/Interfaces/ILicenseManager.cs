using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Interfaces
{
    public interface ILicenseManager : IManager<License>
    {
        Task<License> GetActiveByInstituteId();
    }
}
