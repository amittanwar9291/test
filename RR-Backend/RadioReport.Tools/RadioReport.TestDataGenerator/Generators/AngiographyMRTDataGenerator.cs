﻿using AutoFixture;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.TestDataGenerator.Common;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Generators
{
    public class AngiographyMRTDataGenerator : BaseDataGenerator
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
                fixture.Create<SupraaorticVesselsPage>(),
                fixture.Create<UpperArteriesPage>(),
                fixture.Create<AortaPage>(),
                fixture.Create<AbdomenPage>(),
                fixture.Create<PelvisLegArteriesPage>(),
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
