using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.CardioMRT.Repo.Configurations
{
    public class PericardiumVesselsPageConfiguration : PageConfigurationBase<PericardiumVesselsPage>
    {
        public override void Configure(EntityTypeBuilder<PericardiumVesselsPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings)
                   .WithOne()
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
