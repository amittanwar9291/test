using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Interfaces
{
    public interface ICacheService
    {
        Task<string> Get(string key);
        Task<string> Pop(string key);
        Task<(bool Exists, string Value)> TryGet(string key);
        Task<bool> Exists(string key);
        List<string> ListKeys(string pattern);
        Task Set(string key, string value, TimeSpan expiry);
        Task<bool> Remove(string key);
        Task<IEnumerable<string>> GetList(string key);
        Task AddToList(string key, string value);
    }
}
