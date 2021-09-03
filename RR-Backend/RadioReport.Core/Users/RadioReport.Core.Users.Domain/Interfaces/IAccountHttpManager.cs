using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IAccountHttpManager
    {
        Task<AuthResponse> Login(LoginRequest request, string userAgent);
        Task<AuthResponse> LoginWithRefreshToken(bool rememeberMe, string userAgent);
        Task<AuthResponse> LoginWithClientToken(string userAgent);
        Task<List<ClientToken>> GetClientTokens();
        Task RemoveClientToken(Guid clientTokenId);
        Task Logout();
    }
}
