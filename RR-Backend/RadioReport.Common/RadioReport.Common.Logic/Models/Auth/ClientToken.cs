using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Auth
{
    public class ClientToken : ModelBase
    {
        public Guid UserId { get; set; }

        public string OperatingSystem { get; set; }

        public string Browser { get; set; }
        
        public Application Application { get; set; }
    }
}