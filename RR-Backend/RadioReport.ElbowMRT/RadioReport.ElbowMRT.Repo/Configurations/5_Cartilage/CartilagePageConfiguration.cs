﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Configurations
{
    public class CartilagePageConfiguration : PageConfigurationBase<CartilagePage>
    {
        public override void Configure(EntityTypeBuilder<CartilagePage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            base.Configure(builder);

            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}