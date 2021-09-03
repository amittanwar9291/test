using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Core.FileExposer.Domain.Interface;
using RadioReport.Core.FileExposer.Domain.Models;

namespace RadioReport.Core.FileExposer.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [ApiVersion( "1.0" )]
    [Route("api/Core/FileExposer")]
    public class FileExposerController : ControllerBase
    {
        private readonly IFileExposerHttpManager _httpManager;

        public FileExposerController(IFileExposerHttpManager httpManager)
        {
            _httpManager = httpManager;
        }

        [AllowAnonymous]
        [HttpGet("InfoFile/{category}/{id}/{languageCode}")]
        public async Task<InfoFileResponse> GetInfoFile(string category, string id, string languageCode)
        {
            var infoFileRequest = new InfoFileRequest
            {
                Category = category,
                Identifier = id,
                LanguageCode = languageCode
            };

            return await _httpManager.GetInfoFile(infoFileRequest);
        }
    }
}