using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class UploadInstituteLogoFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.Institute_UploadInstituteLogoFailed;

        public UploadInstituteLogoFailedException()
        {
        }

        public UploadInstituteLogoFailedException(string message) : base(message)
        {
        }

        public UploadInstituteLogoFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
