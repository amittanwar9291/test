using System.Collections.Generic;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;

namespace RadioReport.Core.Users.Domain.Helpers
{
    public static class IdentityErrors
    {
        public static IEnumerable<RRIdentityError> UserRoleMissing =>
            new[]
            {
                new RRIdentityError
                {
                    Code = "UserRole",
                    Description = ErrorMessageResources.Account_UserRoleRequired
                }
            };

        public static IEnumerable<RRIdentityError> UserNotFound =>
            new[]
            {
                new RRIdentityError
                {
                    Code = "UserNotFound",
                    Description = ErrorMessageResources.Account_UserNotFound
                }
            };

        public static IEnumerable<RRIdentityError> IncorrectPassword => new[]
        {
            new RRIdentityError
            {
                Code = "IncorrectPassword",
                Description = ErrorMessageResources.Account_IncorrectPassword
            }
        };

        public static IEnumerable<RRIdentityError> DefaultPassword => new[]
        {
            new RRIdentityError
            {
                Code = "DefaultPassword",
                Description = ErrorMessageResources.Account_IsDefaultPassword
            }
        };

        public static IEnumerable<RRIdentityError> DifferentPassword => new[]
        {
            new RRIdentityError
            {
                Code = "DifferentPassword",
                Description = ErrorMessageResources.Account_ConfirmationPasswordDiffers
            }
        };

        public static IEnumerable<RRIdentityError> IncorrectUserNameOrPassword => new[]
        {
            new RRIdentityError
            {
                Code = "IncorrectUserNameOrPassword",
                Description = ErrorMessageResources.Account_InvalidUserNamePassword
            }
        };

        public static IEnumerable<RRIdentityError> InactiveUser => new[]
        {
            new RRIdentityError
            {
                Code = "InactiveUser",
                Description = ErrorMessageResources.Account_AccountInactivated
            }
        };
    }
}
