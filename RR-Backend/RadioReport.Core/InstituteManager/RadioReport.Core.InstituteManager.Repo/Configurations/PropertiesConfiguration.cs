using System;
using System.Collections.Generic;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.Core.InstituteManager.Repo.Configurations
{
    public class PropertiesConfiguration : IEntityTypeConfiguration<Properties>
    {
        public void Configure(EntityTypeBuilder<Properties> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.Property(e => e.Extent)
                .HasConversion(
                    c => JsonSerializer.Serialize(c, default),
                    c => JsonSerializer.Deserialize<List<double>>(c, default));
        }
    }
}
