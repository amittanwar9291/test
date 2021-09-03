using AutoFixture;
using RadioReport.TestDataGenerator.Common;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class ThoraxMRTDataGenerator : BaseDataGenerator
    {
        public override List<PageModelBase> GetPages(Guid reportId)
        {
            var fixture = new Fixture();
            fixture.Register<Guid>(() => Guid.Empty);
            var listOfPages = new List<PageModelBase>
            {
                fixture.Create<StudyAreaPage>(),
                fixture.Create<AnamnesisPage>(),
                fixture.Create<TechnologyPage>(),
                fixture.Create<MediastinumPage>(),
                fixture.Create<LungParenchymaPage>(),
                fixture.Create<BonesPage>(),
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
