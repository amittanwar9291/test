using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidJwtTokenException : DomainException
    {
        public InvalidJwtTokenException()
        {
        }

        public InvalidJwtTokenException(string message) : base(message)
        {
        }

        public InvalidJwtTokenException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
