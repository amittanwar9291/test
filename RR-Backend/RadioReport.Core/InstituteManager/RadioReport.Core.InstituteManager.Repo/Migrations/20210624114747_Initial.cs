using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.InstituteManager.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Institutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    InstituteToken = table.Column<string>(nullable: true),
                    DuplicateExternalIdentifierAllowed = table.Column<bool>(nullable: false),
                    ApiKey = table.Column<string>(nullable: true),
                    ConnectionType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Institutes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Addresses_Institutes_InstituteId",
                        column: x => x.InstituteId,
                        principalTable: "Institutes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Geometries",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FeatureId = table.Column<Guid>(nullable: false),
                    Coordinates = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Geometries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Geometries_Addresses_FeatureId",
                        column: x => x.FeatureId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FeatureId = table.Column<Guid>(nullable: false),
                    OsmId = table.Column<int>(nullable: false),
                    Extent = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Countrycode = table.Column<string>(nullable: true),
                    Postcode = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    OsmType = table.Column<string>(nullable: true),
                    OsmKey = table.Column<string>(nullable: true),
                    Housenumber = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    District = table.Column<string>(nullable: true),
                    OsmValue = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Properties_Addresses_FeatureId",
                        column: x => x.FeatureId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_InstituteId",
                table: "Addresses",
                column: "InstituteId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Geometries_FeatureId",
                table: "Geometries",
                column: "FeatureId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Properties_FeatureId",
                table: "Properties",
                column: "FeatureId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Geometries");

            migrationBuilder.DropTable(
                name: "Properties");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Institutes");
        }
    }
}
