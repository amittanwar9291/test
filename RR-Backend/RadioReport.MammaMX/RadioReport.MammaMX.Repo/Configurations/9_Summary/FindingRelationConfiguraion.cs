using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class FindingRelationConfiguraion : FindingConfigurationBase<FindingRelation>
    {
        public override void Configure(EntityTypeBuilder<FindingRelation> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            base.Configure(builder);
            builder.HasIndex(p => p.MammographyFindingId).IsUnique();
            builder.HasIndex(p => p.UltrasoundFindingId).IsUnique();
            builder
                .HasOne(p => p.MammographyFinding)
                .WithOne()
                .HasForeignKey<FindingRelation>(p => p.MammographyFindingId)
                .OnDelete(DeleteBehavior.Cascade);
            builder
                .HasOne(p => p.UltrasoundFinding)
                .WithOne()
                .HasForeignKey<FindingRelation>(p => p.UltrasoundFindingId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
