using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Repository.Configurations
{
    public abstract class ReportConfigurationBase<T> : IEntityTypeConfiguration<T> where T : ReportBase
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("Reports");

            builder.HasKey(r => r.Id);
            builder.Property(r => r.UserId).IsRequired();
            builder.Property(r => r.PatientId).IsRequired();
            builder.Property(r => r.PresetCode).HasMaxLength(255);
            builder.Property(r => r.ExaminationType).HasMaxLength(50).IsRequired();
            builder.Property(r => r.Language).HasMaxLength(50);
            builder.Property(r => r.Evaluation).HasMaxLength(255);
        }
    }
}
