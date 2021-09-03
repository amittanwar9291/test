using System;
using RadioReport.Core.Users.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Repo.Repositories
{
    public class ApplicationUserRepository : IApplicationUserRepository
    {
        private readonly HttpAuthContext _httpAuthContext;

        protected CoreUserDbContext DataContext { get; }

        public ApplicationUserRepository(CoreUserDbContext dbContext, HttpAuthContext httpAuthContext)
        {
            _httpAuthContext = httpAuthContext;
            DataContext = dbContext;
        }

        public async Task<List<ApplicationUser>> GetAll() =>
            await DataContext.ApplicationUsers
                .Include(user => user.UserRoles)
                .ThenInclude(role => role.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .ToListAsync();

        public async Task<ApplicationUser> GetById(string id) =>
            await DataContext.ApplicationUsers
                .Include(u => u.UserRoles)
                .ThenInclude(role => role.Role)
                .Where(u => u.Id == id)
                .FirstOrDefaultAsync();

        public async Task<ApplicationUser> GetByNameAnonymous(string name) =>
            await DataContext.ApplicationUsers
                .Include(u => u.UserRoles)
                .ThenInclude(role => role.Role)
                .Where(u => u.NormalizedUserName == name.ToUpper())
                .FirstOrDefaultAsync();

        public Task<bool> AnyAsync(Expression<Func<ApplicationUser, bool>> predicate) => DataContext.ApplicationUsers.AnyAsync(predicate);

        public async Task<ApplicationUser> GetByCondition(Expression<Func<ApplicationUser, bool>> predicate) =>
            await DataContext.ApplicationUsers
                .Include(u => u.UserRoles)
                .ThenInclude(role => role.Role)
                .Where(predicate)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .FirstOrDefaultAsync();
    }
}
