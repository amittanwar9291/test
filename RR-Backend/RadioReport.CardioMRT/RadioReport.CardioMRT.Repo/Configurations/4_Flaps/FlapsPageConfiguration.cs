using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.CardioMRT.Repo.Configurations
{
    public class FlapsPageConfiguration : PageConfigurationBase<FlapsPage>
    {
        public override void Configure(EntityTypeBuilder<FlapsPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.HeartValves).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.CongenitalHeartDiseases).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.Ignore(p => p.Measures);
        }
    }
}
