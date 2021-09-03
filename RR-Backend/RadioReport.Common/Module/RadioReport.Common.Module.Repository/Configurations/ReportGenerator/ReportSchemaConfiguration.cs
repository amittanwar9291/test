using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Repository.Configurations.ReportGenerator
{
    public class ReportSchemaConfiguration : IEntityTypeConfiguration<ReportSchema>
    {
        public void Configure(EntityTypeBuilder<ReportSchema> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("ReportSchemas");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.ReportTypeName)
                .HasColumnType("varchar(50)")
                .IsRequired();
            builder.Property(e => e.Paragraphs).HasConversion(
                    v => JsonConvert.SerializeObject(v),
                    v => JsonConvert.DeserializeObject<List<Paragraph>>(v)
                );
            builder.Property(p => p.VersionName)
                .HasColumnType("varchar(50)")
                .IsRequired();
            builder.HasIndex(p => new { p.ReportTypeName, p.VersionName })
                .IsUnique();
            builder.HasOne(s => s.Session)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
