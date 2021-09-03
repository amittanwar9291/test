using System;

namespace RadioReport.Common.Exceptions
{
    public class MissingCacheEntryException : DomainException
    {
        public MissingCacheEntryException()
        {
        }

        public MissingCacheEntryException(string message) : base(message)
        {
        }

        public MissingCacheEntryException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
