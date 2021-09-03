using System;
using System.Linq;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.PatientManager.Domain.Models
{
    public class PatientEncrypted : ModelBase
    {
        public PatientEncrypted()
        {
        }

        public PatientEncrypted(Patient patient, string externalIdentifierHash, string birthDateHash, string patientCipher)
        {
            if (patient == null) throw new ArgumentNullException(nameof(patient));

            Id = patient.Id;
            InstituteId = patient.InstituteId;
            ExternalIdentifierHash = externalIdentifierHash;
            BirthDateHash = birthDateHash;
            PatientCipher = patientCipher;
            FirstNameInitial = patient.FirstName.IsNullOrEmpty() ? string.Empty : patient.FirstName.First().ToString();
            LastNameInitial = patient.LastName.IsNullOrEmpty() ? string.Empty : patient.LastName.First().ToString();
        }

        public Guid InstituteId { get; set; }
        public string ExternalIdentifierHash { get; set; }
        public string BirthDateHash { get; set; }
        public string PatientCipher { get; set; }
        public string FirstNameInitial { get; set; }
        public string LastNameInitial { get; set; }
    }
}
