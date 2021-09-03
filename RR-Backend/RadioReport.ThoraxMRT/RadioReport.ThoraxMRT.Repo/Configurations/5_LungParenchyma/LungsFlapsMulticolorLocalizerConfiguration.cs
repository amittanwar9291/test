using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Repo.Configurations
{
    public class LungsFlapsMulticolorLocalizerConfiguration : IEntityTypeConfiguration<LungsFlapsMulticolorLocalizer>
    {
        public void Configure(EntityTypeBuilder<LungsFlapsMulticolorLocalizer> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable(nameof(LungsFlapsMulticolorLocalizer) + "s");

            builder.HasKey(p => p.Id);
        }
    }
}
