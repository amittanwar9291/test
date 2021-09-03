using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Configurations
{
    public class IndicationPageConfiguration : PageConfigurationBase<IndicationPage>
    {
        public override void Configure(EntityTypeBuilder<IndicationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Indications).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.PreviousTherapies).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
