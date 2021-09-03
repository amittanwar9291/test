using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class MedicalHistoryPageConfiguration : PageConfigurationBase<MedicalHistoryPage>
    {
        public override void Configure(EntityTypeBuilder<MedicalHistoryPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.OwnFamilyAnamnesisFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(p => p.PreviousTherapiesFindings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
