using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Logic.Exceptions
{
    public class Cvi42MissingStudyInstanceUidException : DomainException
    {
        public Cvi42MissingStudyInstanceUidException()
        {
        }

        public Cvi42MissingStudyInstanceUidException(string message) : base(message)
        {
        }

        public Cvi42MissingStudyInstanceUidException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}