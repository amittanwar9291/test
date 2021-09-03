using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.API.Controllers.RSD
{
    [ApiVersion( "1.0" )]
    [Route("api/{module}/RSD/ReportSchema")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class ReportSchemaController : ApiControllerBase<IReportSchemaManager, ReportSchema>
    {
        public ReportSchemaController(IReportSchemaManager reportSchemaManager) : base(reportSchemaManager)
        {
        }

        [Authorized(Role.Admins)]
        [HttpPost]
        public override async Task<ActionResult<ReportSchema>> Add([FromBody] ReportSchema model)
        {
            return await base.Add(model);
        }

        [Authorized(Role.Admins)]
        [HttpDelete("{id}")]
        public override async Task<ActionResult> Delete(Guid id)
        {
            return await base.Delete(id);
        }

        [Authorized(Role.Admins)]
        [HttpPut("{id}")]
        public override async Task<ActionResult<ReportSchema>> Edit(Guid id,
            [FromBody] ReportSchema model)
        {
            return await base.Edit(id, model);
        }

        [Authorized(Role.Admins)]
        [HttpPost("Edit")]
        public override async Task<ActionResult<ReportSchema>> Edit([FromBody] ReportSchema model)
        {
            return await base.Edit(model);
        }

        [Authorized(Role.Admins)]
        [HttpGet]
        public override async Task<ActionResult<IEnumerable<ReportSchema>>> Get()
        {
            return await base.Get();
        }

        [Authorized(Role.Admins)]
        [HttpGet("{id}")]
        public override async Task<ActionResult<ReportSchema>> Get(Guid id)
        {
            return await base.Get(id);
        }

        // GET api/v1/Core/ReportSchema/GetEmpty
        [Authorized(Role.All)]
        [HttpGet("GetEmpty")]
        public static ActionResult<ReportSchema> GetEmpty()
        {
            return new ReportSchema
            {
                Id = Guid.Empty,
                ReportTypeName = ReportTypeNames.HipMRT,
                Paragraphs =
                {
                    new Paragraph
                    {
                        Name = "Title",
                        Order = 1,
                        Lines =
                        {
                            new Line
                            {
                                LevelOrder = 1,
                                Translations =
                                {
                                    new Translation
                                    {
                                        LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                        Text = "Example translation"
                                    }
                                },
                                InFixCondition = "a == 0",
                                PostFixCondition = "a 0 ==",
                                ChildLines =
                                {
                                    new Line
                                    {
                                        LevelOrder = 1,
                                        Translations =
                                        {
                                            new Translation
                                            {
                                                LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                Text = "Example translation2"
                                            }
                                        },
                                        InFixCondition = "a == 0",
                                        PostFixCondition = "a 0 =="
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }

        // GET api/v1/Core/ReportSchema/Languages
        [Authorized(Role.Admins)]
        [HttpGet("Languages")]
        public ActionResult<IList<string>> GetLanguages()
        {
            return Ok(Manager.GetLanguages());
        }

        // POST api/v1/Core/ReportSchema/GetSelected
        [Authorized(Role.Admins)]
        [HttpPost("GetSelected")]
        public async Task<ActionResult<IEnumerable<ReportSchema>>> GetSelected([FromBody] IEnumerable<Guid> ids)
        {
            return Ok(await Manager.GetSelected(ids));
        }
    }
}
