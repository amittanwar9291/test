using System;
using RadioReport.Core.LicenseManager.Domain.Enums;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseDetails
    {
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public LicensingType LicensingType { get; set; }
        public long CreditVolume { get; set; }
        public long CurrentCredit { get; set; }
        public bool IsActive { get; set; }
        public double DepletionPercentage { get; set; }
    }
}
