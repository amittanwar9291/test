using System;

namespace RadioReport.Common.Exceptions
{
    public class MissingRedisConfigurationException : DomainException
    {
        public MissingRedisConfigurationException()
        {
        }

        public MissingRedisConfigurationException(string message) : base(message)
        {
        }

        public MissingRedisConfigurationException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
