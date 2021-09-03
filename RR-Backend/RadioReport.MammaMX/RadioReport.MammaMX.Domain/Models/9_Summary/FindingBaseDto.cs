using System;

namespace RadioReport.MammaMX.Domain.Models
{
    public class FindingBaseDto
    {
        public Guid Id { get; set; }
        public string FindingType { get; set; }
        public byte Number { get; set; }
    }
}
