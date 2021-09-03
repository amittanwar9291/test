using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Configurations
{
    public class CSPFindingConfiguration : IEntityTypeConfiguration<CSPFinding>
    {
        public void Configure(EntityTypeBuilder<CSPFinding> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("CSPFindings");
            builder.HasKey(p => p.Id);
            builder.HasIndex(p => p.FindingType).IsUnique();
            builder.HasMany(p => p.Sets).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
