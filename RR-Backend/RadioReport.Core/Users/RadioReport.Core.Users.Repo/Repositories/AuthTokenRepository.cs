using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;

namespace RadioReport.Core.Users.Repo.Repositories
{
    public class AuthTokenRepository : IAuthTokenRepository
    {
        private readonly CoreUserDbContext _dbContext;

        public AuthTokenRepository(CoreUserDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Delete(Guid userId, Application application)
        {
            var toDelete = application == Application.None ? _dbContext.AuthTokens.Where(t => t.Id == userId) : _dbContext.AuthTokens.Where(t => t.Id == userId && t.Application == application);
            _dbContext.AuthTokens.RemoveRange(toDelete);
        }

        public AuthToken GetByApplication(Guid userId, Application application) =>
            _dbContext.AuthTokens.SingleOrDefault(t => t.Id == userId && t.Application == application);

        public AuthToken GetByAccessTokenIdAndApplication(Guid userId, Guid accessTokenId, Application application) => _dbContext.AuthTokens
            .SingleOrDefault(t => t.Id == userId && t.AccessTokenId == accessTokenId && t.Application == application);

        public AuthToken GetByRefreshTokenIdAndApplication(Guid userId, Guid refreshTokenId, Application application) => _dbContext.AuthTokens
            .SingleOrDefault(t => t.Id == userId && t.RefreshTokenId == refreshTokenId && t.Application == application);

        public AuthToken Update(AuthToken authToken) => _dbContext.Update(authToken).Entity;

        public AuthToken Add(AuthToken authToken) => _dbContext.Add(authToken).Entity;

        public async Task SaveChangesAsync() => await _dbContext.SaveChangesAsync();
    }
}
