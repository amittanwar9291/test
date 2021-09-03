using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class PresetNotFoundException : NotFoundException
    {
        public override string Reason { get; set; } = ErrorMessageResources.PresetNotFound;

        public PresetNotFoundException()
        {
        }

        public PresetNotFoundException(string message) : base(message)
        {
        }

        public PresetNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
