using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Validators
{
    public class ApplicationUserPasswordValidator : IPasswordValidator<ApplicationUser>
    {
        public Task<IdentityResult> ValidateAsync(UserManager<ApplicationUser> manager, ApplicationUser user, string password)
        {
            const string pattern = @"^(?=.*[-!§?_@]).*$"; // at least 1 special character

            if (!Regex.IsMatch(password, pattern))
            {
                return Task.FromResult(IdentityResult.Failed(new IdentityError
                {
                    Code = "PasswordRequiresSpecialCharacter",
                    Description = "Passwords must have at least one special character (-, !, §, ?, _, @)"
                }));
            }

            return Task.FromResult(IdentityResult.Success);
        }
    }
}
