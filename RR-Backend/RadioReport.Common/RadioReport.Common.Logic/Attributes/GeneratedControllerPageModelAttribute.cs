using System;

namespace RadioReport.Common.Logic.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class GeneratedControllerPageModelAttribute : Attribute
    {
        public GeneratedControllerPageModelAttribute(string route)
        {
            Route = route;
        }

        public string Route { get; set; }
    }
}
