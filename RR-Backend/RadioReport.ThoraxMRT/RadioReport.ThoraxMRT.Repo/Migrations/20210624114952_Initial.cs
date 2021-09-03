using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.ThoraxMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "ImageFiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileName = table.Column<string>(maxLength: 255, nullable: true),
                    ObjectName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageFiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LungsFlapsMulticolorLocalizers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    LessThan50Location = table.Column<byte>(nullable: false),
                    MoreThan50Location = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungsFlapsMulticolorLocalizers", x => x.Id);
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
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRIPreliminaryExamination = table.Column<bool>(nullable: false),
                    MRIPreliminaryExaminationMonth = table.Column<byte>(nullable: true),
                    MRIPreliminaryExaminationYear = table.Column<int>(nullable: true),
                    IsCTPreliminaryExamination = table.Column<bool>(nullable: false),
                    CTPreliminaryExaminationMonth = table.Column<byte>(nullable: true),
                    CTPreliminaryExaminationYear = table.Column<int>(nullable: true)
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
                name: "LungParenchymaPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungParenchymaPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LungParenchymaPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MediastinumPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediastinumPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MediastinumPages_Reports_ReportId",
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
                name: "PleuraPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PleuraPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PleuraPages_Reports_ReportId",
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
                name: "StudyAreaPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudyAreaPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudyAreaPages_Reports_ReportId",
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
                    IsMRIFollowUp = table.Column<bool>(nullable: false),
                    MRIFollowUpType = table.Column<byte>(nullable: false),
                    IsBiopsyRecommended = table.Column<bool>(nullable: false),
                    BiopsyRecommendedType = table.Column<byte>(nullable: false),
                    IsEvaluationInInterdisciplinaryBoard = table.Column<bool>(nullable: false),
                    IsTumorBoard = table.Column<bool>(nullable: false),
                    IsInterstitialLungDisease = table.Column<bool>(nullable: false),
                    IsFurtherDiagnostics = table.Column<bool>(nullable: false),
                    IsCTThorax = table.Column<bool>(nullable: false),
                    IsCTAbdomen = table.Column<bool>(nullable: false),
                    IsCTNeck = table.Column<bool>(nullable: false),
                    IsMammographyAndBreastUltrasound = table.Column<bool>(nullable: false),
                    IsMRIAbdomen = table.Column<bool>(nullable: false),
                    IsMRISpine = table.Column<bool>(nullable: false),
                    IsMRINeck = table.Column<bool>(nullable: false),
                    IsCardiacDiagnostics = table.Column<bool>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    IsCTPA = table.Column<bool>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    IsSPECT = table.Column<bool>(nullable: false),
                    IsBoneScan = table.Column<bool>(nullable: false),
                    DynamicFindingsType = table.Column<byte>(nullable: false),
                    TNStagingType = table.Column<byte>(nullable: false),
                    TStageType = table.Column<byte>(nullable: false),
                    NStageType = table.Column<byte>(nullable: false),
                    IsQuantitativeEvaluationCysticFibrosis = table.Column<bool>(nullable: false),
                    ScorePreliminaryExaminationPoints = table.Column<int>(nullable: true),
                    CysticFibrosisDynamicFindingsType = table.Column<byte>(nullable: false)
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
                    IsPulsationOrBreathing = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false)
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
                    AnamnesisFindingType = table.Column<byte>(nullable: false),
                    CigarettePacksPerDay = table.Column<int>(nullable: true),
                    IsAorticValveTavi = table.Column<bool>(nullable: false),
                    IsCoronary = table.Column<bool>(nullable: false),
                    IsThoracicAortaTevar = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsAfterPartialLungResectionRight = table.Column<bool>(nullable: false),
                    IsAfterPartialLungResectionLeft = table.Column<bool>(nullable: false),
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
                name: "IndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IndicationFindingType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    ChestWallType = table.Column<byte>(nullable: false),
                    IsSternoclavicularJoint = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IndicationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IndicationFindings_AnamnesisPages_AnamnesisPageId",
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
                    SideType = table.Column<byte>(nullable: false),
                    RibLocalization = table.Column<long>(nullable: false),
                    SpineLocalization = table.Column<int>(nullable: false),
                    FractureType = table.Column<int>(nullable: false),
                    FractureSubType = table.Column<int>(nullable: false),
                    NotFutherSpecfiedType = table.Column<byte>(nullable: false),
                    FractureAge = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    CharacterizationOneDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    ExtensionSize = table.Column<int>(nullable: true),
                    ExtensionSecondPlane = table.Column<int>(nullable: true),
                    ExtensionThirdPlane = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalBone = table.Column<byte>(nullable: false),
                    MassShapeType = table.Column<byte>(nullable: false),
                    MatrixType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsSeptatedOrChambered = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintenseNidus = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    CartilageCapMaxThickness = table.Column<int>(nullable: true),
                    IsT2wHyperintenseCartilageCap = table.Column<bool>(nullable: false),
                    IsSingalPoorPerichondrium = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsPermeativeGrowth = table.Column<bool>(nullable: false),
                    IsScleroticMarginGrowthPattern = table.Column<bool>(nullable: false),
                    IsMapLike = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsIntraosseousAbscess = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissues = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentBone = table.Column<bool>(nullable: false),
                    IsPathologicFracture = table.Column<bool>(nullable: false),
                    IsInadequateTraumaSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsDiagnosisSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    IsAOClassification = table.Column<bool>(nullable: false),
                    IsRockwood = table.Column<bool>(nullable: false),
                    RockwoodInjuryGrade = table.Column<byte>(nullable: false),
                    IsTossy = table.Column<bool>(nullable: false),
                    TossyInjuryGrade = table.Column<byte>(nullable: false),
                    PathologyNoFractureType = table.Column<byte>(nullable: false),
                    IsSchmorlNodes = table.Column<bool>(nullable: false),
                    IsEndplateHerniation = table.Column<bool>(nullable: false),
                    IsSternalManubriumLocalized = table.Column<bool>(nullable: false),
                    IsSternalBodyLocalized = table.Column<bool>(nullable: false),
                    IsXiphoidProcessLocalized = table.Column<bool>(nullable: false),
                    VertebralBodyLocalization = table.Column<byte>(nullable: false),
                    IsPolkaDotSign = table.Column<bool>(nullable: false),
                    IsInterruptionOfVertebralEndPlate = table.Column<bool>(nullable: false),
                    IsEdgreenVainoSign = table.Column<bool>(nullable: false),
                    IsSpinalCanalInfiltration = table.Column<bool>(nullable: false),
                    IsPedicleDestruction = table.Column<bool>(nullable: false),
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
                        name: "FK_BonesFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LungParenchymaFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    LungParenchymaPathologyLocation = table.Column<byte>(nullable: false),
                    SuspicionOfType = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    CysticFibrosisType = table.Column<byte>(nullable: false),
                    Score = table.Column<int>(nullable: true),
                    BronchiectasisOrWallThickeningLocalizerId = table.Column<Guid>(nullable: true),
                    MucusPlaqueLocalizerId = table.Column<Guid>(nullable: true),
                    SacculationOrAbscessLocalizerId = table.Column<Guid>(nullable: true),
                    ConsolidationLocalizerId = table.Column<Guid>(nullable: true),
                    OtherAbnormalityLocalizerId = table.Column<Guid>(nullable: true),
                    FunctionLocalizerId = table.Column<Guid>(nullable: true),
                    IsBronchiectasisOrWallThickening = table.Column<bool>(nullable: false),
                    BronchiectasisOrWallThickeningLocation = table.Column<byte>(nullable: false),
                    IsMucusPlaque = table.Column<bool>(nullable: false),
                    MucusPlaqueLocation = table.Column<byte>(nullable: false),
                    IsSacculationOrAbscess = table.Column<bool>(nullable: false),
                    SacculationOrAbscessLocation = table.Column<byte>(nullable: false),
                    IsConsolidation = table.Column<bool>(nullable: false),
                    ConsolidationLocation = table.Column<byte>(nullable: false),
                    IsPerfusionDisorder = table.Column<bool>(nullable: false),
                    PerfusionDisorderLocation = table.Column<byte>(nullable: false),
                    IsPleuritis = table.Column<bool>(nullable: false),
                    IsPleuritisRight = table.Column<bool>(nullable: false),
                    IsPleuritisLeft = table.Column<bool>(nullable: false),
                    IsPleuralEffusion = table.Column<bool>(nullable: false),
                    IsPleuralEffusionRight = table.Column<bool>(nullable: false),
                    IsPleuralEffusionLeft = table.Column<bool>(nullable: false),
                    PleuralEffusionInMm = table.Column<int>(nullable: true),
                    IsPneumothorax = table.Column<bool>(nullable: false),
                    IsPneumothoraxRight = table.Column<bool>(nullable: false),
                    IsPneumothoraxLeft = table.Column<bool>(nullable: false),
                    IsMediastinalShift = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    LungParenchymaPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungParenchymaFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Bronc~",
                        column: x => x.BronchiectasisOrWallThickeningLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Conso~",
                        column: x => x.ConsolidationLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Funct~",
                        column: x => x.FunctionLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungParenchymaPages_LungParenchymaPa~",
                        column: x => x.LungParenchymaPageId,
                        principalTable: "LungParenchymaPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Mucus~",
                        column: x => x.MucusPlaqueLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Other~",
                        column: x => x.OtherAbnormalityLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungsFlapsMulticolorLocalizers_Saccu~",
                        column: x => x.SacculationOrAbscessLocalizerId,
                        principalTable: "LungsFlapsMulticolorLocalizers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MediastinumFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    DiagnosisType1 = table.Column<byte>(nullable: false),
                    DiagnosisType2 = table.Column<byte>(nullable: false),
                    DiagnosisType3 = table.Column<byte>(nullable: false),
                    DiagnosisType4 = table.Column<byte>(nullable: false),
                    IsPoststenoticDilatation = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    FocalSignalVoidsType = table.Column<byte>(nullable: false),
                    MediastinumType = table.Column<byte>(nullable: false),
                    DirectionType = table.Column<byte>(nullable: false),
                    LymphNodesType = table.Column<byte>(nullable: false),
                    DiameterOfTheLargestLnSadInMm = table.Column<int>(nullable: true),
                    LymphNodeStationsType = table.Column<byte>(nullable: false),
                    SupraclavicularLowCervicalAndJugular = table.Column<byte>(nullable: false),
                    ParatrachealNodesType = table.Column<byte>(nullable: false),
                    AorticNodesType = table.Column<byte>(nullable: false),
                    InferiorMediastinalNodesType = table.Column<byte>(nullable: false),
                    HilarLobarNodesType = table.Column<byte>(nullable: false),
                    LymphNodesLocalizationType = table.Column<byte>(nullable: false),
                    SadInMm = table.Column<int>(nullable: true),
                    IsSuspicious = table.Column<bool>(nullable: false),
                    IsPreservedFattyHilum = table.Column<bool>(nullable: false),
                    IsReferenceLesionAccToRECIST = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    LungsLocation = table.Column<long>(nullable: false),
                    LocalizationWithinVesselType = table.Column<byte>(nullable: false),
                    IsPoloMintSign = table.Column<bool>(nullable: false),
                    IsSaddlePulmonaryEmbolism = table.Column<bool>(nullable: false),
                    QuantitativeWideCentralPulmonaryArteryInMm = table.Column<int>(nullable: true),
                    QuantitativeRVLVDiameterQuotient = table.Column<float>(nullable: true),
                    QuantitativeRVLVVolumeQuotient = table.Column<float>(nullable: true),
                    QuantitativePAAADiameterQuotient = table.Column<float>(nullable: true),
                    CurvatureOfInterventricularSeptumType = table.Column<byte>(nullable: false),
                    IsRemodeling = table.Column<bool>(nullable: false),
                    IsIntravascularBandsAndNets = table.Column<bool>(nullable: false),
                    IsPouchDefect = table.Column<bool>(nullable: false),
                    IsAbruptCaliberChange = table.Column<bool>(nullable: false),
                    IsStrictures = table.Column<bool>(nullable: false),
                    IsCollateralSupply = table.Column<bool>(nullable: false),
                    IsMosaicPerfusion = table.Column<bool>(nullable: false),
                    ChronicThromboembolicType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsRightAtriumEnlargement = table.Column<bool>(nullable: false),
                    IsRightEnlargementOfTheVentricle = table.Column<bool>(nullable: false),
                    IsRightMyocardialThickening = table.Column<bool>(nullable: false),
                    IsVenousContrastAgentReflux = table.Column<bool>(nullable: false),
                    IsRightThrombus = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsLeftAtriumEnlargement = table.Column<bool>(nullable: false),
                    IsLeftEnlargementOfTheVentricle = table.Column<bool>(nullable: false),
                    IsLeftMyocardialThickening = table.Column<bool>(nullable: false),
                    IsLeftThrombus = table.Column<bool>(nullable: false),
                    IsEffusion = table.Column<bool>(nullable: false),
                    EffusionWidthMaxInMm = table.Column<int>(nullable: true),
                    IsMass = table.Column<bool>(nullable: false),
                    MassDiameterMaxInMm = table.Column<int>(nullable: true),
                    IsPneumopericardium = table.Column<bool>(nullable: false),
                    IsFocalSignalVoid = table.Column<bool>(nullable: false),
                    IsPericarditisConstrictiva = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<int>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    AnomaliesType = table.Column<byte>(nullable: false),
                    IsHypoplasticAorticArch = table.Column<bool>(nullable: false),
                    IsPostoperativeResidualStenosis = table.Column<bool>(nullable: false),
                    DetailsKinkingType = table.Column<byte>(nullable: false),
                    DetailsCongenitalVascularRingsType = table.Column<byte>(nullable: false),
                    IsWithKommerellSDiverticulum = table.Column<bool>(nullable: false),
                    IsAorticEctasia = table.Column<bool>(nullable: false),
                    ExpansionMaxAxialDiameter = table.Column<int>(nullable: true),
                    ExpansionCraniocaudalInMm = table.Column<int>(nullable: true),
                    VesselDiameterProximalOfTheAneurysmInMm = table.Column<int>(nullable: true),
                    ProgressMonitoringType = table.Column<byte>(nullable: false),
                    IsEccentricPartialThrombosis = table.Column<bool>(nullable: false),
                    MaxAxialDiameterPreliminaryExaminationInMm = table.Column<int>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsUpperMediastinum = table.Column<bool>(nullable: false),
                    IsLowerMediastinum = table.Column<bool>(nullable: false),
                    IsAnteriorMediastinum = table.Column<bool>(nullable: false),
                    IsMiddleMediastinum = table.Column<bool>(nullable: false),
                    IsPosteriorMediastinum = table.Column<bool>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsFatIsointens = table.Column<bool>(nullable: false),
                    IsLiquidIsointens = table.Column<bool>(nullable: false),
                    ExpansionSizeInMm = table.Column<int>(nullable: true),
                    ExpansionSecondPlaneInMm = table.Column<int>(nullable: true),
                    ExpansionThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsFat = table.Column<bool>(nullable: false),
                    IsMicroscopic = table.Column<bool>(nullable: false),
                    IsMacroscopic = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsFibrousSepta = table.Column<bool>(nullable: false),
                    IsLiquidFatLevel = table.Column<bool>(nullable: false),
                    IsToothBone = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhageBloodDegradation = table.Column<bool>(nullable: false),
                    CystsType = table.Column<byte>(nullable: false),
                    MediastinumGrowthPatternsType = table.Column<byte>(nullable: false),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsScaloppedThinnedPedicle = table.Column<bool>(nullable: false),
                    IsNeuroforaminalWidening = table.Column<bool>(nullable: false),
                    IsPressureErosionRib = table.Column<bool>(nullable: false),
                    IsLocoregionalOsteolysis = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    NoCMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementPatternType = table.Column<byte>(nullable: false),
                    CaudalExtensionInMmDiagnosis01 = table.Column<int>(nullable: true),
                    CaudalExtensionInMmDiagnosis02 = table.Column<int>(nullable: true),
                    CaudalExtensionInMmDiagnosis03 = table.Column<int>(nullable: true),
                    EsuphagusType = table.Column<byte>(nullable: false),
                    EsuphagusLocalizationType = table.Column<byte>(nullable: false),
                    MaxWallDiameterInMm = table.Column<int>(nullable: true),
                    MaxExpansionCraniocaudalInMm = table.Column<int>(nullable: true),
                    IsUpsideDownStomach = table.Column<bool>(nullable: false),
                    TracheaType = table.Column<byte>(nullable: false),
                    TracheaShiftType = table.Column<byte>(nullable: false),
                    HeightInRelationType = table.Column<byte>(nullable: false),
                    MinDiameterAxial = table.Column<int>(nullable: true),
                    MinDiameterCraniocaudal = table.Column<int>(nullable: true),
                    IsTracheomalaciaCollapseInExpiration = table.Column<bool>(nullable: false),
                    MassDetailsMaxDiameterInMm = table.Column<int>(nullable: true),
                    MediastinumPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediastinumFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MediastinumFindings_MediastinumPages_MediastinumPageId",
                        column: x => x.MediastinumPageId,
                        principalTable: "MediastinumPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PleuraFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    PleuraSiteType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    FocalSignalVoidsType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsMoreThan1Lesion = table.Column<bool>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    IsPosterior = table.Column<bool>(nullable: false),
                    ExpansionSizeInMM = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    PleuraShapeType = table.Column<byte>(nullable: false),
                    T1wSignalType = table.Column<byte>(nullable: false),
                    T2wSignalType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsMacroscopic = table.Column<bool>(nullable: false),
                    IsMicroscopic = table.Column<bool>(nullable: false),
                    CysticChangesType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementPatternType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    MaxWidthInMM = table.Column<int>(nullable: true),
                    PleuraFormType = table.Column<byte>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    QualityType = table.Column<byte>(nullable: false),
                    IsCoagulum = table.Column<bool>(nullable: false),
                    IsT1wHyperintense = table.Column<bool>(nullable: false),
                    IsCMEnrichingCapsule = table.Column<bool>(nullable: false),
                    IsSedimentation = table.Column<bool>(nullable: false),
                    IsSplitPleuraSign = table.Column<bool>(nullable: false),
                    PleuralThickeningMassLocalizationType = table.Column<byte>(nullable: false),
                    PleuraLocalizationCraniocaudalType = table.Column<byte>(nullable: false),
                    IsFissural = table.Column<bool>(nullable: false),
                    IsMediastinal = table.Column<bool>(nullable: false),
                    AngleToThoracicWallType = table.Column<byte>(nullable: false),
                    DisplacementOfAdiposeTissueType = table.Column<byte>(nullable: false),
                    IsCysticChanges = table.Column<bool>(nullable: false),
                    IsNodularConfiguration = table.Column<bool>(nullable: false),
                    IsInfiltrationChestWall = table.Column<bool>(nullable: false),
                    IsInfiltrationOfExtrapleuralFatTissue = table.Column<bool>(nullable: false),
                    IsArrosionAdjacentOsseousStructures = table.Column<bool>(nullable: false),
                    IsAssociatedFindingsHemorrhage = table.Column<bool>(nullable: false),
                    PneumothoraxType = table.Column<byte>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    ExpansionMaxWidthInMm = table.Column<int>(nullable: true),
                    IsMediastinalshift = table.Column<bool>(nullable: false),
                    MediastinalPleuraSiteType = table.Column<byte>(nullable: false),
                    IsAtelectasis = table.Column<bool>(nullable: false),
                    IsSoftTissueEmphysema = table.Column<bool>(nullable: false),
                    IsPneumopericardium = table.Column<bool>(nullable: false),
                    IsPneumomediastinum = table.Column<bool>(nullable: false),
                    CraniocaudalType = table.Column<byte>(nullable: false),
                    SpineLocations = table.Column<int>(nullable: false),
                    RibLocations = table.Column<long>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsLevel = table.Column<bool>(nullable: false),
                    LevelType = table.Column<byte>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNonDisplacing = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsLung = table.Column<bool>(nullable: false),
                    IsMediastinum = table.Column<bool>(nullable: false),
                    IsVessels = table.Column<bool>(nullable: false),
                    IsCutaneousThickening = table.Column<bool>(nullable: false),
                    IsPressureCorrosionRib = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsMuscleAtrophy = table.Column<bool>(nullable: false),
                    VolumeType = table.Column<byte>(nullable: false),
                    IsAblatioRight = table.Column<bool>(nullable: false),
                    IsAblatioLeft = table.Column<bool>(nullable: false),
                    IsBreastAugmentationRight = table.Column<bool>(nullable: false),
                    IsBreastAugmentationLeft = table.Column<bool>(nullable: false),
                    IsThickened = table.Column<bool>(nullable: false),
                    ThickenedCutisBreastLocation = table.Column<int>(nullable: false),
                    IsObscured = table.Column<bool>(nullable: false),
                    IsObscuredRight = table.Column<bool>(nullable: false),
                    IsObscuredLeft = table.Column<bool>(nullable: false),
                    IsMass = table.Column<bool>(nullable: false),
                    MassBreastLocation = table.Column<int>(nullable: false),
                    MassMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    MammaShapeType = table.Column<byte>(nullable: false),
                    MammaMarginType = table.Column<byte>(nullable: false),
                    MammaFocalSignalVoidsType = table.Column<byte>(nullable: false),
                    LymphNodesAxillaType = table.Column<byte>(nullable: false),
                    IsLymphNodeRight = table.Column<bool>(nullable: false),
                    RightMarginalShortAxisDiameter = table.Column<int>(nullable: true),
                    IsLymphNodeLeft = table.Column<bool>(nullable: false),
                    LeftMarginalShortAxisDiameter = table.Column<int>(nullable: true),
                    IsRightLevel1 = table.Column<bool>(nullable: false),
                    IsRightLevel2 = table.Column<bool>(nullable: false),
                    IsRightLevel3 = table.Column<bool>(nullable: false),
                    IsLeftLevel1 = table.Column<bool>(nullable: false),
                    IsLeftLevel2 = table.Column<bool>(nullable: false),
                    IsLeftLevel3 = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSignalVoid = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsVascularContact = table.Column<bool>(nullable: false),
                    IsFocalLiverLesion = table.Column<bool>(nullable: false),
                    FocalLiverLesionMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    IsDiffuseLiverLesion = table.Column<bool>(nullable: false),
                    DiffuseLesionType = table.Column<byte>(nullable: false),
                    IsSuspicionOfDiffuseLiverLesion = table.Column<bool>(nullable: false),
                    IsCholecystolithiasis = table.Column<bool>(nullable: false),
                    IsWallThickeningOfTheGallBladder = table.Column<bool>(nullable: false),
                    IsFocalPancreaticLesion = table.Column<bool>(nullable: false),
                    LeasionLocalizationType = table.Column<byte>(nullable: false),
                    FocalPancreaticLesionMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsDiffusePancreaticLesion = table.Column<bool>(nullable: false),
                    IsFattyAtrophy = table.Column<bool>(nullable: false),
                    IsWirsungDuctDilatation = table.Column<bool>(nullable: false),
                    IsKidney = table.Column<bool>(nullable: false),
                    IsKidneyFocalLesion = table.Column<bool>(nullable: false),
                    FocalLeasionSiteType = table.Column<byte>(nullable: false),
                    KidneyFocalLesionMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsUrinaryRetention = table.Column<bool>(nullable: false),
                    IsUrinaryRetentionRight = table.Column<bool>(nullable: false),
                    IsUrinaryRetentionLeft = table.Column<bool>(nullable: false),
                    GradingType = table.Column<byte>(nullable: false),
                    IsAdrenalGlandMass = table.Column<bool>(nullable: false),
                    AdrenalGlandMassSiteType = table.Column<byte>(nullable: false),
                    MassAdrenalGlandMaxDiameterInMm = table.Column<int>(nullable: true),
                    MassAdrenalGlandDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsSuspicionOfMassAdrenalGland = table.Column<bool>(nullable: false),
                    IsSplenomegaly = table.Column<bool>(nullable: false),
                    IsEnlargedAbdominalLymphNodes = table.Column<bool>(nullable: false),
                    DiameterSADInMm = table.Column<int>(nullable: true),
                    IsPathological = table.Column<bool>(nullable: false),
                    IsPathologicalMultiple = table.Column<bool>(nullable: false),
                    IsPathologicalConglomerate = table.Column<bool>(nullable: false),
                    IsPathologicalHiatalHernia = table.Column<bool>(nullable: false),
                    IsPerihepatic = table.Column<bool>(nullable: false),
                    IsPerisplenic = table.Column<bool>(nullable: false),
                    IsAscitesNotFurtherDefined = table.Column<bool>(nullable: false),
                    PleuraPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PleuraFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PleuraFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PleuraFindings_PleuraPages_PleuraPageId",
                        column: x => x.PleuraPageId,
                        principalTable: "PleuraPages",
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
                        name: "FK_PatientInformation_StudyAreaPages_Id",
                        column: x => x.Id,
                        principalTable: "StudyAreaPages",
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
                    IsECGTriggering = table.Column<bool>(nullable: false),
                    IsRespiratoryTriggering = table.Column<bool>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsB0 = table.Column<bool>(nullable: false),
                    IsB50 = table.Column<bool>(nullable: false),
                    IsB100 = table.Column<bool>(nullable: false),
                    IsB800 = table.Column<bool>(nullable: false),
                    IsB1000 = table.Column<bool>(nullable: false),
                    IsB1400 = table.Column<bool>(nullable: false),
                    IsCalculated = table.Column<bool>(nullable: false),
                    IsADCMap = table.Column<bool>(nullable: false),
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
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_BonesPages_ReportId",
                table: "BonesPages",
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
                name: "IX_IndicationFindings_AnamnesisPageId",
                table: "IndicationFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_BronchiectasisOrWallThickeningLocali~",
                table: "LungParenchymaFindings",
                column: "BronchiectasisOrWallThickeningLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_ConsolidationLocalizerId",
                table: "LungParenchymaFindings",
                column: "ConsolidationLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_FunctionLocalizerId",
                table: "LungParenchymaFindings",
                column: "FunctionLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_LungParenchymaPageId",
                table: "LungParenchymaFindings",
                column: "LungParenchymaPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_MucusPlaqueLocalizerId",
                table: "LungParenchymaFindings",
                column: "MucusPlaqueLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_OtherAbnormalityLocalizerId",
                table: "LungParenchymaFindings",
                column: "OtherAbnormalityLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_SacculationOrAbscessLocalizerId",
                table: "LungParenchymaFindings",
                column: "SacculationOrAbscessLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaPages_ReportId",
                table: "LungParenchymaPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MediastinumFindings_MediastinumPageId",
                table: "MediastinumFindings",
                column: "MediastinumPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MediastinumPages_ReportId",
                table: "MediastinumPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PleuraFindings_ImageFileId",
                table: "PleuraFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PleuraFindings_PleuraPageId",
                table: "PleuraFindings",
                column: "PleuraPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PleuraPages_ReportId",
                table: "PleuraPages",
                column: "ReportId",
                unique: true);

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
                name: "IX_StudyAreaPages_ReportId",
                table: "StudyAreaPages",
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
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "IndicationFindings");

            migrationBuilder.DropTable(
                name: "LungParenchymaFindings");

            migrationBuilder.DropTable(
                name: "MediastinumFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PleuraFindings");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "LungsFlapsMulticolorLocalizers");

            migrationBuilder.DropTable(
                name: "LungParenchymaPages");

            migrationBuilder.DropTable(
                name: "MediastinumPages");

            migrationBuilder.DropTable(
                name: "StudyAreaPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "PleuraPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
