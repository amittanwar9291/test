using System;

namespace RadioReport.Common.Logic.Models
{
    public class LicenseOptions
    {
        public const string SectionName = "License";

        public bool IsActivated { get; set; }
        public int GracePeriodDays { get; set; }
        public int OverdraftPercentage { get; set; }
        public int OverdraftCap { get; set; }
        public Uri AutoLicenseUrl { get; set; }
    }
}
