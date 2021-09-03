using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo.Configurations
{
    public class CurrentCreditScoreConfiguration : IEntityTypeConfiguration<CurrentCreditScore>
    {
        public void Configure(EntityTypeBuilder<CurrentCreditScore> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("CurrentCreditScores");
            builder.HasKey(s => s.Id);

            builder.Property(s => s.InstituteId).IsRequired();
            builder.Property(s => s.LicenseId).IsRequired();
            builder.Property(s => s.IsActive).IsRequired();
            builder.Property(s => s.ScoreCipher).IsRequired().IsConcurrencyToken();
            builder.Property(s => s.OverdraftCipher).IsRequired().IsConcurrencyToken();

            builder.HasIndex(s => new { s.InstituteId, s.IsActive });
            builder.HasIndex(s => s.LicenseId).IsUnique();
        }
    }
}
