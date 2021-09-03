using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class LicenseFractionAlreadyUploadedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.LicenseFractionAlreadyUploaded;

        public LicenseFractionAlreadyUploadedException()
        {
        }

        public LicenseFractionAlreadyUploadedException(string message) : base(message)
        {
        }

        public LicenseFractionAlreadyUploadedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
