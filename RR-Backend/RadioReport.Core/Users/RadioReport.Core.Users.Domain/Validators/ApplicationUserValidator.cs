using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Resources;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Validators
{
    public class ApplicationUserValidator : UserValidator<ApplicationUser>
    {
        private readonly IApplicationUserRepository _applicationUserRepository;

        public ApplicationUserValidator(IApplicationUserRepository applicationUserRepository)
        {
            _applicationUserRepository = applicationUserRepository;
        }

        public override async Task<IdentityResult> ValidateAsync(UserManager<ApplicationUser> manager, ApplicationUser user)
        {
            var errors = (await ValidateUserAsync(manager, user)).Errors.ToList();
            await ValidateUserInitial(user, errors);
            ValidateRequiredFields(user, errors);

            return errors.Count > 0 ? IdentityResult.Failed(errors.ToArray()) : IdentityResult.Success;
        }

        private async Task<IdentityResult> ValidateUserAsync(UserManager<ApplicationUser> manager, ApplicationUser user)
        {
            if (manager == null)
            {
                throw new ArgumentNullException(nameof(manager));
            }
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            var errors = new List<IdentityError>();
            
            var userName = user.UserName;
            if (string.IsNullOrWhiteSpace(userName))
            {
                errors.Add(Describer.InvalidUserName(userName));
            }
            else if (!string.IsNullOrEmpty(manager.Options.User.AllowedUserNameCharacters) &&
                     userName.Any(c => !manager.Options.User.AllowedUserNameCharacters.Contains(c)))
            {
                errors.Add(Describer.InvalidUserName(userName));
            }
            else
            {
                var result = await _applicationUserRepository.AnyAsync(match =>
                    match.UserName == user.UserName &&
                    match.InstituteId == user.InstituteId &&
                    match.Id != user.Id);
                if (result)
                {
                    errors.Add(Describer.DuplicateUserName(userName));
                }
            }
            return errors.Count > 0 ? IdentityResult.Failed(errors.ToArray()) : IdentityResult.Success;
        }

        private static void ValidateRequiredFields(ApplicationUser user, ICollection<IdentityError> errors)
        {
            if (!IsUserSalutationValid(user))
            {
                errors.Add(new IdentityError { Code = "Salutation", Description = ErrorMessageResources.Account_SalutationRequired });
            }
            if (!IsRequiredFieldValid(user.FirstName))
            {
                errors.Add(new IdentityError { Code = "FirstName", Description = ErrorMessageResources.Account_FirstNameRequired });
            }
            if (!IsRequiredFieldValid(user.Surname))
            {
                errors.Add(new IdentityError { Code = "Surname", Description = ErrorMessageResources.Account_SurnameRequired });
            }
            if (!IsRequiredFieldValid(user.Initial))
            {
                errors.Add(new IdentityError { Code = "Initial", Description = ErrorMessageResources.Account_InitialRequired });
            }
            if (!IsRequiredFieldValid(user.UserName))
            {
                errors.Add(new IdentityError { Code = "UserName", Description = ErrorMessageResources.Account_UserNameRequired });
            }
        }

        private async Task ValidateUserInitial(ApplicationUser user, ICollection<IdentityError> errors)
        {
            var result = await _applicationUserRepository.AnyAsync(match =>
                match.Initial == user.Initial &&
                match.InstituteId == user.InstituteId &&
                match.Id != user.Id);
            if (result)
            {
                errors.Add(new IdentityError
                {
                    Code = "DuplicateUserInitial",
                    Description = string.Format(CultureInfo.InvariantCulture, ErrorMessageResources.Account_InitialAlreadyTaken, user.Initial)
                });
            }
        }

        private static bool IsUserSalutationValid(ApplicationUser user) => user.Salutation != Salutation.None;

        private static bool IsRequiredFieldValid(string stringValue) => stringValue.Trim().Length != 0;
    }
}
