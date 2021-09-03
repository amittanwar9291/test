using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Dtos
{
    public class PatientDto
    {
        public PatientDto()
        {
        }

        public PatientDto(Patient patient)
        {
            if (patient == null) throw new ArgumentNullException(nameof(patient));

            Id = patient.Id;
            InstituteId = patient.InstituteId;
            FirstName = patient.FirstName;
            LastName = patient.LastName;
            Name = patient.Name;
            BirthDate = patient.BirthDate;
            Gender = patient.Gender;
            ExternalIdentifier = patient.ExternalIdentifier;
        }

        public Guid Id { get; set; }
        public Guid InstituteId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [RadioReportId("imp_pat_000001")]
        public string Name { get; set; }

        [RadioReportId("imp_pat_000002")]
        public DateTime BirthDate { get; set; }

        [RadioReportId("imp_pat_000003")]
        public Gender Gender { get; set; }

        [RadioReportId("imp_pat_000004")]
        public string ExternalIdentifier { get; set; }
    }
}
