using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class InstituteNotFoundException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoInstituteConfig;

        public InstituteNotFoundException()
        {
        }

        public InstituteNotFoundException(string message) : base(message)
        {
        }

        public InstituteNotFoundException(Guid id) : base($"Institute with id {id} not found")
        {
        }


        public InstituteNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
