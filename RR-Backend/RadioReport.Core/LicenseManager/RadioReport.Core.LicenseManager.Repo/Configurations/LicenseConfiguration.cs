using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Configurations
{
    public class LicenseConfiguration : IEntityTypeConfiguration<License>
    {
        public void Configure(EntityTypeBuilder<License> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("Licenses");
            builder.HasKey(b => b.Id);

            builder.Property(b => b.CreationDate).IsRequired();
            builder.Property(b => b.ExpirationDate).IsRequired();
            builder.Property(b => b.InstituteId).IsRequired();
            builder.Property(b => b.LicensingType).IsRequired();
            builder.Property(b => b.Order).IsRequired();
            builder.Property(b => b.IsActive).IsRequired();
            builder.Property(b => b.Token).IsRequired();
        }
    }
}
