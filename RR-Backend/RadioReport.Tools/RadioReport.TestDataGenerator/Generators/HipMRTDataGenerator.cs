using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.TestDataGenerator.Generators
{
    public class HipMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<LocalizationPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<BonesPage>(),
                fixture.Create<CartilageAndLabrumPage>(),
                fixture.Create<CapsuleAndLigamentsPage>(),
                fixture.Create<MusclesAndTendonsPage>(),
                fixture.Create<SoftTissuePage>(),
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
