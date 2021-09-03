using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class IncrementLicenseFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public IncrementLicenseFailedException()
        {
        }

        public IncrementLicenseFailedException(string message) : base(message)
        {
        }

        public IncrementLicenseFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
