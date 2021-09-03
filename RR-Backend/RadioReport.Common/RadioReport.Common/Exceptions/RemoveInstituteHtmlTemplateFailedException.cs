using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class RemoveInstituteHtmlTemplateFailedException: DomainException
    {
        public RemoveInstituteHtmlTemplateFailedException()
        {
        }

        public RemoveInstituteHtmlTemplateFailedException(string message) : base(message)
        {
        }

        public RemoveInstituteHtmlTemplateFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
        
    }
}