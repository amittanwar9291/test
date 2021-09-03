using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Consts;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.API.Filters
{
    public class UnauthorizedAccessExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<UnauthorizedAccessExceptionFilter> _logger;

        public UnauthorizedAccessExceptionFilter(ILogger<UnauthorizedAccessExceptionFilter> logger)
        {
            _logger = logger;
        }

        public async void OnException(ExceptionContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            if (!(context.Exception is UnauthorizedAccessException))
            {
                return;
            }

            context.HttpContext.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.HttpContext.Response.WriteAsync(ErrorMessageResources.Unauthorized_DefaultMessage);
            context.ExceptionHandled = true;

            _logger.LogWarning(LogEventIds.UnauthorizedAccess, context.Exception, context.Exception.Message);
        }
    }
}
