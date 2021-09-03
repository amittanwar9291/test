using System;

namespace RadioReport.Common.Exceptions
{
    public class MinIOOperationException : DomainException
    {
        public MinIOOperationException()
        {
        }

        public MinIOOperationException(string message) : base(message)
        {
        }

        public MinIOOperationException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
