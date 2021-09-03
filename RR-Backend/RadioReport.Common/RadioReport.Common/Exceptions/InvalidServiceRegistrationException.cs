using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidServiceRegistrationException : DomainException
    {
        public InvalidServiceRegistrationException()
        {
        }

        public InvalidServiceRegistrationException(string message) : base(message)
        {
        }

        public InvalidServiceRegistrationException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
