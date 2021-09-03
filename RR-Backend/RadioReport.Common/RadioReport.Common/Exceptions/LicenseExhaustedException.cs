using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class LicenseExhaustedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public LicenseExhaustedException()
        {
        }

        public LicenseExhaustedException(string message) : base(message)
        {
        }

        public LicenseExhaustedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
