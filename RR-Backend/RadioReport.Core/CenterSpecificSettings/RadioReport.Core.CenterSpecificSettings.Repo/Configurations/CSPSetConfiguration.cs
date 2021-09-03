using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Configurations
{
    public class CSPSetConfiguration : IEntityTypeConfiguration<CSPSet>
    {
        public void Configure(EntityTypeBuilder<CSPSet> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("CSPSets");
            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.IsDeleted);
            builder.Ignore(p => p.ParentNumber);
            builder.Ignore(p => p.ScopeId);
            builder.HasMany(p => p.Sequences).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.Acquisitions).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
