using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.FeetMRT.Domain.Models.Technology;

namespace RadioReport.FeetMRT.Repo.Configurations
{
    public class TechnologyPageConfiguration : PageConfigurationBase<TechnologyPage>
    {
        public override void Configure(EntityTypeBuilder<TechnologyPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(t => t.Sequences)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(t => t.CMSideEffects)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
