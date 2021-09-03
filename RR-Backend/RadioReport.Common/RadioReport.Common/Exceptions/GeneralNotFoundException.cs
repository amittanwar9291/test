using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class GeneralNotFoundException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.GeneralNotFound;

        public GeneralNotFoundException(string message) : base(message)
        {
        }

        public GeneralNotFoundException()
        {
        }

        public GeneralNotFoundException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
