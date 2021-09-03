using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class UltrasoundFindingPageConfiguration : PageConfigurationBase<UltrasoundFindingPage>
    {
        public override void Configure(EntityTypeBuilder<UltrasoundFindingPage> builder)
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
