using AutoFixture;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Models;
using RadioReport.TestDataGenerator.Common;
using System;
using System.Collections.Generic;

namespace RadioReport.TestDataGenerator.Generators
{
    public class HeadMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<ExaminationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<VesselsPage>(),
                fixture.Create<MeningesPage>(),
                fixture.Create<CortexPage>(),
                fixture.Create<BasalNucleiPage>(),
                fixture.Create<BrainstemCranialNervesPage>(),
                fixture.Create<CerebrospinalFluidSpacePage>(),
                fixture.Create<SellarRegionPage>(),
                fixture.Create<FacialSkullPage>(),
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
