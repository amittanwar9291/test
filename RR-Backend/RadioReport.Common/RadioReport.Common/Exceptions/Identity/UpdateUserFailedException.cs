using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class UpdateUserFailedException : IdentityException
    {
        public UpdateUserFailedException()
        {
        }

        public UpdateUserFailedException(string message) : base(message)
        {
        }

        public UpdateUserFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public UpdateUserFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
