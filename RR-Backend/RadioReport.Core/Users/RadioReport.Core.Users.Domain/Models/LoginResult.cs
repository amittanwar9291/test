namespace RadioReport.Core.Users.Domain.Models
{
    public class LoginResult
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string ClientToken { get; set; }
        public bool IsDeactivated { get; set; }
        public bool IsInvalidPassword { get; set; }
        public bool UserNotFound { get; set; }
    }
}
