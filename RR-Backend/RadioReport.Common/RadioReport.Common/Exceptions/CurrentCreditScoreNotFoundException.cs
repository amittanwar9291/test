using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class CurrentCreditScoreNotFoundException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.NoValidLicense;

        public CurrentCreditScoreNotFoundException()
        {
        }

        public CurrentCreditScoreNotFoundException(string message) : base(message)
        {
        }

        public CurrentCreditScoreNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
