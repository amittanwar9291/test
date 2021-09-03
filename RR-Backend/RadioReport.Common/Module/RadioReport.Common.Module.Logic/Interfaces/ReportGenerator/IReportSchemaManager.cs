using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IReportSchemaManager : IManager<ReportSchema>
    {
        Task<IEnumerable<ReportSchema>> GetSelected(IEnumerable<Guid> ids);
        IList<Language> GetLanguages();
    }
}
