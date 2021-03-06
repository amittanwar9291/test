using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class DiagnosisPageConfiguration : PageConfigurationBase<DiagnosisPage>
    {
        public override void Configure(EntityTypeBuilder<DiagnosisPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
