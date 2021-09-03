using System;
using System.Globalization;

namespace RadioReport.Common.Extensions
{
    public static class CommonExtensions
    {
        public static string ToLogFormat(this DateTime dateTime) => dateTime.ToString("dd-MM-yyyy HH:mm:ss.ffff", CultureInfo.InvariantCulture);

        public static bool IsEmpty(this Guid id) => id == Guid.Empty;

        public static bool IsNullOrEmpty(this Guid? id) => !id.HasValue || id.Value == Guid.Empty;

        public static bool IsInFuture(this DateTime dateTime) => dateTime > DateTime.Now;

        public static bool IsInPast(this DateTime dateTime) => dateTime < DateTime.Now;
        
        public static bool IsBeforeToday(this DateTime dateTime) => (dateTime - DateTime.Now.ToUniversalTime()).TotalDays < 0;
    }
}
