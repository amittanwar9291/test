using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InvalidInstituteLogoException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.InvalidInstituteLogo;

        public InvalidInstituteLogoException()
        {
        }

        public InvalidInstituteLogoException(string message) : base(message)
        {
        }

        public InvalidInstituteLogoException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
