using System;

namespace RadioReport.Common.Exceptions
{
    public class MissingJwtTokenException : DomainException
    {
        public MissingJwtTokenException()
        {
        }

        public MissingJwtTokenException(string message) : base(message)
        {
        }

        public MissingJwtTokenException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
