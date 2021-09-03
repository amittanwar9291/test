using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CSPFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CSPFindings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CSPSets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    SetName = table.Column<string>(nullable: true),
                    CSPFindingId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CSPSets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CSPSets_CSPFindings_CSPFindingId",
                        column: x => x.CSPFindingId,
                        principalTable: "CSPFindings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Acquisitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    AcquisitionType = table.Column<byte>(nullable: false),
                    TechniqueType = table.Column<byte>(nullable: false),
                    NumberOfLines = table.Column<int>(nullable: true),
                    SliceThicknessInMm = table.Column<float>(nullable: true),
                    TubeVoltage1KV = table.Column<int>(nullable: true),
                    TubeVoltage2KV = table.Column<int>(nullable: true),
                    TubeCurrent1MAs = table.Column<int>(nullable: true),
                    TubeCurrent2MAs = table.Column<int>(nullable: true),
                    TubeCurrentModulationType = table.Column<byte>(nullable: false),
                    ReferenceValueInMAs = table.Column<int>(nullable: true),
                    IsNative = table.Column<bool>(nullable: false),
                    IsPulmonaryArterialPhase = table.Column<bool>(nullable: false),
                    IsArterial = table.Column<bool>(nullable: false),
                    IsArterialEarly = table.Column<bool>(nullable: false),
                    IsArterialLate = table.Column<bool>(nullable: false),
                    IsVenous = table.Column<bool>(nullable: false),
                    IsLate = table.Column<bool>(nullable: false),
                    LateDelayInMin = table.Column<float>(nullable: true),
                    PatientPositioningType = table.Column<byte>(nullable: false),
                    BreathingProtocolType = table.Column<byte>(nullable: false),
                    IsECGGating = table.Column<bool>(nullable: false),
                    IsCTMyelography = table.Column<bool>(nullable: false),
                    CSPSetId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acquisitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Acquisitions_CSPSets_CSPSetId",
                        column: x => x.CSPSetId,
                        principalTable: "CSPSets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CSPSequences",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    WeightingType = table.Column<byte>(nullable: false),
                    IsSaturatedFat = table.Column<bool>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    IsParallelImaging = table.Column<bool>(nullable: false),
                    SequenceType = table.Column<byte>(nullable: false),
                    OrientationType = table.Column<byte>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
                    IsECGTriggering = table.Column<bool>(nullable: false),
                    IsB0 = table.Column<bool>(nullable: false),
                    IsB50 = table.Column<bool>(nullable: false),
                    IsB100 = table.Column<bool>(nullable: false),
                    IsB800 = table.Column<bool>(nullable: false),
                    IsB1000 = table.Column<bool>(nullable: false),
                    IsB1400 = table.Column<bool>(nullable: false),
                    IsCalculated = table.Column<bool>(nullable: false),
                    IsADCMap = table.Column<bool>(nullable: false),
                    SiliconeSensitive = table.Column<bool>(nullable: false),
                    SiliconeSuppressing = table.Column<bool>(nullable: false),
                    IsDynamicsFollowingGdApplication = table.Column<bool>(nullable: false),
                    IsLateStage = table.Column<bool>(nullable: false),
                    ExaminationTechniqueType = table.Column<byte>(nullable: false),
                    IsCineImaging = table.Column<bool>(nullable: false),
                    IsHighResolution = table.Column<bool>(nullable: false),
                    IsDefaecography = table.Column<bool>(nullable: false),
                    IsChemicalShiftImaging = table.Column<bool>(nullable: false),
                    IsMrcp = table.Column<bool>(nullable: false),
                    MethodType = table.Column<byte>(nullable: false),
                    NonContrastEnhancedMRAngiographyType = table.Column<byte>(nullable: false),
                    ContrastEnhancedMRAngiographyType = table.Column<byte>(nullable: false),
                    IsMIP = table.Column<bool>(nullable: false),
                    IsMPR = table.Column<bool>(nullable: false),
                    IsVRT = table.Column<bool>(nullable: false),
                    IsRespiratoryTriggering = table.Column<bool>(nullable: false),
                    IsPostContrastSubtraction = table.Column<bool>(nullable: false),
                    IsPostContrastPerfusion = table.Column<bool>(nullable: false),
                    IsBreathHoldingTechnique = table.Column<bool>(nullable: false),
                    IsSedation = table.Column<bool>(nullable: false),
                    OtherApplicationsType = table.Column<byte>(nullable: false),
                    IsCompressedSense = table.Column<bool>(nullable: false),
                    IsDynamicsAfterContrastInjection = table.Column<bool>(nullable: false),
                    IsEpiDwi = table.Column<bool>(nullable: false),
                    IsHasteNonEpiDwi = table.Column<bool>(nullable: false),
                    CSPSetId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CSPSequences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CSPSequences_CSPSets_CSPSetId",
                        column: x => x.CSPSetId,
                        principalTable: "CSPSets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reconstructions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ReconstructionType = table.Column<byte>(nullable: false),
                    SliceThicknessST1Mm = table.Column<float>(nullable: true),
                    SliceThicknessST2Mm = table.Column<float>(nullable: true),
                    SliceThicknessST3Mm = table.Column<float>(nullable: true),
                    SliceThicknessST4Mm = table.Column<float>(nullable: true),
                    IsSoftTissues = table.Column<bool>(nullable: false),
                    IsLungs = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    IsMIP = table.Column<bool>(nullable: false),
                    IsMPR = table.Column<bool>(nullable: false),
                    IsVRT = table.Column<bool>(nullable: false),
                    IsMinIP = table.Column<bool>(nullable: false),
                    DoseLengthProductMGycm = table.Column<int>(nullable: true),
                    AcquisitionId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reconstructions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reconstructions_Acquisitions_AcquisitionId",
                        column: x => x.AcquisitionId,
                        principalTable: "Acquisitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Acquisitions_CSPSetId",
                table: "Acquisitions",
                column: "CSPSetId");

            migrationBuilder.CreateIndex(
                name: "IX_CSPFindings_FindingType",
                table: "CSPFindings",
                column: "FindingType",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CSPSequences_CSPSetId",
                table: "CSPSequences",
                column: "CSPSetId");

            migrationBuilder.CreateIndex(
                name: "IX_CSPSets_CSPFindingId",
                table: "CSPSets",
                column: "CSPFindingId");

            migrationBuilder.CreateIndex(
                name: "IX_Reconstructions_AcquisitionId",
                table: "Reconstructions",
                column: "AcquisitionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CSPSequences");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "CSPSets");

            migrationBuilder.DropTable(
                name: "CSPFindings");
        }
    }
}
