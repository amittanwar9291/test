using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Configurations
{
    public class ExaminationPageConfiguration : PageConfigurationBase<ExaminationPage>
    {
        public override void Configure(EntityTypeBuilder<ExaminationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder.HasOne(p => p.PatientInformation).WithOne().HasForeignKey<PatientInformation>(l => l.Id).OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
