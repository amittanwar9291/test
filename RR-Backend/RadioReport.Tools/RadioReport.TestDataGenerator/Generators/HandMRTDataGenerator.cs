using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class HandMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<LocalizationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<BonesPage>(),
                fixture.Create<CapsuleAndRibbonsPage>(),
                fixture.Create<TendinopathyPage>(),
                fixture.Create<NerveCompressionPage>(),
                fixture.Create<EvaluationPage>()
            };
            listOfPages.ForEach(page => page.ReportId = reportId);
            return listOfPages;
        }

        public override Report GetReport()
        {
            var report = base.GetReport();
            report.TotalPageCount = 8;
            return report;
        }
    }
}
