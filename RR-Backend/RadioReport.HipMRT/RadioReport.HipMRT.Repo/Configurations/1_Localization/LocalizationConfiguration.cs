using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Configurations
{ 
    public class LocalizationConfiguration : IEntityTypeConfiguration<Localization>
    { 
        public void Configure(EntityTypeBuilder<Localization> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable("Localizations");

            builder.HasKey(p => p.Id);
        }
    }
}
