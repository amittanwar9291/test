using System.Threading.Tasks;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IEncryptionService
    {
        Task<string> EncryptAsync(int decrypted);
        Task<string> EncryptAsync(long decrypted);
        Task<int> DecryptIntAsync(string encrypted);
        Task<long> DecryptLongAsync(string encrypted);
    }
}
