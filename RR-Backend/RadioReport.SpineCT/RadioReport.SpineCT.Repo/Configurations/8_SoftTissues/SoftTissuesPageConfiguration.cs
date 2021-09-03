using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Configurations
{
    public class SoftTissuesPageConfiguration : PageConfigurationBase<SoftTissuesPage>
    {
        public override void Configure(EntityTypeBuilder<SoftTissuesPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(st => st.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
