using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class MammographyFindingPageConfiguration : PageConfigurationBase<MammographyFindingPage>
    {
        public override void Configure(EntityTypeBuilder<MammographyFindingPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasMany(p => p.Findings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
