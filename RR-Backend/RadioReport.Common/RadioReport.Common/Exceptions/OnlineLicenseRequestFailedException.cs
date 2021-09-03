using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class OnlineLicenseRequestFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public OnlineLicenseRequestFailedException()
        {
        }

        public OnlineLicenseRequestFailedException(string message) : base(message)
        {
        }

        public OnlineLicenseRequestFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
