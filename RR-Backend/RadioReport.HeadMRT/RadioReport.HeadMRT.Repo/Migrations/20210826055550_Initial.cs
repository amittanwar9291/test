using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.HeadMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BasalNucleiFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignalType = table.Column<byte>(nullable: false),
                    AdcSignalType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasalNucleiFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BrainstemCranialNervesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsPons = table.Column<bool>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignalType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrainstemCranialNervesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CerebrospinalFluidSpaceFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisIKnow1Type = table.Column<byte>(nullable: false),
                    IsLateralVentricle = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairSignal = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsHypertrophyChoroidPlexus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CerebrospinalFluidSpaceFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CortexFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsInternalStructureSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsNarrowedSulci = table.Column<bool>(nullable: false),
                    IsBlurringOfWhiteGreyJunction = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairWSignal = table.Column<byte>(nullable: false),
                    IsT2SignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignal = table.Column<byte>(nullable: false),
                    AdcSignal = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLesionOfTheSameEntity = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CortexFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FacialSkullFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    OrbitaDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    ParanasalSinusesDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    OralCavityDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    SalivaryGlandsDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    IsPepperAndSaltSign = table.Column<bool>(nullable: false),
                    IsLocalOsteodestruction = table.Column<bool>(nullable: false),
                    IsCompressionBrainstem = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsFossaPterygopalatina = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsMirrorFormation = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsAdjacentStructuralChangesDueToPressure = table.Column<bool>(nullable: false),
                    IsDiffuseWideningOfTheMucosa = table.Column<bool>(nullable: false),
                    IsThinningOfTheBonyBoundary = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMandible = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsPerineuralSpread = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsMiddleCranialFossa = table.Column<bool>(nullable: false),
                    IsSphenoidBoneMiddle = table.Column<bool>(nullable: false),
                    IsPosteriorFossa = table.Column<bool>(nullable: false),
                    IsTemporalBonePosterior = table.Column<bool>(nullable: false),
                    IsForamenMagnum = table.Column<bool>(nullable: false),
                    IsInternalAcousticCanal = table.Column<bool>(nullable: false),
                    IsPorusAcusticusInternus = table.Column<bool>(nullable: false),
                    IsMiddleEarTympanum = table.Column<bool>(nullable: false),
                    IsEpitympanon = table.Column<bool>(nullable: false),
                    IsMesotympanum = table.Column<bool>(nullable: false),
                    IsHypotympanon = table.Column<bool>(nullable: false),
                    IsInnerEarLabyrinth = table.Column<bool>(nullable: false),
                    IsMastoid = table.Column<bool>(nullable: false),
                    IsAntrum = table.Column<bool>(nullable: false),
                    IsOpticNerveIICompartment = table.Column<bool>(nullable: false),
                    IsRectusSuperiorMuscle = table.Column<bool>(nullable: false),
                    IsRectusInferiorMuscle = table.Column<bool>(nullable: false),
                    IsRectusLateralisMuscle = table.Column<bool>(nullable: false),
                    IsRectusMedialisMuscle = table.Column<bool>(nullable: false),
                    IsObliquusSuperiorMuscle = table.Column<bool>(nullable: false),
                    IsMuscleBellyThickening = table.Column<bool>(nullable: false),
                    IsTubular = table.Column<bool>(nullable: false),
                    IsEethmoidAirCells = table.Column<bool>(nullable: false),
                    IsMaxillarySinus = table.Column<bool>(nullable: false),
                    IsSphenoidSinus = table.Column<bool>(nullable: false),
                    IsInfratemporalFossa = table.Column<bool>(nullable: false),
                    IsFrontalSinus = table.Column<bool>(nullable: false),
                    IsRetentionCysts = table.Column<bool>(nullable: false),
                    IsMucosalPolyps = table.Column<bool>(nullable: false),
                    IsOralMucosalSpaceOms = table.Column<bool>(nullable: false),
                    IsSublingualSpaceSls = table.Column<bool>(nullable: false),
                    IsSubmandibularSpaceSms = table.Column<bool>(nullable: false),
                    IsRootOfTheTongueRot = table.Column<bool>(nullable: false),
                    IsParotidGland = table.Column<bool>(nullable: false),
                    IsSuperficialLobe = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacialSkullFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FindingLocalizers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Code = table.Column<string>(maxLength: 25, nullable: false),
                    Content = table.Column<string>(nullable: false),
                    Mapping = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FindingLocalizers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ImageFile",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileName = table.Column<string>(nullable: true),
                    ObjectName = table.Column<string>(nullable: true),
                    Stream = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageFile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MeningesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisLocalization = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    IsLocalHyperostosisOfTheBone = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairSignal = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeningesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PatientId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    PresetCode = table.Column<string>(maxLength: 255, nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    StudyInstanceUID = table.Column<string>(nullable: true),
                    ExaminationDate = table.Column<DateTime>(nullable: false),
                    AccessionNumber = table.Column<string>(nullable: true),
                    ExaminationType = table.Column<string>(maxLength: 50, nullable: false),
                    FindingsDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<byte>(nullable: false),
                    PatientAge = table.Column<byte>(nullable: false),
                    FreeField = table.Column<string>(nullable: true),
                    Language = table.Column<string>(maxLength: 50, nullable: true),
                    Evaluation = table.Column<string>(maxLength: 255, nullable: true),
                    IsLocked = table.Column<bool>(nullable: false),
                    LicenseFractionId = table.Column<Guid>(nullable: false),
                    LicensingDate = table.Column<DateTime>(nullable: false),
                    TotalPageCount = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportSchemas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportTypeName = table.Column<string>(type: "varchar(50)", nullable: false),
                    Paragraphs = table.Column<string>(nullable: true),
                    IsDefault = table.Column<bool>(nullable: false),
                    VersionName = table.Column<string>(type: "varchar(50)", nullable: false),
                    BuildVersion = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSchemas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportSession",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSession", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SellarRegionFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SellarRegionDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    ContrastQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellarRegionFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MonthOfMRI = table.Column<byte>(nullable: false),
                    YearOfMRI = table.Column<int>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    MonthOfPETCT = table.Column<byte>(nullable: false),
                    YearOfPETCT = table.Column<int>(nullable: false),
                    IsDSA = table.Column<bool>(nullable: false),
                    MonthOfDSA = table.Column<byte>(nullable: false),
                    YearOfDSA = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BasalNucleiPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasalNucleiPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BasalNucleiPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrainstemCranialNervesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false),
                    IsInTheHighResolutionSequences = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrainstemCranialNervesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BrainstemCranialNervesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CerebrospinalFluidSpacePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CerebrospinalFluidSpacePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CerebrospinalFluidSpacePages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CortexPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CortexPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CortexPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExaminationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsBrainMRI = table.Column<bool>(nullable: false),
                    IsBrainstemMRI = table.Column<bool>(nullable: false),
                    IsPituitaryMRI = table.Column<bool>(nullable: false),
                    IsOrbitaMRI = table.Column<bool>(nullable: false),
                    IsParanasalSinusMRI = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExaminationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExaminationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FacialSkullPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacialSkullPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FacialSkullPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MeningesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeningesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeningesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageInfos",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PageId = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    TypeName = table.Column<string>(maxLength: 255, nullable: true),
                    PageNumber = table.Column<byte>(nullable: false),
                    IsBlocked = table.Column<bool>(nullable: false),
                    WasModified = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PageInfos_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReportResults",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    InstituteId = table.Column<Guid>(nullable: false),
                    ReportTypeName = table.Column<string>(maxLength: 255, nullable: true),
                    ReportSummary = table.Column<string>(nullable: true),
                    Discussion = table.Column<string>(nullable: true),
                    IsLocalizer = table.Column<bool>(nullable: false),
                    IsReferenceImage = table.Column<bool>(nullable: false),
                    IsICD10 = table.Column<bool>(nullable: false),
                    Approved = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportResults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReportResults_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SellarRegionPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellarRegionPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SellarRegionPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SummaryPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsCta = table.Column<bool>(nullable: false),
                    IsMra = table.Column<bool>(nullable: false),
                    IsMriWithIvContrastAgent = table.Column<bool>(nullable: false),
                    IsPetCt = table.Column<bool>(nullable: false),
                    IsScintigraphy = table.Column<bool>(nullable: false),
                    IsCcdSonographyNeckVessels = table.Column<bool>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    PeriodType = table.Column<byte>(nullable: false),
                    IsNeurology = table.Column<bool>(nullable: false),
                    IsNeurosurgery = table.Column<bool>(nullable: false),
                    IsEnt = table.Column<bool>(nullable: false),
                    IsOphthalmology = table.Column<bool>(nullable: false),
                    IsCardiology = table.Column<bool>(nullable: false),
                    IsInternalMedicine = table.Column<bool>(nullable: false),
                    CourseType = table.Column<byte>(nullable: false),
                    RegressiveType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SummaryPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SummaryPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TechnologyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CMReinforcedType = table.Column<byte>(nullable: false),
                    SequencesType = table.Column<byte>(nullable: false),
                    ContrastMediumType = table.Column<byte>(nullable: false),
                    ContrastQuantity = table.Column<decimal>(nullable: true),
                    IsCMSideEffect = table.Column<bool>(nullable: false),
                    IsH1BlockerIV = table.Column<bool>(nullable: false),
                    IsH2BlockerIV = table.Column<bool>(nullable: false),
                    IsCortisoneIV = table.Column<bool>(nullable: false),
                    IsO2Administration = table.Column<bool>(nullable: false),
                    IsSubcutaneousEpinephrine = table.Column<bool>(nullable: false),
                    IsNotFurtherSpecified = table.Column<bool>(nullable: false),
                    BarcodeCMCharge = table.Column<string>(nullable: true),
                    SetName = table.Column<string>(nullable: true),
                    IsMotion = table.Column<bool>(nullable: false),
                    IsMetalArtifacts = table.Column<bool>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    IsFlowArtifacts = table.Column<bool>(nullable: false),
                    IsTimingInadequate = table.Column<bool>(nullable: false),
                    IsFailedSubtraction = table.Column<bool>(nullable: false),
                    IsAliasing = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    ImageQualityType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TechnologyPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TechnologyPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VesselsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReportSchemaSessions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportSchemaId = table.Column<Guid>(nullable: false),
                    UserName = table.Column<string>(type: "varchar(50)", nullable: false),
                    LastActivity = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportSchemaSessions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReportSchemaSessions_ReportSchemas_ReportSchemaId",
                        column: x => x.ReportSchemaId,
                        principalTable: "ReportSchemas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClinicalSymptomFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    VertigoType = table.Column<byte>(nullable: false),
                    VisualDisturbanceType = table.Column<byte>(nullable: false),
                    CognitiveChangeType = table.Column<byte>(nullable: false),
                    DisorderOfConsciousnessType = table.Column<byte>(nullable: false),
                    IsHeadache = table.Column<bool>(nullable: false),
                    IsNauseaVomiting = table.Column<bool>(nullable: false),
                    IsDisorderOfConsciousnessComa = table.Column<bool>(nullable: false),
                    IsPapilledema = table.Column<bool>(nullable: false),
                    IsMeningism = table.Column<bool>(nullable: false),
                    IsFever = table.Column<bool>(nullable: false),
                    IsPhotophobia = table.Column<bool>(nullable: false),
                    IsNausea = table.Column<bool>(nullable: false),
                    MotorDeficitType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    CranialNervesType = table.Column<byte>(nullable: false),
                    OlfactoryNerveDetailsType = table.Column<byte>(nullable: false),
                    FacialNervePalsyDetailsType = table.Column<byte>(nullable: false),
                    DysesthesiaType = table.Column<byte>(nullable: false),
                    TremorType = table.Column<byte>(nullable: false),
                    AtaxiaType = table.Column<byte>(nullable: false),
                    SpeechDisorderType = table.Column<byte>(nullable: false),
                    IsHearingLoss = table.Column<bool>(nullable: false),
                    IsHyperacusis = table.Column<bool>(nullable: false),
                    IsHypoacusis = table.Column<bool>(nullable: false),
                    IsConductiveHearingLoss = table.Column<bool>(nullable: false),
                    IsHypoakusisSensorineuralHearingLoss = table.Column<bool>(nullable: false),
                    IsTinnitus = table.Column<bool>(nullable: false),
                    IsPulsatile = table.Column<bool>(nullable: false),
                    IsSensorineuralHearingLoss = table.Column<bool>(nullable: false),
                    IsAnisocoria = table.Column<bool>(nullable: false),
                    IsMydriasis = table.Column<bool>(nullable: false),
                    IsMyosis = table.Column<bool>(nullable: false),
                    IsPtosis = table.Column<bool>(nullable: false),
                    IsEnophthalmos = table.Column<bool>(nullable: false),
                    IsExophthalmos = table.Column<bool>(nullable: false),
                    NystagmusType = table.Column<byte>(nullable: false),
                    EndocrineDisorderType = table.Column<byte>(nullable: false),
                    IsPersonalityChanges = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicalSymptomFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClinicalSymptomFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousInterventionsTherapiesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousInterventionsTherapiesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousInterventionsTherapiesFindings_AnamnesisPages_Anamn~",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BasalNucleiFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignalType = table.Column<byte>(nullable: false),
                    AdcSignalType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    KnownHistologyType = table.Column<byte>(nullable: false),
                    BasalGangliaLocations = table.Column<decimal>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    Size2ndPlane = table.Column<int>(nullable: true),
                    Size3rdPlane = table.Column<int>(nullable: true),
                    ShapeType = table.Column<byte>(nullable: false),
                    DominantFindingType = table.Column<byte>(nullable: false),
                    IsParenchymalDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidFluidLevel = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaximumDiameter = table.Column<int>(nullable: true),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    ExtentOfMidlineShift = table.Column<int>(nullable: true),
                    IsInvolvementOfVentricles = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    IsThirdVentricle = table.Column<bool>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    Is1LesionOfTheSamePathology = table.Column<bool>(nullable: false),
                    BasalNucleiPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasalNucleiFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BasalNucleiFindings_BasalNucleiPages_BasalNucleiPageId",
                        column: x => x.BasalNucleiPageId,
                        principalTable: "BasalNucleiPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrainstemCranialNervesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsPons = table.Column<bool>(nullable: false),
                    T1WSignalType = table.Column<byte>(nullable: false),
                    T2WSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignalType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    AdcSignalType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsPerineuralTumorSpread = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsMidbrainAtrophy = table.Column<bool>(nullable: false),
                    IsBrainstemAtrophy = table.Column<bool>(nullable: false),
                    IsNerveThickening = table.Column<bool>(nullable: false),
                    IsNerveCompression = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThan1Lesion = table.Column<bool>(nullable: false),
                    IsMesencephalon = table.Column<bool>(nullable: false),
                    IsCrusCerebri = table.Column<bool>(nullable: false),
                    IsCrusCerebriRight = table.Column<bool>(nullable: false),
                    IsCrusCerebriLeft = table.Column<bool>(nullable: false),
                    IsTegmentumMesencephali = table.Column<bool>(nullable: false),
                    IsSubstantiaNigra = table.Column<bool>(nullable: false),
                    IsNucleusRuber = table.Column<bool>(nullable: false),
                    IsLaminaTecti = table.Column<bool>(nullable: false),
                    IsPonsRight = table.Column<bool>(nullable: false),
                    IsPonsLeft = table.Column<bool>(nullable: false),
                    IsPonsCentral = table.Column<bool>(nullable: false),
                    IsPonsPeripheral = table.Column<bool>(nullable: false),
                    IsMedullaOblongata = table.Column<bool>(nullable: false),
                    IsMedullaOblongataAnterior = table.Column<bool>(nullable: false),
                    IsMedullaOblongataCentral = table.Column<bool>(nullable: false),
                    IsMedullaOblongataPosterior = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    CranialNerveType = table.Column<byte>(nullable: false),
                    IsRootEntryZone = table.Column<bool>(nullable: false),
                    IsGeniculumOfTheFacialNerve = table.Column<bool>(nullable: false),
                    IsMeatusAcusticusInternus = table.Column<bool>(nullable: false),
                    IsFacialisCanal = table.Column<bool>(nullable: false),
                    IsForamenStylomastoid = table.Column<bool>(nullable: false),
                    IsVestibularNerve = table.Column<bool>(nullable: false),
                    IsCochlearNerve = table.Column<bool>(nullable: false),
                    IsSuperciliaryGanglion = table.Column<bool>(nullable: false),
                    IsFossulaPetrosa = table.Column<bool>(nullable: false),
                    IsGanglionInferius = table.Column<bool>(nullable: false),
                    IsSulcusLateralisPosterior = table.Column<bool>(nullable: false),
                    IsTrigonumNerviVagi = table.Column<bool>(nullable: false),
                    IsCanalisHypoglossi = table.Column<bool>(nullable: false),
                    BrainstemCranialNervesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrainstemCranialNervesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BrainstemCranialNervesFindings_BrainstemCranialNervesPages_~",
                        column: x => x.BrainstemCranialNervesPageId,
                        principalTable: "BrainstemCranialNervesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CerebrospinalFluidSpaceFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisIKnow1Type = table.Column<byte>(nullable: false),
                    IsLateralVentricle = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairSignal = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsHypertrophyChoroidPlexus = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsAnteriorHornRight = table.Column<bool>(nullable: false),
                    IsCellaMediaRight = table.Column<bool>(nullable: false),
                    IsTrigonumRight = table.Column<bool>(nullable: false),
                    IsPosteriorHornRight = table.Column<bool>(nullable: false),
                    IsTemporalHornRight = table.Column<bool>(nullable: false),
                    IsAnteriorHornLeft = table.Column<bool>(nullable: false),
                    IsCellaMediaLeft = table.Column<bool>(nullable: false),
                    IsTrigonumLeft = table.Column<bool>(nullable: false),
                    IsPosteriorHornLeft = table.Column<bool>(nullable: false),
                    IsTemporalHornLeft = table.Column<bool>(nullable: false),
                    IsForamenOfMonro = table.Column<bool>(nullable: false),
                    IsForamenOfMonroRight = table.Column<bool>(nullable: false),
                    IsForamenOfMonroLeft = table.Column<bool>(nullable: false),
                    IsIIIVentricle = table.Column<bool>(nullable: false),
                    IsAquaeductusMesencephaliSylvii = table.Column<bool>(nullable: false),
                    IsIVVentricle = table.Column<bool>(nullable: false),
                    IsForaminaOfLuschka = table.Column<bool>(nullable: false),
                    IsForaminaOfLuschkaRight = table.Column<bool>(nullable: false),
                    IsForaminaOfLuschkaLeft = table.Column<bool>(nullable: false),
                    IsForamenOfMagendie = table.Column<bool>(nullable: false),
                    IsSubarachnoidCisterns = table.Column<bool>(nullable: false),
                    IsSuprasellarCistern = table.Column<bool>(nullable: false),
                    IsInterpeduncularCistern = table.Column<bool>(nullable: false),
                    IsQuadrigeminalCistern = table.Column<bool>(nullable: false),
                    IsPontineCistern = table.Column<bool>(nullable: false),
                    IsPrepontineCistern = table.Column<bool>(nullable: false),
                    IsPontomedullaryCistern = table.Column<bool>(nullable: false),
                    IsPontocerebellarCistern = table.Column<bool>(nullable: false),
                    IsMeckelCave = table.Column<bool>(nullable: false),
                    IsCisternaMagna = table.Column<bool>(nullable: false),
                    IsInsularCistern = table.Column<bool>(nullable: false),
                    IsRightSide = table.Column<bool>(nullable: false),
                    IsLeftSide = table.Column<bool>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    NormVariantVentricleType = table.Column<byte>(nullable: false),
                    ConfigurationType = table.Column<byte>(nullable: false),
                    ShrinkingType = table.Column<byte>(nullable: false),
                    AsymmetryType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsScarredResiduals = table.Column<bool>(nullable: false),
                    IsParenchymalDefect = table.Column<bool>(nullable: false),
                    IsTemporalHornExpansion = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsFlatteningOfTheGyri = table.Column<bool>(nullable: false),
                    IsTransependymalPressureCaps = table.Column<bool>(nullable: false),
                    IsPlumpingPosteriorHorns = table.Column<bool>(nullable: false),
                    IsEnlargementOfIIIVentricle = table.Column<bool>(nullable: false),
                    IsHyperdynamicFluidFlowVoid = table.Column<bool>(nullable: false),
                    IsInTheIIIVentricle = table.Column<bool>(nullable: false),
                    IsInTheAqueduct = table.Column<bool>(nullable: false),
                    IsCompressionBothSinuses = table.Column<bool>(nullable: false),
                    IsAtrophyOfBrainParenchyma = table.Column<bool>(nullable: false),
                    IsCerebrospinalFluidNegativePressure = table.Column<bool>(nullable: false),
                    IsSlitVentricle = table.Column<bool>(nullable: false),
                    IsThickeningDuraMater = table.Column<bool>(nullable: false),
                    IsBilateralHygromas = table.Column<bool>(nullable: false),
                    IsPachymeningealEnhancement = table.Column<bool>(nullable: false),
                    IsTonsilDepression = table.Column<bool>(nullable: false),
                    EvansIndex = table.Column<decimal>(nullable: true),
                    CorpusCallosumAngle = table.Column<int>(nullable: true),
                    IsExtended = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    MamillopontineDistance = table.Column<int>(nullable: true),
                    PontomesencephalicAngle = table.Column<int>(nullable: true),
                    VentricleDifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    VentricleDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsSubependymalNodules = table.Column<bool>(nullable: false),
                    IsCalcified = table.Column<bool>(nullable: false),
                    MassDifferentialDiagnosisIDescribe1Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    Is1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsMedian = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsFrontobasal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    PatternType = table.Column<byte>(nullable: false),
                    IsAdjacentToTheTentorium = table.Column<bool>(nullable: false),
                    IsPerimesencephalic = table.Column<bool>(nullable: false),
                    IsVasospasm = table.Column<bool>(nullable: false),
                    IsIschemia = table.Column<bool>(nullable: false),
                    IsSubduralHematoma = table.Column<bool>(nullable: false),
                    IsEpiduralHematoma = table.Column<bool>(nullable: false),
                    CerebrospinalFluidSpacePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CerebrospinalFluidSpaceFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CerebrospinalFluidSpaceFindings_CerebrospinalFluidSpacePage~",
                        column: x => x.CerebrospinalFluidSpacePageId,
                        principalTable: "CerebrospinalFluidSpacePages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CortexFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsInternalStructureSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsNarrowedSulci = table.Column<bool>(nullable: false),
                    IsBlurringOfWhiteGreyJunction = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairWSignal = table.Column<byte>(nullable: false),
                    IsT2SignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    DwiSignal = table.Column<byte>(nullable: false),
                    AdcSignal = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    LocalizationFazekasScale = table.Column<byte>(nullable: false),
                    CortexLocations = table.Column<decimal>(nullable: false),
                    IsPraecuneus = table.Column<bool>(nullable: false),
                    IsCuneus = table.Column<bool>(nullable: false),
                    IsLingualGyrus = table.Column<bool>(nullable: false),
                    IsGyrusTemporalisTransversus = table.Column<bool>(nullable: false),
                    IsLateralOccipitotemporalGyrus = table.Column<bool>(nullable: false),
                    IsParsIntermedia = table.Column<bool>(nullable: false),
                    IsSuperiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsMiddleCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsInferiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsCortex = table.Column<bool>(nullable: false),
                    IsWhiteMatter = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsDescentOfTheCerebellarTonsils = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    MidlineShift = table.Column<int>(nullable: true),
                    IsHerniation = table.Column<bool>(nullable: false),
                    RegionType = table.Column<byte>(nullable: false),
                    IsCorticalThinning = table.Column<bool>(nullable: false),
                    CorticalThinningType = table.Column<byte>(nullable: false),
                    IsMesiotemporalSclerosis = table.Column<bool>(nullable: false),
                    IsCorticalTuber = table.Column<bool>(nullable: false),
                    IsSubependymalNodules = table.Column<bool>(nullable: false),
                    IsCalcified = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    IsVentricularHerniation = table.Column<bool>(nullable: false),
                    IsLateralVentricleRight = table.Column<bool>(nullable: false),
                    IsLateralVentricleLeft = table.Column<bool>(nullable: false),
                    Is3RdVentricle = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    ClassificationFazekas1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    ClassificationFazekas2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType3 = table.Column<byte>(nullable: false),
                    ClassificationFazekas3 = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    LocalizationWHOClassification = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    Size2ndPlane = table.Column<int>(nullable: true),
                    Size3rdPlane = table.Column<int>(nullable: true),
                    IsSubstanceDefect = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    ClassificationWHO1 = table.Column<byte>(nullable: false),
                    ClassificationWHO2 = table.Column<byte>(nullable: false),
                    ClassificationWHO3 = table.Column<byte>(nullable: false),
                    LocalizationModifiedClassificationAdams = table.Column<byte>(nullable: false),
                    IsMicroBleeding = table.Column<bool>(nullable: false),
                    IsHemorrhagicLacunae = table.Column<bool>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    ClassificationAdams1 = table.Column<byte>(nullable: false),
                    ClassificationAdams2 = table.Column<byte>(nullable: false),
                    ClassificationAdams3 = table.Column<byte>(nullable: false),
                    CortexPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CortexFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CortexFindings_CortexPages_CortexPageId",
                        column: x => x.CortexPageId,
                        principalTable: "CortexPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExaminationIndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IschemiaIntracranialHemorrhageType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsMultipleSclerosis = table.Column<bool>(nullable: false),
                    IsVasculitis = table.Column<bool>(nullable: false),
                    NihssScore = table.Column<int>(nullable: true),
                    AspectScore = table.Column<int>(nullable: true),
                    HoursAfterSymptomOnset = table.Column<int>(nullable: true),
                    IsWakeUpStroke = table.Column<bool>(nullable: false),
                    IntracranialHemorrhageType = table.Column<byte>(nullable: false),
                    HuntHessScaleType = table.Column<byte>(nullable: false),
                    Month = table.Column<int>(nullable: true),
                    Year = table.Column<int>(nullable: true),
                    IsRefractoryEpilepsy = table.Column<bool>(nullable: false),
                    IsIntracranialHemorrhage = table.Column<bool>(nullable: false),
                    IsMinorTrauma = table.Column<bool>(nullable: false),
                    IsPolytrauma = table.Column<bool>(nullable: false),
                    IsHighVelocityTrauma = table.Column<bool>(nullable: false),
                    GlasgowComaScale = table.Column<int>(nullable: true),
                    ExaminationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExaminationIndicationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExaminationIndicationFindings_ExaminationPages_ExaminationP~",
                        column: x => x.ExaminationPageId,
                        principalTable: "ExaminationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PatientInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Weight = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    Gender = table.Column<byte>(nullable: false),
                    Age = table.Column<byte>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatientInformation_ExaminationPages_Id",
                        column: x => x.Id,
                        principalTable: "ExaminationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FacialSkullFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    OrbitaDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    ParanasalSinusesDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    OralCavityDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    SalivaryGlandsDiagnosis1LocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    IsPepperAndSaltSign = table.Column<bool>(nullable: false),
                    IsLocalOsteodestruction = table.Column<bool>(nullable: false),
                    IsCompressionBrainstem = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsFossaPterygopalatina = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsMirrorFormation = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsAdjacentStructuralChangesDueToPressure = table.Column<bool>(nullable: false),
                    IsDiffuseWideningOfTheMucosa = table.Column<bool>(nullable: false),
                    IsThinningOfTheBonyBoundary = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMandible = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsPerineuralSpread = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsMiddleCranialFossa = table.Column<bool>(nullable: false),
                    IsSphenoidBoneMiddle = table.Column<bool>(nullable: false),
                    IsPosteriorFossa = table.Column<bool>(nullable: false),
                    IsTemporalBonePosterior = table.Column<bool>(nullable: false),
                    IsForamenMagnum = table.Column<bool>(nullable: false),
                    IsInternalAcousticCanal = table.Column<bool>(nullable: false),
                    IsPorusAcusticusInternus = table.Column<bool>(nullable: false),
                    IsMiddleEarTympanum = table.Column<bool>(nullable: false),
                    IsEpitympanon = table.Column<bool>(nullable: false),
                    IsMesotympanum = table.Column<bool>(nullable: false),
                    IsHypotympanon = table.Column<bool>(nullable: false),
                    IsInnerEarLabyrinth = table.Column<bool>(nullable: false),
                    IsMastoid = table.Column<bool>(nullable: false),
                    IsAntrum = table.Column<bool>(nullable: false),
                    IsOpticNerveIICompartment = table.Column<bool>(nullable: false),
                    IsRectusSuperiorMuscle = table.Column<bool>(nullable: false),
                    IsRectusInferiorMuscle = table.Column<bool>(nullable: false),
                    IsRectusLateralisMuscle = table.Column<bool>(nullable: false),
                    IsRectusMedialisMuscle = table.Column<bool>(nullable: false),
                    IsObliquusSuperiorMuscle = table.Column<bool>(nullable: false),
                    IsMuscleBellyThickening = table.Column<bool>(nullable: false),
                    IsTubular = table.Column<bool>(nullable: false),
                    IsEethmoidAirCells = table.Column<bool>(nullable: false),
                    IsMaxillarySinus = table.Column<bool>(nullable: false),
                    IsSphenoidSinus = table.Column<bool>(nullable: false),
                    IsInfratemporalFossa = table.Column<bool>(nullable: false),
                    IsFrontalSinus = table.Column<bool>(nullable: false),
                    IsRetentionCysts = table.Column<bool>(nullable: false),
                    IsMucosalPolyps = table.Column<bool>(nullable: false),
                    IsOralMucosalSpaceOms = table.Column<bool>(nullable: false),
                    IsSublingualSpaceSls = table.Column<bool>(nullable: false),
                    IsSubmandibularSpaceSms = table.Column<bool>(nullable: false),
                    IsRootOfTheTongueRot = table.Column<bool>(nullable: false),
                    IsParotidGland = table.Column<bool>(nullable: false),
                    IsSuperficialLobe = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    SymmetryType = table.Column<byte>(nullable: false),
                    IsMusculatureOfFloorOfMouth = table.Column<bool>(nullable: false),
                    IsOsteomyelitisMaxilla = table.Column<bool>(nullable: false),
                    IsFrontalBone = table.Column<bool>(nullable: false),
                    IsZygomaticBone = table.Column<bool>(nullable: false),
                    IsSphenoidBone = table.Column<bool>(nullable: false),
                    IsMaxillaryBone = table.Column<bool>(nullable: false),
                    IsEthmoidBone = table.Column<bool>(nullable: false),
                    IsOrbitalFloor = table.Column<bool>(nullable: false),
                    IsLaminaCribrosa = table.Column<bool>(nullable: false),
                    IsInfraorbitalNerve = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    Size = table.Column<int>(nullable: true),
                    Size2ndPlane = table.Column<int>(nullable: true),
                    Size3rdPlane = table.Column<int>(nullable: true),
                    IsFat = table.Column<bool>(nullable: false),
                    IsSolidParts = table.Column<bool>(nullable: false),
                    IsNodularParts = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsPerineural = table.Column<bool>(nullable: false),
                    IsAlongANerveCord = table.Column<bool>(nullable: false),
                    IsIntraorbitalSpread = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    IsThickeningOfTheCalotte = table.Column<bool>(nullable: false),
                    MaxDiameterMucosa = table.Column<int>(nullable: true),
                    IsLymphadenopathy = table.Column<bool>(nullable: false),
                    IsWhartonDuctOcclusion = table.Column<bool>(nullable: false),
                    IsUnilateralMuscleHypotonia = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    IsMuscleFattyDegeneration = table.Column<bool>(nullable: false),
                    IsThickeningOfTheMaxillarySinusWall = table.Column<bool>(nullable: false),
                    IsTemporalBoneApexAbscess = table.Column<bool>(nullable: false),
                    IsSinusThrombosis = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    AbscessMaxDiameter = table.Column<int>(nullable: true),
                    DifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsMoreThan1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsAnteriorCranialFossa = table.Column<bool>(nullable: false),
                    IsSphenoidBoneAnterior = table.Column<bool>(nullable: false),
                    IsOlfactoryNerveI = table.Column<bool>(nullable: false),
                    IsTemporalBoneMiddle = table.Column<bool>(nullable: false),
                    IsSuperiorOrbitalFissure = table.Column<bool>(nullable: false),
                    IsMeningeaMediaArtery = table.Column<bool>(nullable: false),
                    IsInternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsOpticNerveII = table.Column<bool>(nullable: false),
                    IsOculomotorNerveIII = table.Column<bool>(nullable: false),
                    IsTrochlearNerveIV = table.Column<bool>(nullable: false),
                    IsOphthalmicNerveV1 = table.Column<bool>(nullable: false),
                    IsMaxillaryNerveV2 = table.Column<bool>(nullable: false),
                    IsNMandibularisV3 = table.Column<bool>(nullable: false),
                    IsMeatusAcusticusInternus = table.Column<bool>(nullable: false),
                    IsOccipitalBone = table.Column<bool>(nullable: false),
                    IsFacialNerveVII = table.Column<bool>(nullable: false),
                    IsVestibulochochlearNerveVIII = table.Column<bool>(nullable: false),
                    IsGlossopharyngealNerveIX = table.Column<bool>(nullable: false),
                    IsVagusNerveX = table.Column<bool>(nullable: false),
                    IsAccessoryNerveXI = table.Column<bool>(nullable: false),
                    IsHypoglossalNerveXII = table.Column<bool>(nullable: false),
                    IsInternalJugularVein = table.Column<bool>(nullable: false),
                    IsSigmoidSinus = table.Column<bool>(nullable: false),
                    IsDuctusEndolymphaticus = table.Column<bool>(nullable: false),
                    IsSaccusEndolymphaticus = table.Column<bool>(nullable: false),
                    IsExternalAcousticCanalMeatusAcusticusExternus = table.Column<bool>(nullable: false),
                    IsTemporalBoneApex = table.Column<bool>(nullable: false),
                    IsAuricle = table.Column<bool>(nullable: false),
                    IsForamenStylomastoideum = table.Column<bool>(nullable: false),
                    IsTubaAuditiva = table.Column<bool>(nullable: false),
                    IsFacialNerveCanal = table.Column<bool>(nullable: false),
                    ChandlerClassificationLocalizationType = table.Column<byte>(nullable: false),
                    IsLacrimalBone = table.Column<bool>(nullable: false),
                    IsInfraorbitalGroove = table.Column<bool>(nullable: false),
                    IsIntraconalSpace = table.Column<bool>(nullable: false),
                    IsExtraconalSpace = table.Column<bool>(nullable: false),
                    IsBulbusOculi = table.Column<bool>(nullable: false),
                    IsAnteriorChamber = table.Column<bool>(nullable: false),
                    IsLens = table.Column<bool>(nullable: false),
                    IsPosteriorChamber = table.Column<bool>(nullable: false),
                    IsCiliaryBody = table.Column<bool>(nullable: false),
                    IsVitreousBody = table.Column<bool>(nullable: false),
                    IsSclera = table.Column<bool>(nullable: false),
                    IsOpticNerveIIOther = table.Column<bool>(nullable: false),
                    IsObliquusInferiorMuscle = table.Column<bool>(nullable: false),
                    IsFissuraOrbitalisSuperior = table.Column<bool>(nullable: false),
                    IsFissuraOrbitalisInferior = table.Column<bool>(nullable: false),
                    IsTrigeminalNerveV = table.Column<bool>(nullable: false),
                    IsMeningeaRecurrensArtery = table.Column<bool>(nullable: false),
                    IsSuperiorOphthalmicVein = table.Column<bool>(nullable: false),
                    IsLacrimalGland = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    MaxDiameterMuscleBelly = table.Column<int>(nullable: true),
                    IsIntracranialSpread = table.Column<bool>(nullable: false),
                    IsDiffuseFusiform = table.Column<bool>(nullable: false),
                    IsRetinalDetachment = table.Column<bool>(nullable: false),
                    OrbitaDiagnosis1Type = table.Column<byte>(nullable: false),
                    OrbitaDiagnosis2Type = table.Column<byte>(nullable: false),
                    OrbitaDiagnosis3Type = table.Column<byte>(nullable: false),
                    ChandlerClassificationDiagnosisType = table.Column<byte>(nullable: false),
                    IsDeviatedNasalSeptum = table.Column<bool>(nullable: false),
                    IsConchaBullosa = table.Column<bool>(nullable: false),
                    IsConchaBullosaRight = table.Column<bool>(nullable: false),
                    IsConchaBullosaLeft = table.Column<bool>(nullable: false),
                    LevelType = table.Column<byte>(nullable: false),
                    ConchaBullosaSize = table.Column<int>(nullable: true),
                    ConchaBullosa2NdPlane = table.Column<int>(nullable: true),
                    ConchaBullosa3RdPlane = table.Column<int>(nullable: true),
                    IsInfraorbitalHallerCell = table.Column<bool>(nullable: false),
                    IsInfraorbitalHallerRight = table.Column<bool>(nullable: false),
                    IsInfraorbitalHallerLeft = table.Column<bool>(nullable: false),
                    InfraorbitalHallerCellSize = table.Column<int>(nullable: true),
                    InfraorbitalHallerCell2NdPlane = table.Column<int>(nullable: true),
                    InfraorbitalHallerCell3RdPlane = table.Column<int>(nullable: true),
                    IsOnodiCells = table.Column<bool>(nullable: false),
                    IsOnodiCellsRight = table.Column<bool>(nullable: false),
                    IsOnodiCellsLeft = table.Column<bool>(nullable: false),
                    OnodiCellsSize = table.Column<int>(nullable: true),
                    OnodiCells2NdPlane = table.Column<int>(nullable: true),
                    OnodiCells3RdPlane = table.Column<int>(nullable: true),
                    IsAggerNasiCells = table.Column<bool>(nullable: false),
                    IsAggerNasiRight = table.Column<bool>(nullable: false),
                    IsAggerNasiLeft = table.Column<bool>(nullable: false),
                    IsAggerNasiMedian = table.Column<bool>(nullable: false),
                    AggerNasiCellsSize = table.Column<int>(nullable: true),
                    AggerNasiCells2NdPlane = table.Column<int>(nullable: true),
                    AggerNasiCells3RdPlane = table.Column<int>(nullable: true),
                    IsSkullBase = table.Column<bool>(nullable: false),
                    IsAsymmetryOfTheSkullBase = table.Column<bool>(nullable: false),
                    IsDehiscenceOfTheSkullBase = table.Column<bool>(nullable: false),
                    AssessmentType = table.Column<byte>(nullable: false),
                    ConchaeType = table.Column<byte>(nullable: false),
                    IsPalatineBone = table.Column<bool>(nullable: false),
                    IsNasalBone = table.Column<bool>(nullable: false),
                    IsVomer = table.Column<bool>(nullable: false),
                    IsEthmoidInfundibulum = table.Column<bool>(nullable: false),
                    IsUncinateProcess = table.Column<bool>(nullable: false),
                    IsHiatusSemilunaris = table.Column<bool>(nullable: false),
                    IsNasofrontalDuct = table.Column<bool>(nullable: false),
                    IsOstiomeatalComplex = table.Column<bool>(nullable: false),
                    IsLaminaePapyraceae = table.Column<bool>(nullable: false),
                    IsCavernosusSinus = table.Column<bool>(nullable: false),
                    IsNasalSeptum = table.Column<bool>(nullable: false),
                    IsInStructuresOutsideSinus = table.Column<bool>(nullable: false),
                    IsFungusBall = table.Column<bool>(nullable: false),
                    MaxDiameterFungusBall = table.Column<int>(nullable: true),
                    IsThickeningOfTheMaxillarySinusWalls = table.Column<bool>(nullable: false),
                    IsCervicalLymphadenopathy = table.Column<bool>(nullable: false),
                    IsOrbitalComplications = table.Column<bool>(nullable: false),
                    ChandlerClassificationType = table.Column<byte>(nullable: false),
                    IsBrainAbscess = table.Column<bool>(nullable: false),
                    MaxDiameterBrainAbscess = table.Column<int>(nullable: true),
                    IsSubduralEmpyema = table.Column<bool>(nullable: false),
                    MaxDiameterSubduralEmpyema = table.Column<int>(nullable: true),
                    IsEpiduralAbscess = table.Column<bool>(nullable: false),
                    MaxDiameterEpiduralAbscess = table.Column<int>(nullable: true),
                    ParanasalSinusesDiagnosis1Type = table.Column<byte>(nullable: false),
                    ParanasalSinusesDiagnosis2Type = table.Column<byte>(nullable: false),
                    ParanasalSinusesDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsHardPalate = table.Column<bool>(nullable: false),
                    IsSoftPalate = table.Column<bool>(nullable: false),
                    IsTrigonumSubmandibulare = table.Column<bool>(nullable: false),
                    IsUvula = table.Column<bool>(nullable: false),
                    IsPalatineTonsils = table.Column<bool>(nullable: false),
                    IsConstrictorPharyngisSuperiorMuscle = table.Column<bool>(nullable: false),
                    IsMaxilla = table.Column<bool>(nullable: false),
                    IsMaxillaAlveolarRidge = table.Column<bool>(nullable: false),
                    IsMandibularBone = table.Column<bool>(nullable: false),
                    IsUpperLip = table.Column<bool>(nullable: false),
                    IsUpperLipAlveolarRidge = table.Column<bool>(nullable: false),
                    IsLowerLip = table.Column<bool>(nullable: false),
                    IsOropharynx = table.Column<bool>(nullable: false),
                    IsPosteriorWall = table.Column<bool>(nullable: false),
                    IsLateralWall = table.Column<bool>(nullable: false),
                    IsPeritonsillarSpace = table.Column<bool>(nullable: false),
                    IsLateralPharyngealWall = table.Column<bool>(nullable: false),
                    IsFloor = table.Column<bool>(nullable: false),
                    IsBaseOfTongue = table.Column<bool>(nullable: false),
                    IsFrenulumLinguae = table.Column<bool>(nullable: false),
                    IsTongueBaseTonsil = table.Column<bool>(nullable: false),
                    IsEpiglottisUpperMargin = table.Column<bool>(nullable: false),
                    IsValleculae = table.Column<bool>(nullable: false),
                    IsInflitrationMusculatureOfFloorOfMouth = table.Column<bool>(nullable: false),
                    OralCavityDiagnosis1Type = table.Column<byte>(nullable: false),
                    OralCavityDiagnosis2Type = table.Column<byte>(nullable: false),
                    OralCavityDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsRamusMandibulae = table.Column<bool>(nullable: false),
                    IsCondylarProcess = table.Column<bool>(nullable: false),
                    IsCoronoidProcess = table.Column<bool>(nullable: false),
                    IsCorpusMandibulae = table.Column<bool>(nullable: false),
                    IsAlveolarRidge = table.Column<bool>(nullable: false),
                    IsCorpusMaxillae = table.Column<bool>(nullable: false),
                    IsAlveolarProcess = table.Column<bool>(nullable: false),
                    IsRightUpperJaw = table.Column<bool>(nullable: false),
                    Is11 = table.Column<bool>(nullable: false),
                    Is12 = table.Column<bool>(nullable: false),
                    Is13 = table.Column<bool>(nullable: false),
                    Is14 = table.Column<bool>(nullable: false),
                    Is15 = table.Column<bool>(nullable: false),
                    Is16 = table.Column<bool>(nullable: false),
                    Is17 = table.Column<bool>(nullable: false),
                    Is18 = table.Column<bool>(nullable: false),
                    IsLeftUpperJaw = table.Column<bool>(nullable: false),
                    Is21 = table.Column<bool>(nullable: false),
                    Is22 = table.Column<bool>(nullable: false),
                    Is23 = table.Column<bool>(nullable: false),
                    Is24 = table.Column<bool>(nullable: false),
                    Is25 = table.Column<bool>(nullable: false),
                    Is26 = table.Column<bool>(nullable: false),
                    Is27 = table.Column<bool>(nullable: false),
                    Is28 = table.Column<bool>(nullable: false),
                    IsRightLowerJaw = table.Column<bool>(nullable: false),
                    Is31 = table.Column<bool>(nullable: false),
                    Is32 = table.Column<bool>(nullable: false),
                    Is33 = table.Column<bool>(nullable: false),
                    Is34 = table.Column<bool>(nullable: false),
                    Is35 = table.Column<bool>(nullable: false),
                    Is36 = table.Column<bool>(nullable: false),
                    Is37 = table.Column<bool>(nullable: false),
                    Is38 = table.Column<bool>(nullable: false),
                    IsLeftLowerJaw = table.Column<bool>(nullable: false),
                    Is41 = table.Column<bool>(nullable: false),
                    Is42 = table.Column<bool>(nullable: false),
                    Is43 = table.Column<bool>(nullable: false),
                    Is44 = table.Column<bool>(nullable: false),
                    Is45 = table.Column<bool>(nullable: false),
                    Is46 = table.Column<bool>(nullable: false),
                    Is47 = table.Column<bool>(nullable: false),
                    Is48 = table.Column<bool>(nullable: false),
                    JawTeethType = table.Column<byte>(nullable: false),
                    ToothAnomaliesType = table.Column<byte>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    OtherNonOdontogenicCystType = table.Column<byte>(nullable: false),
                    JawTeethDiagnosisType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsDiscDisplacement = table.Column<bool>(nullable: false),
                    DiscDisplacementType = table.Column<byte>(nullable: false),
                    IsDiscusReduction = table.Column<bool>(nullable: false),
                    IsDiscusReductionSuspicionOf = table.Column<bool>(nullable: false),
                    IsDiscDeformation = table.Column<bool>(nullable: false),
                    IsDiscDeformationDistinct = table.Column<bool>(nullable: false),
                    IsDiscDeformationPerforation = table.Column<bool>(nullable: false),
                    IsDiscDeformationResorption = table.Column<bool>(nullable: false),
                    IsDiscDeformationSuspicionOf = table.Column<bool>(nullable: false),
                    IsOsseousChanges = table.Column<bool>(nullable: false),
                    OsseousChangesType = table.Column<byte>(nullable: false),
                    IsBoneEdema = table.Column<bool>(nullable: false),
                    IsPoorlyDemarcatedOsteolysis = table.Column<bool>(nullable: false),
                    IsBoneMarrowContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSequester = table.Column<bool>(nullable: false),
                    SequesterMaxDiameter = table.Column<int>(nullable: true),
                    SequesterSize2ndPlane = table.Column<int>(nullable: true),
                    SequesterSize3rdPlane = table.Column<int>(nullable: true),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsSoftTissueFistula = table.Column<bool>(nullable: false),
                    JawTeethAssessmentType = table.Column<byte>(nullable: false),
                    IsDeepMedialLobe = table.Column<bool>(nullable: false),
                    IsParotidDuctStenonSDuct = table.Column<bool>(nullable: false),
                    IsFacialNerve = table.Column<bool>(nullable: false),
                    IsSubmandibularGland = table.Column<bool>(nullable: false),
                    IsSubmandibularFossa = table.Column<bool>(nullable: false),
                    IsSubmandibularMandible = table.Column<bool>(nullable: false),
                    IsSubmandibularDuctWhartonSDuct = table.Column<bool>(nullable: false),
                    IsCarunculaSublingualis = table.Column<bool>(nullable: false),
                    IsSublingualGland = table.Column<bool>(nullable: false),
                    IsMinorSalivaryGlands = table.Column<bool>(nullable: false),
                    SalivaryGlandsDiagnosis1Type = table.Column<byte>(nullable: false),
                    SalivaryGlandsDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsSubperiosteal = table.Column<bool>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    IsGaleaHaematoma = table.Column<bool>(nullable: false),
                    IsCephalhaematoma = table.Column<bool>(nullable: false),
                    FacialSkullPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacialSkullFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FacialSkullFindings_FacialSkullPages_FacialSkullPageId",
                        column: x => x.FacialSkullPageId,
                        principalTable: "FacialSkullPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MeningesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosisLocalization = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    IsLocalHyperostosisOfTheBone = table.Column<bool>(nullable: false),
                    T1WSignal = table.Column<byte>(nullable: false),
                    T2WSignal = table.Column<byte>(nullable: false),
                    FlairSignal = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsMedian = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    IsFalx = table.Column<bool>(nullable: false),
                    IsTentorium = table.Column<bool>(nullable: false),
                    IsLaminaCribrosa = table.Column<bool>(nullable: false),
                    IsOpticNerveSheath = table.Column<bool>(nullable: false),
                    IsIntrasellar = table.Column<bool>(nullable: false),
                    IsPosteriorClinoidProcess = table.Column<bool>(nullable: false),
                    IsSphenoidWing = table.Column<bool>(nullable: false),
                    IsCerebellopontineAngle = table.Column<bool>(nullable: false),
                    IsSulcusSigmoideus = table.Column<bool>(nullable: false),
                    IsTrigoneOfTheLateralVentricle = table.Column<bool>(nullable: false),
                    IsInsularCistern = table.Column<bool>(nullable: false),
                    IsForamenMagnum = table.Column<bool>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    DwiSignal = table.Column<byte>(nullable: false),
                    AdcSignal = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    FatType = table.Column<byte>(nullable: false),
                    CystType = table.Column<byte>(nullable: false),
                    IsHemorrhageHemosiderin = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    GrowthPatternType = table.Column<byte>(nullable: false),
                    IsIntrameatalGrowth = table.Column<bool>(nullable: false),
                    IsIntraforaminalFissuralGrowth = table.Column<bool>(nullable: false),
                    IsLocalVenousStasis = table.Column<bool>(nullable: false),
                    IsBoneInfiltration = table.Column<bool>(nullable: false),
                    MassDifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    MassDifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    MeningesWidth = table.Column<int>(nullable: true),
                    T1WSignalDiffuse = table.Column<byte>(nullable: false),
                    T2WSignalDiffuse = table.Column<byte>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    MaxExtension = table.Column<int>(nullable: true),
                    IsEmpyema = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsPachymeninges = table.Column<bool>(nullable: false),
                    IsLeptomeninges = table.Column<bool>(nullable: false),
                    DiffuseDifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DiffuseDifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSickleShaped = table.Column<bool>(nullable: false),
                    IsCrossingSutures = table.Column<bool>(nullable: false),
                    IsMajorAttachmentNotExceeded = table.Column<bool>(nullable: false),
                    MaxWidth = table.Column<int>(nullable: true),
                    IsAlongFalx = table.Column<bool>(nullable: false),
                    IsAlongTentorium = table.Column<bool>(nullable: false),
                    IsSeptations = table.Column<bool>(nullable: false),
                    IsContrastEnhancementMembrane = table.Column<bool>(nullable: false),
                    IsFluid = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsBridgeVeinDisplacementInward = table.Column<bool>(nullable: false),
                    IsDuralThickening = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    MidlineDeviation = table.Column<int>(nullable: true),
                    IsHerniation = table.Column<bool>(nullable: false),
                    RegionType = table.Column<byte>(nullable: false),
                    CharacterizationHematomaType = table.Column<byte>(nullable: false),
                    IsSubduralHygroma = table.Column<bool>(nullable: false),
                    IsDuraleAttachmentExceeded = table.Column<bool>(nullable: false),
                    IsSuturesNotExceeded = table.Column<bool>(nullable: false),
                    IsDisplacedDuraBetweenEdhAndBrain = table.Column<bool>(nullable: false),
                    IsBiconvex = table.Column<bool>(nullable: false),
                    IsSkullFracture = table.Column<bool>(nullable: false),
                    IsContrecoupSdh = table.Column<bool>(nullable: false),
                    IsAdjacentContusion = table.Column<bool>(nullable: false),
                    IsConcomitantCerebrospinalFluidCongestion = table.Column<bool>(nullable: false),
                    IsAssociatedInfarction = table.Column<bool>(nullable: false),
                    MeningesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeningesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeningesFindings_MeningesPages_MeningesPageId",
                        column: x => x.MeningesPageId,
                        principalTable: "MeningesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SellarRegionFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SellarRegionDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    FlairSignalType = table.Column<byte>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    SignalVoidType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsDuraTailSign = table.Column<bool>(nullable: false),
                    ContrastQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    RelationToThePituitaryGlandType = table.Column<byte>(nullable: false),
                    IsNeurohypophysis = table.Column<bool>(nullable: false),
                    IsAdenohypophysis = table.Column<bool>(nullable: false),
                    IsPituitaryStalk = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsCavernousSinus = table.Column<bool>(nullable: false),
                    IsOpticNerveI = table.Column<bool>(nullable: false),
                    IsOpticChiasm = table.Column<bool>(nullable: false),
                    IsOlfactoryNerveII = table.Column<bool>(nullable: false),
                    IsOculomotorNerveIII = table.Column<bool>(nullable: false),
                    IsTrochlearNerveIV = table.Column<bool>(nullable: false),
                    IsAbducensNerveVI = table.Column<bool>(nullable: false),
                    IsInternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsDuraMaterMeningen = table.Column<bool>(nullable: false),
                    IsSphenoidSinus = table.Column<bool>(nullable: false),
                    IsNasopharynx = table.Column<bool>(nullable: false),
                    ExtensionSize = table.Column<int>(nullable: true),
                    ExtensionSize2ndPlane = table.Column<int>(nullable: true),
                    ExtensionSize3rdPlane = table.Column<int>(nullable: true),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsToothBoneFormation = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsBonyRemodeling = table.Column<bool>(nullable: false),
                    IsContactWithCarotidArtery = table.Column<bool>(nullable: false),
                    CarotidArterySideType = table.Column<byte>(nullable: false),
                    IsDisplacementOfPituitaryStalk = table.Column<bool>(nullable: false),
                    PituitaryStalkSideType = table.Column<byte>(nullable: false),
                    IsInfiltrationIntoCavernousSinus = table.Column<bool>(nullable: false),
                    IsSuspicionOfInfiltration = table.Column<bool>(nullable: false),
                    IsExtensionToSuprasellar = table.Column<bool>(nullable: false),
                    IsAffectionOpticChiasm = table.Column<bool>(nullable: false),
                    IsDetectionOfLesion = table.Column<bool>(nullable: false),
                    SellarRegionDiagnosis1Type = table.Column<byte>(nullable: false),
                    SellarRegionDiagnosis2Type = table.Column<byte>(nullable: false),
                    SellarRegionDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    Is1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    SellarRegionPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellarRegionFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SellarRegionFindings_SellarRegionPages_SellarRegionPageId",
                        column: x => x.SellarRegionPageId,
                        principalTable: "SellarRegionPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SummaryFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    SummaryDiagnosisType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsSpatialDissemination = table.Column<bool>(nullable: false),
                    IsTemporalDissemination = table.Column<bool>(nullable: false),
                    ProgressControlMonth = table.Column<byte>(nullable: true),
                    ProgressControlYear = table.Column<int>(nullable: true),
                    ProgressControlType = table.Column<byte>(nullable: false),
                    IsPeriventricular = table.Column<bool>(nullable: false),
                    Periventricular = table.Column<int>(nullable: true),
                    IsCortical = table.Column<bool>(nullable: false),
                    Cortical = table.Column<int>(nullable: true),
                    IsJuxtacortical = table.Column<bool>(nullable: false),
                    Juxtacortical = table.Column<int>(nullable: true),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    Infratentorial = table.Column<int>(nullable: true),
                    IsSpinal = table.Column<bool>(nullable: false),
                    Spinal = table.Column<int>(nullable: true),
                    IsOpticNeuritis = table.Column<bool>(nullable: false),
                    IsActiveLesions = table.Column<bool>(nullable: false),
                    IsNewLesions = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    NewLesions = table.Column<int>(nullable: true),
                    IsBlackHoles = table.Column<bool>(nullable: false),
                    BlackHoles = table.Column<int>(nullable: true),
                    IsDawsonFinger = table.Column<bool>(nullable: false),
                    IsPerivenousSpread = table.Column<bool>(nullable: false),
                    IsCorpusCallosumUndersurface = table.Column<bool>(nullable: false),
                    IsTumefactiveMS = table.Column<bool>(nullable: false),
                    IsIncompleteRingEnhancement = table.Column<bool>(nullable: false),
                    OtherDiseaseType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsLocallyFlattenedSulci = table.Column<bool>(nullable: false),
                    HerniationType = table.Column<byte>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    MidlineShiftInMm = table.Column<int>(nullable: true),
                    IsHydrocephalus = table.Column<bool>(nullable: false),
                    IsUnilateral = table.Column<bool>(nullable: false),
                    IsACAInfarction = table.Column<bool>(nullable: false),
                    IsMCAInfarction = table.Column<bool>(nullable: false),
                    IsPCAInfarction = table.Column<bool>(nullable: false),
                    IsObstructiveHydrocephalus = table.Column<bool>(nullable: false),
                    IsCompressionOfTheAqueduct = table.Column<bool>(nullable: false),
                    IsTonsillarNecrosis = table.Column<bool>(nullable: false),
                    IsDuretHemorrhage = table.Column<bool>(nullable: false),
                    WedgingType = table.Column<byte>(nullable: false),
                    IsIntracranialHypotension = table.Column<bool>(nullable: false),
                    HemorrhageLocalizationType = table.Column<byte>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    IsFracture = table.Column<bool>(nullable: false),
                    AtraumaticEtiologyType = table.Column<byte>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    NeurodegenerationType = table.Column<byte>(nullable: false),
                    FazekasType = table.Column<byte>(nullable: false),
                    AtrophyNeurodegenerationType = table.Column<byte>(nullable: false),
                    IsFrontalLobeAtrophy = table.Column<bool>(nullable: false),
                    IsParietalLobeAtrophy = table.Column<bool>(nullable: false),
                    IsTemporalLobeAtrophy = table.Column<bool>(nullable: false),
                    IsOccipitalLobeAtrophy = table.Column<bool>(nullable: false),
                    IsHippocampalAtrophy = table.Column<bool>(nullable: false),
                    IsSupratentorialAccentuation = table.Column<bool>(nullable: false),
                    IsInfratentorialAccentuation = table.Column<bool>(nullable: false),
                    IsGlobalAtrophy = table.Column<bool>(nullable: false),
                    NeurodegenerationLocalizationType = table.Column<byte>(nullable: false),
                    IsSideAsymmetryInFavorOf = table.Column<bool>(nullable: false),
                    IsEnlargedPerivascularSpaces = table.Column<bool>(nullable: false),
                    IsInfarctLacunae = table.Column<bool>(nullable: false),
                    IsMicroBleeding = table.Column<bool>(nullable: false),
                    IsStrategicInfarcts = table.Column<bool>(nullable: false),
                    IsHummingbirdSign = table.Column<bool>(nullable: false),
                    IsHotCrossBunSign = table.Column<bool>(nullable: false),
                    IsMickeyMouseSign = table.Column<bool>(nullable: false),
                    IsMorningGlorySign = table.Column<bool>(nullable: false),
                    IsFieldHockeyStickSign = table.Column<bool>(nullable: false),
                    IsPulvinarSign = table.Column<bool>(nullable: false),
                    IsReducedMidbrainToPonsRatio = table.Column<bool>(nullable: false),
                    IsAbsentSwallowTailSign = table.Column<bool>(nullable: false),
                    IsKoedamScore = table.Column<bool>(nullable: false),
                    KoedamScore = table.Column<byte>(nullable: false),
                    IsMesialTemporalLobeAtrophy = table.Column<bool>(nullable: false),
                    MesialTemporalLobeAtrophyScore = table.Column<byte>(nullable: false),
                    PossibleEpileptogenicFindingsType = table.Column<byte>(nullable: false),
                    SummaryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SummaryFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SummaryFindings_SummaryPages_SummaryPageId",
                        column: x => x.SummaryPageId,
                        principalTable: "SummaryPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CMSideEffects",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    CMSideEffectType = table.Column<byte>(nullable: false),
                    MinAfterCMinjection = table.Column<int>(nullable: true),
                    DurationAdverseReactionType = table.Column<byte>(nullable: false),
                    IsCompletelyDeclining = table.Column<bool>(nullable: false),
                    IsSeriousAdverseEvent = table.Column<bool>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CMSideEffects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CMSideEffects_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sequences",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    WeightingType = table.Column<byte>(nullable: false),
                    OrientationType = table.Column<byte>(nullable: false),
                    IsSaturatedFat = table.Column<bool>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    IsParallelImaging = table.Column<bool>(nullable: false),
                    SequenceType = table.Column<byte>(nullable: false),
                    IsCineImaging = table.Column<bool>(nullable: false),
                    IsHighResolution = table.Column<bool>(nullable: false),
                    IsChemicalShiftImaging = table.Column<bool>(nullable: false),
                    IsCompressedSense = table.Column<bool>(nullable: false),
                    IsDynamicsAfterContrastInjection = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
                    IsEpiDwi = table.Column<bool>(nullable: false),
                    IsHasteNonEpiDwi = table.Column<bool>(nullable: false),
                    IsADCMap = table.Column<bool>(nullable: false),
                    IsCalculated = table.Column<bool>(nullable: false),
                    OtherApplicationsType = table.Column<byte>(nullable: false),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sequences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sequences_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VesselsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    AffectedSegmentsOrVesselsLocation = table.Column<int>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    IsThrombosis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ArterialTerritoryType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    VascularTerritoryLocations = table.Column<int>(nullable: false),
                    VascularTerritoryType = table.Column<byte>(nullable: false),
                    IsCorticalVeins = table.Column<bool>(nullable: false),
                    IsCorticalVeinsRight = table.Column<bool>(nullable: false),
                    IsCorticalVeinsLeft = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeins = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeinsRight = table.Column<bool>(nullable: false),
                    IsInternalCerebralVeinsLeft = table.Column<bool>(nullable: false),
                    IsVeinOfLabbeRight = table.Column<bool>(nullable: false),
                    IsVeinOfLabbeLeft = table.Column<bool>(nullable: false),
                    IsSphenoparietalSinusRight = table.Column<bool>(nullable: false),
                    IsSphenoparietalSinusLeft = table.Column<bool>(nullable: false),
                    CortexLocations = table.Column<decimal>(nullable: false),
                    IsPraecuneus = table.Column<bool>(nullable: false),
                    IsCuneus = table.Column<bool>(nullable: false),
                    IsLingualGyrus = table.Column<bool>(nullable: false),
                    IsGyrusTemporalisTransversus = table.Column<bool>(nullable: false),
                    IsLateralOccipitotemporalGyrus = table.Column<bool>(nullable: false),
                    IsParsIntermedia = table.Column<bool>(nullable: false),
                    IsSuperiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsMiddleCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsInferiorCerebellarPeduncle = table.Column<bool>(nullable: false),
                    IsCortex = table.Column<bool>(nullable: false),
                    IsWhiteMatter = table.Column<bool>(nullable: false),
                    WhiteMatterType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    BasalGangliaLocations = table.Column<decimal>(nullable: false),
                    PatternType = table.Column<byte>(nullable: false),
                    IsPerifocalGliosis = table.Column<bool>(nullable: false),
                    IsEtatLacunaire = table.Column<bool>(nullable: false),
                    IsCortexWedgeShapedConfiguration = table.Column<bool>(nullable: false),
                    IsWhiteMatterAffected = table.Column<bool>(nullable: false),
                    IsCortexAffected = table.Column<bool>(nullable: false),
                    IsStringOfPearlsAspect = table.Column<bool>(nullable: false),
                    SignalT2Flare = table.Column<byte>(nullable: false),
                    DiffusionImagingType = table.Column<byte>(nullable: false),
                    DiffusionRestrictionType = table.Column<byte>(nullable: false),
                    DWISignalType = table.Column<byte>(nullable: false),
                    ADCMapType = table.Column<byte>(nullable: false),
                    FLAIRDWIRatioType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    MRPerfusionType = table.Column<byte>(nullable: false),
                    IsRelativeReductionCBFCBV = table.Column<bool>(nullable: false),
                    IsProlongationOfMTT = table.Column<bool>(nullable: false),
                    IsProlongationOfTTP = table.Column<bool>(nullable: false),
                    IsPWIDWIMismatch = table.Column<bool>(nullable: false),
                    PenumbraTissueAtRisk = table.Column<int>(nullable: true),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    InfarctStageType = table.Column<byte>(nullable: false),
                    IsPseudolaminarNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhagicTransformation = table.Column<bool>(nullable: false),
                    IsPetechial = table.Column<bool>(nullable: false),
                    IsParenchymatous = table.Column<bool>(nullable: false),
                    IsVentricularHerniation = table.Column<bool>(nullable: false),
                    IsSwellingOfTheGyri = table.Column<bool>(nullable: false),
                    IsNarrowedSulci = table.Column<bool>(nullable: false),
                    IsGeneralizedCerebralEdema = table.Column<bool>(nullable: false),
                    IsWedgeShapedConfiguration = table.Column<bool>(nullable: false),
                    IsVascularOcclusion = table.Column<bool>(nullable: false),
                    IsDDArtifactTOFAngiography = table.Column<bool>(nullable: false),
                    IsIntraarterialFLAIRSignalEnhancement = table.Column<bool>(nullable: false),
                    LongitudinalExpansionOfThrombus = table.Column<int>(nullable: true),
                    GradingType = table.Column<byte>(nullable: false),
                    IsAnteriorCommunicatingArtery = table.Column<bool>(nullable: false),
                    IsPosteriorCommunicatingArtery = table.Column<bool>(nullable: false),
                    IsCollateralizationOfTheICAECA = table.Column<bool>(nullable: false),
                    IsRetrogradePerfusionofTheOphthalmic = table.Column<bool>(nullable: false),
                    IsPerfusionOfTheICAPars = table.Column<bool>(nullable: false),
                    IsThroughContralateralexternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsThroughIpsilateralvertebralArtery = table.Column<bool>(nullable: false),
                    IsLeptomeningealcollaterals = table.Column<bool>(nullable: false),
                    IsCervicalVesselElongation = table.Column<bool>(nullable: false),
                    IsHighGradeStenosisupstreamcervicalArtery = table.Column<bool>(nullable: false),
                    IsOcclusionOfUpstreamcervicalArtery = table.Column<bool>(nullable: false),
                    IsThrombusInUpstreamcervicalArtery = table.Column<bool>(nullable: false),
                    IsDissectionOfUpstreamcervicalArtery = table.Column<bool>(nullable: false),
                    IsOstialStenosisaffectedVessel = table.Column<bool>(nullable: false),
                    CerebralVenousThrombosisLocations = table.Column<int>(nullable: false),
                    IsThrombusDetection = table.Column<bool>(nullable: false),
                    IsCerebralEdema = table.Column<bool>(nullable: false),
                    IsMissingFlowVoid = table.Column<bool>(nullable: false),
                    IsElongatedthrombusCourse = table.Column<bool>(nullable: false),
                    IsSignalVoidInphaseContrast = table.Column<bool>(nullable: false),
                    IsContrastFillingDefectinMRV = table.Column<bool>(nullable: false),
                    IsEmptyDeltaSign = table.Column<bool>(nullable: false),
                    IsDuralEnhancement = table.Column<bool>(nullable: false),
                    GradingOcclusionType = table.Column<byte>(nullable: false),
                    MinDiameterresidualLumen = table.Column<int>(nullable: true),
                    CharacterizationThrombusType = table.Column<byte>(nullable: false),
                    IsCongestiveHemorrhage = table.Column<bool>(nullable: false),
                    IsPetechialhemorrhages = table.Column<bool>(nullable: false),
                    IsEctasiaOfTheUpstream = table.Column<bool>(nullable: false),
                    IsSAH = table.Column<bool>(nullable: false),
                    LocalizationAneurysmaType = table.Column<byte>(nullable: false),
                    IsV1 = table.Column<bool>(nullable: false),
                    IsV2 = table.Column<bool>(nullable: false),
                    IsV3 = table.Column<bool>(nullable: false),
                    IsV4 = table.Column<bool>(nullable: false),
                    SegmentsBouthillierLocations = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    ExtensionAneurysm = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    AneurysmNeckWidth = table.Column<int>(nullable: true),
                    AlignmentOfAneurysmDomeType = table.Column<byte>(nullable: false),
                    IsSubarachnoidHemorrhage = table.Column<bool>(nullable: false),
                    SubarachnoidHemorrhageType = table.Column<byte>(nullable: false),
                    SubarachnoidHemorrhageLocalizationType = table.Column<byte>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    IsDownstreamInfarctAreas = table.Column<bool>(nullable: false),
                    IsInflammatoryChange = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    WithoutAVShuntType = table.Column<byte>(nullable: false),
                    WithAVShuntType = table.Column<byte>(nullable: false),
                    IsReverseFlowSuspected = table.Column<bool>(nullable: false),
                    IsFrontal = table.Column<bool>(nullable: false),
                    IsTemporal = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsOccipital = table.Column<bool>(nullable: false),
                    IsInfratentorial = table.Column<bool>(nullable: false),
                    IsTransverseSinus = table.Column<bool>(nullable: false),
                    IsSigmoidSinus = table.Column<bool>(nullable: false),
                    IsSinusCavernosus = table.Column<bool>(nullable: false),
                    IsSuperiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsSuperiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsInferiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsReverseFlow = table.Column<bool>(nullable: false),
                    IsSuspicionOfReverseFlow = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsIschemia = table.Column<bool>(nullable: false),
                    VesselsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VesselsFindings_VesselsPages_VesselsPageId",
                        column: x => x.VesselsPageId,
                        principalTable: "VesselsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BasalNucleiFindings_BasalNucleiPageId",
                table: "BasalNucleiFindings",
                column: "BasalNucleiPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BasalNucleiPages_ReportId",
                table: "BasalNucleiPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BrainstemCranialNervesFindings_BrainstemCranialNervesPageId",
                table: "BrainstemCranialNervesFindings",
                column: "BrainstemCranialNervesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BrainstemCranialNervesPages_ReportId",
                table: "BrainstemCranialNervesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CerebrospinalFluidSpaceFindings_CerebrospinalFluidSpacePage~",
                table: "CerebrospinalFluidSpaceFindings",
                column: "CerebrospinalFluidSpacePageId");

            migrationBuilder.CreateIndex(
                name: "IX_CerebrospinalFluidSpacePages_ReportId",
                table: "CerebrospinalFluidSpacePages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClinicalSymptomFindings_AnamnesisPageId",
                table: "ClinicalSymptomFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CortexFindings_CortexPageId",
                table: "CortexFindings",
                column: "CortexPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CortexPages_ReportId",
                table: "CortexPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationIndicationFindings_ExaminationPageId",
                table: "ExaminationIndicationFindings",
                column: "ExaminationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ExaminationPages_ReportId",
                table: "ExaminationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FacialSkullFindings_FacialSkullPageId",
                table: "FacialSkullFindings",
                column: "FacialSkullPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FacialSkullPages_ReportId",
                table: "FacialSkullPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MeningesFindings_MeningesPageId",
                table: "MeningesFindings",
                column: "MeningesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MeningesPages_ReportId",
                table: "MeningesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PreviousInterventionsTherapiesFindings_AnamnesisPageId",
                table: "PreviousInterventionsTherapiesFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ReportResults_ReportId",
                table: "ReportResults",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_ReportSchemas_ReportTypeName_VersionName",
                table: "ReportSchemas",
                columns: new[] { "ReportTypeName", "VersionName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReportSchemaSessions_ReportSchemaId",
                table: "ReportSchemaSessions",
                column: "ReportSchemaId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReportSession_ReportId",
                table: "ReportSession",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SellarRegionFindings_SellarRegionPageId",
                table: "SellarRegionFindings",
                column: "SellarRegionPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SellarRegionPages_ReportId",
                table: "SellarRegionPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SummaryFindings_SummaryPageId",
                table: "SummaryFindings",
                column: "SummaryPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SummaryPages_ReportId",
                table: "SummaryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VesselsFindings_ImageFileId",
                table: "VesselsFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsFindings_VesselsPageId",
                table: "VesselsFindings",
                column: "VesselsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselsPages_ReportId",
                table: "VesselsPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BasalNucleiFindingPresets");

            migrationBuilder.DropTable(
                name: "BasalNucleiFindings");

            migrationBuilder.DropTable(
                name: "BrainstemCranialNervesFindingPresets");

            migrationBuilder.DropTable(
                name: "BrainstemCranialNervesFindings");

            migrationBuilder.DropTable(
                name: "CerebrospinalFluidSpaceFindingPresets");

            migrationBuilder.DropTable(
                name: "CerebrospinalFluidSpaceFindings");

            migrationBuilder.DropTable(
                name: "ClinicalSymptomFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "CortexFindingPresets");

            migrationBuilder.DropTable(
                name: "CortexFindings");

            migrationBuilder.DropTable(
                name: "ExaminationIndicationFindings");

            migrationBuilder.DropTable(
                name: "FacialSkullFindingPresets");

            migrationBuilder.DropTable(
                name: "FacialSkullFindings");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "MeningesFindingPresets");

            migrationBuilder.DropTable(
                name: "MeningesFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PreviousInterventionsTherapiesFindings");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SellarRegionFindingPresets");

            migrationBuilder.DropTable(
                name: "SellarRegionFindings");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SummaryFindings");

            migrationBuilder.DropTable(
                name: "VesselsFindings");

            migrationBuilder.DropTable(
                name: "BasalNucleiPages");

            migrationBuilder.DropTable(
                name: "BrainstemCranialNervesPages");

            migrationBuilder.DropTable(
                name: "CerebrospinalFluidSpacePages");

            migrationBuilder.DropTable(
                name: "CortexPages");

            migrationBuilder.DropTable(
                name: "FacialSkullPages");

            migrationBuilder.DropTable(
                name: "MeningesPages");

            migrationBuilder.DropTable(
                name: "ExaminationPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SellarRegionPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "VesselsPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
