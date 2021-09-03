using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.PatientManager.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PatientsEncrypted",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    ExternalIdentifierHash = table.Column<string>(maxLength: 256, nullable: false),
                    BirthDateHash = table.Column<string>(maxLength: 256, nullable: false),
                    PatientCipher = table.Column<string>(nullable: false),
                    FirstNameInitial = table.Column<string>(maxLength: 1, nullable: true),
                    LastNameInitial = table.Column<string>(maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientsEncrypted", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PatientsEncrypted_InstituteId_ExternalIdentifierHash",
                table: "PatientsEncrypted",
                columns: new[] { "InstituteId", "ExternalIdentifierHash" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PatientsEncrypted");
        }
    }
}
