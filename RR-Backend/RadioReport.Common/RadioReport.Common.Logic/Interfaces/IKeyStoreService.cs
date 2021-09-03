using System;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IKeyStoreService
    {
        (Guid KeyId, string Key) GetLastKey();
        string GetByKeyId(Guid keyId);
        string GetByKeyIdOrLast(Guid keyId);
    }
}
