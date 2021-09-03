using System.ComponentModel.DataAnnotations;

namespace RadioReport.Core.Users.Domain.Models
{
    public class ResetPasswordRequest
    {
        [Required]
        public string UserId { get; set; }
    }
}
