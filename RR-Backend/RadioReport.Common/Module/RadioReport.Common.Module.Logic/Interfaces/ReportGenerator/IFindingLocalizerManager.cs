using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IFindingLocalizerManager : IManager<FindingLocalizer>
    {
        Task<FindingLocalizer> GetByCode(string code, bool localizersBackground);
        Task<string> CreateCheckedLocalizers(string localizerRegexCapture, bool localizersBackground,
            LocalizerType localizerType, string languageCode, IEnumerable<MultiLocalizer> specialLocalizers);
    }
}
