using System;

namespace RadioReport.Common.Exceptions
{
    public class ServiceNotFoundException : NotFoundException
    {
        public ServiceNotFoundException()
        {
        }

        public ServiceNotFoundException(string message) : base(message)
        {
        }

        public ServiceNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
