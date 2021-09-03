using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IApplicationUserManager
    {
        Task<List<ApplicationUser>> GetAll();
        Task<ApplicationUser> GetByCondition(Expression<Func<ApplicationUser, bool>> where);
        Task<ApplicationUser> GetById(string id);
        Task<ApplicationUser> GetByName(string name);
    }
}
