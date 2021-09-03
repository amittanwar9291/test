using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.HandMRT.Repo.Migrations
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
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    TumorDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastHomogenityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsBroadBased = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsProjectingAway = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsSunBurst = table.Column<bool>(nullable: false),
                    IsCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsMarginWithLowSignal = table.Column<bool>(nullable: false),
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
                    LocalizationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSpaghettiLikeAppearanceOfTheNerve = table.Column<bool>(nullable: false),
                    IsDisplacedNerveFasciclesAxialPomegranateSign = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsAlongMedianNerve = table.Column<bool>(nullable: false),
                    IsPressureCorrosionBone = table.Column<bool>(nullable: false),
                    IsMacrodactyly = table.Column<bool>(nullable: false),
                    SignalTypeT1w = table.Column<byte>(nullable: false),
                    SignalTypeT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
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
                    IsXRay = table.Column<bool>(nullable: false),
                    MonthOfXRay = table.Column<byte>(nullable: false),
                    YearOfXRay = table.Column<int>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: false),
                    IsMri = table.Column<bool>(nullable: false),
                    MonthOfMri = table.Column<byte>(nullable: false),
                    YearOfMri = table.Column<int>(nullable: false)
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
                name: "CapsuleAndRibbonsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CapsuleAndRibbonsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CapsuleAndRibbonsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EvaluationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    FindingsDynamicsType = table.Column<byte>(nullable: false),
                    IsLocalRecurrence = table.Column<bool>(nullable: false),
                    IsXray = table.Column<bool>(nullable: false),
                    IsXrayScaphoidQuartet = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsCTArthrography = table.Column<bool>(nullable: false),
                    IsMRIContrast = table.Column<bool>(nullable: false),
                    IsMRArthrography = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    FollowUpType = table.Column<byte>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    TClassificationType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EvaluationPages_Reports_ReportId",
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
                    Localization = table.Column<byte>(nullable: false)
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
                name: "NerveCompressionPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NerveCompressionPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NerveCompressionPages_Reports_ReportId",
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
                    ApplicationLocalizationType = table.Column<byte>(nullable: false),
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
                name: "TendinopathyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TendinopathyPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TendinopathyPages_Reports_ReportId",
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
                name: "AnamnesisIndications",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IndicationType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    MonthOfTrauma = table.Column<byte>(nullable: false),
                    YearOfTrauma = table.Column<int>(nullable: false),
                    IsOccult = table.Column<bool>(nullable: false),
                    IsRadius = table.Column<bool>(nullable: false),
                    IsUlna = table.Column<bool>(nullable: false),
                    IsCarpalia = table.Column<bool>(nullable: false),
                    IsMetacarpaliaPhalanges = table.Column<bool>(nullable: false),
                    IsTfccRuptureDegeneration = table.Column<bool>(nullable: false),
                    IsSlDissociation = table.Column<bool>(nullable: false),
                    IsLtDissociation = table.Column<bool>(nullable: false),
                    IsRingbandRupture = table.Column<bool>(nullable: false),
                    IsTendonRuptureOfThePhalanges = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisIndications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisIndications_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPreviousSurgeriess",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    PreviousSurgeriesType = table.Column<byte>(nullable: false),
                    MonthOfSurgery = table.Column<byte>(nullable: false),
                    YearOfSurgery = table.Column<int>(nullable: false),
                    IsAbductorPollicisLongusTendonPlastic = table.Column<bool>(nullable: false),
                    IsCartilageTransplantation = table.Column<bool>(nullable: false),
                    IsTrapezectomy = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnamnesisPreviousSurgeriess", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnamnesisPreviousSurgeriess_AnamnesisPages_AnamnesisPageId",
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
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    TumorDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastHomogenityType = table.Column<byte>(nullable: false),
                    ContrastDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsBroadBased = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsProjectingAway = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsSunBurst = table.Column<bool>(nullable: false),
                    IsCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsMarginWithLowSignal = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsSoftTissueInfiltration = table.Column<bool>(nullable: false),
                    InvolvedBonesLocalizer = table.Column<int>(nullable: false),
                    HandJointsLocalizer = table.Column<int>(nullable: false),
                    InvolvedBonesType = table.Column<int>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsChondropathy = table.Column<bool>(nullable: false),
                    StandardVariantsType = table.Column<byte>(nullable: false),
                    IsParatrapezium = table.Column<bool>(nullable: false),
                    IsTrapeziumSecundarium = table.Column<bool>(nullable: false),
                    IsStyloidum = table.Column<bool>(nullable: false),
                    IsCapitatumSecundarium = table.Column<bool>(nullable: false),
                    IsRadialeExternum = table.Column<bool>(nullable: false),
                    IsCentrale = table.Column<bool>(nullable: false),
                    IsTriangulare = table.Column<bool>(nullable: false),
                    IsHypotriquetrum = table.Column<bool>(nullable: false),
                    IsEpitrapezium = table.Column<bool>(nullable: false),
                    IsTrapezoidesSecundarium = table.Column<bool>(nullable: false),
                    IsOssiculumGruberi = table.Column<bool>(nullable: false),
                    IsOsHamuliProprium = table.Column<bool>(nullable: false),
                    IsVesalianum = table.Column<bool>(nullable: false),
                    IsUlnareExternum = table.Column<bool>(nullable: false),
                    IsParascaphoid = table.Column<bool>(nullable: false),
                    IsHypolunatum = table.Column<bool>(nullable: false),
                    IsEpilunatum = table.Column<bool>(nullable: false),
                    IsEpipyramis = table.Column<bool>(nullable: false),
                    IsLunula = table.Column<bool>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    MinaarClassificationType = table.Column<byte>(nullable: false),
                    EtiologyDetailsType = table.Column<byte>(nullable: false),
                    PartitumType = table.Column<byte>(nullable: false),
                    FacetType = table.Column<byte>(nullable: false),
                    IsOsHematumBoneMarrowEdema = table.Column<bool>(nullable: false),
                    FractureClassificationType = table.Column<byte>(nullable: false),
                    FractureFormType = table.Column<byte>(nullable: false),
                    FractureFormScaphoideumType = table.Column<byte>(nullable: false),
                    FractureFormNotSpecifiedType = table.Column<byte>(nullable: false),
                    FractureFormSubType = table.Column<byte>(nullable: false),
                    DorsomedialDrugType = table.Column<byte>(nullable: false),
                    ScaphoideumClassificationType = table.Column<byte>(nullable: false),
                    ScaphoideumGradingType = table.Column<byte>(nullable: false),
                    LichtmanStagingType = table.Column<byte>(nullable: false),
                    LichtmanStagingSubType = table.Column<byte>(nullable: false),
                    IsJointSpaceNarrowing = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsOsteophyte = table.Column<bool>(nullable: false),
                    IsSubchondralCyts = table.Column<bool>(nullable: false),
                    OsteoarthritisSlacWristType = table.Column<byte>(nullable: false),
                    OsteoarthritisSnacWristType = table.Column<byte>(nullable: false),
                    SignificanceType = table.Column<byte>(nullable: false),
                    IsRemodellingAtIncisuraUlnaris = table.Column<bool>(nullable: false),
                    IsIntraArticularBodies = table.Column<bool>(nullable: false),
                    IsJoinSurfaceMoreThan20 = table.Column<bool>(nullable: false),
                    IsShortenedRadius = table.Column<bool>(nullable: false),
                    IsDepressionOfJointSurface = table.Column<bool>(nullable: false),
                    IsGapInJoinSurface = table.Column<bool>(nullable: false),
                    IsPosttraumatic = table.Column<bool>(nullable: false),
                    EatonLitterStagingType = table.Column<byte>(nullable: false),
                    ImpactionImpingementSyndromeType = table.Column<byte>(nullable: false),
                    IsArticularCartilageDamage = table.Column<bool>(nullable: false),
                    IsIncreasedSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsCystsFormation = table.Column<bool>(nullable: false),
                    IsUlna = table.Column<bool>(nullable: false),
                    IsOsLunatum = table.Column<bool>(nullable: false),
                    IsOsTriquetrum = table.Column<bool>(nullable: false),
                    IsTFCC = table.Column<bool>(nullable: false),
                    UlnocarpalEtiologyType = table.Column<byte>(nullable: false),
                    IsLunateNecrosis = table.Column<bool>(nullable: false),
                    IsNegativeUlnarVariance = table.Column<bool>(nullable: false),
                    IsSecondaryUlnarVariance = table.Column<bool>(nullable: false),
                    RadioulnarImpingementType = table.Column<byte>(nullable: false),
                    RadioulnarEarlyPhaseType = table.Column<byte>(nullable: false),
                    RadioulnarLatePhaseType = table.Column<byte>(nullable: false),
                    VitalityType = table.Column<byte>(nullable: false),
                    ScaphoidPseudarthrosisClassificationType = table.Column<byte>(nullable: false),
                    ScaphoidCystType = table.Column<byte>(nullable: false),
                    ScaphoidSclerosisType = table.Column<byte>(nullable: false),
                    ScaphoidOsteoarthritisType = table.Column<byte>(nullable: false),
                    ScaphoidSnacType = table.Column<byte>(nullable: false),
                    IsJointEffusion = table.Column<bool>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsSynovitisWithPannus = table.Column<bool>(nullable: false),
                    IsInflammatoryBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    IsProliferativeBoneChanges = table.Column<bool>(nullable: false),
                    IsTenosynovitis = table.Column<bool>(nullable: false),
                    IsBursitis = table.Column<bool>(nullable: false),
                    IsDestructions = table.Column<bool>(nullable: false),
                    IsMutilations = table.Column<bool>(nullable: false),
                    IsAnkulosis = table.Column<bool>(nullable: false),
                    ArthritisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    OsteomyelitisStageType = table.Column<byte>(nullable: false),
                    IsThinning = table.Column<bool>(nullable: false),
                    IsDestruction = table.Column<bool>(nullable: false),
                    IsIntraosseousAbscess = table.Column<bool>(nullable: false),
                    IntraosseousSize = table.Column<int>(nullable: true),
                    Intraosseous2ndPlaneSize = table.Column<int>(nullable: true),
                    Intraosseous3rdPlaneSize = table.Column<int>(nullable: true),
                    IsPenumbraSign = table.Column<bool>(nullable: false),
                    IsPeripheralContrast = table.Column<bool>(nullable: false),
                    IsIntaosseousLasion = table.Column<bool>(nullable: false),
                    IsSequester = table.Column<bool>(nullable: false),
                    SequesterSize = table.Column<int>(nullable: true),
                    Sequester2ndPlaneSize = table.Column<int>(nullable: true),
                    Sequester3rdPlaneSize = table.Column<int>(nullable: true),
                    IsNoContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSequesterLasion = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsPeriostealRupture = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealSize = table.Column<int>(nullable: true),
                    OsteomyelitisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    IsThickenedSynovia = table.Column<bool>(nullable: false),
                    IsSubchondralFracture = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    BoneMarrowEdemaDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    KnownHistologyMalignancyType = table.Column<byte>(nullable: false),
                    IsDiaphyseal = table.Column<bool>(nullable: false),
                    ExtensionSize = table.Column<int>(nullable: true),
                    Extension2ndPlaneSize = table.Column<int>(nullable: true),
                    Extension3rdPlaneSize = table.Column<int>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    IsGeographic = table.Column<bool>(nullable: false),
                    MaxCartilageThicness = table.Column<int>(nullable: true),
                    IsAdjacentBoneInfiltration = table.Column<bool>(nullable: false),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsPathologicalFractureSuspected = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    LocalExpansionType = table.Column<byte>(nullable: false),
                    TumorDifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    IsDifferentialDiagnosisSuspected = table.Column<bool>(nullable: false),
                    TumorDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    TumorDifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsLesionSameEntity = table.Column<bool>(nullable: false),
                    IsPrimarilyInvolvedBone = table.Column<bool>(nullable: false),
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
                name: "CapsuleAndRibbonsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsDorsal = table.Column<bool>(nullable: false),
                    IsCentrally = table.Column<bool>(nullable: false),
                    IsPalmar = table.Column<bool>(nullable: false),
                    IsStaticSlDissociation = table.Column<bool>(nullable: false),
                    LesionOfExtrinsicLigamentsType = table.Column<byte>(nullable: false),
                    IsSecondaryArthrosis = table.Column<bool>(nullable: false),
                    SlacWristType = table.Column<byte>(nullable: false),
                    IsDISIDeformity = table.Column<bool>(nullable: false),
                    DorsalType = table.Column<byte>(nullable: false),
                    PalmarType = table.Column<byte>(nullable: false),
                    ClassificationPalmerType = table.Column<byte>(nullable: false),
                    ClassificationPalmerSubType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    IsAnnularPulleyRupture = table.Column<bool>(nullable: false),
                    IsTenosynovitisStenosans = table.Column<bool>(nullable: false),
                    IsRuptureOfTheExtensorTendon = table.Column<bool>(nullable: false),
                    IsAvulsionFracture = table.Column<bool>(nullable: false),
                    AnnularPulleyRupturType = table.Column<byte>(nullable: false),
                    TenosynovitisStenosansType = table.Column<byte>(nullable: false),
                    IsRuptureOfCollateralLigament = table.Column<bool>(nullable: false),
                    IsMcp = table.Column<bool>(nullable: false),
                    IsPip = table.Column<bool>(nullable: false),
                    IsDip = table.Column<bool>(nullable: false),
                    CollateralLigamentInjuryType = table.Column<byte>(nullable: false),
                    RuptureOfCollateralLigamentSideType = table.Column<byte>(nullable: false),
                    RuptureOfTheLigamentInjurySubType = table.Column<byte>(nullable: false),
                    IsAvulsionInjury = table.Column<bool>(nullable: false),
                    CapsuleAndRibbonsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CapsuleAndRibbonsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CapsuleAndRibbonsFindings_CapsuleAndRibbonsPages_CapsuleAnd~",
                        column: x => x.CapsuleAndRibbonsPageId,
                        principalTable: "CapsuleAndRibbonsPages",
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
                name: "NerveCompressionFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    PathogenesisType = table.Column<byte>(nullable: false),
                    SecondaryPathogenesisDetailsType = table.Column<byte>(nullable: false),
                    IsOsHamatum = table.Column<bool>(nullable: false),
                    OsseousCauseType = table.Column<byte>(nullable: false),
                    IsHypertrophicOsteophytes = table.Column<bool>(nullable: false),
                    SynovialOriginType = table.Column<byte>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    SecondLevel = table.Column<int>(nullable: true),
                    ThirdLevel = table.Column<int>(nullable: true),
                    Length = table.Column<int>(nullable: true),
                    NeurogeneOriginType = table.Column<byte>(nullable: false),
                    SoftTissueSpaceRequirementType = table.Column<byte>(nullable: false),
                    IsDistalFlatteningOfTheMedianNerve = table.Column<bool>(nullable: false),
                    IsProminenceOfTheLigCarpiTransversum = table.Column<bool>(nullable: false),
                    IsCarpalTunnelEffusion = table.Column<bool>(nullable: false),
                    IsThickeningOfTendonSheaths = table.Column<bool>(nullable: false),
                    IsIncreasedT2wSignal = table.Column<bool>(nullable: false),
                    IsProlapseOfFlexorTendons = table.Column<bool>(nullable: false),
                    IsOsTrapezium = table.Column<bool>(nullable: false),
                    IsOsTrapezoid = table.Column<bool>(nullable: false),
                    IsOsCapitatum = table.Column<bool>(nullable: false),
                    PostoperativePathogenesisDetailsType = table.Column<byte>(nullable: false),
                    IsCompleteCut = table.Column<bool>(nullable: false),
                    IsUlnarNerveFlattening = table.Column<bool>(nullable: false),
                    IsIncreasedT2wSignalUlnarNerve = table.Column<bool>(nullable: false),
                    IsProtrusionOfCarpalLigament = table.Column<bool>(nullable: false),
                    IsPeritendinousCarpiTendon = table.Column<bool>(nullable: false),
                    IsThickeningTendonSheat = table.Column<bool>(nullable: false),
                    IsOsTriquetrum = table.Column<bool>(nullable: false),
                    IsOsPisiforme = table.Column<bool>(nullable: false),
                    IsHypertrophicFormation = table.Column<bool>(nullable: false),
                    IsPseudarthrosis = table.Column<bool>(nullable: false),
                    NerveCompressionPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NerveCompressionFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NerveCompressionFindings_NerveCompressionPages_NerveCompres~",
                        column: x => x.NerveCompressionPageId,
                        principalTable: "NerveCompressionPages",
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
                    LocalizationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSpaghettiLikeAppearanceOfTheNerve = table.Column<bool>(nullable: false),
                    IsDisplacedNerveFasciclesAxialPomegranateSign = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsAlongMedianNerve = table.Column<bool>(nullable: false),
                    IsPressureCorrosionBone = table.Column<bool>(nullable: false),
                    IsMacrodactyly = table.Column<bool>(nullable: false),
                    SignalTypeT1w = table.Column<byte>(nullable: false),
                    SignalTypeT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    CMHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    HandLocationsLocalizer = table.Column<int>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    HandJointsLocalizer = table.Column<int>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    IsHemarthros = table.Column<bool>(nullable: false),
                    IsCapsuleRupture = table.Column<bool>(nullable: false),
                    IsArticularEffusionWithExtraarticularSpread = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    DiameterInMm = table.Column<int>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsNoDisplacement = table.Column<bool>(nullable: false),
                    IsAlongTendonSheath = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsSkin = table.Column<bool>(nullable: false),
                    IsMuscle = table.Column<bool>(nullable: false),
                    IsFascia = table.Column<bool>(nullable: false),
                    IsVessel = table.Column<bool>(nullable: false),
                    IsNerves = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    IsCompressionOfThePosteriorInterosseousNerve = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false),
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
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TendinopathyFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsWithTendonTear = table.Column<bool>(nullable: false),
                    TendovaginitisType = table.Column<byte>(nullable: false),
                    MaxSize = table.Column<int>(nullable: true),
                    RuptureType = table.Column<byte>(nullable: false),
                    Retraction = table.Column<int>(nullable: true),
                    IsPeritendinousChanges = table.Column<bool>(nullable: false),
                    IsPeriTenosynovitis = table.Column<bool>(nullable: false),
                    IsTearAtTheEnthesis = table.Column<bool>(nullable: false),
                    IsPerifocalHematoma = table.Column<bool>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsTendonsFlexorDigitorumSuperficialisMuscle = table.Column<bool>(nullable: false),
                    SuperficialisD2 = table.Column<bool>(nullable: false),
                    SuperficialisD3 = table.Column<bool>(nullable: false),
                    SuperficialisD4 = table.Column<bool>(nullable: false),
                    SuperficialisD5 = table.Column<bool>(nullable: false),
                    IsTendonsFlexorDigitorumProfundusMuscle = table.Column<bool>(nullable: false),
                    ProfundusD2 = table.Column<bool>(nullable: false),
                    ProfundusD3 = table.Column<bool>(nullable: false),
                    ProfundusD4 = table.Column<bool>(nullable: false),
                    ProfundusD5 = table.Column<bool>(nullable: false),
                    IsTendonFlexorPollicisLongusMuscle = table.Column<bool>(nullable: false),
                    IsTendonFlexorCarpiRadialisMuscle = table.Column<bool>(nullable: false),
                    IsTendonFlexorCarpiUlnarisMuscle = table.Column<bool>(nullable: false),
                    IsStenosisInTheOsteofibrousCanal = table.Column<bool>(nullable: false),
                    IsTendonAbductorPollicisLongusMuscle = table.Column<bool>(nullable: false),
                    IsTendonExtensorPollicisBrevisMuscle = table.Column<bool>(nullable: false),
                    IsTendonExtensorCarpiRadialisLongusMuscle = table.Column<bool>(nullable: false),
                    IsTendonExtensorCarpiRadialisBrevisMuscle = table.Column<bool>(nullable: false),
                    IsTendonExtensorPollicisLongusMuscle = table.Column<bool>(nullable: false),
                    IsTendonsExtensoresDigitorumAndIndicisMuscles = table.Column<bool>(nullable: false),
                    ExtensoresD2 = table.Column<bool>(nullable: false),
                    ExtensoresD3 = table.Column<bool>(nullable: false),
                    ExtensoresD4 = table.Column<bool>(nullable: false),
                    ExtensoresD5 = table.Column<bool>(nullable: false),
                    IsTendonExtensorDigitiMinimiMuscle = table.Column<bool>(nullable: false),
                    IsTendonExtensorCarpiUlnarisMuscle = table.Column<bool>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    LocalizationDetailsType = table.Column<byte>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    TendonInvolvementType = table.Column<byte>(nullable: false),
                    SignalTypeT1w = table.Column<byte>(nullable: false),
                    SignalTypeT2w = table.Column<byte>(nullable: false),
                    InternalStructureType = table.Column<byte>(nullable: false),
                    TendinopathyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TendinopathyFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TendinopathyFindings_TendinopathyPages_TendinopathyPageId",
                        column: x => x.TendinopathyPageId,
                        principalTable: "TendinopathyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisIndications_AnamnesisPageId",
                table: "AnamnesisIndications",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPreviousSurgeriess_AnamnesisPageId",
                table: "AnamnesisPreviousSurgeriess",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesFindings_BonesPageId",
                table: "BonesFindings",
                column: "BonesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesFindings_ImageFileId",
                table: "BonesFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesPages_ReportId",
                table: "BonesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CapsuleAndRibbonsFindings_CapsuleAndRibbonsPageId",
                table: "CapsuleAndRibbonsFindings",
                column: "CapsuleAndRibbonsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CapsuleAndRibbonsPages_ReportId",
                table: "CapsuleAndRibbonsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_EvaluationPages_ReportId",
                table: "EvaluationPages",
                column: "ReportId",
                unique: true);

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
                name: "IX_NerveCompressionFindings_NerveCompressionPageId",
                table: "NerveCompressionFindings",
                column: "NerveCompressionPageId");

            migrationBuilder.CreateIndex(
                name: "IX_NerveCompressionPages_ReportId",
                table: "NerveCompressionPages",
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
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TendinopathyFindings_TendinopathyPageId",
                table: "TendinopathyFindings",
                column: "TendinopathyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_TendinopathyPages_ReportId",
                table: "TendinopathyPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnamnesisIndications");

            migrationBuilder.DropTable(
                name: "AnamnesisPreviousSurgeriess");

            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CapsuleAndRibbonsFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "EvaluationPages");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "NerveCompressionFindings");

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
                name: "TendinopathyFindings");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "ImageFile");

            migrationBuilder.DropTable(
                name: "CapsuleAndRibbonsPages");

            migrationBuilder.DropTable(
                name: "NerveCompressionPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftTissuePages");

            migrationBuilder.DropTable(
                name: "TendinopathyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
