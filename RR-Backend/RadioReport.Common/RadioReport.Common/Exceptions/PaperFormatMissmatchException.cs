using System;

namespace RadioReport.Common.Exceptions
{
    public class PaperFormatMissmatchException : DomainException
    {
        public PaperFormatMissmatchException()
        {
        }

        public PaperFormatMissmatchException(string message) : base(message)
        {
        }

        public PaperFormatMissmatchException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
