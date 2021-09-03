using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Configurations
{
    public class LymphNodesFindingConfiguration : FindingConfigurationBase<LymphNodesFinding>
    {
        public override void Configure(EntityTypeBuilder<LymphNodesFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<LymphNodesFinding>(m => m.ImageFileId);
        }
    }
}
