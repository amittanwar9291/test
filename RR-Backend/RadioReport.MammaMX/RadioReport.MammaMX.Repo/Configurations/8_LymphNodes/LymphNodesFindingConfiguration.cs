using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class LymphNodesFindingConfiguration : FindingConfigurationBase<LymphNodesFinding>
    {
        public override void Configure(EntityTypeBuilder<LymphNodesFinding> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);
            builder
                .HasOne(f => f.LeftLymphNodeDetails)
                .WithOne()
                .HasForeignKey<LymphNodesFinding>(f => f.LeftLymphNodeDetailsId)
                .OnDelete(DeleteBehavior.NoAction);
            builder
                .HasOne(f => f.RightLymphNodeDetails)
                .WithOne()
                .HasForeignKey<LymphNodesFinding>(f => f.RightLymphNodeDetailsId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
