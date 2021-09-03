using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class PatientFilterOptions
    {
        public Guid? PatientId { get; set; }
        public string PatientFirstName { get; set; }
        public string PatientLastName { get; set; }
        public Gender? Gender { get; set; }
        public DateTime? BirthDate { get; set; }
    }
}
