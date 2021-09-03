using System;
using System.Collections.Generic;
using AutoFixture;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.TestDataGenerator.Generators
{
    public class MammaMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<PatientIndicationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<AnatomyPage>(),
                fixture.Create<AnatomyEnhancementPage>(),
                fixture.Create<DiagnosisPage>(),
                fixture.Create<LymphsPage>(),
                fixture.Create<BonesPage>(),
                fixture.Create<RatingPage>()
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
