using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class DuplicatedReportSchemaException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.DuplicatedReportSchema;

        public DuplicatedReportSchemaException()
        {
        }

        public DuplicatedReportSchemaException(string message) : base(message)
        {
        }

        public DuplicatedReportSchemaException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
