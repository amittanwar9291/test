using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InvalidLicenseFileException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.InvalidLicenseFile;

        public InvalidLicenseFileException()
        {
        }

        public InvalidLicenseFileException(string message) : base(message)
        {
        }

        public InvalidLicenseFileException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
