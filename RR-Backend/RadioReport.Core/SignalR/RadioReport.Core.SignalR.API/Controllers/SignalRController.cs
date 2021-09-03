using Microsoft.AspNetCore.Mvc;

namespace RadioReport.Core.SignalR.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/Core/SignalR")]
    public class SignalRController : ControllerBase
    {
        // temp until docker
        [HttpGet("IsAlive")]
        public bool IsAlive() => true;
    }
}