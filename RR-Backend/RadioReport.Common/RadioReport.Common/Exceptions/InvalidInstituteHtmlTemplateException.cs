using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InvalidInstituteHtmlTemplateException : DomainException
    {
        public InvalidInstituteHtmlTemplateException()
        {
        }

        public InvalidInstituteHtmlTemplateException(string message) : base(message)
        {
        }

        public InvalidInstituteHtmlTemplateException(string message, Exception innerException) : base(message, innerException)
        {
        }
        
    }
}
