using System;

namespace RadioReport.Common.Exceptions
{
    public class GetOrAddPatientFailedException : DomainException
    {
        public GetOrAddPatientFailedException()
        {
        }

        public GetOrAddPatientFailedException(string message) : base(message)
        {
        }

        public GetOrAddPatientFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
