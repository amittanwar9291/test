using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class KneeMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<LocalizationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<BonesPage>(),
                fixture.Create<RibbonsPage>(),
                fixture.Create<OsteoInterfacePage>(),
                fixture.Create<PatellaPage>(),
                fixture.Create<SoftPartsPage>(),
                fixture.Create<SummaryPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 9;
            return report;
        }
    }
}
