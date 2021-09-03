using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class ReportResultConfigurationBase : IEntityTypeConfiguration<ReportResult>
    {
        public void Configure(EntityTypeBuilder<ReportResult> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("ReportResults");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.ReportTypeName).HasMaxLength(255);
            builder.Ignore(r => r.PatientData);
            builder.Ignore(r => r.ReportHtml);
            builder.Ignore(r => r.IsDeleted);
            builder.Property(r => r.ReportSummary).HasConversion(
                    v => JsonConvert.SerializeObject(v),
                    v => JsonConvert.DeserializeObject<List<ReportSummaryModel>>(v)
                );
        }
    }
}
