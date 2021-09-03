using System;

namespace RadioReport.Common.Module.API.Models
{
    public class ShortServiceDescriptor
    {
        public Type ServiceType { get; set; }
        public Type ImplementationType { get; set; }
        public string ServiceLifetime { get; set; }
    }
}