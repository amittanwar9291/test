using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Common.Logic.Models.User
{
    public class UserViewModel : IUser
    {
        public string Id { get; set; }
        public Guid InstituteId { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public Salutation Salutation { get; set; }
        public string Initial { get; set; }
        public Title Title { get; set; }
        public Position Position { get; set; }
        public UserRole Role { get; set; }
        public string UserName { get; set; }

        public ApprovalLevel ApprovalLevel { get; set; }

        public Language LanguageOfProgram { get; set; }
        public Language LanguageDoctorFindings { get; set; }
        public Language LanguagePatientFindings { get; set; }
        public bool IsActive { get; set; }
    }
}
