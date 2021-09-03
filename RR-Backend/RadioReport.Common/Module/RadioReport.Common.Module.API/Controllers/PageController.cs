using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api")]
    [ApiController]
    public class PageController<T> : ControllerBase where T : PageModelBase<T>, new()
    {
        private readonly IPageHttpManager<T> _pageHttpManager;

        public PageController(IPageHttpManager<T> pageHttpManager)
        {
            _pageHttpManager = pageHttpManager;
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost]
        public async Task<ActionResult<T>> Add(T model) => Ok(await _pageHttpManager.Add(model));

        [Authorized(Role.AllButViewer)]
        [HttpPut("{id}")]
        public async Task<ActionResult<T>> Edit(Guid id, T model) => Ok(await _pageHttpManager.Edit(id, model));

        [Authorized(Role.All)]
        [HttpGet("{id}")]
        public async Task<ActionResult<T>> Get(Guid id) => Ok(await _pageHttpManager.GetById(id));

        [Authorized(Role.All)]
        [HttpGet("GetByReport/{reportId}")]
        public async Task<ActionResult<T>> GetByReport(Guid reportId) => Ok(await _pageHttpManager.GetByReportId(reportId));

        [Authorized(Role.All)]
        [HttpGet("GetForTextReport/{id}")]
        public async Task<ActionResult<IEnumerable<RadioReportValue>>> GetValuesForReport(Guid id) => Ok(await _pageHttpManager.GetValuesForReport(id));

        [Authorized(Role.All)]
        [HttpGet("GetEmpty")]
        public ActionResult<T> GetEmpty() => Ok(_pageHttpManager.GetEmpty());
    }
}
