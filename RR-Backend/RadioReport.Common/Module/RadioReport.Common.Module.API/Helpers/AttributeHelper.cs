using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using Microsoft.Extensions.DependencyModel;

namespace RadioReport.Common.Module.API.Helpers
{
    public static class AttributeHelper
    {
        public static IEnumerable<Type> GetGeneratedControllerTypes<T>() where T : Attribute
        {
            var dependencyContext = DependencyContext.Default;
            var domainAssemblyName = dependencyContext.RuntimeLibraries
                .SelectMany(l => l.GetDefaultAssemblyNames(dependencyContext))
                .Select(n => n?.Name ?? string.Empty)
                .SingleOrDefault(n => Regex.Match(n, @"RadioReport\..+\.Domain", RegexOptions.IgnoreCase).Success);

            return string.IsNullOrEmpty(domainAssemblyName)
                ? Enumerable.Empty<Type>()
                : Assembly.Load(domainAssemblyName).GetTypes().Where(t => t.GetCustomAttributes<T>().Any());
        }
    }
}
