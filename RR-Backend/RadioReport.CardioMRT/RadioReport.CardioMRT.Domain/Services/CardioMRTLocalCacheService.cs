using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.CardioMRT.Domain.Services
{
    public class CardioMRTLocalCacheService : LocalCacheService
    {
        protected override void SpecificLocalCacheStartup()
        {
            var pageList = new List<Type>
            {
                typeof(AreaOfExaminationPage),
                typeof(AnamnesisPage),
                typeof(TechnologyPage),
                typeof(FlapsPage),
                typeof(FindingsVentriclesPage),
                typeof(LeftVentriclePage),
                typeof(RightVentriclePage),
                typeof(SpatialRequirementPage),
                typeof(PericardiumVesselsPage),
                typeof(SummaryPage)
            };

            var propertyInfos = pageList.SelectMany(pageElement => pageElement.GetProperties().Where(propertyInfo =>
                    propertyInfo.GetCustomAttribute<RadioReportIdAttribute>() != null)).ToList()
                .ToDictionary(propertyInfo => propertyInfo.GetCustomAttribute<RadioReportIdAttribute>()!.Id);
            
            PropertyInfoMaps.Add(LocalCacheConsts.Cvi42PropertyInfoMapKey,
                propertyInfos);
        }
    }
}
