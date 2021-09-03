using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Configurations
{
    public class LocalizationPageConfiguration : PageConfigurationBase<LocalizationPage>
    {
        public override void Configure(EntityTypeBuilder<LocalizationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasOne(p => p.PatientInformation).WithOne().HasForeignKey<PatientInformation>(l => l.Id).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
