using System.Threading.Tasks;

namespace RadioReport.Core.SignalR.Domain.Interfaces
{
    public interface IConnectionManager
    {
        Task         CacheConnection(string        hub, string identifier, string connectionId);
        Task<string> GetConnectionId(string        hub, string identifier);
        Task<string> GetIdentifier(string          hub, string connectionId);
        Task         RemoveCachedConnection(string hub, string connectionId);
        Task<bool>   ConnectionExist(string        hub, string identifier);
    }
}
