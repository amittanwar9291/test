using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Repo.Configurations
{
    public class PatientEncryptedConfiguration : IEntityTypeConfiguration<PatientEncrypted>
    {
        public void Configure(EntityTypeBuilder<PatientEncrypted> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("PatientsEncrypted");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.FirstNameInitial).HasMaxLength(1);
            builder.Property(p => p.LastNameInitial).HasMaxLength(1).IsRequired();
            builder.Property(p => p.InstituteId).IsRequired();
            builder.Property(p => p.PatientCipher).IsRequired();
            builder.Property(p => p.BirthDateHash).HasMaxLength(256).IsRequired();
            builder.Property(p => p.ExternalIdentifierHash).HasMaxLength(256).IsRequired();
        }
    }
}
