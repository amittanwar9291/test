using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Exceptions.Identity;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Extensions;
using RadioReport.Core.Users.Domain.Helpers;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;
using RadioReport.Core.Users.Domain.Models.Entities;
using PasswordOptions = RadioReport.Core.Users.Domain.Models.PasswordOptions;

namespace RadioReport.Core.Users.Domain.Services
{
    public class UserViewModelService : IUserViewModelService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IAuthTokenService _authTokenService;
        private readonly IClientTokenService _clientTokenService;
        private readonly IApplicationUserManager _applicationUserManager;
        private readonly PasswordOptions _passwordOptions;

        public UserViewModelService(
            UserManager<ApplicationUser> userManager,
            IMapper mapper,
            IOptions<PasswordOptions> passwordOptions,
            HttpAuthContext httpAuthContext,
            IKafkaProducer kafkaProducer,
            IAuthTokenService authTokenService,
            IClientTokenService clientTokenService,
            IApplicationUserManager applicationUserManager
        )
        {
            if (passwordOptions == null) throw new ArgumentNullException(nameof(passwordOptions));

            _userManager = userManager;
            _mapper = mapper;
            _httpAuthContext = httpAuthContext;
            _kafkaProducer = kafkaProducer;
            _authTokenService = authTokenService;
            _clientTokenService = clientTokenService;
            _applicationUserManager = applicationUserManager;
            _passwordOptions = passwordOptions.Value;
        }

        public async Task<List<UserViewModel>> GetAll()
        {
            var applicationUsers = await _userManager.Users
                .Include(u => u.UserRoles)
                .ThenInclude(r => r.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .ToListAsync();

            return _mapper.Map<List<UserViewModel>>(applicationUsers);
        }

        public async Task<UserViewModel> GetById(string id)
        {
            var applicationUser = await _userManager.Users
                .Include(u => u.UserRoles)
                .ThenInclude(r => r.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .FirstOrDefaultAsync(u => u.Id == id);

            return _mapper.Map<UserViewModel>(applicationUser);
        }

        public async Task<List<UserViewModel>> GetByIds(IEnumerable<string> ids)
        {
            var applicationUsers = await _userManager.Users
                .Include(u => u.UserRoles)
                .ThenInclude(r => r.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .Where(u => ids.Contains(u.Id))
                .ToListAsync();

            return _mapper.Map<List<UserViewModel>>(applicationUsers);
        }

        public async Task<List<UserViewModel>> GetByRoles(IEnumerable<string> roles)
        {
            var users = await _userManager.Users
                .Include(u => u.UserRoles)
                .ThenInclude(r => r.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .Where(u => u.UserRoles.Any(r => roles.Contains(r.Role.NormalizedName)))
                .ToListAsync();

            return _mapper.Map<List<UserViewModel>>(users);
        }

        public async Task<UserViewModel> CreateAsync(UserViewModel viewModel)
        {
            if (viewModel == null) throw new ArgumentNullException(nameof(viewModel));

            if (viewModel.Role == UserRole.None)
            {
                throw new CreateUserFailedException("Creating user failed", IdentityErrors.UserRoleMissing);
            }

            var applicationUser = _mapper.Map<ApplicationUser>(viewModel);
            applicationUser.Id = null;
            applicationUser.InstituteId = _httpAuthContext.InstituteId;
            applicationUser.IsDefaultPassword = true;

            var result = await _userManager.CreateAsync(applicationUser, _passwordOptions.DefaultPassword);
            if (!result.Succeeded)
            {
                throw new CreateUserFailedException("Creating user failed", result.Errors.Map());
            }

            result = await _userManager.AddToRoleAsync(applicationUser, viewModel.Role.ToString());
            if (!result.Succeeded)
            {
                throw new CreateUserFailedException("Creating user failed", result.Errors.Map());
            }

            return _mapper.Map<UserViewModel>(applicationUser);
        }

        public async Task UpdateAsync(UserViewModel viewModel)
        {
            if (viewModel == null) throw new ArgumentNullException(nameof(viewModel));

            var applicationUser = await _userManager.FindByIdAsync(viewModel.Id);
            if (applicationUser == null)
            {
                throw new UpdateUserFailedException("Updating user failed", IdentityErrors.UserNotFound);
            }
            var isSelfUpdating = string.Equals(applicationUser.Id, _httpAuthContext.UserId.ToString(), StringComparison.OrdinalIgnoreCase);
            if (applicationUser.InstituteId != _httpAuthContext.InstituteId || !isSelfUpdating && !IsAdmin())
            {
                throw new UnauthorizedAccessException();
            }

            MapUpdatableProperties(viewModel, applicationUser);
            var result = await _userManager.UpdateAsync(applicationUser);
            if (!result.Succeeded)
            {
                throw new UpdateUserFailedException("Updating user failed", result.Errors.Map());
            }

            if (!IsAdmin()) return;

            var roles = await _userManager.GetRolesAsync(applicationUser);
            var hasUserRoleChanged = roles.Any() && !roles
                .Where(r => Enum.TryParse<UserRole>(r, out _))
                .Select(Enum.Parse<UserRole>)
                .Contains(viewModel.Role);
            if (hasUserRoleChanged)
            {
                result = await _userManager.RemoveFromRolesAsync(applicationUser, roles);
                if (!result.Succeeded)
                {
                    throw new UpdateUserFailedException("Updating user failed", result.Errors.Map());
                }

                result = await _userManager.AddToRoleAsync(applicationUser, viewModel.Role.ToString());
                if (!result.Succeeded)
                {
                    throw new UpdateUserFailedException("Updating user failed", result.Errors.Map());
                }
            }
        }

        public async Task SetUserActivity(string userId, bool isActivate)
        {
            var applicationUser = await _userManager.FindByIdAsync(userId);
            if (applicationUser == null)
            {
                throw new SetUserActivityFailedException("Change user activity failed", IdentityErrors.UserNotFound);
            }

            if (applicationUser.InstituteId != _httpAuthContext.InstituteId)
            {
                throw new UnauthorizedAccessException();
            }

            if (applicationUser.IsActive == isActivate)
            {
                return;
            }

            applicationUser.IsActive = isActivate;
            var result = await _userManager.UpdateAsync(applicationUser);
            if (!result.Succeeded)
            {
                throw new SetUserActivityFailedException("Change user activity failed", result.Errors.Map());
            }

            await _authTokenService.RemoveAuthToken(Guid.Parse(userId));
        }

        public async Task<AuthResponse> ChangePasswordAsync(ChangePasswordRequest request, string userAgent)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var applicationUser = await _applicationUserManager.GetById(_httpAuthContext.UserId.ToString());
            if (applicationUser == null || applicationUser.InstituteId != _httpAuthContext.InstituteId)
            {
                throw new UnauthorizedAccessException();
            }

            if (!await _userManager.CheckPasswordAsync(applicationUser, request.OldPassword))
            {
                throw new ChangePasswordFailedException("Changing password failed", IdentityErrors.IncorrectPassword);
            }

            if (request.NewPassword == _passwordOptions.DefaultPassword)
            {
                throw new ChangePasswordFailedException("Changing password failed", IdentityErrors.DefaultPassword);
            }

            if (request.NewPassword != request.ConfirmPassword)
            {
                throw new ChangePasswordFailedException("Changing password failed", IdentityErrors.DifferentPassword);
            }

            var result = await _userManager.ChangePasswordAsync(applicationUser, request.OldPassword, request.NewPassword);
            if (!result.Succeeded)
            {
                throw new ChangePasswordFailedException("Changing password failed", result.Errors.Map());
            }

            if (request.OldPassword == _passwordOptions.DefaultPassword)
            {
                applicationUser.IsDefaultPassword = false;
                result = await _userManager.UpdateAsync(applicationUser);
                if (!result.Succeeded)
                {
                    throw new ChangePasswordFailedException("Changing password failed", result.Errors.Map());
                }
            }

            var authResponse = new AuthResponse();
            var (accessToken, refreshToken) = await _authTokenService.CreateAuthToken(applicationUser, Application.RR);
            authResponse.AccessToken = accessToken;
            authResponse.RefreshToken = refreshToken;

            if (request.RememberMe && !userAgent.IsNullOrEmpty())
            {
                authResponse.ClientToken = await _clientTokenService.CreateClientToken(applicationUser, userAgent, Application.RR);
            }

            return authResponse;
        }

        public async Task ResetPasswordAsync(ResetPasswordRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var applicationUser = await _userManager.FindByIdAsync(request.UserId);
            if (applicationUser == null)
            {
                throw new ResetPasswordFailedException("Resetting password failed", IdentityErrors.UserNotFound);
            }

            if (applicationUser.InstituteId != _httpAuthContext.InstituteId)
            {
                throw new UnauthorizedAccessException();
            }

            var resetToken = await _userManager.GeneratePasswordResetTokenAsync(applicationUser);
            var result = await _userManager.ResetPasswordAsync(applicationUser, resetToken, _passwordOptions.DefaultPassword);
            if (!result.Succeeded)
            {
                throw new ResetPasswordFailedException("Resetting password failed", result.Errors.Map());
            }

            applicationUser.IsDefaultPassword = true;
            result = await _userManager.UpdateAsync(applicationUser);
            if (!result.Succeeded)
            {
                throw new ResetPasswordFailedException("Resetting password failed", result.Errors.Map());
            }

            await _authTokenService.RemoveAuthToken(Guid.Parse(request.UserId));
        }

        public async Task<UserViewModel> GetByUserName(string username)
        {
            var applicationUser = await _userManager.Users
                .Include(u => u.UserRoles)
                .ThenInclude(r => r.Role)
                .Where(u => u.InstituteId == _httpAuthContext.InstituteId)
                .FirstOrDefaultAsync(u => u.UserName == username);

            return _mapper.Map<UserViewModel>(applicationUser);
        }

        public async Task SetInstituteId(Guid instituteId)
        {
            if (_httpAuthContext.UserRole != UserRole.Superadministrator)
            {
                throw new UnauthorizedAccessException();
            }

            var request = new GetInstituteSyncRequest
            {
                InstituteId = instituteId
            };
            var response = await _kafkaProducer.SendSynchronousRequest<GetInstituteSyncResponse>(request, _httpAuthContext);
            if (response == null || response.IsSuccess == false || response.Institute == null)
            {
                throw new InstituteNotFoundException(instituteId);
            }

            var applicationUser = await _userManager.FindByIdAsync(_httpAuthContext.UserId.ToString());
            if (applicationUser == null)
            {
                throw new UserNotFoundException();
            }

            applicationUser.InstituteId = response.Institute.Id;
            var result = await _userManager.UpdateAsync(applicationUser);
            if (!result.Succeeded)
            {
                throw new UpdateUserFailedException("setting institute id failed", result.Errors.Map());
            }
        }

        private void MapUpdatableProperties(UserViewModel viewModel, ApplicationUser applicationUser)
        {
            applicationUser.LanguageDoctorFindings = viewModel.LanguageDoctorFindings;
            applicationUser.LanguageOfProgram = viewModel.LanguageOfProgram;
            applicationUser.LanguagePatientFindings = viewModel.LanguagePatientFindings;

            if (!IsAdmin())
            {
                return;
            }

            applicationUser.FirstName = viewModel.FirstName;
            applicationUser.Surname = viewModel.Surname;
            applicationUser.Salutation = viewModel.Salutation;
            applicationUser.Initial = viewModel.Initial;
            applicationUser.Title = viewModel.Title;
            applicationUser.Position = viewModel.Position;
            applicationUser.UserName = viewModel.UserName;
            applicationUser.ApprovalLevel = viewModel.ApprovalLevel;
        }

        private bool IsAdmin() => _httpAuthContext.UserRole == UserRole.Administrator || _httpAuthContext.UserRole == UserRole.Superadministrator;
    }
}
