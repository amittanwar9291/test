using RadioReport.Common.Logic.Models;
using System;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class ReportSchemaSession : ModelBase
    {
        public Guid ReportSchemaId { get; set; }
        
        public string UserName { get; set; }
        
        public DateTime LastActivity { get; set; }
    }
}
