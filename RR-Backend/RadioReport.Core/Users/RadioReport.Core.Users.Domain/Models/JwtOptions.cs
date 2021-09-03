namespace RadioReport.Core.Users.Domain.Models
{
    public class JwtOptions
    {
        public int AccessExpirationMinutes { get; set; }
        public int RefreshExpirationMinutes { get; set; }
    }
}
