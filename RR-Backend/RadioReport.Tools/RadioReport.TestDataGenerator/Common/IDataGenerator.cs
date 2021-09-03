using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Common
{
    public interface IDataGenerator
    {
        Report GetReport();
        List<PageModelBase> GetPages(Guid reportId);
    }
}
