using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;

namespace RadioReport.Core.Users.Domain.Managers
{
    public class AuthTokenManager : IAuthTokenManager
    {
        private readonly IAuthTokenRepository _authTokenRepository;

        public AuthTokenManager(IAuthTokenRepository authTokenRepository)
        {
            _authTokenRepository = authTokenRepository;
        }

        public async Task UpdateAsync(AuthToken authToken)
        {
            _authTokenRepository.Update(authToken);
            await _authTokenRepository.SaveChangesAsync();
        }

        public async Task AddAsync(AuthToken authToken)
        {
            _authTokenRepository.Add(authToken);
            await _authTokenRepository.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid userId, Application application = Application.None)
        {
            _authTokenRepository.Delete(userId, application);
            await _authTokenRepository.SaveChangesAsync();
        }

        public AuthToken GetByApplication(Guid userId, Application application) => _authTokenRepository.GetByApplication(userId, application);

        public AuthToken GetByAccessTokenIdAndApplication(Guid userId, Guid accessTokenId, Application application) =>
            _authTokenRepository.GetByAccessTokenIdAndApplication(userId, accessTokenId, application);

        public AuthToken GetByRefreshTokenIdAndApplication(Guid userId, Guid refreshTokenId, Application application) =>
            _authTokenRepository.GetByRefreshTokenIdAndApplication(userId, refreshTokenId, application);
    }
}
