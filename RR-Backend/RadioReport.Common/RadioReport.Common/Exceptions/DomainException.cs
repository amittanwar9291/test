using System;

namespace RadioReport.Common.Exceptions
{
    public abstract class DomainException : Exception
    {
        public virtual string Reason { get; set; }
        public object Payload { get; set; }

        protected DomainException()
        {
        }

        protected DomainException(string message) : base(message)
        {
        }

        protected DomainException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public DomainException WithReason(string reason)
        {
            Reason = reason;

            return this;
        }
    }
}
