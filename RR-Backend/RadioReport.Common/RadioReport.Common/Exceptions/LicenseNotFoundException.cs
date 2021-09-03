using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class LicenseNotFoundException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public LicenseNotFoundException()
        {
        }

        public LicenseNotFoundException(string message) : base(message)
        {
        }

        public LicenseNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
