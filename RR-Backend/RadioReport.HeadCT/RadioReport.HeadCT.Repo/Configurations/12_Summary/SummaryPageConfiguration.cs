using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class SummaryPageConfiguration : PageConfigurationBase<SummaryPage>
    {

        public override void Configure(EntityTypeBuilder<SummaryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);
        }
    }
}
