using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace RadioReport.Core.Users.Domain.Models.Entities
{
    public class ApplicationRole : IdentityRole
    {
        public ApplicationRole()
        {
        }

        public ApplicationRole(string userRole) : base(userRole)
        {
        }

        public IEnumerable<ApplicationUserRole> UserRoles { get; set; }
    }
}
