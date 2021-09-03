using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    public class JointAndBursaeFindingConfiguration : FindingConfigurationBase<JointAndBursaeFinding>
    {
        public override void Configure(EntityTypeBuilder<JointAndBursaeFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<JointAndBursaeFinding>(m => m.ImageFileId);
        }
    }
}
