using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Configurations
{
    public class ConfigurationPageConfiguration : PageConfigurationBase<ConfigurationPage>
    {
        public override void Configure(EntityTypeBuilder<ConfigurationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(cp => cp.Findings)
                   .WithOne()
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
