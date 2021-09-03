using System;
using System.Collections.Generic;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.API.Controllers;
using RadioReport.Common.Module.API.Helpers;

namespace RadioReport.Common.Module.API.Services
{
    public class GenericTypeControllerFeatureProvider : IApplicationFeatureProvider<ControllerFeature>
    {
        public void PopulateFeature(IEnumerable<ApplicationPart> parts, ControllerFeature feature)
        {
            if (feature == null) throw new ArgumentNullException(nameof(feature));

            foreach (var type in AttributeHelper.GetGeneratedControllerTypes<GeneratedControllerPageModelAttribute>())
            {
                feature.Controllers.Add(typeof(PageController<>).MakeGenericType(type).GetTypeInfo());
            }

            foreach (var type in AttributeHelper.GetGeneratedControllerTypes<GeneratedControllerPageWithImageModelAttribute>())
            {
                feature.Controllers.Add(typeof(PageWithImageController<>).MakeGenericType(type).GetTypeInfo());
            }
        }
    }
}
