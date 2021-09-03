using System.ComponentModel.DataAnnotations;

namespace RadioReport.Core.Users.Domain.Models
{
    public class ChangePasswordRequest
    {
        [Required]
        public string OldPassword { get; set; }

        [Required]
        public string NewPassword { get; set; }

        [Required]
        public string ConfirmPassword { get; set; }

        public bool RememberMe { get; set; }
    }
}
