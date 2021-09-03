using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidInstituteIdException : DomainException
    {
        public InvalidInstituteIdException()
        {
        }

        public InvalidInstituteIdException(string message) : base(message)
        {
        }

        public InvalidInstituteIdException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
