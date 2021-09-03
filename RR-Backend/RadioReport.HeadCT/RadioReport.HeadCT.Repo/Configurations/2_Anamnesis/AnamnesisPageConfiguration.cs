using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class AnamnesisPageConfiguration : PageConfigurationBase<AnamnesisPage>
    {
        public override void Configure(EntityTypeBuilder<AnamnesisPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasMany(p => p.ClinicalSymptomFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.PreviousInterventionsTherapiesFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
