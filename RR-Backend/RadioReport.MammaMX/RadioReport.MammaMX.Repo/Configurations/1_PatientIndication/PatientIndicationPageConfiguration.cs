using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class PatientIndicationPageConfiguration : PageConfigurationBase<PatientIndicationPage>
    {
        public override void Configure(EntityTypeBuilder<PatientIndicationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasMany(p => p.Findings)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .HasOne(p => p.PatientInformation)
                .WithOne()
                .HasForeignKey<PatientInformation>(pi => pi.Id)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
