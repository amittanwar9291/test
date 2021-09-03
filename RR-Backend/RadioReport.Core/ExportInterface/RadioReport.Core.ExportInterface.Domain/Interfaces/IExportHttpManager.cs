using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Logic.Models.Http.Requests;

namespace RadioReport.Core.ExportInterface.Domain.Interfaces
{
    public interface IExportHttpManager
    {
        Task<JObject> Export(ExportRequest exportRequest, bool duplicateExternalIdentifierAllowed);
        Task<string> ExportReport(ExportReportRequest exportReportRequest);
    }
}