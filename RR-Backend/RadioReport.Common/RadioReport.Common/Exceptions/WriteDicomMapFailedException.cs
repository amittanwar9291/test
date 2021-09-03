using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class WriteDicomMapFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.DicomMapIO_WriteMapFailed;

        public WriteDicomMapFailedException()
        {
        }

        public WriteDicomMapFailedException(string message) : base(message)
        {
        }

        public WriteDicomMapFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
