using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IAuthTokenRepository
    {
        void Delete(Guid userId, Application application = Application.None);
        AuthToken GetByApplication(Guid userId, Application application);
        AuthToken GetByAccessTokenIdAndApplication(Guid userId, Guid accessTokenId, Application application);
        AuthToken GetByRefreshTokenIdAndApplication(Guid userId, Guid refreshTokenId, Application application);
        AuthToken Update(AuthToken authToken);
        AuthToken Add(AuthToken authToken);
        Task SaveChangesAsync();
    }
}
