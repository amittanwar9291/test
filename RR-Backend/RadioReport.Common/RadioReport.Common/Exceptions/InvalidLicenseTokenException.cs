using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InvalidLicenseTokenException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.InvalidLicenseToken;

        public InvalidLicenseTokenException()
        {
        }

        public InvalidLicenseTokenException(string message) : base(message)
        {
        }

        public InvalidLicenseTokenException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
