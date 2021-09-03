using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Repository.Configurations;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class ReportConfiguration : ReportConfigurationBase<Report>
    {
        public override void Configure(EntityTypeBuilder<Report> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            base.Configure(builder);

            builder.HasMany(r => r.Pages).WithOne().HasForeignKey(p => p.ReportId);
            builder.HasMany(r => r.ReportResults).WithOne().HasForeignKey(p => p.ReportId);
        }
    }
}
