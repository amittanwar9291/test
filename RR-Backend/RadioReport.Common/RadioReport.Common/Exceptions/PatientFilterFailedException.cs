using System;

namespace RadioReport.Common.Exceptions
{
    public class PatientFilterFailedException : DomainException
    {
        public PatientFilterFailedException()
        {
        }

        public PatientFilterFailedException(string message) : base(message)
        {
        }

        public PatientFilterFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
