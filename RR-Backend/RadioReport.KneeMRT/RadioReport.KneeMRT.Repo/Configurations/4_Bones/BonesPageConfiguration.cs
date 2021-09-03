﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Configurations
{
    public class BonesPageConfiguration : PageConfigurationBase<BonesPage>
    {
        public override void Configure(EntityTypeBuilder<BonesPage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}