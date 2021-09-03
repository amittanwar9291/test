using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Configurations
{
    public class AnamnesisPageConfiguration : PageConfigurationBase<AnamnesisPage>
    {
        
        public override void Configure(EntityTypeBuilder<AnamnesisPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Indications).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.PreviousSurgeries).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
