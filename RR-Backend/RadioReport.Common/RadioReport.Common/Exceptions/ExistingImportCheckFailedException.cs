using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class ExistingImportCheckFailedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ExistingImportCheckFailed;

        public ExistingImportCheckFailedException()
        {
        }

        public ExistingImportCheckFailedException(string message) : base(message)
        {
        }

        public ExistingImportCheckFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
