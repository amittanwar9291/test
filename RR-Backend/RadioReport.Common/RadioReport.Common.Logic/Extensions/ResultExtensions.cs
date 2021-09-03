using System;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Extensions
{
    public static class ResultExtensions
    {
        public static Result OnExceptionLog(this Result result, ILogger logger)
        {
            if (result == null) throw new ArgumentNullException(nameof(result));
            if (logger == null) throw new ArgumentNullException(nameof(logger));

            if (result.IsException) logger.LogError(result.Error, result.Error.Message);

            return result;
        }
    }
}
