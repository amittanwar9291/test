using System;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.CVI42;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Core.ImportInterface.Domain.Interfaces;
using RadioReport.Core.ImportInterface.Domain.Models;

namespace RadioReport.Core.ImportInterface.API.Controller
{
    [ApiVersion( "1.0" )]
    [Route("api/Core/ImportInterface")]
    [ApiController]
    public class ImportController : ControllerBase
    {
        private readonly IImportManager _importManager;

        public ImportController(IImportManager importManager)
        {
            _importManager = importManager;
        }

        [HttpPost("ImportCVI42")]
        public async Task<ActionResult<RequestResponse>> ImportCVI42([FromBody] XmlReport xmlReport) => 
             await _importManager.ImportCVI42(xmlReport);
        
        [HttpGet("CheckExistingImport")]
        public async Task<ActionResult<CheckExistingImportResponse>> CheckExistingImport(string studyInstanceUid, string accessionNumber) =>
            await _importManager.CheckExistingImport(studyInstanceUid, accessionNumber);
    }
}
