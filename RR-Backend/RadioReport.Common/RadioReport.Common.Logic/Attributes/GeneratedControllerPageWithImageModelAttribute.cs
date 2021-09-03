using System;
using System.Collections.Generic;

namespace RadioReport.Common.Logic.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class GeneratedControllerPageWithImageModelAttribute : Attribute
    {
        public GeneratedControllerPageWithImageModelAttribute(string route, params string[] allowedFileTypes)
        {
            Route = route;
            AllowedFileTypes = allowedFileTypes;
        }

        public IEnumerable<string> AllowedFileTypes { get; set; }
        public string Route { get; set; }
    }
}
