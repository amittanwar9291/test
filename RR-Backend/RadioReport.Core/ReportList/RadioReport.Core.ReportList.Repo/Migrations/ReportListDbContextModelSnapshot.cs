﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RadioReport.Core.ReportList.Repo;

namespace RadioReport.Core.ReportList.Repo.Migrations
{
    [DbContext(typeof(ReportListDbContext))]
    partial class ReportListDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("RadioReport.Core.ReportList.Domain.Models.ReportEntry", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("AccessionNumber")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Evaluation")
                        .HasColumnType("character varying(255)")
                        .HasMaxLength(255);

                    b.Property<DateTime>("ExaminationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("ExaminationType")
                        .IsRequired()
                        .HasColumnType("character varying(50)")
                        .HasMaxLength(50);

                    b.Property<DateTime>("FindingsDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("FreeField")
                        .HasColumnType("text");

                    b.Property<Guid>("InstituteId")
                        .HasColumnType("uuid");

                    b.Property<bool>("IsLocked")
                        .HasColumnType("boolean");

                    b.Property<string>("Language")
                        .HasColumnType("character varying(50)")
                        .HasMaxLength(50);

                    b.Property<byte>("PatientAge")
                        .HasColumnType("smallint");

                    b.Property<Guid>("PatientId")
                        .HasColumnType("uuid");

                    b.Property<string>("PresetCode")
                        .HasColumnType("character varying(255)")
                        .HasMaxLength(255);

                    b.Property<byte>("Status")
                        .HasColumnType("smallint");

                    b.Property<string>("StudyInstanceUID")
                        .HasColumnType("text");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid");

                    b.Property<string>("UserLabel")
                        .HasColumnType("character varying(255)")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Reports");
                });
#pragma warning restore 612, 618
        }
    }
}