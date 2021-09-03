using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Core.Users.Domain.Models.Entities
{
    public class ApplicationUser : IdentityUser, IUser
    {
        public Guid InstituteId { get; set; }
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
        public bool IsDefaultPassword { get; set; }
        public IEnumerable<ApplicationUserRole> UserRoles { get; set; }
    }
}
