using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class UploadInstituteHtmlTemplateFailedException : DomainException
    {
        public UploadInstituteHtmlTemplateFailedException()
        {
        }

        public UploadInstituteHtmlTemplateFailedException(string message) : base(message)
        {
        }

        public UploadInstituteHtmlTemplateFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
