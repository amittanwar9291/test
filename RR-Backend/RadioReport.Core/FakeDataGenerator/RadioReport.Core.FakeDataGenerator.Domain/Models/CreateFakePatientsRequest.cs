using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RadioReport.Core.FakeDataGenerator.Domain.Models
{
    public class CreateFakePatientsRequest
    {
        [Required]
        public int Amount { get; set; }

        public IEnumerable<Guid> InstituteIds { get; set; }
    }
}
