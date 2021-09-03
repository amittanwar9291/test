using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class LoginFailedException : IdentityException
    {
        public LoginFailedException()
        {
        }

        public LoginFailedException(string message) : base(message)
        {
        }

        public LoginFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public LoginFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
