using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.CardioMRT.Repo.Configurations
{
    public class SummaryPageConfiguration : PageConfigurationBase<SummaryPage>
    {
        public override void Configure(EntityTypeBuilder<SummaryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.Ignore(page => page.IsMajorCriteria);
            builder.Ignore(page => page.IsMinorCriteria);
        }
    }
}
