using System;
using RadioReport.Core.LicenseManager.Domain.Enums;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseListItem
    {
        public Guid LicenseId { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public LicensingType LicensingType { get; set; }
        public long CreditVolume { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
    }
}
