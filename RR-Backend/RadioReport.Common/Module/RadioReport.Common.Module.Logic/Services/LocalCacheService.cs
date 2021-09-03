using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.Logic.Services
{
    public class LocalCacheService : ILocalCacheService
    {
        private bool _isInitialized;
        private readonly Dictionary<string, Dictionary<string, PropertyInfo>> _propertyInfoMaps = new Dictionary<string, Dictionary<string, PropertyInfo>>();

        public Dictionary<string, Dictionary<string, PropertyInfo>> PropertyInfoMaps
        {
            get
            {
                if (!_isInitialized)
                {
                    Initialize();
                }

                return _propertyInfoMaps;
            }
        }

        public void Initialize()
        {
            SpecificLocalCacheStartup();
            PopulateImportPropertyInfoMap();
            _isInitialized = true;
        }

        protected virtual void SpecificLocalCacheStartup()
        {
        }

        protected void PopulateImportPropertyInfoMap()
        {
            var patientPropertyInfos = typeof(Patient).GetProperties()
                .Where(p => p.GetCustomAttribute<RadioReportIdAttribute>() != null)
                .ToList();
            _propertyInfoMaps.Add(LocalCacheConsts.PatientPropertyInfoMapKey,
                patientPropertyInfos.ToDictionary(p => p.GetCustomAttribute<RadioReportIdAttribute>()!.Id));
        }
    }
}