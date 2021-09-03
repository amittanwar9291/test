using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AngiographyCT.Repo.Configurations
{
    public class SoftTissuePageConfiguration : PageConfigurationBase<SoftTissuePage>
    {
        public override void Configure(EntityTypeBuilder<SoftTissuePage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
