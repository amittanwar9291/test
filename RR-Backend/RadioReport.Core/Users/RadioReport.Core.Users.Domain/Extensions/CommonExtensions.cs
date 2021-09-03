using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Enums;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Models.Entities;
using Enum = System.Enum;

namespace RadioReport.Core.Users.Domain.Extensions
{
    public static class CommonExtensions
    {
        public static IEnumerable<UserRole> SelectEnum(this ICollection<ApplicationUserRole> applicationUserRoles) => applicationUserRoles
            .Where(ur => Enum.TryParse<UserRole>(ur.Role.NormalizedName, true, out _))
            .Select(ur => Enum.Parse<UserRole>(ur.Role.NormalizedName, true));

        public static IEnumerable<RRIdentityError> Map(this IEnumerable<IdentityError> errors) =>
            errors.Select(e => new RRIdentityError
            {
                Code = e.Code,
                Description = e.Description
            });
    }
}
