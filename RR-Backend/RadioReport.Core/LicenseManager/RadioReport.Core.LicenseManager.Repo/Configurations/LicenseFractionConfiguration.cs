using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Configurations
{
    public class LicenseFractionConfiguration : IEntityTypeConfiguration<LicenseFraction>
    {
        public void Configure(EntityTypeBuilder<LicenseFraction> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("LicenseFractions");
            builder.HasKey(l => l.Id);

            builder.Property(l => l.InstituteId).IsRequired();
            builder.Property(l => l.CreationDate).IsRequired();
            builder.Property(l => l.AllocationDate).IsRequired();
            builder.Property(l => l.ExpirationDate).IsRequired();
            builder.Property(l => l.Token).IsRequired();

            builder.HasOne(l => l.License).WithMany(b => b.LicenseFractions).IsRequired();
        }
    }
}
