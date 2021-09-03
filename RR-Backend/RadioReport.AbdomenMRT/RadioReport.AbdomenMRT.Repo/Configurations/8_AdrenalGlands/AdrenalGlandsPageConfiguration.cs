using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AbdomenMRT.Repo.Configurations
{
    public class AdrenalGlandsPageConfiguration : PageConfigurationBase<AdrenalGlandsPage>
    {
        public override void Configure(EntityTypeBuilder<AdrenalGlandsPage> builder)
        {
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
