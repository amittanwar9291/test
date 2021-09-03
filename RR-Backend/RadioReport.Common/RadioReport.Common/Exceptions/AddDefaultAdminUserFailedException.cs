using System;

namespace RadioReport.Common.Exceptions
{
    public class AddDefaultAdminUserFailedException : DomainException
    {
        public AddDefaultAdminUserFailedException()
        {
        }

        public AddDefaultAdminUserFailedException(string message) : base(message)
        {
        }

        public AddDefaultAdminUserFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
