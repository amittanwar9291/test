using System;
using System.Linq;
using RadioReport.Common.Extensions;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class PatientEncryptedFilterOptions
    {
        public PatientEncryptedFilterOptions(PatientFilterOptions options, string birthDateHash)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            FirstNameInitial = options.PatientFirstName.IsNullOrEmpty() ? string.Empty : options.PatientFirstName.First().ToString();
            LastNameInitial = options.PatientLastName.IsNullOrEmpty() ? string.Empty : options.PatientLastName.First().ToString();
            BirthDateHash = birthDateHash;
        }

        public string FirstNameInitial { get; set; }
        public string LastNameInitial { get; set; }
        public string BirthDateHash { get; set; }
    }
}
