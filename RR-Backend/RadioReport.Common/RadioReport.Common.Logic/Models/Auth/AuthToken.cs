using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Auth
{
    public class AuthToken : ModelBase
    {
        public Guid AccessTokenId { get; set; }
        public DateTime AccessTokenExpiration { get; set; }
        public Guid RefreshTokenId { get; set; }
        public DateTime RefreshTokenExpiration { get; set; }
        public Application Application { get; set; }
    }
}
