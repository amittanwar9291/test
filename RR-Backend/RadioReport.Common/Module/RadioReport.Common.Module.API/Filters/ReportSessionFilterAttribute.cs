using System;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.API.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class ReportSessionFilterAttribute : Attribute, IResourceFilter
    {
        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            if (!Guid.TryParse(ExtractReportIdString(context), out var reportId) || reportId.IsEmpty()) return;

            var reportService = context.HttpContext.RequestServices.GetRequiredService<IReportService>();
            var reportSessionResult = reportService.VerifyReportSession(reportId).Result;
            var isUpdateResultRequest = IsUpdateReportResultRequest(context);
            var logger = context.HttpContext.RequestServices.GetRequiredService<ILogger<ReportSessionFilterAttribute>>();
            var moduleContext = context.HttpContext.RequestServices.GetRequiredService<ModuleContext>();
            if (isUpdateResultRequest && reportSessionResult == ReportSessionResult.NoSessionExists)
            {
                logger.LogWarning($"UpdateReportResult request without valid report session. Module: {moduleContext.Type}. Report: {reportId}");
            }
            switch (reportSessionResult)
            {
                case ReportSessionResult.NoSessionExists when !IsGetReportRequest(context):
                    SetConflictResult(context);
                    return;
                case ReportSessionResult.ReportLocked:
                    SetLockedResult(context);
                    break;
                case ReportSessionResult.SessionOwner when IsGetReportRequest(context):
                    reportService.RemoveReportSession(reportId).Wait();
                    break;
                // TODO exclude UpdateReportResult request until problems fixed
                case ReportSessionResult.NoSessionExists when IsUpdateReportResultRequest(context):
                case ReportSessionResult.NoSessionExists when IsGetReportRequest(context):
                case ReportSessionResult.SessionOwner:
                case ReportSessionResult.ReportSessionExcluded:
                    return;
                default:
                    throw new ArgumentOutOfRangeException(nameof(context));
            }
        }

        public void OnResourceExecuted(ResourceExecutedContext context)
        {
        }

        private static string ExtractReportIdString(ActionContext context)
        {
            if (context.RouteData.Values.ContainsKey(RouteDataKeys.Id))
            {
                return context.RouteData.Values[RouteDataKeys.Id].ToString();
            }

            if (context.HttpContext.Request.Query.ContainsKey(RouteDataKeys.ReportId))
            {
                return context.HttpContext.Request.Query[RouteDataKeys.ReportId];
            }

            return string.Empty;
        }

        private static bool IsGetReportRequest(ActionContext context)
        {
            if (context.HttpContext.Request.Method != HttpMethod.Get.Method || !context.RouteData.Values.ContainsKey(RouteDataKeys.Action))
            {
                return false;
            }

            var actionName = context.RouteData.Values[RouteDataKeys.Action]?.ToString()?.ToUpperInvariant();

            return actionName == "GET";
        }

        private static bool IsUpdateReportResultRequest(ActionContext context)
        {
            if (context.HttpContext.Request.Method != HttpMethod.Post.Method || !context.RouteData.Values.ContainsKey(RouteDataKeys.Action))
            {
                return false;
            }

            var actionName = context.RouteData.Values[RouteDataKeys.Action]?.ToString()?.ToUpperInvariant();

            return actionName == "UPDATEREPORTRESULT";
        }

        private static void SetConflictResult(ResourceExecutingContext context)
        {
            context.HttpContext.Response.StatusCode = (int) HttpStatusCode.Conflict;
            context.Result = new JsonResult(new
            {
                Message = ErrorMessageResources.ReportSessionExpired,
                AdditionalInformation = ErrorMessageResources.ReportSessionExpired
            });
        }

        private static void SetLockedResult(ResourceExecutingContext context)
        {
            context.HttpContext.Response.StatusCode = (int) HttpStatusCode.Locked;
            context.Result = new JsonResult(new
            {
                Message = ErrorMessageResources.ReportSessionLocked,
                AdditionalInformation = ErrorMessageResources.ReportSessionLocked
            });
        }
    }
}
