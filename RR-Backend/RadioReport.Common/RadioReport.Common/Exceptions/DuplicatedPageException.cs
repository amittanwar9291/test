using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class DuplicatedPageException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.DuplicatedReportPage;

        public DuplicatedPageException()
        {
        }

        public DuplicatedPageException(string message) : base(message)
        {
        }

        public DuplicatedPageException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
