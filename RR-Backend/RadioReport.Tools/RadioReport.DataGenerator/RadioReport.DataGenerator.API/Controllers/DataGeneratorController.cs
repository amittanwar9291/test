using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.DataGenerator.Domain.Interfaces;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.DataGenerator.Domain.Helpers;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.DataGenerator.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/DataGenerator")]
    [ApiController]
    public class DataGeneratorController : ControllerBase
    {
        private readonly IDataGeneratorService _dataGeneratorService;
        private readonly ITranslationsManager _translationsManager;

        public DataGeneratorController (IDataGeneratorService dataGeneratorService,
            ITranslationsManager translationsManager)
        {
            _dataGeneratorService = dataGeneratorService;
            _translationsManager = translationsManager;
        }

        [HttpGet("{module}/page/{page}/rrid/duplicates")]
        public ActionResult<IEnumerable<string>> GetRRidsDuplicates(string module, string page)
        {
            var data = _dataGeneratorService.GetValuesForPage(module, page);
            var duplicates = _dataGeneratorService.FindDuplicates(data);
            return Ok(duplicates);
        }

        [HttpGet("{module}/page/{page}/rrid")]
        public ActionResult<IEnumerable<RadioReportValue>> GetRRids(string module, string page)
        {
            var data = _dataGeneratorService.GetValuesForPage(module, page);
            return Ok(data);
        }

        [HttpGet("{module}/page/{page}")]
        public ActionResult<PageModelBase> GetExamplePage(string module, string page)
        {
            var data = _dataGeneratorService.GetExamplePage(module, page);
            return Ok(data);
        }

        [HttpGet("{module}/page/{page}/missingtranslations")]
        public ActionResult<IDictionary<string, IDictionary<string, string>>> GetMissingTranslations(string module, string page, string languageCode)
        {
            var data = _dataGeneratorService.GetExamplePage(module, page);
            var pageType = _dataGeneratorService.GetPageType(module, page);
            PageTypeNames.PageNumbersDictionary.TryGetValue(data.PageTypeName, out var pageNumber);
            var missingTranslations = TranslationsReader.ProcessModelToGetTranslations(_translationsManager, pageType, languageCode, module, pageNumber);
            return Ok(missingTranslations);
        }
    }
}
