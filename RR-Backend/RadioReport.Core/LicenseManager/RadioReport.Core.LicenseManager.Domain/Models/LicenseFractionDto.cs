using System;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseFractionDto
    {
        public Guid Id { get; set; }
        public Guid InstituteId { get; set; }
        public long CreditScore { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}
