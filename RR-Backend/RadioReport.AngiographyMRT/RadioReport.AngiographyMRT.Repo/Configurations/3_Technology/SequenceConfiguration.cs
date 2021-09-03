using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AngiographyMRT.Repo.Configurations
{
    public class SequenceConfiguration : FindingConfigurationBase<Sequence>
    {
        public override void Configure(EntityTypeBuilder<Sequence> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.Ignore(s => s.WeightingType);
        }
    }
}
