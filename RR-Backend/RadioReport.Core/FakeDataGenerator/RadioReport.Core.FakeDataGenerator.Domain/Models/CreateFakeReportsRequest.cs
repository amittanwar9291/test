using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RadioReport.Core.FakeDataGenerator.Domain.Models
{
    public class CreateFakeReportsRequest
    {
        [Required]
        public int Amount { get; set; }

        [Required]
        public IEnumerable<string> ModuleNames { get; set; }

        public IEnumerable<string> ReportStatuses { get; set; }
        public IEnumerable<Guid> InstituteIds { get; set; }
        public IEnumerable<Guid> UserIds { get; set; }
    }
}
