using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class LymphNodesPageConfiguration : PageConfigurationBase<LymphNodesPage>
    {
        public override void Configure(EntityTypeBuilder<LymphNodesPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);
            builder
                .HasMany(f => f.Findings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
