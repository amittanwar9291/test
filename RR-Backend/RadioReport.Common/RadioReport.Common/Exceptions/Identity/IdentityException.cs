using System;
using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Exceptions.Identity
{
    public abstract class IdentityException : Exception
    {
        public IEnumerable<RRIdentityError> Errors { get; set; }

        protected IdentityException()
        {
        }

        protected IdentityException(string message) : base(message)
        {
        }

        protected IdentityException(string message, IEnumerable<RRIdentityError> errors) : base(message)
        {
            Errors = errors;
        }

        protected IdentityException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
