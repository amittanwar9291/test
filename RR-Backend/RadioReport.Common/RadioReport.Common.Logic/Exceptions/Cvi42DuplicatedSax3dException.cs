using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Logic.Exceptions
{
    public class Cvi42DuplicatedSax3dException : DomainException
    {
        public Cvi42DuplicatedSax3dException()
        {
        }

        public Cvi42DuplicatedSax3dException(string message) : base(message)
        {
        }

        public Cvi42DuplicatedSax3dException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}