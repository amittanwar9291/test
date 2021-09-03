using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Repo.Configurations
{
    public class SummaryPageConfiguration : PageConfigurationBase<SummaryPage>
    {

        public override void Configure(EntityTypeBuilder<SummaryPage> builder)
        {
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
