using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class CreateUserFailedException : IdentityException
    {
        public CreateUserFailedException()
        {
        }

        public CreateUserFailedException(string message) : base(message)
        {
        }

        public CreateUserFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public CreateUserFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
