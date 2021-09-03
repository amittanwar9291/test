using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class GetInstituteLogoFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.Institute_GetInstituteLogoFailed;

        public GetInstituteLogoFailedException()
        {
        }

        public GetInstituteLogoFailedException(string message) : base(message)
        {
        }

        public GetInstituteLogoFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
