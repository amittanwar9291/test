using System;
using System.Globalization;
using System.Linq;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Core.LicenseManager.Domain.Enums;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class LicenseDto
    {
        public Guid Id { get; set; }
        public Guid InstituteId { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public LicensingType LicensingType { get; set; }
        public long CreditVolume { get; set; }
        public bool ICD10Code { get; set; }
        public string Languages { get; set; }
        public ReportTypes ReportTypes { get; set; }
        public int Order { get; set; }
        public LicenseFractionDto LastLicenseFraction { get; set; }

        public LicenseExpirationType GetExpirationType(LicenseOptions options)
        {
            var isExpired = ExpirationDate.IsBeforeToday();
            var isGracePerioExpired = ExpirationDate.AddDays(options.GracePeriodDays).IsBeforeToday();

            return isExpired ? isGracePerioExpired ? LicenseExpirationType.Expired : LicenseExpirationType.InGracePeriod : LicenseExpirationType.Valid;
        }

        public bool AreGenerationParamsLicensed(TextGenerationLicenseParams licenseParams)
        {
            if (licenseParams == null) throw new ArgumentNullException(nameof(licenseParams));

            var licensedLanguages = Languages
                .Split(",")
                .Select(l => new CultureInfo(l).IetfLanguageTag);
            var requestedLanguage = new CultureInfo(licenseParams.Language).IetfLanguageTag;

            return (!licenseParams.ICD10Code || ICD10Code) &&
                   licensedLanguages.Contains(requestedLanguage) &&
                   (licenseParams.ReportType & ReportTypes) != 0;
        }
    }
}
