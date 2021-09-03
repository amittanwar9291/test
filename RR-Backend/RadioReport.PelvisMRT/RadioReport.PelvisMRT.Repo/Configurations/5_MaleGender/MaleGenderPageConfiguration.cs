﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Configurations
{
    public class MaleGenderPageConfiguration : PageConfigurationBase<MaleGenderPage>
    {
        public override void Configure(EntityTypeBuilder<MaleGenderPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
