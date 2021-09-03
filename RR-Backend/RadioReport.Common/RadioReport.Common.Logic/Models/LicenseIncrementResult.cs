using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models
{
    public class LicenseIncrementResult
    {
        public LicenseIncrementResult()
        {
        }

        public LicenseIncrementResult(LicenseExpirationType expirationType, LicenseScoreType scoreType, bool paramsLicensed)
        {
            if (expirationType == LicenseExpirationType.None || scoreType == LicenseScoreType.None)
                throw new InvalidOperationException("Invalid expiration type or score type");

            ExpirationType = expirationType;
            ScoreType = scoreType;
            AreGenerationParamsLicensed = paramsLicensed;
        }

        public LicenseExpirationType ExpirationType { get; set; }
        public LicenseScoreType ScoreType { get; set; }
        public bool AreGenerationParamsLicensed { get; set; }

        public bool IsSuccess => !IsExpired && !IsExhausted && AreGenerationParamsLicensed;
        public bool AreExpirationAndScoreValid => ExpirationType == LicenseExpirationType.Valid && ScoreType == LicenseScoreType.Valid;
        public bool IsInGracePeriod => ExpirationType == LicenseExpirationType.InGracePeriod;
        public bool IsExpired => ExpirationType == LicenseExpirationType.Expired;
        public bool IsInOverdraft => ScoreType == LicenseScoreType.InOverdraft;
        public bool IsExhausted => ScoreType == LicenseScoreType.Exhausted;
    }
}
