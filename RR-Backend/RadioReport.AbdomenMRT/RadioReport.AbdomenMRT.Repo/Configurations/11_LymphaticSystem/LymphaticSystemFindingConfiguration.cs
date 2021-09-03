using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;
using System;

namespace RadioReport.AbdomenMRT.Repo.Configurations
{
    public class LymphaticSystemFindingConfiguration : FindingConfigurationBase<LymphaticSystemFinding>
    {
        public override void Configure(EntityTypeBuilder<LymphaticSystemFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.LymphNodeStations).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
