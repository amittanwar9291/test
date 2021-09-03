using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Managers
{
    public class ApplicationUserManager : IApplicationUserManager
    {
        private readonly IApplicationUserRepository _applicationUserRepository;

        public ApplicationUserManager(IApplicationUserRepository applicationUserRepository)
        {
            _applicationUserRepository = applicationUserRepository;
        }

        public async Task<List<ApplicationUser>> GetAll() => await _applicationUserRepository.GetAll();

        public async Task<ApplicationUser> GetByCondition(Expression<Func<ApplicationUser, bool>> predicate) =>
            await _applicationUserRepository.GetByCondition(predicate);

        public async Task<ApplicationUser> GetById(string id) => await _applicationUserRepository.GetById(id);

        public async Task<ApplicationUser> GetByName(string name) => await _applicationUserRepository.GetByNameAnonymous(name);
    }
}
