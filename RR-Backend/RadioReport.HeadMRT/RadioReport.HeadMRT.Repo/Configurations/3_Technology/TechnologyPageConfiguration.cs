using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Repo.Configurations
{
    public class TechnologyPageConfiguration : PageConfigurationBase<TechnologyPage>
    {
        public override void Configure(EntityTypeBuilder<TechnologyPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);
            builder.Property(p => p.BarcodeCMCharge);

            builder.HasMany(p => p.Sequences)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.CMSideEffects)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
