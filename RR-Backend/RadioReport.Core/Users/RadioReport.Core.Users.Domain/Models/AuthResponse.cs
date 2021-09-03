namespace RadioReport.Core.Users.Domain.Models
{
    public class AuthResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string ClientToken { get; set; }
    }
}
