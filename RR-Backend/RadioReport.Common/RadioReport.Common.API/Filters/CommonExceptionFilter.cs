using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Resources;
using System;
using System.Net;
using System.Text;

namespace RadioReport.Common.API.Filters
{
    public class CommonExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<CommonExceptionFilter> _logger;

        public CommonExceptionFilter(ILogger<CommonExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            string reason;
            var payload = string.Empty;
            var exception = context.Exception;
            while (exception is AggregateException { InnerException: { } } aggregateException)
            {
                exception = aggregateException.InnerException;
            }

            switch (exception)
            {
                case MissingReportSessionException _:
                    reason = ErrorMessageResources.ReportSessionExpired;
                    context.HttpContext.Response.StatusCode = (int) HttpStatusCode.Conflict;
                    break;
                case ReportLockedException _:
                    reason = ErrorMessageResources.ReportSessionLocked;
                    context.HttpContext.Response.StatusCode = (int) HttpStatusCode.Locked;
                    break;
                case DomainException domainException:
                    reason = domainException.Reason.IsNullOrEmpty() ? ErrorMessageResources.UnknownError : domainException.Reason;
                    payload = domainException.Payload?.AsJson() ?? string.Empty;
                    context.HttpContext.Response.StatusCode = (int) HttpStatusCode.BadRequest;
                    break;
                default:
                    reason = ErrorMessageResources.UnknownError;
                    context.HttpContext.Response.StatusCode = (int) HttpStatusCode.InternalServerError;
                    break;
            }

            SetResult(context, reason, payload);
            LogException(context);
        }

        private static void SetResult(ExceptionContext context, string reason, string payload)
        {
            context.ExceptionHandled = true;
            context.HttpContext.Response.ContentType = "application/json";
            var (exceptionMessage, exceptionStackTrace) = FlattenException(context.Exception);
            context.Result = new JsonResult(
                new ErrorResponse
                {
                    Message = reason,
                    Payload = payload,
                    AdditionalInformation = exceptionMessage,
                    StackTrace = exceptionStackTrace
                });
        }

        private static (string, string) FlattenException(Exception exception)
        {
            const int depthLevels = 10;
            var messageStringBuilder = new StringBuilder();
            var stackTraceStringBuilder = new StringBuilder();
            for (var i = 0; i < depthLevels && exception != null; i++)
            {
                messageStringBuilder.AppendLine(exception.Message);
                stackTraceStringBuilder.Insert(0, exception.StackTrace ?? string.Empty);
                exception = exception.InnerException;
            }

            return (messageStringBuilder.ToString(), stackTraceStringBuilder.ToString());
        }

        private void LogException(ExceptionContext context)
        {
            if (context.Exception is AggregateException aggregateException)
            {
                foreach (var innerException in aggregateException.InnerExceptions)
                {
                    _logger.LogError(innerException, innerException.Message);
                }
            }
            else
            {
                _logger.LogError(context.Exception, context.Exception?.Message);
            }
        }
    }
}
