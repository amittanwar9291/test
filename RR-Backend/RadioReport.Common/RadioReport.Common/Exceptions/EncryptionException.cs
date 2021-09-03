using System;

namespace RadioReport.Common.Exceptions
{
    public class EncryptionException : DomainException
    {
        public EncryptionException()
        {
        }

        public EncryptionException(string message) : base(message)
        {
        }

        public EncryptionException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
