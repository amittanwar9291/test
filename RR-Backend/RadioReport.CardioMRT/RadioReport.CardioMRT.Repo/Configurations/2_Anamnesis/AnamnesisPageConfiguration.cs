using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.CardioMRT.Repo.Configurations
{
    public class AnamnesisPageConfiguration : PageConfigurationBase<AnamnesisPage>
    {
        public override void Configure(EntityTypeBuilder<AnamnesisPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasMany(p => p.IndicationFindings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .HasMany(p => p.InterventionOrPreOpsFindings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
