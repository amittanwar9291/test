using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class DiagnosisFindingConfiguration : FindingConfigurationBase<DiagnosisFinding>
    {
        public override void Configure(EntityTypeBuilder<DiagnosisFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<DiagnosisFinding>(m => m.ImageFileId);
        }
    }
}
