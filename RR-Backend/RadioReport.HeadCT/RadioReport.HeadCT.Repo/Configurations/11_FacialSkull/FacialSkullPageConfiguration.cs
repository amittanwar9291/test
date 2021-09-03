using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class FacialSkullPageConfiguration : PageConfigurationBase<FacialSkullPage>
    {

        public override void Configure(EntityTypeBuilder<FacialSkullPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);
        }
    }
}
