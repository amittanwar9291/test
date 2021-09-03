using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions.Identity;
using RadioReport.Common.Logic.Consts;

namespace RadioReport.Common.API.Filters
{
    public class IdentityExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<IdentityExceptionFilter> _logger;

        public IdentityExceptionFilter(ILogger<IdentityExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            if (!(context.Exception is IdentityException exception))
            {
                return;
            }

            context.HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            context.Result = new JsonResult(exception.Errors);
            context.ExceptionHandled = true;

            _logger.LogWarning(LogEventIds.IdentityError, context.Exception, context.Exception.Message);
        }
    }
}
