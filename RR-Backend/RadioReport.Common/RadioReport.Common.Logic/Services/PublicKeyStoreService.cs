using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Options;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Helpers;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Logic.Services
{
    public class PublicKeyStoreService : IKeyStoreService
    {
        private readonly KeyStoreOptions _keyStoreOptions;

        private readonly Dictionary<Guid, EncryptedKey> _encryptedKeys = new Dictionary<Guid, EncryptedKey>
        {
            {
                new Guid("313FD9F2-82CF-4106-A866-B21E4C1FF29F"), new EncryptedKey
                {
                    Date = new DateTime(2021, 02, 15),
                    Cipher =
                        "c56PYvzOWGzoLDWRZLqeAcQe/04AACsoQa0bmrbtbNm+CLeFKXQqc65oxJPJUNB+JP7y0lnnDmTcip4YWrzOyRpPxlmEk++5wjXkjJAbcaFhiOHUJbC/AkLYCDDHO2HMzl/o/ALJEAB03ykgunVaiFfACUIi4JqqfIKVwn47JBLalorgfmbec2v9R/CYXJlUIeLxVUhI0NHVxE5Mp+bq68EEG9jfsnR1bKcikt5qif1p/SKXjWQp0SwK4Y2dmNlKT3gz/ZIH3HfkapvahipOETgtF+q9JtyZ3zRcFAOVvCtInBgl2qucIniKQ2vScc+5rhvrhsSYU28dTw1XDxJymLzpulw70SIErDDAsFRUkY9m+eOr3QFEm0KLTSH1QyDEofoumgiMfuIBPYzmwzhRnHxk2GO4z7YnlyBla+2X5ajGsWjWBX8UyA6fumNjRCnPGr7QJh9r5I//n9wdM0p1DoQh+2g0w9X4mGg8XFn47rGtiZayKuZrWmNZjCOeJDgWOQnEt7thkCrVWceWJCRZ6qMYPNreb9REbDIVInkoQNhXlyaRBYfv7pVEQjwCd8j9yKvAz3y3BBUNWUoZa641CC7EWQdJdshymzxvdDB6khKRs/HrAy8/h0YFX3PWA2Yf1c2RrCeBF72l5bAeNLQHGcOviyJoqHbhd4qMoLn/orA/JpTdS0CDIA8yB4k4e9TGMHE99DDAx777KD6JM+CJfPOAZHdXFmFPU8FyayGkznLLyFTqUXeXgP/QTvHbTFdwI4McOnCZNc1Y0EPZvYl7V+9AnQ8AOj3dkaAYBRzhc+4oexhhAiNVwpRYm9YxFA/jXNzPKg7c/YwMPbCAXCWQWszmZA7rwylvLMjSW9RF6+/45pUnlRbluAI6lQs4jj1XBFOTt465F6RSuCyjpueHIt2YV4wUrhi2NQlWL05LvWixmIBn4Cod/Lk4fmZBs/LTjL4Ra9vL9zDxnSLn3/DlrQ=="
                }
            }
        };

        public PublicKeyStoreService(IOptions<KeyStoreOptions> keyStoreOptions)
        {
            if (keyStoreOptions == null) throw new ArgumentNullException(nameof(keyStoreOptions));

            _keyStoreOptions = keyStoreOptions.Value;
        }

        public (Guid KeyId, string Key) GetLastKey()
        {
            var (keyId, encryptedKey) = _encryptedKeys.OrderByDescending(e => e.Value.Date).First();
            var decryptedKey = AesOperation.DecryptString(_keyStoreOptions.KeySecret, encryptedKey.Cipher);

            return (keyId, decryptedKey);
        }

        public string GetByKeyId(Guid keyId)
        {
            return _encryptedKeys.TryGetValue(keyId, out var encryptedKey)
                ? AesOperation.DecryptString(_keyStoreOptions.KeySecret, encryptedKey.Cipher)
                : null;
        }

        public string GetByKeyIdOrLast(Guid keyId)
        {
            var decryptedKey = GetByKeyId(keyId);

            return decryptedKey.IsNullOrEmpty() ? GetLastKey().Key : decryptedKey;
        }
    }
}
