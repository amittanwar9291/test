using System;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IVaultEncodingService
    {
        string HashStringSha256(string str);
        string HashDateSha256(DateTime dateTime);
    }
}
