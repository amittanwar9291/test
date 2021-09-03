using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class CardioMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            fixture.Register<Guid?>(() => null);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<AreaOfExaminationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<FlapsPage>(),
                fixture.Create<FindingsVentriclesPage>(),
                fixture.Create<LeftVentriclePage>(),
                fixture.Create<RightVentriclePage>(),
                fixture.Create<SpatialRequirementPage>(),
                fixture.Create<PericardiumVesselsPage>(),
                fixture.Create<SummaryPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 10;
            return report;
        }
    }
}
