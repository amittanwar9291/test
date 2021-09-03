using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidRenderingFormatException : DomainException
    {
        public InvalidRenderingFormatException()
        {
        }

        public InvalidRenderingFormatException(string message) : base(message)
        {
        }

        public InvalidRenderingFormatException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
