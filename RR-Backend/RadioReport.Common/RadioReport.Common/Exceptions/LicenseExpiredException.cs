using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class LicenseExpiredException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public LicenseExpiredException()
        {
        }

        public LicenseExpiredException(string message) : base(message)
        {
        }

        public LicenseExpiredException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
