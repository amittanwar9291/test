using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Logic.Exceptions
{
    public class Cvi42InvalidXmlExceptions : DomainException
    {
        public Cvi42InvalidXmlExceptions()
        {
        }

        public Cvi42InvalidXmlExceptions(string message) : base(message)
        {
        }

        public Cvi42InvalidXmlExceptions(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}