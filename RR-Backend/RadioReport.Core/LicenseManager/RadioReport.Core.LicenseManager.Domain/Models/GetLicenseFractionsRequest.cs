using System;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class GetLicenseFractionsRequest
    {
        public Guid LicenseId { get; set; }
        public PaginationOptions PaginationOptions { get; set; }
    }
}
