using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.HipMRT.Repo.Configurations
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
