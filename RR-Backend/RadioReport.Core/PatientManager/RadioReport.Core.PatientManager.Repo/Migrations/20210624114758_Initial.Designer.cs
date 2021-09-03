﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RadioReport.Core.PatientManager.Repo;

namespace RadioReport.Core.PatientManager.Repo.Migrations
{
    [DbContext(typeof(PatientManagerDbContext))]
    [Migration("20210624114758_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("RadioReport.Core.PatientManager.Domain.Models.PatientEncrypted", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BirthDateHash")
                        .IsRequired()
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<string>("ExternalIdentifierHash")
                        .IsRequired()
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<string>("FirstNameInitial")
                        .HasColumnType("character varying(1)")
                        .HasMaxLength(1);

                    b.Property<Guid>("InstituteId")
                        .HasColumnType("uuid");

                    b.Property<string>("LastNameInitial")
                        .IsRequired()
                        .HasColumnType("character varying(1)")
                        .HasMaxLength(1);

                    b.Property<string>("PatientCipher")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("InstituteId", "ExternalIdentifierHash")
                        .IsUnique();

                    b.ToTable("PatientsEncrypted");
                });
#pragma warning restore 612, 618
        }
    }
}
