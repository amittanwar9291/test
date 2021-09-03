using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Configurations
{
    public class LymphNodesDetailsConfiguration : IEntityTypeConfiguration<LymphNodeDetails>
    {
        public void Configure(EntityTypeBuilder<LymphNodeDetails> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable(nameof(LymphNodeDetails));
            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.FindingType);
            builder.Ignore(p => p.IsDeleted);
        }
    }
}
