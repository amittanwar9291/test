using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IReportSchemaRepository : IRepository<ReportSchema>
    {
        Task<IEnumerable<ReportSchema>> GetSelected(IEnumerable<Guid> ids);
        Task<ReportSchema> GetByReportTypeNameAsync(string reportTypeName);
        new Task Delete(Guid id);
    }
}
