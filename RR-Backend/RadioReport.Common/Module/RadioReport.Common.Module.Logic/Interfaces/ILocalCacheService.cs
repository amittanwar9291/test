using System.Collections.Generic;
using System.Reflection;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface ILocalCacheService
    {
        Dictionary<string, Dictionary<string, PropertyInfo>> PropertyInfoMaps { get; }
    }
}
