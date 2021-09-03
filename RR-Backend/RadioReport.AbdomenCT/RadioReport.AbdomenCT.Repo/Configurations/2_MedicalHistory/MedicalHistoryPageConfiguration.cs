using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.AbdomenCT.Repo.Configurations
{
    public class MedicalHistoryPageConfiguration : PageConfigurationBase<MedicalHistoryPage>
    {
        public override void Configure(EntityTypeBuilder<MedicalHistoryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder); 
            
            builder.HasMany(p => p.Indications).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.Clinics).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}