using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class NotLicensedOperationException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NotLicensedOperation;

        public NotLicensedOperationException()
        {
        }

        public NotLicensedOperationException(string message) : base(message)
        {
        }

        public NotLicensedOperationException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
