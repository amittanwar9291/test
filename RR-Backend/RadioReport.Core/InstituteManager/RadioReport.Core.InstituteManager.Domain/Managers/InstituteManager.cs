using System;
using System.Threading.Tasks;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Domain.Managers
{
    public class InstituteManagerImpl : Manager<Institute, IInstituteRepository>, IInstituteManager
    {
        public InstituteManagerImpl(IInstituteRepository repository) : base(repository)
        {
        }

        public Institute SearchInstituteToken(string instituteTokenString) => Repository.SearchInstituteToken(instituteTokenString);

        public async Task UpdateDuplicateMultiExternalIdentifierAllowed(Guid id, bool duplicateMutliExternalIdentifierAllowed)
        {
            var institute = new Institute
            {
                Id = id,
                DuplicateExternalIdentifierAllowed = duplicateMutliExternalIdentifierAllowed
            };
            await Repository.UpdateByPropertiesAsync(institute, new[] { nameof(Institute.DuplicateExternalIdentifierAllowed) });
        }

        public async Task<Institute> GetFullInstituteNoTracking(Guid id) => await Repository.GetFullInstituteNoTracking(id);

        public async Task<Institute> GetInstitute(Guid id, InstituteDetailLevel level) => await Repository.GetInstitute(id, level);
        public async Task<PagedList<Institute>> GetInstitutes(InstituteListOptions listOptions) => await Repository.GetInstitutes(listOptions);
    }
}
