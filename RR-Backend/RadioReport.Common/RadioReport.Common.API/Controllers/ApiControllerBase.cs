using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;

namespace RadioReport.Common.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public abstract class ApiControllerBase<TManager, TModel> : ControllerBase
        where TManager : IManager<TModel>
        where TModel : ModelBase
    {
        protected TManager Manager { get; }

        protected ApiControllerBase(TManager manager)
        {
            Manager = manager;
        }

        [Authorized(Role.Block)]
        [HttpGet]
        public virtual async Task<ActionResult<IEnumerable<TModel>>> Get() => Ok(await Manager.GetAllAsync());

        [Authorized(Role.Block)]
        [HttpGet("{id}")]
        public virtual async Task<ActionResult<TModel>> Get(Guid id) => Ok(await Manager.GetByIdAsync(id));

        [Authorized(Role.Block)]
        [HttpPost]
        public virtual async Task<ActionResult<TModel>> Add([FromBody] TModel model) => Ok(await Manager.AddAsync(model));

        [Authorized(Role.Block)]
        [HttpPut("{id}")]
        public virtual async Task<ActionResult<TModel>> Edit(Guid id, [FromBody] TModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            model.Id = id;

            return Ok(await Manager.UpdateAsync(model));
        }

        [Authorized(Role.Block)]
        [HttpPost("Edit")]
        public virtual async Task<ActionResult<TModel>> Edit([FromBody] TModel model) => Ok(await Manager.UpdateAsync(model));

        [Authorized(Role.Block)]
        [HttpDelete("{id}")]
        public virtual async Task<ActionResult> Delete(Guid id)
        {
            await Manager.RemoveAsync(id);

            return Ok();
        }

        [Authorized(Role.Block)]
        [HttpDelete]
        public virtual async Task<ActionResult> DeleteAll()
        {
            await Manager.RemoveAllAsync();

            return Ok();
        }
    }
}
