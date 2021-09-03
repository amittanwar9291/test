using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    public class RotatorFindingConfiguration : FindingConfigurationBase<RotatorFinding>
    {
        public override void Configure(EntityTypeBuilder<RotatorFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<RotatorFinding>(m => m.ImageFileId);
        }
    }
}
