using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Configurations
{
    public class LungInterstitiumFindingConfiguration : FindingConfigurationBase<LungInterstitiumFinding>
    {
        public override void Configure(EntityTypeBuilder<LungInterstitiumFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<LungInterstitiumFinding>(m => m.ImageFileId);
        }
    }
}
