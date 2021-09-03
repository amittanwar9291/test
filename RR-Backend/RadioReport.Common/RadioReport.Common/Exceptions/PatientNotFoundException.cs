using System;

namespace RadioReport.Common.Exceptions
{
    public class PatientNotFoundException : DomainException
    {
        public PatientNotFoundException()
        {
        }

        public PatientNotFoundException(string message) : base(message)
        {
        }

        public PatientNotFoundException(Guid id) : base($"Patient with id {id} not found")
        {
        }

        public PatientNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
