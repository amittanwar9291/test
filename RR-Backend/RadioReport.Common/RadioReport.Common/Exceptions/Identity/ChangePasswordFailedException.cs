using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class ChangePasswordFailedException : IdentityException
    {
        public ChangePasswordFailedException()
        {
        }

        public ChangePasswordFailedException(string message) : base(message)
        {
        }

        public ChangePasswordFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public ChangePasswordFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
