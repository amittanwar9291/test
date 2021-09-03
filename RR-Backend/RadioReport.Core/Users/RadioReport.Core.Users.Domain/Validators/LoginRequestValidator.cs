using FluentValidation;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Validators
{
    public class LoginRequestValidator : AbstractValidator<LoginRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(r => !r.UserName.IsNullOrEmpty());
            RuleFor(r => !r.Password.IsNullOrEmpty());
            RuleFor(r => r.Application != Application.None);
        }
    }
}
