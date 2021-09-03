using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.ImportInterface.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CVI42Imports",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    StudyInstanceUid = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CVI42Imports", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CVI42Imports_InstituteId_StudyInstanceUid",
                table: "CVI42Imports",
                columns: new[] { "InstituteId", "StudyInstanceUid" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CVI42Imports");
        }
    }
}
