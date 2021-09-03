using System;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.API.Services
{
    public class GenericControllerRouteConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            if (controller == null) throw new ArgumentNullException(nameof(controller));

            if (!controller.ControllerType.IsGenericType) return;

            var genericType = controller.ControllerType.GenericTypeArguments[0];

            var pageModelAttribute = genericType.GetCustomAttribute<GeneratedControllerPageModelAttribute>();
            if (pageModelAttribute?.Route != null)
            {
                controller.Selectors.First(s => s.AttributeRouteModel.Template.Match(@"api"))
                    .AttributeRouteModel.Template += $"/{pageModelAttribute.Route}";
            }

            var pageWithImageModelAttribute = genericType.GetCustomAttribute<GeneratedControllerPageWithImageModelAttribute>();
            if (pageWithImageModelAttribute?.Route != null)
            {
                controller.Selectors.First(s => s.AttributeRouteModel.Template.Match(@"api"))
                    .AttributeRouteModel.Template += $"/{pageWithImageModelAttribute.Route}";
            }
        }
    }
}
