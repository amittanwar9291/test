using System.Threading.Tasks;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IAccountService
    {
        Task<LoginResult> Login(LoginRequest request, string userAgent);
        Task<LoginResult> LoginWithRefreshToken(bool rememberMe, string userAgent);
        Task<LoginResult> LoginWithClientToken(string userAgent);
        Task Logout();
    }
}
