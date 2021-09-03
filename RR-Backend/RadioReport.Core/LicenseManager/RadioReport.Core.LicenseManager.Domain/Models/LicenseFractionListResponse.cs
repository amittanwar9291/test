using System.Collections.Generic;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseFractionListResponse
    {
        public List<LicenseFractionDto> LicenseFractions { get; } = new List<LicenseFractionDto>();
        public PaginationOptions PaginationOptions { get; set; }
    }
}
