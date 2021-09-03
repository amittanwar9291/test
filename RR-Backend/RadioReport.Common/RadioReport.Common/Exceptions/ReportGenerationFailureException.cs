using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class ReportGenerationFailureException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ReportGenerationFailure;

        public ReportGenerationFailureException()
        {
        }

        public ReportGenerationFailureException(string message) : base(message)
        {
        }

        public ReportGenerationFailureException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
