using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Configurations
{
    public class SummaryPageConfiguration : PageConfigurationBase<SummaryPage>
    {
        public override void Configure(EntityTypeBuilder<SummaryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.TNMClassifications).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
