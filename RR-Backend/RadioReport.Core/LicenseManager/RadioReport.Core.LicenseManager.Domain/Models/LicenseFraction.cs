using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Helpers;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseFraction : ModelBase
    {
        public LicenseFraction()
        {
        }

        public LicenseFraction(LicenseFractionDto dto, License license, string jwtTokenString)
        {
            if (dto == null) throw new ArgumentNullException(nameof(dto));

            Id = dto.Id;
            InstituteId = dto.InstituteId;
            CreationDate = dto.CreationDate;
            ExpirationDate = dto.ExpirationDate;
            AllocationDate = DateTime.Now.ToUniversalTime();
            License = license ?? throw new ArgumentNullException(nameof(license));
            Token = jwtTokenString;
        }

        public Guid InstituteId { get; set; }
        public License License { get; set; }
        public int Order { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public DateTime AllocationDate { get; set; }
        public string Token { get; set; }
    }
}
