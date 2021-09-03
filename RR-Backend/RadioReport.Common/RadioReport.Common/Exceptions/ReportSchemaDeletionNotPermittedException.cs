using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class ReportSchemaDeletionNotPermittedException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ReportSchemaDeletionNotPermitted;

        public ReportSchemaDeletionNotPermittedException()
        {
        }

        public ReportSchemaDeletionNotPermittedException(string message) : base(message)
        {
        }

        public ReportSchemaDeletionNotPermittedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
