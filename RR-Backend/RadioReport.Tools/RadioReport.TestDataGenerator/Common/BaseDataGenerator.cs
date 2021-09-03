using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.TestDataGenerator.Common
{
    public abstract class BaseDataGenerator : IDataGenerator
    {
        public abstract List<PageModelBase> GetPages(Guid reportId);

        public virtual Report GetReport()
        {
            return new Report
            {
                Evaluation = "BIRADS 4",
                ExaminationDate = DateTime.Now,
                ExaminationType = "MammaMRT",
                FindingsDate = DateTime.Now,
                FreeField = "Free 42",
                Language = "DE | DE",
                PatientAge = 24,
                PresetCode = "full",
                Status = ReportStatus.InProgress
            };
        }
    }
}
