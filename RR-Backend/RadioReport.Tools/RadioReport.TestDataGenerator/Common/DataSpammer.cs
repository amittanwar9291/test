using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using Serilog;
using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Common
{
    public class DataSpammer<T> : IDataSpammer where T: Report
    {
        private IDataGenerator _dataGenerator;
        private ILogger _logger;

        public DataSpammer(IDataGenerator dataGenerator, ILogger logger)
        {
            _dataGenerator = dataGenerator;
            _logger = logger;
        }

        public async Task SeedReportsAndPages(IHttpClientWrapper httpClientWrapper, string moduleUrl, int numberOfRequests = 1)
        {
            if (httpClientWrapper == null) throw new ArgumentNullException(nameof(httpClientWrapper));

            var reportUrl = $"{moduleUrl}/Report";

            for (int i = 0; i < numberOfRequests; i++)
            {
                var report = _dataGenerator.GetReport();
                try
                {
                    report = await httpClientWrapper.SendPostRequest<T>(reportUrl, report);
                }
                catch (Exception ex)
                {
                    var message = $"Request at {reportUrl} throws with message: {ex.Message} ";
                    _logger.Error(message + "Details: {@Exception}", ex);
                    continue;
                }

                var pages = _dataGenerator.GetPages(report.Id);
                var pagesTasks = new Task<object>[pages.Count];
                for (int j = 0; j < pages.Count; j++)
                {
                    PageModelBase page = pages[j];
                    page.ReportId = report.Id;
                    pagesTasks[j] = sendPage(httpClientWrapper, page, moduleUrl);
                }
                try
                {
                    await Task.WhenAll(pagesTasks);
                }
                catch (Exception ex)
                {
                    var message = $"Page request throws with message: {ex.Message} ";
                    _logger.Error(message + "Details: {@Exception}", ex);
                }
            }
        }

        private Task<object> sendPage(IHttpClientWrapper httpClientWrapper, PageModelBase page, string moduleUrl)
        {
            var pageTypeName = getPageTypeName(page.PageTypeName);
            return httpClientWrapper.SendPostRequest($"{moduleUrl}/{pageTypeName}", page);
        }

        private string getPageTypeName(string pageTypeName)
        {
            if (pageTypeName == PageTypeNames.ThoraxCtBones)
            {
                return "Bones";
            }
            else if (pageTypeName == PageTypeNames.CardioMrtPericardiumVessels)
            {
                return "PericardiumVessels";
            }
            else if (pageTypeName == PageTypeNames.CardioMrtSummary)
            {
                return "Summary";
            }
            else if (pageTypeName == PageTypeNames.CardioMrtSpatialRequirement)
            {
                return "SpatialRequirement";
            }
            else if (pageTypeName == PageTypeNames.SpineMrtSpinalCanal)
            {
                return "SpinalCanal";
            }
            return pageTypeName.Substring(pageTypeName.LastIndexOf('_') + 1);
        }
    }
}
