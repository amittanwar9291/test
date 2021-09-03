using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Common.Repository;
using RadioReport.Core.Users.Domain.Interfaces;

namespace RadioReport.Core.Users.Repo.Repositories
{
    public class ClientTokenRepository : RepositoryBase<ClientToken>, IClientTokenRepository
    {
        public ClientTokenRepository(CoreUserDbContext dbContext) : base(dbContext)
        {
        }
    }
}