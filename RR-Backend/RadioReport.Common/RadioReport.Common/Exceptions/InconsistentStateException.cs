using System;

namespace RadioReport.Common.Exceptions
{
    public class InconsistentStateException : DomainException
    {
        public InconsistentStateException()
        {
        }

        public InconsistentStateException(string message) : base(message)
        {
        }

        public InconsistentStateException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
