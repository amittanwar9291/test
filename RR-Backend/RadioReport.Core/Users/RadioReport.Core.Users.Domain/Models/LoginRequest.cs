using System;
using System.ComponentModel.DataAnnotations;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Core.Users.Domain.Models
{
    public class LoginRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public Application Application { get; set; }
        
        [Required]
        public Guid InstituteId { get; set; }

        public bool RememberMe { get; set; }
    }
}
