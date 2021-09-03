using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Configurations
{
    public class LarynxFindingConfiguration : FindingConfigurationBase<LarynxFinding>
    {
        public override void Configure(EntityTypeBuilder<LarynxFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<LarynxFinding>(m => m.ImageFileId);
        }
    }
}
