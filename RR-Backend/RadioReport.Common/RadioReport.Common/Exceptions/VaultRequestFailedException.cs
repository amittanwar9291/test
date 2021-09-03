using System;

namespace RadioReport.Common.Exceptions
{
    public class VaultRequestFailedException : DomainException
    {
        public VaultRequestFailedException()
        {
        }

        public VaultRequestFailedException(string message) : base(message)
        {
        }

        public VaultRequestFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
