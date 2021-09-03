using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InstituteLogoNotFoundException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.InstituteLogoNotFound;

        public InstituteLogoNotFoundException()
        {
        }

        public InstituteLogoNotFoundException(string message) : base(message)
        {
        }

        public InstituteLogoNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
