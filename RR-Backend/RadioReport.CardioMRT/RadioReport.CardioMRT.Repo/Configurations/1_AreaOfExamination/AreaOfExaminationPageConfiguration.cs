using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.CardioMRT.Repo.Configurations
{
    public class AreaOfExaminationPageConfiguration : PageConfigurationBase<AreaOfExaminationPage>
    {
        public override void Configure(EntityTypeBuilder<AreaOfExaminationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasOne(p => p.PatientInformation).WithOne().HasForeignKey<PatientInformation>(l => l.Id).OnDelete(DeleteBehavior.Cascade);

            builder.Ignore(s => s.BSA);
        }
    }
}
