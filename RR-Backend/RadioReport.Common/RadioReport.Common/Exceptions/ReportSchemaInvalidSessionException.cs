using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class ReportSchemaInvalidSessionException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ReportSchemaInvalidSession;

        public ReportSchemaInvalidSessionException()
        {
        }

        public ReportSchemaInvalidSessionException(string message) : base(message)
        {
        }

        public ReportSchemaInvalidSessionException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
