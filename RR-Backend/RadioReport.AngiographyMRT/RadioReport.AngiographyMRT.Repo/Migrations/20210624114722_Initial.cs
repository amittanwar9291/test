using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.AngiographyMRT.Repo.Migrations
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
                name: "AbdomenPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbdomenPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbdomenPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsPTAOrStentImplantation = table.Column<bool>(nullable: false),
                    IsBypass = table.Column<bool>(nullable: false),
                    IsLysis = table.Column<bool>(nullable: false),
                    IsAfterTransplantation = table.Column<bool>(nullable: false),
                    AfterTransplantationType = table.Column<byte>(nullable: false),
                    IsValveSurgery = table.Column<bool>(nullable: false),
                    IsMRAngiography = table.Column<bool>(nullable: false),
                    MonthMRAngiography = table.Column<byte>(nullable: false),
                    YearMRAngiography = table.Column<int>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    MonthCTAngiography = table.Column<byte>(nullable: false),
                    YearCTAngiography = table.Column<int>(nullable: false),
                    IsDigitalSubtractionAngiography = table.Column<bool>(nullable: false),
                    MonthDigitalSubtractionAngiography = table.Column<byte>(nullable: false),
                    YearDigitalSubtractionAngiography = table.Column<int>(nullable: false)
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
                name: "AortaPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AortaPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AortaPages_Reports_ReportId",
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
                name: "PelvisLegArteriesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PelvisLegArteriesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PelvisLegArteriesPages_Reports_ReportId",
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
                name: "SummaryPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ComparisonToPriorExamsType = table.Column<byte>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    ModalityType = table.Column<byte>(nullable: false),
                    TimeInterval = table.Column<byte>(nullable: false)
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
                name: "SupraaorticVesselsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupraaorticVesselsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupraaorticVesselsPages_Reports_ReportId",
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
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsInadequateBolusTiming = table.Column<bool>(nullable: false)
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
                name: "UpperArteriesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpperArteriesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UpperArteriesPages_Reports_ReportId",
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
                name: "AbdomenFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    AnatomicVariantsOrPathologyType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosisInMm = table.Column<int>(nullable: true),
                    DiameterNormalPoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisAccordingToNASCETInPercentage = table.Column<decimal>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    LengthInMm = table.Column<int>(nullable: true),
                    IsShortLengthStenosis = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    IsRenalVeinThrombosis = table.Column<bool>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsCranial = table.Column<bool>(nullable: false),
                    IsCaudal = table.Column<bool>(nullable: false),
                    IsOrthotopicRenalVascularizarion = table.Column<bool>(nullable: false),
                    RenalArteryLocalizationType = table.Column<byte>(nullable: false),
                    IsPrestenoticDilatation = table.Column<bool>(nullable: false),
                    IsTandemStenosis = table.Column<bool>(nullable: false),
                    IsDissection = table.Column<bool>(nullable: false),
                    IsStent = table.Column<bool>(nullable: false),
                    StentLengthInMm = table.Column<int>(nullable: true),
                    StatusType = table.Column<byte>(nullable: false),
                    IsSubtleChanges = table.Column<bool>(nullable: false),
                    IsPearlLikeChanges = table.Column<bool>(nullable: false),
                    PearlLikeChangesType = table.Column<byte>(nullable: false),
                    IsAneurysmaticChanges = table.Column<bool>(nullable: false),
                    IsInvolvementOfTheVisceralArteries = table.Column<bool>(nullable: false),
                    IsSplenicArtery = table.Column<bool>(nullable: false),
                    IsSuperiorMesenteryArtery = table.Column<bool>(nullable: false),
                    IsInferiorMesenteryArtery = table.Column<bool>(nullable: false),
                    IsThrombolization = table.Column<bool>(nullable: false),
                    IsEccentricPartialThrombosis = table.Column<bool>(nullable: false),
                    IsMarginalCalcifications = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryStenosis = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryStenosisAanular = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryKinking = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryTorsion = table.Column<bool>(nullable: false),
                    IsClampingDamageWithAfferentArteryStenosis = table.Column<bool>(nullable: false),
                    IsVenousInfarction = table.Column<bool>(nullable: false),
                    IsLimitedContrastOfTheRenalParenchyma = table.Column<bool>(nullable: false),
                    IsResidualContrast = table.Column<bool>(nullable: false),
                    IsAnatomicVariants = table.Column<bool>(nullable: false),
                    IsMultipleRenalVeins = table.Column<bool>(nullable: false),
                    IsDecreasedPerfusion = table.Column<bool>(nullable: false),
                    IsT1wHyperintenseCorticalHaemorrhages = table.Column<bool>(nullable: false),
                    OrganSizeType = table.Column<byte>(nullable: false),
                    IsRetroaortalCourseLeftRenalVein = table.Column<bool>(nullable: false),
                    IsBifurcatedPreAndRetroarticLeftRenalVein = table.Column<bool>(nullable: false),
                    DirectOriginFromTheAbdominalAortaType = table.Column<byte>(nullable: false),
                    IsHepatomesentericTrunk = table.Column<bool>(nullable: false),
                    HepatomesentericTrunkType = table.Column<byte>(nullable: false),
                    IncompleteHepatomesentericTrunkType = table.Column<byte>(nullable: false),
                    ArisesFromCeliacTrunkType = table.Column<byte>(nullable: false),
                    IsLeftHepaticArteryArisesFromLeftGastricArtery = table.Column<bool>(nullable: false),
                    FurtherVariantsType = table.Column<byte>(nullable: false),
                    MesentericVesselsLocalizationType = table.Column<byte>(nullable: false),
                    IsStenosisOrOcclusion = table.Column<bool>(nullable: false),
                    IsRiolanAnastomosis = table.Column<bool>(nullable: false),
                    IsCollateralFlowViaPancreaticoduodenalArcades = table.Column<bool>(nullable: false),
                    IsMultifocalChanges = table.Column<bool>(nullable: false),
                    IsFibromuscularDysplasia = table.Column<bool>(nullable: false),
                    IsSignsOfPortalHypertension = table.Column<bool>(nullable: false),
                    MaxPortalVeinDiameterInMm = table.Column<int>(nullable: true),
                    IsPortalVeinThrombosis = table.Column<bool>(nullable: false),
                    PortalVeinThrombosisType = table.Column<byte>(nullable: false),
                    MinVesselDiameterInMm = table.Column<int>(nullable: true),
                    IsObstructionHepatovenousOutflow = table.Column<bool>(nullable: false),
                    LevelOfTheObstructionType = table.Column<byte>(nullable: false),
                    IsPersistentDottedHyperContrastEnhancement = table.Column<bool>(nullable: false),
                    IsDecreasedPerfusionOfTheLiverPeriphery = table.Column<bool>(nullable: false),
                    IsCollaterals = table.Column<bool>(nullable: false),
                    IsPortoportalCollaterals = table.Column<bool>(nullable: false),
                    IsPortosystemicCollateralPathways = table.Column<bool>(nullable: false),
                    IsProminentPeriportalCollaterals = table.Column<bool>(nullable: false),
                    AbdomenPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbdomenFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbdomenFindings_AbdomenPages_AbdomenPageId",
                        column: x => x.AbdomenPageId,
                        principalTable: "AbdomenPages",
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
                    IsSuspiciousFor = table.Column<bool>(nullable: false),
                    StadiumAccordingToFontaineType = table.Column<byte>(nullable: false),
                    IsIntracranial = table.Column<bool>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsCervicalRight = table.Column<bool>(nullable: false),
                    IsCervicalLeft = table.Column<bool>(nullable: false),
                    IsUpperLimb = table.Column<bool>(nullable: false),
                    IsUpperLimbRight = table.Column<bool>(nullable: false),
                    IsUpperLimbLeft = table.Column<bool>(nullable: false),
                    IsChest = table.Column<bool>(nullable: false),
                    IsAbdomen = table.Column<bool>(nullable: false),
                    IsLowerLimb = table.Column<bool>(nullable: false),
                    IsLowerLimbRight = table.Column<bool>(nullable: false),
                    IsLowerLimbLeft = table.Column<bool>(nullable: false),
                    IsArterialHypertension = table.Column<bool>(nullable: false),
                    IsDiabetesMellitus = table.Column<bool>(nullable: false),
                    IsSmoking = table.Column<bool>(nullable: false),
                    IsHyperlipidemia = table.Column<bool>(nullable: false),
                    IsCollagenosis = table.Column<bool>(nullable: false),
                    IsBicuspidAorticValve = table.Column<bool>(nullable: false),
                    IsKnownLiverCirrhosis = table.Column<bool>(nullable: false),
                    IsCocaine = table.Column<bool>(nullable: false),
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
                name: "AortaFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    AortaLocation = table.Column<int>(nullable: false),
                    LengthInMm = table.Column<int>(nullable: true),
                    IsSuspiciousOf = table.Column<bool>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosisInMm = table.Column<int>(nullable: true),
                    DiameterNormalPoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisAccordingToNASCETInPercentage = table.Column<decimal>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    IsShortLengthStenosis = table.Column<bool>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsFreeFloating = table.Column<bool>(nullable: false),
                    IsWallAdherent = table.Column<bool>(nullable: false),
                    IsIrregularContour = table.Column<bool>(nullable: false),
                    MaxWidthInMm = table.Column<int>(nullable: true),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    WallThicknessInMm = table.Column<int>(nullable: true),
                    AnomaliesType = table.Column<byte>(nullable: false),
                    IsHypoplasticAorticArch = table.Column<bool>(nullable: false),
                    IsPoststenoticDilatation = table.Column<bool>(nullable: false),
                    IsPostoperativeResidualStenosis = table.Column<bool>(nullable: false),
                    DetailsAorticArchKinkingType = table.Column<byte>(nullable: false),
                    DetailsCongenitalVascularRingsType = table.Column<byte>(nullable: false),
                    IsAberrantArteriaWithKommerellDiverticulum = table.Column<bool>(nullable: false),
                    IsRightAorticWithKommerellDiverticulum = table.Column<bool>(nullable: false),
                    IsAorticEctasia = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxAxialDiameterInMm = table.Column<int>(nullable: true),
                    ProximalAneuysmaticNeckDiameterInMm = table.Column<int>(nullable: true),
                    ProximalNeckLengthInMm = table.Column<int>(nullable: true),
                    IsEccentricPartialThrombus = table.Column<bool>(nullable: false),
                    FollowUpType = table.Column<byte>(nullable: false),
                    MaxAxialDiameterPreviousExaminationInMm = table.Column<int>(nullable: true),
                    AorticAneurysmDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsAcuteExtravasalHematoma = table.Column<bool>(nullable: false),
                    MaxAorticDiameterInMm = table.Column<int>(nullable: true),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsSvenssonClassificationOfAorticDissection = table.Column<bool>(nullable: false),
                    SvenssonClassificationType = table.Column<byte>(nullable: false),
                    IsThrombosisFalseLumen = table.Column<bool>(nullable: false),
                    StanfordClassificationType = table.Column<byte>(nullable: false),
                    AortaLocationReentry = table.Column<int>(nullable: false),
                    IsRightCoronaryArtery = table.Column<bool>(nullable: false),
                    IsLeftCoronaryArtery = table.Column<bool>(nullable: false),
                    IsBrachiocephalicTrunk = table.Column<bool>(nullable: false),
                    IsLeftCarotidArtery = table.Column<bool>(nullable: false),
                    IsLeftSubclavianArtery = table.Column<bool>(nullable: false),
                    IsCoeliacTrunk = table.Column<bool>(nullable: false),
                    IsSuperiorMesentericArterySMA = table.Column<bool>(nullable: false),
                    IsInferiorMesentericArteryIMA = table.Column<bool>(nullable: false),
                    IsRightRenalArtery = table.Column<bool>(nullable: false),
                    IsLeftRenalArtery = table.Column<bool>(nullable: false),
                    IsRightCommonIliacArtery = table.Column<bool>(nullable: false),
                    IsLeftCommonIliacArtery = table.Column<bool>(nullable: false),
                    BeginningType = table.Column<byte>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    IsWallHematomaHyperintenseInUnenhancedT1w = table.Column<bool>(nullable: false),
                    IsAortitis = table.Column<bool>(nullable: false),
                    CraniocaudalLengthInMm = table.Column<int>(nullable: true),
                    DeepInMm = table.Column<int>(nullable: true),
                    IsMushroomShaped = table.Column<bool>(nullable: false),
                    IsPseudoaneurysm = table.Column<bool>(nullable: false),
                    IsConcentric = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfArterialWallEdema = table.Column<bool>(nullable: false),
                    IsPeriaortitis = table.Column<bool>(nullable: false),
                    QuantificationAortitisType = table.Column<byte>(nullable: false),
                    IsVascularDilatation = table.Column<bool>(nullable: false),
                    VascularDilatationType = table.Column<byte>(nullable: false),
                    IsAnnuloaorticEctasia = table.Column<bool>(nullable: false),
                    AortitisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    AortaPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AortaFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AortaFindings_AortaPages_AortaPageId",
                        column: x => x.AortaPageId,
                        principalTable: "AortaPages",
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
                name: "PelvisLegArteriesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    LengthInMm = table.Column<int>(nullable: true),
                    IsPersistentIschiadicArtery = table.Column<bool>(nullable: false),
                    IsHighOriginAnteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsHighOriginPosteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsHighOriginPeronealArtery = table.Column<bool>(nullable: false),
                    IsTypeA = table.Column<bool>(nullable: false),
                    IsTypeB = table.Column<bool>(nullable: false),
                    IsTypeC = table.Column<bool>(nullable: false),
                    IsTypeD = table.Column<bool>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosisInMm = table.Column<int>(nullable: true),
                    DiameterNormalPoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisAccordingToNASCETInPercentage = table.Column<decimal>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    IsShortLengthStenosis = table.Column<bool>(nullable: false),
                    IsBridgingCollaterals = table.Column<bool>(nullable: false),
                    IsCollateralsFromAdjacentVessels = table.Column<bool>(nullable: false),
                    IsPoorCollateralization = table.Column<bool>(nullable: false),
                    ClassificationAccordingToTASCIIType = table.Column<byte>(nullable: false),
                    ClassificationAccordingToTASCIISubType = table.Column<byte>(nullable: false),
                    ClassificationAccordingToTASCIIDetailsType = table.Column<byte>(nullable: false),
                    VascularPathologyLocalizationType = table.Column<byte>(nullable: false),
                    ExtentType = table.Column<byte>(nullable: false),
                    IsSingularStenosisLessThan1Cm = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    IsActiveBleedingOrFreshHematoma = table.Column<bool>(nullable: false),
                    IsPartiallyThrombosed = table.Column<bool>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    LengthEmbolusInMm = table.Column<int>(nullable: true),
                    PathologySubType = table.Column<byte>(nullable: false),
                    IsTypeV = table.Column<bool>(nullable: false),
                    IsDetectionOfCystsWithinTheVesselWall = table.Column<bool>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    IsPeripheralOcclusionsOrStenoses = table.Column<bool>(nullable: false),
                    IsSeveralShortStretchStenoses = table.Column<bool>(nullable: false),
                    IsConcentricFilumTerminaleSign = table.Column<bool>(nullable: false),
                    IsSegmentalOcclusions = table.Column<bool>(nullable: false),
                    IsSuddenChangeInDiameter = table.Column<bool>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfVascularWallOrOedema = table.Column<bool>(nullable: false),
                    IsArterialWallEnhancement = table.Column<bool>(nullable: false),
                    IsMicroaneurysm = table.Column<bool>(nullable: false),
                    IsTortuousCourseOfTheSuperficialFemoralArtery = table.Column<bool>(nullable: false),
                    IsCorkscrewCollaterals = table.Column<bool>(nullable: false),
                    TherapyType = table.Column<byte>(nullable: false),
                    BypassType = table.Column<byte>(nullable: false),
                    ComplicationsType = table.Column<byte>(nullable: false),
                    IsAnastomoticAneurysm = table.Column<bool>(nullable: false),
                    AnastomoticAneurysmType = table.Column<byte>(nullable: false),
                    IsPeriprostheticFluidCollection = table.Column<bool>(nullable: false),
                    PeriprostheticFluidCollectionType = table.Column<byte>(nullable: false),
                    IsEspeciallyPeriprostheticInfection = table.Column<bool>(nullable: false),
                    CollectionWithoutContrastEnhancementType = table.Column<byte>(nullable: false),
                    PelvisLegArteriesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PelvisLegArteriesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PelvisLegArteriesFindings_PelvisLegArteriesPages_PelvisLegA~",
                        column: x => x.PelvisLegArteriesPageId,
                        principalTable: "PelvisLegArteriesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SupraaorticVesselsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosis = table.Column<int>(nullable: true),
                    DiameterDiseaseFreePoststenoticSegment = table.Column<int>(nullable: true),
                    DegreeOfStenosisCalculatedInNASCET = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    Length = table.Column<int>(nullable: true),
                    IsShortStenosis = table.Column<bool>(nullable: false),
                    IsWallHematoma = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfArterialWallOrEdema = table.Column<bool>(nullable: false),
                    IsCaliberIrregularities = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsPanarteritisNodosa = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    IsBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery = table.Column<bool>(nullable: false),
                    IsCirculusArteriosusWillisii = table.Column<bool>(nullable: false),
                    IsSubarachnoidHemorrhage = table.Column<bool>(nullable: false),
                    SubarachnoidHemorrhageType = table.Column<byte>(nullable: false),
                    IsRightP1HypoplasiaOrFTPConfiguration = table.Column<bool>(nullable: false),
                    IsRightP1Aplasia = table.Column<bool>(nullable: false),
                    IsRightP1FenestrationOrDuplication = table.Column<bool>(nullable: false),
                    IsRightA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsRightA1Aplasia = table.Column<bool>(nullable: false),
                    IsRightA1FenestrationOrDuplication = table.Column<bool>(nullable: false),
                    IsRightPcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsRightPcomAAplasia = table.Column<bool>(nullable: false),
                    IsRightPICATerminationVA = table.Column<bool>(nullable: false),
                    IsRightVAHypoplasia = table.Column<bool>(nullable: false),
                    IsRightVAAplasia = table.Column<bool>(nullable: false),
                    IsRightTriplicatedACA = table.Column<bool>(nullable: false),
                    IsRightAcomAAplasia = table.Column<bool>(nullable: false),
                    IsRightAcomAFenestrationOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftP1HypoplasiaOrFTPConfiguration = table.Column<bool>(nullable: false),
                    IsLeftP1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftP1FenestrationOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsLeftA1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftA1FenestrationOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftPcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftPcomAAplasia = table.Column<bool>(nullable: false),
                    IsLeftPICATerminationVA = table.Column<bool>(nullable: false),
                    IsLeftVAHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftVAAplasia = table.Column<bool>(nullable: false),
                    IsLeftTriplicatedACA = table.Column<bool>(nullable: false),
                    IsLeftAcomAAplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomAFenestrationOrDuplication = table.Column<bool>(nullable: false),
                    InternalCarotidArterySegmentsLocation = table.Column<byte>(nullable: false),
                    AffectedBranchType = table.Column<byte>(nullable: false),
                    IsSegmentV1 = table.Column<bool>(nullable: false),
                    IsSegmentV2 = table.Column<bool>(nullable: false),
                    IsSegmentV3 = table.Column<bool>(nullable: false),
                    IsSegmentV4 = table.Column<bool>(nullable: false),
                    IsContralateralVertebralArtery = table.Column<bool>(nullable: false),
                    AffectedSegmentsOrVesselsLocation = table.Column<int>(nullable: false),
                    IsLeptomeningealCollaterals = table.Column<bool>(nullable: false),
                    IsContralateralInternalCarotidArtery = table.Column<bool>(nullable: false),
                    IsPosteriorCommunicansArtery = table.Column<bool>(nullable: false),
                    IsOphtalmicArtery = table.Column<bool>(nullable: false),
                    IsSuperiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsInferiorSagittalSinus = table.Column<bool>(nullable: false),
                    IsGreatCerebralVein = table.Column<bool>(nullable: false),
                    IsStraightSinus = table.Column<bool>(nullable: false),
                    IsConfluenceOfSinuses = table.Column<bool>(nullable: false),
                    IsRightTransverseSinus = table.Column<bool>(nullable: false),
                    IsLeftTransverseSinus = table.Column<bool>(nullable: false),
                    IsRightSigmoidSinus = table.Column<bool>(nullable: false),
                    IsLeftSigmoidSinus = table.Column<bool>(nullable: false),
                    IsRightPetrosalSinus = table.Column<bool>(nullable: false),
                    IsLeftPetrosalSinus = table.Column<bool>(nullable: false),
                    IsRightCavernousSinus = table.Column<bool>(nullable: false),
                    IsLeftCavernousSinus = table.Column<bool>(nullable: false),
                    IsCerebralEdema = table.Column<bool>(nullable: false),
                    SupraaorticVesselsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupraaorticVesselsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupraaorticVesselsFindings_SupraaorticVesselsPages_Supraaor~",
                        column: x => x.SupraaorticVesselsPageId,
                        principalTable: "SupraaorticVesselsPages",
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
                    OrientationType = table.Column<byte>(nullable: false),
                    IsSaturatedFat = table.Column<bool>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    IsParallelImaging = table.Column<bool>(nullable: false),
                    MethodType = table.Column<byte>(nullable: false),
                    NonContrastEnhancedMRAngiographyType = table.Column<byte>(nullable: false),
                    ContrastEnhancedMRAngiographyType = table.Column<byte>(nullable: false),
                    IsECGTriggering = table.Column<bool>(nullable: false),
                    IsMIP = table.Column<bool>(nullable: false),
                    IsMPR = table.Column<bool>(nullable: false),
                    IsVRT = table.Column<bool>(nullable: false),
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
                name: "UpperArteriesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosis = table.Column<int>(nullable: true),
                    DiameterDiseaseFreePoststenoticSegment = table.Column<int>(nullable: true),
                    DegreeOfStenosisAccordingToNASCET = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    Length = table.Column<int>(nullable: true),
                    IsShortStenosis = table.Column<bool>(nullable: false),
                    IsThrombusSurroundedByContrastAgent = table.Column<bool>(nullable: false),
                    IsCollateralization = table.Column<bool>(nullable: false),
                    IsPreStenoticDilatation = table.Column<bool>(nullable: false),
                    IsSubclavianStealSyndrome = table.Column<bool>(nullable: false),
                    IsSuspiciousFor = table.Column<bool>(nullable: false),
                    IsWallHematoma = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    DetailsVascularMalformationType = table.Column<byte>(nullable: false),
                    ArteriovenousMalformationType = table.Column<byte>(nullable: false),
                    HemodialysisShuntType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsOcclusion = table.Column<bool>(nullable: false),
                    IsAneurysm = table.Column<bool>(nullable: false),
                    IsInfection = table.Column<bool>(nullable: false),
                    IsProximalAspect = table.Column<bool>(nullable: false),
                    IsMidAspect = table.Column<bool>(nullable: false),
                    IsDistalAspect = table.Column<bool>(nullable: false),
                    IsBrachiocephalicTrunk = table.Column<bool>(nullable: false),
                    IsRightSubclavianArtery = table.Column<bool>(nullable: false),
                    IsRightProximalAspect = table.Column<bool>(nullable: false),
                    IsRightMidAspect = table.Column<bool>(nullable: false),
                    IsRightDistalAspect = table.Column<bool>(nullable: false),
                    IsRightAxillarArtery = table.Column<bool>(nullable: false),
                    IsRightBrachialArtery = table.Column<bool>(nullable: false),
                    IsRightUlnarArtery = table.Column<bool>(nullable: false),
                    IsRightRadialArtery = table.Column<bool>(nullable: false),
                    IsRightDeepPalmarArch = table.Column<bool>(nullable: false),
                    IsRightSuperficialPalmarArch = table.Column<bool>(nullable: false),
                    IsRightPalmarDigitalArteries = table.Column<bool>(nullable: false),
                    RightNumberOfAffectedArteriesType = table.Column<byte>(nullable: false),
                    IsLeftSubclavianArtery = table.Column<bool>(nullable: false),
                    IsLeftProximalAspect = table.Column<bool>(nullable: false),
                    IsLeftMidAspect = table.Column<bool>(nullable: false),
                    IsLeftDistalAspect = table.Column<bool>(nullable: false),
                    IsLeftAxillarArtery = table.Column<bool>(nullable: false),
                    IsLeftBrachialArtery = table.Column<bool>(nullable: false),
                    IsLeftUlnarArtery = table.Column<bool>(nullable: false),
                    IsLeftRadialArtery = table.Column<bool>(nullable: false),
                    IsLeftDeepPalmarArch = table.Column<bool>(nullable: false),
                    IsLeftSuperficialPalmarArch = table.Column<bool>(nullable: false),
                    IsLeftPalmarDigitalArteries = table.Column<bool>(nullable: false),
                    LeftNumberOfAffectedArteriesType = table.Column<byte>(nullable: false),
                    IsSeveralShortStenoses = table.Column<bool>(nullable: false),
                    IsSegmentalOcclusions = table.Column<bool>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfArterialWallOrEdema = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsMicroaneurysms = table.Column<bool>(nullable: false),
                    IsCorkscrewCollaterals = table.Column<bool>(nullable: false),
                    IsCaliberVariations = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    UpperArteriesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpperArteriesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UpperArteriesFindings_UpperArteriesPages_UpperArteriesPageId",
                        column: x => x.UpperArteriesPageId,
                        principalTable: "UpperArteriesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AbdomenFindings_AbdomenPageId",
                table: "AbdomenFindings",
                column: "AbdomenPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AbdomenPages_ReportId",
                table: "AbdomenPages",
                column: "ReportId",
                unique: true);

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
                name: "IX_AortaFindings_AortaPageId",
                table: "AortaFindings",
                column: "AortaPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AortaPages_ReportId",
                table: "AortaPages",
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
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PelvisLegArteriesFindings_PelvisLegArteriesPageId",
                table: "PelvisLegArteriesFindings",
                column: "PelvisLegArteriesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PelvisLegArteriesPages_ReportId",
                table: "PelvisLegArteriesPages",
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
                name: "IX_SummaryPages_ReportId",
                table: "SummaryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SupraaorticVesselsFindings_SupraaorticVesselsPageId",
                table: "SupraaorticVesselsFindings",
                column: "SupraaorticVesselsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SupraaorticVesselsPages_ReportId",
                table: "SupraaorticVesselsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UpperArteriesFindings_UpperArteriesPageId",
                table: "UpperArteriesFindings",
                column: "UpperArteriesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_UpperArteriesPages_ReportId",
                table: "UpperArteriesPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AbdomenFindings");

            migrationBuilder.DropTable(
                name: "AnamnesisFindings");

            migrationBuilder.DropTable(
                name: "AortaFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PelvisLegArteriesFindings");

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
                name: "SupraaorticVesselsFindings");

            migrationBuilder.DropTable(
                name: "UpperArteriesFindings");

            migrationBuilder.DropTable(
                name: "AbdomenPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "AortaPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "PelvisLegArteriesPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SupraaorticVesselsPages");

            migrationBuilder.DropTable(
                name: "UpperArteriesPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
