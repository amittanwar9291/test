using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.API.Middlewares
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlerMiddleware> _logger;

        public ExceptionHandlerMiddleware(RequestDelegate next, ILogger<ExceptionHandlerMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        // handles exceptions unhandled by middlewares + mvc exception filters, should be first chained middleware
        public async Task InvokeAsync(HttpContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            try
            {
                await _next(context);
            }
            catch (Exception exception)
            {
                await HandleException(exception, context);
            }
        }

        private async Task HandleException(Exception exception, HttpContext context)
        {
            _logger.LogError(exception, exception.Message);

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;
            var response = new ErrorResponse
            {
                Message = ErrorMessageResources.UnknownError,
                AdditionalInformation = exception.Message,
                StackTrace = exception.StackTrace ?? string.Empty
            };
            await context.Response.WriteAsync(response.AsJson());
        }
    }
}
