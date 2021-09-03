using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Managers
{
    public class LicenseFractionManager : Manager<LicenseFraction, IRepository<LicenseFraction>>, ILicenseFractionManager
    {
        public LicenseFractionManager(IRepository<LicenseFraction> repository) : base(repository)
        {
        }
    }
}
