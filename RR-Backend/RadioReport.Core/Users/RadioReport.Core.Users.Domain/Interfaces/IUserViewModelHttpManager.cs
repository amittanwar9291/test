using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IUserViewModelHttpManager
    {
        Task<List<UserViewModel>> GetAll();
        Task<UserViewModel> GetById(string id);
        Task<List<UserViewModel>> GetEditingUsers();
        Task Add(UserViewModel user);
        Task UpdateAsync(UserViewModel user);
        Task SetUserActivity(string userId, bool isActivate);
        Task<AuthResponse> ChangePasswordAsync(ChangePasswordRequest request, string userAgent);
        Task ResetPasswordAsync(ResetPasswordRequest request);
        Task SetInstituteId(Guid instituteId);
    }
}
