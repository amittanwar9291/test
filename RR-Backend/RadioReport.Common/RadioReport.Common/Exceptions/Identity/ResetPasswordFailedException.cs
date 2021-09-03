using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class ResetPasswordFailedException : IdentityException
    {
        public ResetPasswordFailedException()
        {
        }

        public ResetPasswordFailedException(string message) : base(message)
        {
        }

        public ResetPasswordFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public ResetPasswordFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
