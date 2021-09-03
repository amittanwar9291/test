using System;

namespace RadioReport.Common.Exceptions
{
    public class MissingKafkaTopicException : DomainException
    {
        public MissingKafkaTopicException()
        {
        }

        public MissingKafkaTopicException(string message) : base(message)
        {
        }

        public MissingKafkaTopicException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
