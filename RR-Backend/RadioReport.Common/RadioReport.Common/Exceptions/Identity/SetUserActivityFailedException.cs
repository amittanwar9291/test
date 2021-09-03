using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public class SetUserActivityFailedException : IdentityException
    {
        public SetUserActivityFailedException()
        {
        }

        public SetUserActivityFailedException(string message) : base(message)
        {
        }

        public SetUserActivityFailedException(string message, IEnumerable<RRIdentityError> errors) : base(message, errors)
        {
        }

        public SetUserActivityFailedException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
