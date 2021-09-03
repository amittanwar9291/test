using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.NeckMRT.Domain.Models;
namespace RadioReport.NeckMRT.Repo.Configurations
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