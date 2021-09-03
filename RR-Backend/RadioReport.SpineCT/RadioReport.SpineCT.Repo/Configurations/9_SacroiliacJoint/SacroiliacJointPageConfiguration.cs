using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Configurations
{
    public class SacroiliacJointPageConfiguration : PageConfigurationBase<SacroiliacJointPage>
    {
        public override void Configure(EntityTypeBuilder<SacroiliacJointPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
