using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Configurations
{
    public class LigamentsAndTendonsPageConfiguration : PageConfigurationBase<LigamentsAndTendonsPage>
	{
		public override void Configure(EntityTypeBuilder<LigamentsAndTendonsPage> builder)
		{
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
			base.Configure(builder);

			builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
		}
	}
}
