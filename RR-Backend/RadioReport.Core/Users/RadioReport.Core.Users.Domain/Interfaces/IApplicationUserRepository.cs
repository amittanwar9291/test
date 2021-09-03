using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IApplicationUserRepository
    {
        Task<List<ApplicationUser>> GetAll();
        Task<ApplicationUser> GetByCondition(Expression<Func<ApplicationUser, bool>> predicate);
        Task<ApplicationUser> GetById(string id);
        Task<ApplicationUser> GetByNameAnonymous(string name);
        Task<bool> AnyAsync(Expression<Func<ApplicationUser, bool>> predicate);
    }
}
