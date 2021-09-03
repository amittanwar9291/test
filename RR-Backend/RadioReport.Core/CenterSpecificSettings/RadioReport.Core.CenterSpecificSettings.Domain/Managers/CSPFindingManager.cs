using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using RadioReport.Core.CenterSpecificSettings.Domain.Interfaces;
using System.Threading.Tasks;
using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using System;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;

namespace RadioReport.Core.CenterSpecificSettings.Domain.Managers
{
    public class CSPFindingManager : ICSPFindingManager
    {
        private readonly ICSPFindingRepository repository;

        public CSPFindingManager(ICSPFindingRepository repository)
        {
            this.repository = repository;
        }

        public async Task<CSPFinding> Get(CSPFindingType type) => await repository.GetByTypeAsync(type);

        public async Task<CSPFinding> Get(Guid id) => await repository.GetByIdAsync(id);

        public async Task<IEnumerable<CSPFinding>> GetAll() => await repository.GetAllAsync();

        public async Task<CSPFinding> Update(CSPFinding model)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            if (model.Id == Guid.Empty)
            {
                throw new NotFoundException("Model with Id = 0 cannot be found and updated.");
            }

            var result = repository.Update(model);
            await repository.SaveChangesAsync();

            return result;
        }
    }
}
