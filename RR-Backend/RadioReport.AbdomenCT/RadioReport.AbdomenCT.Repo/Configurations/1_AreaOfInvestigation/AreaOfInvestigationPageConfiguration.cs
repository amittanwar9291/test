using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AbdomenCT.Repo.Configurations
{
    public class AreaOfInvestigationPageConfiguration : PageConfigurationBase<AreaOfInvestigationPage>
    {
        public override void Configure(EntityTypeBuilder<AreaOfInvestigationPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasOne(p => p.PatientInformation).WithOne().HasForeignKey<PatientInformation>(l => l.Id).OnDelete(DeleteBehavior.Cascade);
        }
    }
}