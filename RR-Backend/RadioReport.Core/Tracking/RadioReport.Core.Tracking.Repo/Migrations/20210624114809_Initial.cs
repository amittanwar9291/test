using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.Tracking.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trackings",
                columns: table => new
                {
                    ReportId = table.Column<Guid>(nullable: false),
                    TrackingSubjectId = table.Column<string>(nullable: false),
                    TrackingSubjectType = table.Column<int>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    ModuleName = table.Column<string>(nullable: true),
                    VisitDuration = table.Column<int>(nullable: false),
                    VisitCount = table.Column<int>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    LastModified = table.Column<DateTime>(nullable: false),
                    ReportStatus = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trackings", x => new { x.ReportId, x.TrackingSubjectType, x.TrackingSubjectId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trackings");
        }
    }
}
