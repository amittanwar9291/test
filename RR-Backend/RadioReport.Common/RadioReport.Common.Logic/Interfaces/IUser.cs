using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IUser
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public Salutation Salutation { get; set; }
        public string Initial { get; set; }
        public Title Title { get; set; }
        public Position Position { get; set; }
        public ApprovalLevel ApprovalLevel { get; set; }
        public Language LanguageOfProgram { get; set; }
        public Language LanguageDoctorFindings { get; set; }
        public Language LanguagePatientFindings { get; set; }
        public bool IsActive { get; set; }
    }
}
