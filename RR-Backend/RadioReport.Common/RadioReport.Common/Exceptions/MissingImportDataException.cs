using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class MissingImportDataException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ImportFailed_NoImportData;

        public MissingImportDataException()
        {
        }

        public MissingImportDataException(string message) : base(message)
        {
        }

        public MissingImportDataException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
