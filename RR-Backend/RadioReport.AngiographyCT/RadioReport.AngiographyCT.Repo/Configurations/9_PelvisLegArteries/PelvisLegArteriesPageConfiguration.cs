using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;
using System;

namespace RadioReport.AngiographyCT.Repo.Configurations
{
    public class PelvisLegArteriesPageConfiguration : PageConfigurationBase<PelvisLegArteriesPage>
    {
        public override void Configure(EntityTypeBuilder<PelvisLegArteriesPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
