using System;
using System.Threading.Tasks;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface IInstituteManager : IManager<Institute>
    {
        Institute SearchInstituteToken(string instituteToken);
        Task UpdateDuplicateMultiExternalIdentifierAllowed(Guid id, bool duplicateMutliExternalIdentifierAllowed);
        Task<Institute> GetFullInstituteNoTracking(Guid id);
        Task<Institute> GetInstitute(Guid id, InstituteDetailLevel level);
        Task<PagedList<Institute>> GetInstitutes(InstituteListOptions listOptions);
    }
}
