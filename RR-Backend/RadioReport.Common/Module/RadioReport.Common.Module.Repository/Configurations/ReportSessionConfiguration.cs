using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class ReportSessionConfiguration : IEntityTypeConfiguration<ReportSession>
    {
        public void Configure(EntityTypeBuilder<ReportSession> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("ReportSession");
            builder.HasKey(s => s.Id);
            builder.HasIndex(s => s.ReportId).IsUnique();
        }
    }
}
