using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class SummaryPageConfiguration : PageConfigurationBase<SummaryPage>
    {
        public override void Configure(EntityTypeBuilder<SummaryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);
            builder.Ignore(p => p.ParenchymaDensityRight);
            builder.Ignore(p => p.ParenchymaDensityLeft);
            builder
                .HasMany(p => p.FindingRelations)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
