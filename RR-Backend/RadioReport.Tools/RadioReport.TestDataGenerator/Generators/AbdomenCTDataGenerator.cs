using AutoFixture;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.TestDataGenerator.Common;
using System;
using System.Collections.Generic;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class AbdomenCTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<AreaOfInvestigationPage>(),
                fixture.Create<MedicalHistoryPage>(),
                fixture.Create<TechnologyPage>()
            };

            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 3;
            return report;
        }
    }
}