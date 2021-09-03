using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.InstituteManager.Repo.Configurations
{
    public class AddressConfiguration : IEntityTypeConfiguration<Feature>
    {
        public void Configure(EntityTypeBuilder<Feature> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.HasOne(geo => geo.Geometry).WithOne().HasForeignKey<Geometry>(f => f.FeatureId);
            builder.HasOne(prop => prop.Properties).WithOne().HasForeignKey<Properties>(p => p.FeatureId);
        }
    }
}
