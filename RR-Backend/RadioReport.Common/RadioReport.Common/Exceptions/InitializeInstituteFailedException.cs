using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InitializeInstituteFailedException : DomainException
    {
        public InitializeInstituteFailedException()
        {
        }

        public InitializeInstituteFailedException(string message) : base(message)
        {
        }

        public InitializeInstituteFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
