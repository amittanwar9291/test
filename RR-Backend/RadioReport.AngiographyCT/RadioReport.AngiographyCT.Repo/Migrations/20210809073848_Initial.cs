using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.AngiographyCT.Repo.Migrations
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
                    IsMR = table.Column<bool>(nullable: false),
                    IsMRAngiography = table.Column<bool>(nullable: false),
                    MRAngiographyMonth = table.Column<int>(nullable: true),
                    MRAngiographyYear = table.Column<int>(nullable: true),
                    IsCT = table.Column<bool>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    CTAngiographyMonth = table.Column<int>(nullable: true),
                    CTAngiographyYear = table.Column<int>(nullable: true),
                    IsDigitalSubtractionAngiography = table.Column<bool>(nullable: false),
                    DigitalSubtractionAngiographyMonth = table.Column<int>(nullable: true),
                    DigitalSubtractionAngiographyYear = table.Column<int>(nullable: true),
                    IsUS = table.Column<bool>(nullable: false),
                    IsUSDopplerUltrasound = table.Column<bool>(nullable: false),
                    DopplerUltrasoundMonth = table.Column<int>(nullable: true),
                    DopplerUltrasoundYear = table.Column<int>(nullable: true)
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
                    IsNoMoreAorticPathologies = table.Column<bool>(nullable: false),
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
                name: "CoronaryArteriesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoronaryArteriesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoronaryArteriesPages_Reports_ReportId",
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
                    AreFindings = table.Column<byte>(nullable: false),
                    IsNoMorePathologies = table.Column<bool>(nullable: false)
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
                    ComparisonToPriorExamsType = table.Column<byte>(nullable: false),
                    IsFurtherExamination = table.Column<bool>(nullable: false),
                    ModalityTypeFurtherExaminationType = table.Column<byte>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    ModalityTypeFollowUpType = table.Column<byte>(nullable: false),
                    TimeIntervalType = table.Column<byte>(nullable: false)
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
                    IodineConcentrationType = table.Column<byte>(nullable: false),
                    ContrastVolumeInMl = table.Column<int>(nullable: true),
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
                    IsRespiratoryArtifacts = table.Column<bool>(nullable: false),
                    IsPulsationArtifacts = table.Column<bool>(nullable: false),
                    IsMetalArtifacts = table.Column<bool>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    IsBetaBlocker = table.Column<bool>(nullable: false),
                    IsNitroglycerin = table.Column<bool>(nullable: false),
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
                    IsClipArtifacts = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryKinking = table.Column<bool>(nullable: false),
                    IsTransplantRenalArteryTorsion = table.Column<bool>(nullable: false),
                    IsClampingDamageWithAfferentArteryStenosis = table.Column<bool>(nullable: false),
                    IsVenousInfarction = table.Column<bool>(nullable: false),
                    IsLimitedContrastOfTheRenalParenchyma = table.Column<bool>(nullable: false),
                    IsResidualContrast = table.Column<bool>(nullable: false),
                    IsQualityCalcification = table.Column<bool>(nullable: false),
                    IsQualitySoftPlaque = table.Column<bool>(nullable: false),
                    IsAnatomicVariants = table.Column<bool>(nullable: false),
                    IsMultipleRenalVeins = table.Column<bool>(nullable: false),
                    IsDecreasedPerfusion = table.Column<bool>(nullable: false),
                    IsCorticalHemorrhages = table.Column<bool>(nullable: false),
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
                    MesentericVesselsDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    StenosisSeverityType = table.Column<byte>(nullable: false),
                    IsIschemicBowelWall = table.Column<bool>(nullable: false),
                    IsFreeGas = table.Column<bool>(nullable: false),
                    IsAscites = table.Column<bool>(nullable: false),
                    IsHemorrhagic = table.Column<bool>(nullable: false),
                    IsActiveBleeding = table.Column<bool>(nullable: false),
                    IsDuodenum = table.Column<bool>(nullable: false),
                    IsJejunum = table.Column<bool>(nullable: false),
                    IsIleum = table.Column<bool>(nullable: false),
                    IsCecum = table.Column<bool>(nullable: false),
                    IsAscendingColon = table.Column<bool>(nullable: false),
                    IsRightColonicFlexure = table.Column<bool>(nullable: false),
                    IsTransverseColon = table.Column<bool>(nullable: false),
                    IsLeftColonicFlexure = table.Column<bool>(nullable: false),
                    IsDescendingColon = table.Column<bool>(nullable: false),
                    IsSigmoidColon = table.Column<bool>(nullable: false),
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
                name: "IndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IndicationFindingType = table.Column<byte>(nullable: false),
                    IsSuspiciousFor = table.Column<bool>(nullable: false),
                    OnsetOfSymptomsMonth = table.Column<int>(nullable: true),
                    OnsetOfSymptomsYear = table.Column<int>(nullable: true),
                    StadiumAccordingToFontaineType = table.Column<byte>(nullable: false),
                    IsSuspectedVascularStenosis = table.Column<bool>(nullable: false),
                    IsAbdominalAorta = table.Column<bool>(nullable: false),
                    IsSuprarenal = table.Column<bool>(nullable: false),
                    IsInfrarenal = table.Column<bool>(nullable: false),
                    IsAorticBifurcation = table.Column<bool>(nullable: false),
                    IsRightRenalArtery = table.Column<bool>(nullable: false),
                    IsRightCommonIliacArtery = table.Column<bool>(nullable: false),
                    IsRightExternalIliacArtery = table.Column<bool>(nullable: false),
                    IsRightInternalIliacArtery = table.Column<bool>(nullable: false),
                    IsRightCommonFemoralArtery = table.Column<bool>(nullable: false),
                    IsRightFemoralArteryBifurcation = table.Column<bool>(nullable: false),
                    IsRightSuperficialFemoralArtery = table.Column<bool>(nullable: false),
                    IsRightProfundaFemorisArtery = table.Column<bool>(nullable: false),
                    IsRightPoplitealArtery = table.Column<bool>(nullable: false),
                    IsRightAnteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsRightTruncusTibiofibularis = table.Column<bool>(nullable: false),
                    IsRightPosteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsRightFibularArtery = table.Column<bool>(nullable: false),
                    IsRightDorsalisPedisArtery = table.Column<bool>(nullable: false),
                    IsRightArcusPlantaris = table.Column<bool>(nullable: false),
                    IsLeftRenalArtery = table.Column<bool>(nullable: false),
                    IsLeftCommonIliacArtery = table.Column<bool>(nullable: false),
                    IsLeftExternalIliacArtery = table.Column<bool>(nullable: false),
                    IsLeftInternalIliacArtery = table.Column<bool>(nullable: false),
                    IsLeftCommonFemoralArtery = table.Column<bool>(nullable: false),
                    IsLeftFemoralArteryBifurcation = table.Column<bool>(nullable: false),
                    IsLeftSuperficialFemoralArtery = table.Column<bool>(nullable: false),
                    IsLeftProfundaFemorisArtery = table.Column<bool>(nullable: false),
                    IsLeftPoplitealArtery = table.Column<bool>(nullable: false),
                    IsLeftAnteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsLeftTruncusTibiofibularis = table.Column<bool>(nullable: false),
                    IsLeftPosteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsLeftFibularArtery = table.Column<bool>(nullable: false),
                    IsLeftDorsalisPedisArtery = table.Column<bool>(nullable: false),
                    IsLeftArcusPlantaris = table.Column<bool>(nullable: false),
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
                    IsAnginaPectoris = table.Column<bool>(nullable: false),
                    AnginaPectorisType = table.Column<byte>(nullable: false),
                    PreviousDiseaseType = table.Column<byte>(nullable: false),
                    PretestProbabilityCADInPercent = table.Column<int>(nullable: true),
                    IsStressTestingPerformed = table.Column<bool>(nullable: false),
                    IsECG = table.Column<bool>(nullable: false),
                    IsEchocardiography = table.Column<bool>(nullable: false),
                    IsMyocardialScintigraphySPECT = table.Column<bool>(nullable: false),
                    IsPET = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsArterialHypertension = table.Column<bool>(nullable: false),
                    IsDiabetesMellitus = table.Column<bool>(nullable: false),
                    IsSmoking = table.Column<bool>(nullable: false),
                    CigarettePacksPerDayXSmokerYears = table.Column<int>(nullable: true),
                    IsHyperlipidemia = table.Column<bool>(nullable: false),
                    IsCollagenosis = table.Column<bool>(nullable: false),
                    IsBicuspidAorticValve = table.Column<bool>(nullable: false),
                    IsCirrhosisOfTheLiver = table.Column<bool>(nullable: false),
                    IsCocaineAbuse = table.Column<bool>(nullable: false),
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
                name: "PriorInterventionsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    PriorInterventionsFindingType = table.Column<byte>(nullable: false),
                    IsMechanical = table.Column<bool>(nullable: false),
                    IsAspiration = table.Column<bool>(nullable: false),
                    IsCoronary = table.Column<bool>(nullable: false),
                    IsCABG = table.Column<bool>(nullable: false),
                    IsLowerLimb = table.Column<bool>(nullable: false),
                    LowerLimbOriginType = table.Column<byte>(nullable: false),
                    OriginCruralSideType = table.Column<byte>(nullable: false),
                    LowerLimbTargetVesselType = table.Column<byte>(nullable: false),
                    TargetVesselCruralSideType = table.Column<byte>(nullable: false),
                    IsCoiling = table.Column<bool>(nullable: false),
                    IsPlug = table.Column<bool>(nullable: false),
                    IsLiquidEmbolicAgents = table.Column<bool>(nullable: false),
                    IsSclerosantAgent = table.Column<bool>(nullable: false),
                    IsEmbolizationParticle = table.Column<bool>(nullable: false),
                    IsPartialLungResectionSideRight = table.Column<bool>(nullable: false),
                    IsPartialLungResectionSideLeft = table.Column<bool>(nullable: false),
                    IsAbdominalEVAR = table.Column<bool>(nullable: false),
                    IsThoracicTEVAR = table.Column<bool>(nullable: false),
                    IsAorticValve = table.Column<bool>(nullable: false),
                    AorticValveType = table.Column<byte>(nullable: false),
                    IsMitralValve = table.Column<bool>(nullable: false),
                    MitralValveType = table.Column<byte>(nullable: false),
                    IsPatentForamenOvale = table.Column<bool>(nullable: false),
                    AfterTransplantationType = table.Column<byte>(nullable: false),
                    IsKidneySideRight = table.Column<bool>(nullable: false),
                    IsKidneySideLeft = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PriorInterventionsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PriorInterventionsFindings_AnamnesisPages_AnamnesisPageId",
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
                    CharacterizationType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    TypeType = table.Column<byte>(nullable: false),
                    AortaLocations1 = table.Column<int>(nullable: false),
                    AortaLocations2 = table.Column<int>(nullable: false),
                    IsWallCalcifications = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    IsShortLengthStenosis = table.Column<bool>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsFreeFloating = table.Column<bool>(nullable: false),
                    IsWallAdherent = table.Column<bool>(nullable: false),
                    IsIrregularContour = table.Column<bool>(nullable: false),
                    IsInferiorMesentericArteryIma = table.Column<bool>(nullable: false),
                    IsAcuteExtravascularHematoma = table.Column<bool>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    MaxAxialDiameterInMm = table.Column<int>(nullable: true),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    DiameterNormalPoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    DegreeOfStenosisNASCETInPercent = table.Column<int>(nullable: true),
                    CraniodualLengthInMm = table.Column<int>(nullable: true),
                    ProximalNeckLengthInMm = table.Column<int>(nullable: true),
                    ProximalAneurysmaticNeckDiameterInMm = table.Column<int>(nullable: true),
                    MaxDiameterPreviousExaminationInMm = table.Column<int>(nullable: true),
                    LengthInMm = table.Column<int>(nullable: true),
                    WallThicknessInMm = table.Column<int>(nullable: true),
                    SeverityType = table.Column<byte>(nullable: false),
                    AnomaliesType = table.Column<byte>(nullable: false),
                    IsHypoplasticAorticArch = table.Column<bool>(nullable: false),
                    IsPoststenoticDilatation = table.Column<bool>(nullable: false),
                    IsResidualStenosisAfterSurgery = table.Column<bool>(nullable: false),
                    DetailsAorticArchKinkingPseudocoarctationType = table.Column<byte>(nullable: false),
                    DetailsCongenitalVascularRingsType = table.Column<byte>(nullable: false),
                    IsLusoriaKommerellDiverticulum = table.Column<bool>(nullable: false),
                    IsSubclavianArteryKommerellDiverticulum = table.Column<bool>(nullable: false),
                    IsEccentricPartialThrombus = table.Column<bool>(nullable: false),
                    FollowUpType = table.Column<byte>(nullable: false),
                    DilatationDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsLongIntermittent = table.Column<bool>(nullable: false),
                    SizeInAxialPlaneInMm = table.Column<int>(nullable: true),
                    IsPorcelainAorta = table.Column<bool>(nullable: false),
                    AcuteAortalSyndromeAasType = table.Column<int>(nullable: false),
                    MaxDiameterAortaInMm = table.Column<int>(nullable: true),
                    LocalizationOfTheMeasurementType = table.Column<int>(nullable: false),
                    CraniocaudalLengthInMm = table.Column<int>(nullable: true),
                    IsThrombosisFalseLumen = table.Column<bool>(nullable: false),
                    IsPericardialEffusion = table.Column<bool>(nullable: false),
                    PericardialEffusionType = table.Column<int>(nullable: false),
                    IsPleuralEffusion = table.Column<bool>(nullable: false),
                    PleuralEffusionType = table.Column<int>(nullable: false),
                    IsRightCoronaryArtery = table.Column<bool>(nullable: false),
                    IsLeftCoronaryArtery = table.Column<bool>(nullable: false),
                    IsBrachiocephalicTrunk = table.Column<bool>(nullable: false),
                    IsRightSubclavianArtery = table.Column<bool>(nullable: false),
                    IsRightCommonCarotidArtery = table.Column<bool>(nullable: false),
                    IsLeftCommonCarotidArtery = table.Column<bool>(nullable: false),
                    IsLeftSubclavianArtery = table.Column<bool>(nullable: false),
                    IsCoeliacTrunk = table.Column<bool>(nullable: false),
                    IsSuperiorMesentericArterySma = table.Column<bool>(nullable: false),
                    IsRightRenalArtery = table.Column<bool>(nullable: false),
                    IsLeftRenalArtery = table.Column<bool>(nullable: false),
                    StanfordType = table.Column<int>(nullable: false),
                    DebakeyType = table.Column<int>(nullable: false),
                    SvenssonType = table.Column<int>(nullable: false),
                    BeginningType = table.Column<byte>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsRupture = table.Column<bool>(nullable: false),
                    IsCmExtravasation = table.Column<bool>(nullable: false),
                    IsAortitis = table.Column<bool>(nullable: false),
                    DepthInMm = table.Column<int>(nullable: true),
                    IsMushroomShaped = table.Column<bool>(nullable: false),
                    IsIntramuralAorticHematoma = table.Column<bool>(nullable: false),
                    EndoleakClassificationType = table.Column<byte>(nullable: false),
                    IsAProximal = table.Column<bool>(nullable: false),
                    IsBDistal = table.Column<bool>(nullable: false),
                    IsLumbarArteries = table.Column<bool>(nullable: false),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    DistanceCoronaryOstiaValvePlaneInMm = table.Column<int>(nullable: true),
                    IsConcentric = table.Column<bool>(nullable: false),
                    AortitisWallThicknessInMm = table.Column<int>(nullable: true),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsPeriaorticEdema = table.Column<bool>(nullable: false),
                    IsPeriaortitis = table.Column<bool>(nullable: false),
                    QuantificationAortitisType = table.Column<byte>(nullable: false),
                    AortitisMaxWidthInMm = table.Column<int>(nullable: true),
                    IsStenosisOcclusion = table.Column<bool>(nullable: false),
                    AortitisDiameterStenosisInMm = table.Column<int>(nullable: true),
                    AortitisDiameterNormalPoststenoticSegmentInMm = table.Column<int>(nullable: true),
                    AortitisNASCETInPercent = table.Column<int>(nullable: true),
                    AortitisLengthInMm = table.Column<int>(nullable: true),
                    IsVascularDilatation = table.Column<bool>(nullable: false),
                    AortitisMaxAxialDiameterInMm = table.Column<int>(nullable: true),
                    AortitisVascularLengthInMm = table.Column<int>(nullable: true),
                    IsMycoticAneurysm = table.Column<bool>(nullable: false),
                    IsUlcer = table.Column<bool>(nullable: false),
                    IsEctasiaAnnulusAortaeAndAscendingAorta = table.Column<bool>(nullable: false),
                    AortitisDifferentialDiagnosisType = table.Column<int>(nullable: false),
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
                name: "CoronaryArteriesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    NoStenosisType = table.Column<byte>(nullable: false),
                    IsRiva = table.Column<bool>(nullable: false),
                    IsLeftCoronaryArtery = table.Column<bool>(nullable: false),
                    IsSegment5 = table.Column<bool>(nullable: false),
                    IsSegment6 = table.Column<bool>(nullable: false),
                    IsSegment7 = table.Column<bool>(nullable: false),
                    IsSegment8 = table.Column<bool>(nullable: false),
                    IsSegment9D1 = table.Column<bool>(nullable: false),
                    IsSegment10D2 = table.Column<bool>(nullable: false),
                    IsSegment17RamusIntermedius = table.Column<bool>(nullable: false),
                    IsLcx = table.Column<bool>(nullable: false),
                    IsSegment11 = table.Column<bool>(nullable: false),
                    IsSegment12Om1 = table.Column<bool>(nullable: false),
                    IsSegment13 = table.Column<bool>(nullable: false),
                    IsSegment14Om2 = table.Column<bool>(nullable: false),
                    IsSegment15LPda = table.Column<bool>(nullable: false),
                    IsSegment18LPlb = table.Column<bool>(nullable: false),
                    IsRightCoronaryArtery = table.Column<bool>(nullable: false),
                    IsSegment1 = table.Column<bool>(nullable: false),
                    IsSegment2 = table.Column<bool>(nullable: false),
                    IsSegment3 = table.Column<bool>(nullable: false),
                    IsSegment4RPda = table.Column<bool>(nullable: false),
                    IsSegment16RPlb = table.Column<bool>(nullable: false),
                    CoronaryArterialDominanceType = table.Column<byte>(nullable: false),
                    IsRightSuperDominant = table.Column<bool>(nullable: false),
                    CoronaryAnomalyType = table.Column<byte>(nullable: false),
                    IsBlandWhiteGarlandSyndrome = table.Column<bool>(nullable: false),
                    RcaFromLeftCoronarySinusType = table.Column<byte>(nullable: false),
                    CourseRcxType = table.Column<byte>(nullable: false),
                    CourseRivaType = table.Column<byte>(nullable: false),
                    LcaFromRightCoronarySinusType = table.Column<byte>(nullable: false),
                    RightToLeftShuntType = table.Column<byte>(nullable: false),
                    OtherDrainageType = table.Column<byte>(nullable: false),
                    IsRca = table.Column<bool>(nullable: false),
                    IsLca = table.Column<bool>(nullable: false),
                    IsRcx = table.Column<bool>(nullable: false),
                    AgatstonScore = table.Column<int>(nullable: true),
                    GradingType = table.Column<byte>(nullable: false),
                    IsNNonDiagnostic = table.Column<bool>(nullable: false),
                    IsSStents = table.Column<bool>(nullable: false),
                    IsGImplants = table.Column<bool>(nullable: false),
                    IsVVulnerablePlaques = table.Column<bool>(nullable: false),
                    IsHypodensePlaques = table.Column<bool>(nullable: false),
                    IsPositiveRemodeling = table.Column<bool>(nullable: false),
                    IsSpottyCalcification = table.Column<bool>(nullable: false),
                    IsNapkinRingSign = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    IsIndexLesion = table.Column<bool>(nullable: false),
                    CADRADSScoreType = table.Column<byte>(nullable: false),
                    IsRightEnlargementAtrium = table.Column<bool>(nullable: false),
                    IsRightEnlargementVentricle = table.Column<bool>(nullable: false),
                    IsRightMyocardialHypertrophy = table.Column<bool>(nullable: false),
                    IsVenousContrastReflux = table.Column<bool>(nullable: false),
                    IsRightVentricularDiverticulum = table.Column<bool>(nullable: false),
                    RightVentricularDiverticulumMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsLeftEnlargementAtrium = table.Column<bool>(nullable: false),
                    IsLeftEnlargementVentricle = table.Column<bool>(nullable: false),
                    IsLeftMyocardialHypertrophy = table.Column<bool>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsLeftAtrium = table.Column<bool>(nullable: false),
                    IsLeftVentricularDiverticulum = table.Column<bool>(nullable: false),
                    LeftVentricularDiverticulumMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsEffusion = table.Column<bool>(nullable: false),
                    EffusionMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsMass = table.Column<bool>(nullable: false),
                    MassMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsPneumopericardium = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsPericarditisConstrictiva = table.Column<bool>(nullable: false),
                    IsAtrialSeptalDefect = table.Column<bool>(nullable: false),
                    IsPatentForamenOvale = table.Column<bool>(nullable: false),
                    IsVentricularSeptalDefect = table.Column<bool>(nullable: false),
                    IsVentricularSeptalAneurysm = table.Column<bool>(nullable: false),
                    IsSeptumVentricularDiverticulum = table.Column<bool>(nullable: false),
                    SeptumVentricularDiverticulumMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsBicuspidAorticValve = table.Column<bool>(nullable: false),
                    IsCalcifications = table.Column<bool>(nullable: false),
                    IsAnastomoticStenosis = table.Column<bool>(nullable: false),
                    IsCoronaryFistula = table.Column<bool>(nullable: false),
                    IsLimited = table.Column<bool>(nullable: false),
                    CoronaryArteriesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoronaryArteriesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoronaryArteriesFindings_CoronaryArteriesPages_CoronaryArte~",
                        column: x => x.CoronaryArteriesPageId,
                        principalTable: "CoronaryArteriesPages",
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
                    IsSuprarenal = table.Column<bool>(nullable: false),
                    IsInfrarenal = table.Column<bool>(nullable: false),
                    Length = table.Column<int>(nullable: true),
                    IsP1Segment = table.Column<bool>(nullable: false),
                    IsP2Segment = table.Column<bool>(nullable: false),
                    IsP3Segment = table.Column<bool>(nullable: false),
                    IsPersistentIschiadicArtery = table.Column<bool>(nullable: false),
                    IsHighOriginAnteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsHighOriginPosteriorTibialArtery = table.Column<bool>(nullable: false),
                    IsHighOriginPeronealArtery = table.Column<bool>(nullable: false),
                    IsTypeADorsalisPedisArtery = table.Column<bool>(nullable: false),
                    IsTypeBDorsalisPedisArtery = table.Column<bool>(nullable: false),
                    IsTypeCDorsalisPedisArtery = table.Column<bool>(nullable: false),
                    IsTypeDLackOfDorsalisPedisArtery = table.Column<bool>(nullable: false),
                    ArterioscleroticPAVKPathologyType = table.Column<byte>(nullable: false),
                    Normal = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    SegmentType = table.Column<byte>(nullable: false),
                    ArterioscleroticPAVKSeverityType = table.Column<byte>(nullable: false),
                    IsHemodynamicallyRelevant = table.Column<bool>(nullable: false),
                    DiameterStenosis = table.Column<int>(nullable: true),
                    DiameterDiseaseFreePoststenoticSegment = table.Column<int>(nullable: true),
                    DegreeOfStenosisAccordingToNASCET = table.Column<int>(nullable: true),
                    IsCalciumPlaque = table.Column<bool>(nullable: false),
                    IsSoftPlaque = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    LengthType = table.Column<byte>(nullable: false),
                    IsIntermittent = table.Column<bool>(nullable: false),
                    DistalRefillingLocalizationType = table.Column<byte>(nullable: false),
                    IsDistalRefillingSuprarenal = table.Column<bool>(nullable: false),
                    IsDistalRefillingInfrarenal = table.Column<bool>(nullable: false),
                    IsCollateralsFromAdjacentVessels = table.Column<bool>(nullable: false),
                    IsProfundaFemoralArtery = table.Column<bool>(nullable: false),
                    IsSuperficialFemoralArteryDistalSegment = table.Column<bool>(nullable: false),
                    IsInsufficientCollateralization = table.Column<bool>(nullable: false),
                    ClassificationAccordingToTASCIIType = table.Column<byte>(nullable: false),
                    ChronicLesionsType = table.Column<byte>(nullable: false),
                    TypeADetailsType = table.Column<byte>(nullable: false),
                    TypeBDetailsType = table.Column<byte>(nullable: false),
                    TypeCDetailsType = table.Column<byte>(nullable: false),
                    TypeDDetailsType = table.Column<byte>(nullable: false),
                    FemoropoplitealLocalizationType = table.Column<byte>(nullable: false),
                    FemoropoplitealExtentType = table.Column<byte>(nullable: false),
                    IsShortLengthStenosis = table.Column<bool>(nullable: false),
                    VascularDilatationLocalizationType = table.Column<byte>(nullable: false),
                    VascularDilatationShapeType = table.Column<byte>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    VesselDiameterProximalOfTheDilatation = table.Column<int>(nullable: true),
                    VascularDilatationCharacterizationType = table.Column<byte>(nullable: false),
                    IsPartiallyThrombosed = table.Column<bool>(nullable: false),
                    IsEccentric = table.Column<bool>(nullable: false),
                    IsPeripheralEmbolisms = table.Column<bool>(nullable: false),
                    IsDistalVascularOcclusion = table.Column<bool>(nullable: false),
                    IsWandverkalkungen = table.Column<bool>(nullable: false),
                    VascularDilatationType = table.Column<byte>(nullable: false),
                    IsActiveBleedingFreshHematoma = table.Column<bool>(nullable: false),
                    FollowUpType = table.Column<byte>(nullable: false),
                    MaxDiameterInPreviousExamination = table.Column<int>(nullable: true),
                    NonArterioscleroticPAVKPathologyType = table.Column<byte>(nullable: false),
                    EmbolismLocalizationType = table.Column<byte>(nullable: false),
                    MaxDiameterEmbolus = table.Column<int>(nullable: true),
                    EntrapmentSyndromeType = table.Column<byte>(nullable: false),
                    IsEntrapmentSyndromeTypeV = table.Column<bool>(nullable: false),
                    IsDetectionOfCystsWithinTheVesselWall = table.Column<bool>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    PathologyStenosisType = table.Column<byte>(nullable: false),
                    IsPeripheralOcclusionsStenoses = table.Column<bool>(nullable: false),
                    IsSeveralShortStretchStenoses = table.Column<bool>(nullable: false),
                    IsConcentricFilumTerminaleSign = table.Column<bool>(nullable: false),
                    IsSegmentalOcclusions = table.Column<bool>(nullable: false),
                    IsSuddenChangeInDiameter = table.Column<bool>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    IsEdematousChangesOfTheVascularWallPerivascular = table.Column<bool>(nullable: false),
                    IsArterialWallEnhancement = table.Column<bool>(nullable: false),
                    IsMicroaneurysm = table.Column<bool>(nullable: false),
                    IsTortuousCourseOfTheSuperficialFemoralArtery = table.Column<bool>(nullable: false),
                    IsCorkscrewCollaterals = table.Column<bool>(nullable: false),
                    AfterTherapyType = table.Column<byte>(nullable: false),
                    IsMultiplePTA = table.Column<bool>(nullable: false),
                    IsMultipleStent = table.Column<bool>(nullable: false),
                    BypassType = table.Column<byte>(nullable: false),
                    AfterTherapyLocalizationType = table.Column<byte>(nullable: false),
                    DistalBypassPortType = table.Column<byte>(nullable: false),
                    IsCrossover = table.Column<bool>(nullable: false),
                    NoStenosisType = table.Column<byte>(nullable: false),
                    CourseType = table.Column<byte>(nullable: false),
                    IsAnastomoticAneurysm = table.Column<bool>(nullable: false),
                    AnastomoticAneurysmType = table.Column<byte>(nullable: false),
                    IsPeriprostheticFluidCollection = table.Column<bool>(nullable: false),
                    PeriprostheticFluidCollectionType = table.Column<byte>(nullable: false),
                    IsEspeciallyPeriprostheticInfection = table.Column<bool>(nullable: false),
                    WithoutContrastEnhancementType = table.Column<byte>(nullable: false),
                    IsPostoperativeScarringTissueChanges = table.Column<bool>(nullable: false),
                    IsDissection = table.Column<bool>(nullable: false),
                    DissectionType = table.Column<byte>(nullable: false),
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
                name: "SoftTissueFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    SecondPlane = table.Column<int>(nullable: true),
                    ThirdPlane = table.Column<int>(nullable: true),
                    DignityType = table.Column<byte>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    RibLocations = table.Column<int>(nullable: false),
                    SpineLocations = table.Column<decimal>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    SupraaorticLocalizationType = table.Column<byte>(nullable: false),
                    SupraaorticHeadPathologyType = table.Column<byte>(nullable: false),
                    IsCalvariaBone = table.Column<bool>(nullable: false),
                    IsFacialSkull = table.Column<bool>(nullable: false),
                    IsOrbita = table.Column<bool>(nullable: false),
                    IsIntracranial = table.Column<bool>(nullable: false),
                    OrbitaType = table.Column<byte>(nullable: false),
                    IntracranialType = table.Column<byte>(nullable: false),
                    IsSAH = table.Column<bool>(nullable: false),
                    IsSDH = table.Column<bool>(nullable: false),
                    IsEDH = table.Column<bool>(nullable: false),
                    IsParenchymalHemorrhage = table.Column<bool>(nullable: false),
                    IsMidlineShift = table.Column<bool>(nullable: false),
                    IsImpairedVentilation = table.Column<bool>(nullable: false),
                    IsInflammation = table.Column<bool>(nullable: false),
                    IsGasFluidLevel = table.Column<bool>(nullable: false),
                    IsCircular = table.Column<bool>(nullable: false),
                    NeckSoftTissuePathologyType = table.Column<byte>(nullable: false),
                    IsMedian = table.Column<bool>(nullable: false),
                    NeckSoftTissueMassLocalization = table.Column<byte>(nullable: false),
                    IsWithRetrosternalParts = table.Column<bool>(nullable: false),
                    ThoracicType = table.Column<byte>(nullable: false),
                    MaxWidth = table.Column<int>(nullable: true),
                    PericardialCalcificationsDetails = table.Column<bool>(nullable: false),
                    IsPulmonaryArteryEmbolismCentral = table.Column<bool>(nullable: false),
                    IsPulmonaryArteryEmbolismCentralRight = table.Column<bool>(nullable: false),
                    IsPulmonaryArteryEmbolismCentralLeft = table.Column<bool>(nullable: false),
                    IsPulmonaryArteryEmbolismSegmentalRight = table.Column<bool>(nullable: false),
                    IsPulmonaryArteryEmbolismSegmentalLeft = table.Column<bool>(nullable: false),
                    IsRidingThrombus = table.Column<bool>(nullable: false),
                    DiameterCentralPulmonaryArtery = table.Column<int>(nullable: true),
                    ThoracicDiagnosisType = table.Column<byte>(nullable: false),
                    IsNormVariantVesselsPulmonaryVeins = table.Column<bool>(nullable: false),
                    NormVariantVesselsVariantsType = table.Column<byte>(nullable: false),
                    PartialAnomalousPulmonaryVenousConnectionType = table.Column<byte>(nullable: false),
                    IsSuperiorVenaCava = table.Column<bool>(nullable: false),
                    SuperiorVenaCavaType = table.Column<byte>(nullable: false),
                    IsInferiorVenaCava = table.Column<bool>(nullable: false),
                    InferiorVenaCavaType = table.Column<byte>(nullable: false),
                    IsMediastinalShiftToTheOppositeSide = table.Column<bool>(nullable: false),
                    IsCompleteAtelectasis = table.Column<bool>(nullable: false),
                    ThoracicLocalizationType = table.Column<byte>(nullable: false),
                    AbdominalType = table.Column<byte>(nullable: false),
                    AbdominalLocalizationType = table.Column<byte>(nullable: false),
                    IsAscitesHemoperitoneum = table.Column<bool>(nullable: false),
                    IsAscitesSignificant = table.Column<bool>(nullable: false),
                    FractureLocalizationType = table.Column<byte>(nullable: false),
                    IsStatusPost = table.Column<bool>(nullable: false),
                    ExtremitiesType = table.Column<byte>(nullable: false),
                    ExtremitiesMassLocalizationType = table.Column<byte>(nullable: false),
                    CompartmentType = table.Column<byte>(nullable: false),
                    ExtremitiesFractureLocalizationType = table.Column<byte>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsCervicalRight = table.Column<bool>(nullable: false),
                    IsCervicalLeft = table.Column<bool>(nullable: false),
                    IsThoracic = table.Column<bool>(nullable: false),
                    IsMediastinal = table.Column<bool>(nullable: false),
                    IsThoracicMediastinalRight = table.Column<bool>(nullable: false),
                    IsThoracicMediastinalLeft = table.Column<bool>(nullable: false),
                    IsPerihilar = table.Column<bool>(nullable: false),
                    IsThoracicPerihilarRight = table.Column<bool>(nullable: false),
                    IsThoracicPerihilarLeft = table.Column<bool>(nullable: false),
                    IsAxillary = table.Column<bool>(nullable: false),
                    IsAxillaryRight = table.Column<bool>(nullable: false),
                    IsAxillaryLeft = table.Column<bool>(nullable: false),
                    IsAbdominal = table.Column<bool>(nullable: false),
                    IsRetroperitoneal = table.Column<bool>(nullable: false),
                    IsIliac = table.Column<bool>(nullable: false),
                    IsIliacRight = table.Column<bool>(nullable: false),
                    IsIliacLeft = table.Column<bool>(nullable: false),
                    IsInguinal = table.Column<bool>(nullable: false),
                    IsInguinalRight = table.Column<bool>(nullable: false),
                    IsInguinalLeft = table.Column<bool>(nullable: false),
                    MaxDiameterSAD = table.Column<int>(nullable: true),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsPreservedFattyHilum = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsIncreasedInNumber = table.Column<bool>(nullable: false),
                    IsSuspect = table.Column<bool>(nullable: false),
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
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsSoftPlaque = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    Length = table.Column<int>(nullable: true),
                    IsShortStenosis = table.Column<bool>(nullable: false),
                    IsWallHematoma = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheArterialWall = table.Column<bool>(nullable: false),
                    IsLocoregionalObliterationFattyTissue = table.Column<bool>(nullable: false),
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
                    IsRightP1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsRightA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsRightA1Aplasia = table.Column<bool>(nullable: false),
                    IsRightA1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsRightAcomPHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAcomPAplasia = table.Column<bool>(nullable: false),
                    IsRightPICAEndingAV = table.Column<bool>(nullable: false),
                    IsRightAVHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAVAplasia = table.Column<bool>(nullable: false),
                    IsRightTripleACA = table.Column<bool>(nullable: false),
                    IsRightAcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsRightAcomAAplasia = table.Column<bool>(nullable: false),
                    IsRightAcomASplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftP1HypoplasiaOrFTPConfiguration = table.Column<bool>(nullable: false),
                    IsLeftP1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftP1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftA1Hypoplasia = table.Column<bool>(nullable: false),
                    IsLeftA1Aplasia = table.Column<bool>(nullable: false),
                    IsLeftA1SplittingOrDuplication = table.Column<bool>(nullable: false),
                    IsLeftAcomPHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomPAplasia = table.Column<bool>(nullable: false),
                    IsLeftPICAEndingAV = table.Column<bool>(nullable: false),
                    IsLeftAVHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAVAplasia = table.Column<bool>(nullable: false),
                    IsLeftTripleACA = table.Column<bool>(nullable: false),
                    IsLeftAcomAHypoplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomAAplasia = table.Column<bool>(nullable: false),
                    IsLeftAcomASplittingOrDuplication = table.Column<bool>(nullable: false),
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
                    IsTransverseSinus = table.Column<bool>(nullable: false),
                    IsRightTransverseSinus = table.Column<bool>(nullable: false),
                    IsLeftTransverseSinus = table.Column<bool>(nullable: false),
                    IsSigmoidSinus = table.Column<bool>(nullable: false),
                    IsRightSigmoidSinus = table.Column<bool>(nullable: false),
                    IsLeftSigmoidSinus = table.Column<bool>(nullable: false),
                    IsSuperiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsRightSuperiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsLeftSuperiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsInferiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsRightInferiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsLeftInferiorPetrosalSinus = table.Column<bool>(nullable: false),
                    IsInternalJugularVein = table.Column<bool>(nullable: false),
                    IsRightInternalJugularVein = table.Column<bool>(nullable: false),
                    IsLeftInternalJugularVein = table.Column<bool>(nullable: false),
                    IsCavernousSinus = table.Column<bool>(nullable: false),
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
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acquisitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Acquisitions_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
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
                name: "UpperArteriesFindings",
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
                    DegreeOfStenosisAccordingToNASCET = table.Column<int>(nullable: true),
                    FormType = table.Column<byte>(nullable: false),
                    Length = table.Column<int>(nullable: true),
                    IsShortStenosis = table.Column<bool>(nullable: false),
                    IsThrombusSurroundedByContrastAgent = table.Column<bool>(nullable: false),
                    IsCollateralization = table.Column<bool>(nullable: false),
                    IsPreStenoticDilatation = table.Column<bool>(nullable: false),
                    IsSubclavianStealSyndrome = table.Column<bool>(nullable: false),
                    IsSuspiciousOf = table.Column<bool>(nullable: false),
                    IsWallHematoma = table.Column<bool>(nullable: false),
                    IsAffectionOfDownstreamVessels = table.Column<bool>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    MaxDiameterPrevExam = table.Column<int>(nullable: true),
                    ImpressionType = table.Column<byte>(nullable: false),
                    DetailsVascularMalformationType = table.Column<byte>(nullable: false),
                    ArteriovenousMalformationType = table.Column<byte>(nullable: false),
                    HemodialysisShuntType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsOcclusion = table.Column<bool>(nullable: false),
                    IsAneurysm = table.Column<bool>(nullable: false),
                    IsInfection = table.Column<bool>(nullable: false),
                    IsSuspicionOfStenosis = table.Column<bool>(nullable: false),
                    IsSuspicionOfOcclusion = table.Column<bool>(nullable: false),
                    IsSuspicionOfAneurysm = table.Column<bool>(nullable: false),
                    IsSuspicionOfInfection = table.Column<bool>(nullable: false),
                    IsCommonCarotidArtery = table.Column<bool>(nullable: false),
                    IsBrachialArtery = table.Column<bool>(nullable: false),
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
                name: "IX_AbdomenFindings_AbdomenPageId",
                table: "AbdomenFindings",
                column: "AbdomenPageId");

            migrationBuilder.CreateIndex(
                name: "IX_AbdomenPages_ReportId",
                table: "AbdomenPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Acquisitions_TechnologyPageId",
                table: "Acquisitions",
                column: "TechnologyPageId");

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
                name: "IX_CoronaryArteriesFindings_CoronaryArteriesPageId",
                table: "CoronaryArteriesFindings",
                column: "CoronaryArteriesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CoronaryArteriesPages_ReportId",
                table: "CoronaryArteriesPages",
                column: "ReportId",
                unique: true);

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
                name: "IX_PriorInterventionsFindings_AnamnesisPageId",
                table: "PriorInterventionsFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_Reconstructions_AcquisitionId",
                table: "Reconstructions",
                column: "AcquisitionId");

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
                name: "AortaFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "CoronaryArteriesFindings");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "IndicationFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PelvisLegArteriesFindings");

            migrationBuilder.DropTable(
                name: "PriorInterventionsFindings");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SoftTissueFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "SupraaorticVesselsFindings");

            migrationBuilder.DropTable(
                name: "UpperArteriesFindings");

            migrationBuilder.DropTable(
                name: "AbdomenPages");

            migrationBuilder.DropTable(
                name: "AortaPages");

            migrationBuilder.DropTable(
                name: "CoronaryArteriesPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "PelvisLegArteriesPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SoftTissuePages");

            migrationBuilder.DropTable(
                name: "SupraaorticVesselsPages");

            migrationBuilder.DropTable(
                name: "UpperArteriesPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
