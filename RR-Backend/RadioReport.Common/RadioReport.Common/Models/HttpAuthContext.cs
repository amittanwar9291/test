using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Models
{
    public class HttpAuthContext
    {
        public virtual Guid InstituteId { get; set; }
        public virtual Guid UserId { get; set; }
        public virtual UserRole UserRole { get; set; }
        public virtual Application Application { get; set; }
        public virtual string LanguageCode { get; set; }

        public static readonly HttpAuthContext Anonymous = new HttpAuthContext();
    }
}
