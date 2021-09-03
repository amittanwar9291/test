using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    public class LabrumAndRibbonsPageConfiguration : PageConfigurationBase<LabrumAndRibbonsPage>
    {
        public override void Configure(EntityTypeBuilder<LabrumAndRibbonsPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
