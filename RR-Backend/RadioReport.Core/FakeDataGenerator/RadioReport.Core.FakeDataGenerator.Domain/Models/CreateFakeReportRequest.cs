using System;
using System.ComponentModel.DataAnnotations;

namespace RadioReport.Core.FakeDataGenerator.Domain.Models
{
    public class CreateFakeReportRequest
    {
        [Required]
        public string ModuleName { get; set; }

        public string ReportStatus { get; set; }
        public Guid? InstituteId { get; set; }
        public Guid? UserId { get; set; }
    }
}
