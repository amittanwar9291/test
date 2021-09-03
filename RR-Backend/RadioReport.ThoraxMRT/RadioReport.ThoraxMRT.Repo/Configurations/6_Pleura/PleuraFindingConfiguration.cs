using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Repo.Configurations
{
    public class PleuraFindingConfiguration : FindingConfigurationBase<PleuraFinding>
    {
        public override void Configure(EntityTypeBuilder<PleuraFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<PleuraFinding>(m => m.ImageFileId);
        }
    }
}
