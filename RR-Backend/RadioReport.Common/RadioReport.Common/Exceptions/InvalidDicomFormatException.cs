using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidDicomFormatException : DomainException
    {
        public InvalidDicomFormatException() : base()
        {
        }

        public InvalidDicomFormatException(string message) : base(message)
        {
        }

        public InvalidDicomFormatException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
