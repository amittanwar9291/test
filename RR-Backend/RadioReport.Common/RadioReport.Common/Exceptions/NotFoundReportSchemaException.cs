using RadioReport.Common.Logic.Resources;
using System;

namespace RadioReport.Common.Exceptions
{
    public class NotFoundReportSchemaException : NotFoundException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ReportSchemaNotFound;

        public NotFoundReportSchemaException()
        {
        }

        public NotFoundReportSchemaException(string message) : base(message)
        {
        }

        public NotFoundReportSchemaException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
