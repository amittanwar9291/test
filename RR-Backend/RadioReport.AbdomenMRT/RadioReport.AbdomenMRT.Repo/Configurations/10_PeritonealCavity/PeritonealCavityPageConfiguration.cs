using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AbdomenMRT.Repo.Configurations
{
    public class PeritonealCavityPageConfiguration : PageConfigurationBase<PeritonealCavityPage>
    {
        public override void Configure(EntityTypeBuilder<PeritonealCavityPage> builder)
        {
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
