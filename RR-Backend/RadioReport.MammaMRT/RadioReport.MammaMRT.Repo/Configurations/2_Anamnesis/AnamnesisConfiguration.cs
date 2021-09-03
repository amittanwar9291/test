using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class AnamnesisConfiguration : PageConfigurationBase<AnamnesisPage>
    {
        public override void Configure(EntityTypeBuilder<AnamnesisPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.OwnFamilyAnamnesisFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.PreviousTherapiesFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
