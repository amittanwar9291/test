using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InstituteHtmlTemplateNotFoundException : DomainException
    {
        public InstituteHtmlTemplateNotFoundException()
        {
        }

        public InstituteHtmlTemplateNotFoundException(string message) : base(message)
        {
        }

        public InstituteHtmlTemplateNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
        
    }
}
