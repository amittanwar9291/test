using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Managers
{
    public class UserViewModelHttpManager : IUserViewModelHttpManager
    {
        private readonly IUserViewModelService _userViewModelService;

        public UserViewModelHttpManager(IUserViewModelService userViewModelService)
        {
            _userViewModelService = userViewModelService;
        }

        public Task<List<UserViewModel>> GetAll() => _userViewModelService.GetAll();

        public Task<UserViewModel> GetById(string id) => _userViewModelService.GetById(id);

        public Task<List<UserViewModel>> GetEditingUsers() =>
            _userViewModelService.GetByRoles(new[] { Role.Superadministrator, Role.Administrator, Role.Editor, Role.Supervisor });

        public async Task Add(UserViewModel user) => await _userViewModelService.CreateAsync(user);

        public async Task UpdateAsync(UserViewModel user) => await _userViewModelService.UpdateAsync(user);

        public async Task SetUserActivity(string userId, bool isActivate) => await _userViewModelService.SetUserActivity(userId, isActivate);

        public async Task<AuthResponse> ChangePasswordAsync(ChangePasswordRequest request, string userAgent) =>
            await _userViewModelService.ChangePasswordAsync(request, userAgent);

        public async Task ResetPasswordAsync(ResetPasswordRequest request) => await _userViewModelService.ResetPasswordAsync(request);

        public async Task SetInstituteId(Guid instituteId) => await _userViewModelService.SetInstituteId(instituteId);
    }
}
