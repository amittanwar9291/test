using System;
using System.Collections.Generic;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api")]
    [ApiController]
    public class PageWithImageController<T> : PageController<T> where T : PageModelBase<T>, new()
    {
        private readonly IPageWithImageHttpManager<T> _pageWithImageHttpManager;

        public PageWithImageController(IPageWithImageHttpManager<T> pageWithImageHttpManager) : base(pageWithImageHttpManager)
        {
            _pageWithImageHttpManager = pageWithImageHttpManager;
        }

        [Authorized(Role.All)]
        [HttpGet("ImageFile/{imageId}")]
        public virtual async Task<ActionResult> DownloadImageFile(Guid imageId)
        {
            var imageFile = await _pageWithImageHttpManager.DownloadImageFile(imageId);
            if (imageFile == null) return NotFound();

            return File(imageFile.Stream, MediaTypeNames.Application.Octet, imageFile.FileName);
        }

        [Authorized(Role.AllButViewer)]
        [HttpDelete("ImageFile/{reportId}/{imageId}")]
        public async Task<ActionResult> RemoveImageFile(Guid reportId, Guid imageId)
        {
            await _pageWithImageHttpManager.RemoveImageFile(reportId, imageId);

            return Ok();
        }

        [Authorized(Role.AllButViewer)]
        [HttpDelete("ImageFile")]
        public async Task<ActionResult> RemoveImageFileRange(Guid reportId, [FromBody] IEnumerable<Guid> idsToDelete)
        {
            await _pageWithImageHttpManager.RemoveImageFileRange(reportId, idsToDelete);

            return Ok();
        }

        /// <param name="reportId">Id of the report</param>
        /// <param name="entityId">Id of entity with which you want to connect uploaded file</param>
        /// <param name="fileType">Type of uploaded image file</param>
        // POST api/v1/Module/Page/ImageFile/{reportId}/{entityId}
        [Authorized(Role.AllButViewer)]
        [HttpPost("ImageFile/{reportId}/{entityId}")]
        public virtual async Task<ActionResult> UploadImageFile(Guid reportId, Guid entityId, [FromForm] string fileType = null)
        {
            var result = _pageWithImageHttpManager.VerifyFileType(fileType);
            if (result == UploadImageResult.MissingFileType) return BadRequest("Missing file type!");
            if (result == UploadImageResult.InvalidFileType) return BadRequest("Incorrect file type!");

            var file = Request.Form?.Files?[0];
            if (file == null || file.Length <= 0) return BadRequest("No upload data!");

            return Ok(await _pageWithImageHttpManager.AddImageFile(reportId, entityId, file, fileType));
        }
    }
}
