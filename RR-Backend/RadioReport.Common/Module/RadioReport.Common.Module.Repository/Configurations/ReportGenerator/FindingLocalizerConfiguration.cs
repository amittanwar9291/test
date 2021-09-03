using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;

namespace RadioReport.Common.Module.Repository.Configurations.ReportGenerator
{
    public class FindingLocalizerConfiguration : IEntityTypeConfiguration<FindingLocalizer>
    {
        public void Configure(EntityTypeBuilder<FindingLocalizer> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.ToTable("FindingLocalizers");
            builder.HasKey(f => f.Id);
            
            builder.Property(f => f.Code).IsRequired().HasMaxLength(25);
            builder.Property(f => f.Content).IsRequired();
            builder.Property(f => f.Mapping).IsRequired();

            builder.HasIndex(f => f.Code).IsUnique();
        }
    }
}
