using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Repo.Configurations
{
    public class SellarRegionPageConfiguration : PageConfigurationBase<SellarRegionPage>
    {

        public override void Configure(EntityTypeBuilder<SellarRegionPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
