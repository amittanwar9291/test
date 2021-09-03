using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.HipMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BonesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    MainDiagnosisType = table.Column<byte>(nullable: false),
                    IsEpiphysis = table.Column<bool>(nullable: false),
                    IsMetaphysis = table.Column<bool>(nullable: false),
                    IsDiaphysis = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    MassOrOsteolysisCorticalBoneType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    PronouncedHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientationFacingAwayFrom = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsPeriostealReactionsunBurst = table.Column<bool>(nullable: false),
                    IsPeriostealSpurCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsLowSignalPerichondriumOver = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsSoftTissueInfiltration = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CapsuleAndLigamentsFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SynoviaDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsHaemarthrosis = table.Column<bool>(nullable: false),
                    IsBonyErosionsSynovialInsertion = table.Column<bool>(nullable: false),
                    IsPerifocalSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPeriarticularCalcification = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    IsSynovialnodulus = table.Column<bool>(nullable: false),
                    IsSynovialProliferations = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CapsuleAndLigamentsFindingPresets", x => x.Id);
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
                name: "Localizations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    IsBasins = table.Column<bool>(nullable: false),
                    IsBasinsVentral = table.Column<bool>(nullable: false),
                    IsBasinsLateral = table.Column<bool>(nullable: false),
                    IsBasinsDorsal = table.Column<bool>(nullable: false),
                    IsThigh = table.Column<bool>(nullable: false),
                    IsThighVentral = table.Column<bool>(nullable: false),
                    IsThighDorsal = table.Column<bool>(nullable: false),
                    IsThighMedia = table.Column<bool>(nullable: false),
                    ThighMaxDiameterInMm = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Localizations", x => x.Id);
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
                name: "SoftTissueFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsBoneErosion = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissueFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsEndoprosthesis = table.Column<bool>(nullable: false),
                    IsEndoprosthesisRight = table.Column<bool>(nullable: false),
                    IsEndoprosthesisLeft = table.Column<bool>(nullable: false),
                    IsLabralSurgery = table.Column<bool>(nullable: false),
                    IsLabralSurgeryRight = table.Column<bool>(nullable: false),
                    IsLabralSurgeryLeft = table.Column<bool>(nullable: false),
                    IsOffsetCorrection = table.Column<bool>(nullable: false),
                    IsOffsetCorrectionRight = table.Column<bool>(nullable: false),
                    IsOffsetCorrectionLeft = table.Column<bool>(nullable: false),
                    IsCartilageTransplantation = table.Column<bool>(nullable: false),
                    CartilageTransplantationType = table.Column<byte>(nullable: false),
                    IsCartilageTransplantationSideRight = table.Column<bool>(nullable: false),
                    IsCartilageTransplantationSideLeft = table.Column<bool>(nullable: false),
                    IsXRay = table.Column<bool>(nullable: false),
                    YearOfXRay = table.Column<int>(nullable: true),
                    MonthOfXRay = table.Column<int>(nullable: true),
                    IsCT = table.Column<bool>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: true),
                    MonthOfCT = table.Column<int>(nullable: true),
                    IsMRI = table.Column<bool>(nullable: false),
                    YearOfMRI = table.Column<int>(nullable: true),
                    MonthOfMRI = table.Column<int>(nullable: true)
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
                name: "BonesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BonesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CapsuleAndLigamentsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CapsuleAndLigamentsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CapsuleAndLigamentsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CartilageAndLabrumPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartilageAndLabrumPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartilageAndLabrumPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LocalizationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    HipLocalization = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LocalizationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LocalizationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MusclesAndTendonsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MusclesAndTendonsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MusclesAndTendonsPages_Reports_ReportId",
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
                name: "SoftTissuePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuePages_Reports_ReportId",
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
                    FindingsDynamicsType = table.Column<byte>(nullable: false),
                    IsXRay = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsAngiography = table.Column<bool>(nullable: false),
                    IsMRIPelvis = table.Column<bool>(nullable: false),
                    IsMRIAngiography = table.Column<bool>(nullable: false),
                    IsMRIKnee = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    DateMonthType = table.Column<byte>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    TClassificationType = table.Column<byte>(nullable: false)
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
                    IsIntravenous = table.Column<bool>(nullable: false),
                    IsIndirectArthrography = table.Column<bool>(nullable: false),
                    IsIntraarticular = table.Column<bool>(nullable: false),
                    DilutionAmount = table.Column<int>(nullable: true),
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsMagicAngleArtifact = table.Column<bool>(nullable: false)
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
                name: "AnamnesisFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSuspicion = table.Column<bool>(nullable: false),
                    IsSiteRight = table.Column<bool>(nullable: false),
                    IsSiteLeft = table.Column<bool>(nullable: false),
                    IsFemur = table.Column<bool>(nullable: false),
                    IsFemurRight = table.Column<bool>(nullable: false),
                    IsFemurLeft = table.Column<bool>(nullable: false),
                    IsPelvis = table.Column<bool>(nullable: false),
                    IsPelvisRight = table.Column<bool>(nullable: false),
                    IsPelvisLeft = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    YearOfTrauma = table.Column<int>(nullable: true),
                    MonthOfTrauma = table.Column<int>(nullable: true),
                    IsSacrum = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BonesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    MainDiagnosisType = table.Column<byte>(nullable: false),
                    IsEpiphysis = table.Column<bool>(nullable: false),
                    IsMetaphysis = table.Column<bool>(nullable: false),
                    IsDiaphysis = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    MassOrOsteolysisCorticalBoneType = table.Column<byte>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    PronouncedHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientationFacingAwayFrom = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsPeriostealReactionsunBurst = table.Column<bool>(nullable: false),
                    IsPeriostealSpurCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsLowSignalPerichondriumOver = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsSoftTissueInfiltration = table.Column<bool>(nullable: false),
                    HipSpecificLocalizations = table.Column<int>(nullable: false),
                    FractureSpecificationType = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsOsteochondralFragment = table.Column<bool>(nullable: false),
                    AlignmentType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    PositioningType = table.Column<byte>(nullable: false),
                    IsDysplasia = table.Column<bool>(nullable: false),
                    IsFlattened = table.Column<bool>(nullable: false),
                    AcetabulumType = table.Column<byte>(nullable: false),
                    IsEpiphysiolysis = table.Column<bool>(nullable: false),
                    IsEpiphysealBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsEnlargedEpiphysealPlate = table.Column<bool>(nullable: false),
                    IsIrregularEpiphysealPlate = table.Column<bool>(nullable: false),
                    IsCrushedPhysis = table.Column<bool>(nullable: false),
                    IsDislocatedFemoralHead = table.Column<bool>(nullable: false),
                    FractureClassificationType = table.Column<byte>(nullable: false),
                    Fracture32Type = table.Column<byte>(nullable: false),
                    Fracture32AType = table.Column<byte>(nullable: false),
                    Fracture32BType = table.Column<byte>(nullable: false),
                    Fracture32CType = table.Column<byte>(nullable: false),
                    Fracture31AType = table.Column<byte>(nullable: false),
                    Fracture31A1Type = table.Column<byte>(nullable: false),
                    TrochantericAvulsionTearType = table.Column<byte>(nullable: false),
                    Fracture31A2Type = table.Column<byte>(nullable: false),
                    Fracture31A3Type = table.Column<byte>(nullable: false),
                    FractureAO31BClassificationType = table.Column<byte>(nullable: false),
                    Fracture31BType = table.Column<byte>(nullable: false),
                    Fracture31B1Type = table.Column<byte>(nullable: false),
                    Fracture31B2Type = table.Column<byte>(nullable: false),
                    ShearFractureType = table.Column<byte>(nullable: false),
                    FractureAO31CClassificationType = table.Column<byte>(nullable: false),
                    Fracture31CType = table.Column<byte>(nullable: false),
                    Fracture31C1Type = table.Column<byte>(nullable: false),
                    Fracture31C2Type = table.Column<byte>(nullable: false),
                    FractureAO62ClassificationType = table.Column<byte>(nullable: false),
                    Fracture62AType = table.Column<byte>(nullable: false),
                    Fracture62A1Type = table.Column<byte>(nullable: false),
                    Fracture62A2Type = table.Column<byte>(nullable: false),
                    Fracture62A3Type = table.Column<byte>(nullable: false),
                    Fracture62BType = table.Column<byte>(nullable: false),
                    Fracture62B1Type = table.Column<byte>(nullable: false),
                    Fracture62B2Type = table.Column<byte>(nullable: false),
                    Fracture62B3Type = table.Column<byte>(nullable: false),
                    Fracture62CType = table.Column<byte>(nullable: false),
                    FractureAO61ClassificationType = table.Column<byte>(nullable: false),
                    Fracture61AType = table.Column<byte>(nullable: false),
                    Fracture61A1Type = table.Column<byte>(nullable: false),
                    Fracture61A2Type = table.Column<byte>(nullable: false),
                    Fracture61BType = table.Column<byte>(nullable: false),
                    Fracture61B1Type = table.Column<byte>(nullable: false),
                    Fracture61B2Type = table.Column<byte>(nullable: false),
                    IsSymphysisDisruption = table.Column<bool>(nullable: false),
                    Fracture61B3Type = table.Column<byte>(nullable: false),
                    Fracture61CType = table.Column<byte>(nullable: false),
                    Fracture61C1Type = table.Column<byte>(nullable: false),
                    Fracture61C2Type = table.Column<byte>(nullable: false),
                    FurtherImageFeaturesType = table.Column<byte>(nullable: false),
                    Fracture61C3Type = table.Column<byte>(nullable: false),
                    SacralFractureType = table.Column<byte>(nullable: false),
                    PartType = table.Column<byte>(nullable: false),
                    ExpansionType = table.Column<byte>(nullable: false),
                    IsPeriostealEdema = table.Column<bool>(nullable: false),
                    IsT1wHypointenseLinePerpendicular = table.Column<bool>(nullable: false),
                    ExpansionCoronalType = table.Column<byte>(nullable: false),
                    ExpansionInMm = table.Column<byte>(nullable: true),
                    IsLinearSignalAlterationParallel = table.Column<bool>(nullable: false),
                    IsT1wLowSignalArea = table.Column<bool>(nullable: false),
                    IsArticularCorticalImpressionFracture = table.Column<bool>(nullable: false),
                    IsSubchondralCleftWithFluid = table.Column<bool>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    IsDislocated = table.Column<bool>(nullable: false),
                    IsPerifocalContrastEnhancement = table.Column<bool>(nullable: false),
                    IsTransientBoneMarrowEdema = table.Column<bool>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    IsThickenedSynoviaWithEdema = table.Column<bool>(nullable: false),
                    IsSubchondralFracture = table.Column<bool>(nullable: false),
                    BoneMarrowDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsSubchondralLesion = table.Column<bool>(nullable: false),
                    CoxarthrosisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    StimulatedBoneMarrowType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsSubchondralLowSignalIntensity = table.Column<bool>(nullable: false),
                    IsDoubleLineSignT2w = table.Column<bool>(nullable: false),
                    IsMirroringArticularSurface = table.Column<bool>(nullable: false),
                    IsAnterosuperior = table.Column<bool>(nullable: false),
                    IsAdjacentBoneMarrowEdema = table.Column<bool>(nullable: false),
                    CoronalMeasurementInDegrees = table.Column<int>(nullable: true),
                    SagittalMeasurementInDegrees = table.Column<int>(nullable: true),
                    CorticalBoneType = table.Column<byte>(nullable: false),
                    IsCoxarthrosis = table.Column<bool>(nullable: false),
                    ARCOClassificationType = table.Column<byte>(nullable: false),
                    AvescularDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsFemur = table.Column<bool>(nullable: false),
                    IsAcetabulum = table.Column<bool>(nullable: false),
                    IsChondropathy = table.Column<bool>(nullable: false),
                    DegreeType = table.Column<byte>(nullable: false),
                    CartilageDistributionType = table.Column<byte>(nullable: false),
                    IsJointSpaceNarrowing = table.Column<bool>(nullable: false),
                    IsSubchondralEdema = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsSubchondralCystsgeodes = table.Column<bool>(nullable: false),
                    IsGanglion = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    MaxSynovialCystDiameterInMm = table.Column<int>(nullable: true),
                    MaxGanglionDiameterInMm = table.Column<int>(nullable: true),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsParalabralCysts = table.Column<bool>(nullable: false),
                    IsIntraarticularLoosebody = table.Column<bool>(nullable: false),
                    IsQuantityOverOne = table.Column<bool>(nullable: false),
                    MaxLoosebodyDiameterInMm = table.Column<int>(nullable: true),
                    GeneralType = table.Column<byte>(nullable: false),
                    VallotonKellgrenMRadaptedType = table.Column<byte>(nullable: false),
                    StageType = table.Column<byte>(nullable: false),
                    IsThinningscalopping = table.Column<bool>(nullable: false),
                    IsDestruction = table.Column<bool>(nullable: false),
                    IsIntraosseousAbscessBrodieAbscess = table.Column<bool>(nullable: false),
                    AbscessSizeInMm = table.Column<int>(nullable: true),
                    AbscessSecondSizeInMm = table.Column<int>(nullable: true),
                    AbscessThirdSizeInMm = table.Column<int>(nullable: true),
                    IsPenumbraSign = table.Column<bool>(nullable: false),
                    IsPeripheralContrastEnhancement = table.Column<bool>(nullable: false),
                    IsAbscessLesionSame = table.Column<bool>(nullable: false),
                    IsSequester = table.Column<bool>(nullable: false),
                    SequesterSizeInMm = table.Column<int>(nullable: true),
                    SequesterSecondSizeInMm = table.Column<int>(nullable: true),
                    SequesterThirdSizeInMm = table.Column<int>(nullable: true),
                    IsNoContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSinusTractFistula = table.Column<bool>(nullable: false),
                    IsSpongiosaLesionSame = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsCloaca = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsPeriostealRupture = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealSizeInMm = table.Column<int>(nullable: true),
                    OsteomyelitisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsRightBoneMarrowEdemaOsPubis = table.Column<bool>(nullable: false),
                    IsRightMuscleEdemaOfAdductor = table.Column<bool>(nullable: false),
                    IsRightJointIrregularity = table.Column<bool>(nullable: false),
                    IsRightSecondaryCleftSign = table.Column<bool>(nullable: false),
                    IsRightEnthesiopathy = table.Column<bool>(nullable: false),
                    IsLeftPubicBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsLeftMuscleEdemaOfAdductor = table.Column<bool>(nullable: false),
                    IsLeftJointIrregularity = table.Column<bool>(nullable: false),
                    IsLeftSecondaryCleftSign = table.Column<bool>(nullable: false),
                    IsLeftEnthesiopathy = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    ExpansionSizeInMm = table.Column<int>(nullable: true),
                    ExpansionSecondSizeInMm = table.Column<int>(nullable: true),
                    ExpansionThirdSizeInMm = table.Column<int>(nullable: true),
                    MaxThicknessInMm = table.Column<int>(nullable: true),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsPathologicalFractureSuspected = table.Column<bool>(nullable: false),
                    LocalExpansionType = table.Column<byte>(nullable: false),
                    IsInfiltrationOfAdjacentBone = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsOverOneLesionSameEntity = table.Column<bool>(nullable: false),
                    IsInThePrimarilyAffected = table.Column<bool>(nullable: false),
                    BonesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BonesFindings_BonesPages_BonesPageId",
                        column: x => x.BonesPageId,
                        principalTable: "BonesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BonesFindings_ImageFile_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CapsuleAndLigamentsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SynoviaDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsHaemarthrosis = table.Column<bool>(nullable: false),
                    IsBonyErosionsSynovialInsertion = table.Column<bool>(nullable: false),
                    IsPerifocalSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPeriarticularCalcification = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    IsSynovialnodulus = table.Column<bool>(nullable: false),
                    IsSynovialProliferations = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    DistinctionType = table.Column<byte>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    IsT2wSignalElevation = table.Column<bool>(nullable: false),
                    IsRightSide = table.Column<bool>(nullable: false),
                    IsLeftSide = table.Column<bool>(nullable: false),
                    IsHyperplasia = table.Column<bool>(nullable: false),
                    IsPronouncedContrastEnhancement = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsAbove1Lesion = table.Column<bool>(nullable: false),
                    LooseBodyMaxDiameterInMm = table.Column<int>(nullable: true),
                    ExtensionSizeInMm = table.Column<int>(nullable: true),
                    Extension2ndPlaneInMm = table.Column<int>(nullable: true),
                    Extension3rdPlaneInMm = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    CharacterizationIIHomogeneityType = table.Column<byte>(nullable: false),
                    PronouncedHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsAbove1LesionSameEntity = table.Column<bool>(nullable: false),
                    IsAbove1LesionSamePathology = table.Column<bool>(nullable: false),
                    CapsuleAndLigamentsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CapsuleAndLigamentsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CapsuleAndLigamentsFindings_CapsuleAndLigamentsPages_Capsul~",
                        column: x => x.CapsuleAndLigamentsPageId,
                        principalTable: "CapsuleAndLigamentsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CartilageAndLabrumFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    CartilageLocalizer = table.Column<byte>(nullable: false),
                    IsAcetabulum = table.Column<bool>(nullable: false),
                    IsTear = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsFurtherImageFeatures = table.Column<bool>(nullable: false),
                    IsDegeneration = table.Column<bool>(nullable: false),
                    DegenerationType = table.Column<byte>(nullable: false),
                    IsParalabralCyst = table.Column<bool>(nullable: false),
                    MaxSizeInMm = table.Column<int>(nullable: true),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    InclinationInDegrees = table.Column<int>(nullable: true),
                    IsDysplasia = table.Column<bool>(nullable: false),
                    IsFemoralHead = table.Column<bool>(nullable: false),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsCartilageLesionAnteriorSuperior = table.Column<bool>(nullable: false),
                    IsChondrolabralSeparation = table.Column<bool>(nullable: false),
                    IsAcetabularOvercoverage = table.Column<bool>(nullable: false),
                    IsCartilageLesionPosteriorInferior = table.Column<bool>(nullable: false),
                    QuantitativeAnalysisAlphaAngleInDegrees = table.Column<int>(nullable: true),
                    IsDecreasedOffset = table.Column<bool>(nullable: false),
                    IsHerniationPitAnterolateralFemoralNeck = table.Column<bool>(nullable: false),
                    IsFluidIsointense = table.Column<bool>(nullable: false),
                    IsPeripheralSclerosis = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaAtHeadNeckTransition = table.Column<bool>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    TraumaticType = table.Column<byte>(nullable: false),
                    OuterbridgeClassificationType = table.Column<byte>(nullable: false),
                    LengthMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsIntraArticularLooseBody = table.Column<bool>(nullable: false),
                    IntraArticularLooseBodyMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsChondrocalcinosis = table.Column<bool>(nullable: false),
                    IsFemur = table.Column<bool>(nullable: false),
                    CartilageAndLabrumPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartilageAndLabrumFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartilageAndLabrumFindings_CartilageAndLabrumPages_Cartilag~",
                        column: x => x.CartilageAndLabrumPageId,
                        principalTable: "CartilageAndLabrumPages",
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
                        name: "FK_PatientInformation_LocalizationPages_Id",
                        column: x => x.Id,
                        principalTable: "LocalizationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MusclesAndTendonsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    MusculatureLocalizationType = table.Column<byte>(nullable: false),
                    IntramuscularLocalizationType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    ClassificationMCStatement = table.Column<byte>(nullable: false),
                    IsMaximumDiameterOfRuptureBelow5Mm = table.Column<bool>(nullable: false),
                    IsMaximumDiameterOfRuptureAboveOrEqual5Mm = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsWavyCourseOfTheFibers = table.Column<bool>(nullable: false),
                    IsBonyAvulsion = table.Column<bool>(nullable: false),
                    BonyAvulsionType = table.Column<byte>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    T1wSignalCharacteristics = table.Column<byte>(nullable: false),
                    T2wSignalCharacteristics = table.Column<byte>(nullable: false),
                    CharacterizationHaematomaType = table.Column<byte>(nullable: false),
                    IsEdemaLikeSignalIntensity = table.Column<bool>(nullable: false),
                    EdemaLikeSignalIntensityType = table.Column<byte>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsIntracorticalEdema = table.Column<bool>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFascialTear = table.Column<bool>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    IsReducedIschiofemoralDistance = table.Column<bool>(nullable: false),
                    ReducedIschiofemoralMinimumDistanceInMm = table.Column<int>(nullable: true),
                    TendonsLocalizationType = table.Column<byte>(nullable: false),
                    TendonsPathologyType = table.Column<byte>(nullable: false),
                    RuptureLocalizationType = table.Column<byte>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    RetractionMeasurementInMm = table.Column<int>(nullable: true),
                    IsHaematoma = table.Column<bool>(nullable: false),
                    IsBoneBruise = table.Column<bool>(nullable: false),
                    TendonsMorphologyType = table.Column<byte>(nullable: false),
                    IsPDwSignalIncrease = table.Column<bool>(nullable: false),
                    IsBursitis = table.Column<bool>(nullable: false),
                    IsGanglion = table.Column<bool>(nullable: false),
                    BursitisLocalizationType = table.Column<byte>(nullable: false),
                    BursitisMarginType = table.Column<byte>(nullable: false),
                    MaxDiameterBursaInMm = table.Column<int>(nullable: true),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCalcifications = table.Column<bool>(nullable: false),
                    IsPerifocalSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsSepticBursitis = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsRupturedBursa = table.Column<bool>(nullable: false),
                    IsSecondaryOsteomyelitis = table.Column<bool>(nullable: false),
                    MusclesAndTendonsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MusclesAndTendonsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MusclesAndTendonsFindings_MusclesAndTendonsPages_MusclesAnd~",
                        column: x => x.MusclesAndTendonsPageId,
                        principalTable: "MusclesAndTendonsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissueFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsBoneErosion = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    IsVentral = table.Column<bool>(nullable: false),
                    IsMedial = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    IsDorsal = table.Column<bool>(nullable: false),
                    IsPelvis = table.Column<bool>(nullable: false),
                    IsThigh = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    QuantityType = table.Column<byte>(nullable: false),
                    IsHemorrhagic = table.Column<bool>(nullable: false),
                    IsSedimentation = table.Column<bool>(nullable: false),
                    IsEmpyema = table.Column<bool>(nullable: false),
                    LocalizationThighType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    VesselsPathologyType = table.Column<byte>(nullable: false),
                    VesselsLocalizationType = table.Column<byte>(nullable: false),
                    MaxAxialDiameterInMm = table.Column<int>(nullable: true),
                    CraniocaudalExtensionInMm = table.Column<int>(nullable: true),
                    IsIliacVeins = table.Column<bool>(nullable: false),
                    IsSuperficialLegVeins = table.Column<bool>(nullable: false),
                    IsDeepLegVeins = table.Column<bool>(nullable: false),
                    CharacterizationHaematomaType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsAlongTheTendonSheath = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsSkin = table.Column<bool>(nullable: false),
                    IsMuscle = table.Column<bool>(nullable: false),
                    IsFascia = table.Column<bool>(nullable: false),
                    IsVessel = table.Column<bool>(nullable: false),
                    IsNerves = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsInguinal = table.Column<bool>(nullable: false),
                    InguinalMaxShortAxisDiameterInMm = table.Column<int>(nullable: true),
                    InguinalDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsIliacal = table.Column<bool>(nullable: false),
                    IliacalMaxShortAxisDiameterInMm = table.Column<int>(nullable: true),
                    IliacalDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    SoftTissuePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissueFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissueFindings_SoftTissuePages_SoftTissuePageId",
                        column: x => x.SoftTissuePageId,
                        principalTable: "SoftTissuePages",
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
                        onDelete: ReferentialAction.Restrict);
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
                    IsPostContrast = table.Column<bool>(nullable: false),
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
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisFindings_AnamnesisPageId",
                table: "AnamnesisFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BonesFindings_BonesPageId",
                table: "BonesFindings",
                column: "BonesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesFindings_ImageFileId",
                table: "BonesFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BonesPages_ReportId",
                table: "BonesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CapsuleAndLigamentsFindings_CapsuleAndLigamentsPageId",
                table: "CapsuleAndLigamentsFindings",
                column: "CapsuleAndLigamentsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CapsuleAndLigamentsPages_ReportId",
                table: "CapsuleAndLigamentsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartilageAndLabrumFindings_CartilageAndLabrumPageId",
                table: "CartilageAndLabrumFindings",
                column: "CartilageAndLabrumPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CartilageAndLabrumPages_ReportId",
                table: "CartilageAndLabrumPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocalizationPages_ReportId",
                table: "LocalizationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MusclesAndTendonsFindings_MusclesAndTendonsPageId",
                table: "MusclesAndTendonsFindings",
                column: "MusclesAndTendonsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MusclesAndTendonsPages_ReportId",
                table: "MusclesAndTendonsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

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
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissueFindings_SoftTissuePageId",
                table: "SoftTissueFindings",
                column: "SoftTissuePageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuePages_ReportId",
                table: "SoftTissuePages",
                column: "ReportId",
                unique: true);

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnamnesisFindings");

            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CapsuleAndLigamentsFindingPresets");

            migrationBuilder.DropTable(
                name: "CapsuleAndLigamentsFindings");

            migrationBuilder.DropTable(
                name: "CartilageAndLabrumFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "Localizations");

            migrationBuilder.DropTable(
                name: "MusclesAndTendonsFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SoftTissueFindingPresets");

            migrationBuilder.DropTable(
                name: "SoftTissueFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "CapsuleAndLigamentsPages");

            migrationBuilder.DropTable(
                name: "CartilageAndLabrumPages");

            migrationBuilder.DropTable(
                name: "MusclesAndTendonsPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftTissuePages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
