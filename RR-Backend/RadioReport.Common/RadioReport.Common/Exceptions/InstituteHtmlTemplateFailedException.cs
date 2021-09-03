using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InstituteHtmlTemplateFailedException : DomainException
    {
        public InstituteHtmlTemplateFailedException()
        {
        }

        public InstituteHtmlTemplateFailedException(string message) : base(message)
        {
        }

        public InstituteHtmlTemplateFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
