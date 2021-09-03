using System;

namespace RadioReport.Common.Exceptions
{
    public class GetPatientsFailedException : DomainException
    {
        public GetPatientsFailedException()
        {
        }

        public GetPatientsFailedException(string message) : base(message)
        {
        }

        public GetPatientsFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
