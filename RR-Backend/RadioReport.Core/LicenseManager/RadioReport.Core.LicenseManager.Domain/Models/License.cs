using System;
using System.Collections.Generic;
using System.Linq;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Helpers;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Core.LicenseManager.Domain.Enums;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class License : ModelBase
    {
        public License()
        {
        }

        public License(LicenseDto dto, string jwtTokenString)
        {
            if (dto == null) throw new ArgumentNullException(nameof(dto));

            Id = dto.Id;
            InstituteId = dto.InstituteId;
            CreationDate = dto.CreationDate;
            ExpirationDate = dto.ExpirationDate;
            LicensingType = dto.LicensingType;
            Order = dto.Order;
            IsActive = true;
            Token = jwtTokenString;
        }

        public Guid InstituteId { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public LicensingType LicensingType { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string Token { get; set; }
        public List<LicenseFraction> LicenseFractions { get; } = new List<LicenseFraction>();

        public bool IsExpired => ExpirationDate.IsBeforeToday();
        public bool IsOffline => LicensingType == LicensingType.Offline;
        public LicenseFraction LastLicenseFraction => LicenseFractions.OrderBy(f => f.Order).Last();

        public LicenseDto GetTokenLicense(IKeyStoreService keyStoreService) =>
            JwtTokenHelper.ValidateRsaSignedJwtToken(Token, keyStoreService).GetSerialized<LicenseDto>(JwtPayloadKey.License);
    }
}
