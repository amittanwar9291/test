using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    public class SoftPartsFindingConfiguration : FindingConfigurationBase<SoftPartsFinding>
    {
        public override void Configure(EntityTypeBuilder<SoftPartsFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.MusculatureFindings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
