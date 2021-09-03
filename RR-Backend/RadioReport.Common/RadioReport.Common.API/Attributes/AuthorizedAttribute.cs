namespace RadioReport.Common.API.Attributes
{
    public class AuthorizedAttribute : Microsoft.AspNetCore.Authorization.AuthorizeAttribute
    {
        public AuthorizedAttribute(params string[] roles)
        {
            Roles = string.Join(",", roles);
        }
    }
}
