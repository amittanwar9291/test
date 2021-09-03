using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.LicenseManager.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurrentCreditScores",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    LicenseId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    ScoreCipher = table.Column<string>(nullable: false),
                    OverdraftCipher = table.Column<string>(nullable: false),
                    LastModifiedDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentCreditScores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Licenses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    LicensingType = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    Token = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Licenses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LicenseFractions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    LicenseId = table.Column<Guid>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    AllocationDate = table.Column<DateTime>(nullable: false),
                    Token = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LicenseFractions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LicenseFractions_Licenses_LicenseId",
                        column: x => x.LicenseId,
                        principalTable: "Licenses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCreditScores_LicenseId",
                table: "CurrentCreditScores",
                column: "LicenseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCreditScores_InstituteId_IsActive",
                table: "CurrentCreditScores",
                columns: new[] { "InstituteId", "IsActive" });

            migrationBuilder.CreateIndex(
                name: "IX_LicenseFractions_LicenseId",
                table: "LicenseFractions",
                column: "LicenseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurrentCreditScores");

            migrationBuilder.DropTable(
                name: "LicenseFractions");

            migrationBuilder.DropTable(
                name: "Licenses");
        }
    }
}
