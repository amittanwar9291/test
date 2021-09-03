using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class PelvisMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<LocalizationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<ProstataPage>(),
                fixture.Create<MaleGenderPage>(),
                fixture.Create<FemaleGenderPage>(),
                fixture.Create<PelvicFloorPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 6;
            return report;
        }
    }
}
