using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IAuthTokenService
    {
        Task<(string AccessToken, string RefreshToken)> CreateAuthToken(ApplicationUser user, Application application);
        Task<(string AccessToken, string RefreshToken)> RefreshAuthToken(Guid userId, Application application);
        Task RemoveAuthToken(Guid userId, Application application = Application.None);
        AuthToken GetByApplication(Guid userId, Application application);
        AuthToken GetByAccessTokenIdAndApplication(Guid userId, Guid accessTokenId, Application application);
        AuthToken GetByRefreshTokenIdAndApplication(Guid userId, Guid refreshTokenId, Application application);
    }
}
