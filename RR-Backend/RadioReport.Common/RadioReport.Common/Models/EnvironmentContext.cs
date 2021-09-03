using System.Collections.Generic;
using RadioReport.Common.Enums;

namespace RadioReport.Common.Models
{
    public class EnvironmentContext
    {
        public DeploymentVariant DeploymentVariant { get; set; }

        public Dictionary<string, bool> DeploymentOptions { get; set; }

        public Tracking Tracking { get; set; }
    }
}
