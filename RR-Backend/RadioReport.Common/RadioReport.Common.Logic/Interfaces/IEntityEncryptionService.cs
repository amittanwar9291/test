using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IEntityEncryptionService<TDecrypted, TEncrypted> where TEncrypted : ModelBase
    {
        Task<TEncrypted> EncryptAsync(TDecrypted decrypted);
        Task<TDecrypted> DecryptAsync(TEncrypted encrypted);
        Task<List<TEncrypted>> EncryptRangeAsync(IEnumerable<TDecrypted> decrypted);
        Task<List<TDecrypted>> DecryptRangeAsync(IEnumerable<TEncrypted> encrypted);
    }
}
