using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    class BonesFindingConfiguration : FindingConfigurationBase<BonesFinding>
    {
        public override void Configure(EntityTypeBuilder<BonesFinding> builder)
        {
            base.Configure(builder);

            builder
                .HasOne(m => m.UploadedImageFile)
                .WithOne()
                .HasForeignKey<BonesFinding>(m => m.ImageFileId);
        }
    }
}
