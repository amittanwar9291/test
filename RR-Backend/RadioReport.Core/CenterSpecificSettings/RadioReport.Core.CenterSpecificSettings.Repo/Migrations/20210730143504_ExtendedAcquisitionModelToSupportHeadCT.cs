using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Migrations
{
    public partial class ExtendedAcquisitionModelToSupportHeadCT : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsPerfusionCT",
                table: "Acquisitions",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsPerfusionCT",
                table: "Acquisitions");
        }
    }
}
