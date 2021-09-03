using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IUserViewModelService
    {
        Task<List<UserViewModel>> GetAll();
        Task<UserViewModel> GetById(string id);
        Task<List<UserViewModel>> GetByIds(IEnumerable<string> ids);
        Task<List<UserViewModel>> GetByRoles(IEnumerable<string> roles);
        Task<UserViewModel> CreateAsync(UserViewModel viewModel);
        Task UpdateAsync(UserViewModel viewModel);
        Task SetUserActivity(string userId, bool isActivate);
        Task<AuthResponse> ChangePasswordAsync(ChangePasswordRequest request, string userAgent);
        Task ResetPasswordAsync(ResetPasswordRequest request);
        Task<UserViewModel> GetByUserName(string username);
        Task SetInstituteId(Guid instituteId);
    }
}
