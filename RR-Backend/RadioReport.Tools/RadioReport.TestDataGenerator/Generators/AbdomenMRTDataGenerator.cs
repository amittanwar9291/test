using AutoFixture;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.TestDataGenerator.Common;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class AbdomenMRTDataGenerator : BaseDataGenerator 
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<ExaminationRegionPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<LiverPage>(),
                fixture.Create<SpleenPage>(),
                fixture.Create<PancreasPage>(),
                fixture.Create<KidneysPage>(),
                fixture.Create<AdrenalGlandsPage>(),
                fixture.Create<GastrointestinalTractPage>(),
                fixture.Create<PeritonealCavityPage>(),
                fixture.Create<LymphaticSystemPage>(),
                fixture.Create<SummaryPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 12;
            return report;
        }
    }
}
