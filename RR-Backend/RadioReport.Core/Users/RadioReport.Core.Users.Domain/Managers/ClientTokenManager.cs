using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;

namespace RadioReport.Core.Users.Domain.Managers
{
    public class ClientTokenManager : Manager<ClientToken, IClientTokenRepository>, IClientTokenManager
    {
        public ClientTokenManager(IClientTokenRepository clientTokenRepository) : base(clientTokenRepository)
        {
        }
    }
}
