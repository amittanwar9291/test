using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Configurations
{
    public class MusclesAndTendonsPageConfiguration : PageConfigurationBase<MusclesAndTendonsPage>
    {
        public override void Configure(EntityTypeBuilder<MusclesAndTendonsPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
