using System.Threading.Tasks;
using System;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.CVI42;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Core.ImportInterface.Domain.Models;

namespace RadioReport.Core.ImportInterface.Domain.Interfaces
{
    public interface IImportManager
    {
        Task<CheckExistingImportResponse> CheckExistingImport(string studyInstanceUid, string accessionNumber);
       Task<RequestResponse> ImportCVI42(XmlReport xmlReport);
    }
}
