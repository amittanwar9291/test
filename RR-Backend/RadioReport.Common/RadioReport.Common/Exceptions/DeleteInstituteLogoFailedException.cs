using System;

namespace RadioReport.Common.Exceptions
{
    public class DeleteInstituteLogoFailedException : DomainException
    {
        public DeleteInstituteLogoFailedException()
        {
        }

        public DeleteInstituteLogoFailedException(string message) : base(message)
        {
        }

        public DeleteInstituteLogoFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
