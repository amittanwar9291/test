using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using System;

namespace RadioReport.DataGenerator.Domain.Interfaces
{
    public interface IDataGeneratorService
    {
        Type GetPageType(string moduleName, string pageName);
        
        public PageModelBase GetExamplePage(string moduleName, string pageName);

        public IEnumerable<RadioReportValue> GetValuesForPage(string moduleName, string pageName);

        public IEnumerable<string> FindDuplicates(IEnumerable<RadioReportValue> values);
    }
}
