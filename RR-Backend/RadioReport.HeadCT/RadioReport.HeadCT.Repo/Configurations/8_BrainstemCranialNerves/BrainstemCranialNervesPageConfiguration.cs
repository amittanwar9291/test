using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class BrainstemCranialNervesPageConfiguration : PageConfigurationBase<BrainstemCranialNervesPage>
    {

        public override void Configure(EntityTypeBuilder<BrainstemCranialNervesPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
