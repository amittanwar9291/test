using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class RatingPageConfiguration : PageConfigurationBase<RatingPage>
    {
        public override void Configure(EntityTypeBuilder<RatingPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.Ignore(p => p.ACRDensityIndex);
        }
    }
}
