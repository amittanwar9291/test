using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class GetDicomMapFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.DicomMapIO_ReadMapFailed;

        public GetDicomMapFailedException()
        {
        }

        public GetDicomMapFailedException(string message) : base(message)
        {
        }

        public GetDicomMapFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
