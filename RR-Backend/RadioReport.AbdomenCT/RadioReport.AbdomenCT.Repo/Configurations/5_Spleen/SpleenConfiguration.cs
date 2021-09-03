using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AbdomenCT.Repo.Configurations
{
    public class SpleenPageConfiguration : PageConfigurationBase<SpleenPage>
    {
        public override void Configure(EntityTypeBuilder<SpleenPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
