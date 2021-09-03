using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;
using System;

namespace RadioReport.AbdomenMRT.Repo.Configurations
{
    public class LymphaticSystemPageConfiguration : PageConfigurationBase<LymphaticSystemPage>
    {
        public override void Configure(EntityTypeBuilder<LymphaticSystemPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
