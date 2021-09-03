using System;

namespace RadioReport.Common.Exceptions
{
    public class SynchronousKafkaTimedOutException : DomainException
    {
        public SynchronousKafkaTimedOutException()
        {
        }

        public SynchronousKafkaTimedOutException(string message) : base(message)
        {
        }

        public SynchronousKafkaTimedOutException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
