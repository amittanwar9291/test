using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class NeckMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<ExaminationPage>(),
                fixture.Create<IndicationPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<PharynxPage>(),
                fixture.Create<LarynxPage>(),
                fixture.Create<SoftTissuesPage>(),
                fixture.Create<ThyroidPage>(),
                fixture.Create<LymphNodesPage>(),
                fixture.Create<VesselsPage>(),
                fixture.Create<BonesPage>(),
                fixture.Create<SummaryPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 11;
            return report;
        }
    }
}
