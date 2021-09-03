using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Repository;
using RadioReport.Core.ImportInterface.Domain.Interfaces;

namespace RadioReport.Core.ImportInterface.Repo.Repositories
{
    public class CVI42ImportsRepository  : RepositoryBase<CVI42Imports>, ICVI42ImportsRepository
    {
        private readonly ILogger<CVI42ImportsRepository> _logger;
        
        public CVI42ImportsRepository(ImportInterfaceDbContext dbContext, ILogger<CVI42ImportsRepository> logger) : base(dbContext)
        {
            _logger = logger;
        }
    }
}
