using System;
using System.Collections.Generic;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.Core.InstituteManager.Repo.Configurations
{
    public class GeometryConfiguration : IEntityTypeConfiguration<Geometry>
    {
        public void Configure(EntityTypeBuilder<Geometry> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.Property(e => e.Coordinates)
                .HasConversion(
                    c => JsonSerializer.Serialize(c, default),
                    c => JsonSerializer.Deserialize<List<double>>(c, default));
        }
    }
}
