using System.Globalization;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Common.Logic.Services
{
    public class MockEncryptionService : IEncryptionService
    {
        public Task<string> EncryptAsync(int decrypted) => Task.FromResult(decrypted.ToString(CultureInfo.InvariantCulture));

        public Task<string> EncryptAsync(long decrypted) => Task.FromResult(decrypted.ToString(CultureInfo.InvariantCulture));

        public Task<int> DecryptIntAsync(string encrypted) => Task.FromResult(int.TryParse(encrypted, out var result) ? result : default);

        public Task<long> DecryptLongAsync(string encrypted) => Task.FromResult(long.TryParse(encrypted, out var result) ? result : default);
    }
}
