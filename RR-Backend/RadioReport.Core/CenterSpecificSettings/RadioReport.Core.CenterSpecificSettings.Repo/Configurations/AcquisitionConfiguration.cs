using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Configurations
{
    public class AcquisitionConfiguration : IEntityTypeConfiguration<Acquisition>
    {
        public void Configure(EntityTypeBuilder<Acquisition> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("Acquisitions");
            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.IsDeleted);
            builder.Ignore(p => p.ParentNumber);
            builder.Ignore(p => p.ScopeId);
            builder.HasMany(p => p.Reconstructions).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
