using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class AcquisitionConfiguration : FindingConfigurationBase<Acquisition>
    {
        public override void Configure(EntityTypeBuilder<Acquisition> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Reconstructions).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
