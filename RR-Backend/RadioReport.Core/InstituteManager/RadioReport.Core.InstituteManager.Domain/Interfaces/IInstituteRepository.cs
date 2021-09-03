using System;
using System.Threading.Tasks;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface IInstituteRepository : IRepository<Institute>
    {
        Institute GetByInstituteToken(string instituteTokenString);
        Institute SearchInstituteToken(string instituteTokenString);
        Task<Institute> GetFullInstituteNoTracking(Guid id);
        Task<Institute> GetInstitute(Guid instituteId, InstituteDetailLevel level);
        Task<PagedList<Institute>> GetInstitutes(InstituteListOptions listOptions);
        
    }
}
