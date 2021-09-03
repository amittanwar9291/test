using Microsoft.Extensions.Logging;
using RadioReport.Common.Enums;

namespace RadioReport.Common.Logic.Consts
{
    public static class LogEventIds
    {
        public static readonly EventId ImportReport = (int) LogEventCode.ImportReport;
        public static readonly EventId UnauthorizedAccess = (int) LogEventCode.UnauthorizedAccess;
        public static readonly EventId IdentityError = (int) LogEventCode.IdentityError;
    }
}
