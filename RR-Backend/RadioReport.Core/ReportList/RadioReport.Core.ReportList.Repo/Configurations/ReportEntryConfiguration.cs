using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Repository.Configurations;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Repo.Configurations
{
    public class ReportEntryConfiguration : ReportConfigurationBase<ReportEntry>
    {
        public override void Configure(EntityTypeBuilder<ReportEntry> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.Property(r => r.UserLabel).HasMaxLength(255);
        }
    }
}
