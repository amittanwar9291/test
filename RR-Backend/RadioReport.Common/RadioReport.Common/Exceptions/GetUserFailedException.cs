using System;

namespace RadioReport.Common.Exceptions
{
    public class GetUserFailedException : DomainException
    {
        public GetUserFailedException()
        {
        }

        public GetUserFailedException(string message) : base(message)
        {
        }

        public GetUserFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
