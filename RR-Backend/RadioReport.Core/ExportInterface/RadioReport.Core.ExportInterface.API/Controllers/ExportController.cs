using System;
using System.ComponentModel;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Core.ExportInterface.Domain.Interfaces;

namespace RadioReport.Core.ExportInterface.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/Core/ExportInterface")]
    [ApiController]
    public class ExportController : ControllerBase
    {
        private readonly IExportHttpManager _exportHttpManager;

        public ExportController(IExportHttpManager exportHttpManager)
        {
            _exportHttpManager = exportHttpManager;
        }

        [HttpGet("ExportByQuery")]
        public async Task<IActionResult> ExportByQuery([FromQuery] ExportRequest exportRequestQuery) =>
            Ok(await _exportHttpManager.Export(exportRequestQuery, HttpContext.GetDuplicateExternalIdentifierAllowed()));

        [HttpPost("Export")]
        public async Task<IActionResult> Export([FromBody] ExportRequest exportRequest) =>
            Ok(await _exportHttpManager.Export(exportRequest, HttpContext.GetDuplicateExternalIdentifierAllowed()));

        [HttpGet("ExportReport")]
        public async Task<IActionResult> ExportReport([FromQuery] ExportReportRequest exportReportRequest)
        {
            var retValueString = await _exportHttpManager.ExportReport(exportReportRequest);
            var stream = new MemoryStream(Convert.FromBase64String(retValueString));

            return File(stream, "application/pdf", "ExportReport.pdf");
        }
    }
}
