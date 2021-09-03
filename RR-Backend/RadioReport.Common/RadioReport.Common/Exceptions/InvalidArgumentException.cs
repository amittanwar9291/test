namespace RadioReport.Common.Exceptions
{
    public class InvalidArgumentException : DomainException
    {
        public InvalidArgumentException(string message) : base(message)
        {
        }

        public InvalidArgumentException()
        {
        }

        public InvalidArgumentException(string message, System.Exception innerException) : base(message, innerException)
        {
        }
    }
}
