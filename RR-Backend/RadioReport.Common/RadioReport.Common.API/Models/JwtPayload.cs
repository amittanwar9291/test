using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.API.Models
{
    public class JwtPayload
    {
        public Guid UserId { get; set; }
        public UserRole UserRole { get; set; }
        public Guid InstituteId { get; set; }
        public Guid TokenId { get; set; }
        public Application Application { get; set; }
        public string LanguageCode { get; set; }
        public bool DuplicateExternalIdentifierAllowed { get; set; }
    }
}
