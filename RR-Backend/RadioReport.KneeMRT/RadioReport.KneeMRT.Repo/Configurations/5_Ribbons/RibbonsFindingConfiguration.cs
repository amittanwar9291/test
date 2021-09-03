using System;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Configurations;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RadioReport.KneeMRT.Repo.Configurations
{
    public class RibbonsFindingConfiguration : FindingConfigurationBase<RibbonsFinding>
    {
        public override void Configure(EntityTypeBuilder<RibbonsFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<RibbonsFinding>(m => m.ImageFileId);
        }
    }
}
