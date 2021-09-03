using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.ThoraxCT.Repo.Migrations
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
                    BonesDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalBoneType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    MatrixType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsPunctiformHyperintens = table.Column<bool>(nullable: false),
                    IsFatty = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsGroundGlassAspect = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsExpansion = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsScleroticBorder = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsPedunculatedGrowingFromTheEpiphysis = table.Column<bool>(nullable: false),
                    IsSubchondral = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentSoftTissue = table.Column<bool>(nullable: false),
                    PeriostealReactionType = table.Column<byte>(nullable: false),
                    IsRemodelling = table.Column<bool>(nullable: false),
                    IsSpiculated = table.Column<bool>(nullable: false),
                    IsSunburst = table.Column<bool>(nullable: false),
                    IsCodmanTriangle = table.Column<bool>(nullable: false),
                    IsAdjacentSclerosis = table.Column<bool>(nullable: false),
                    AdjacentSclerosisType = table.Column<byte>(nullable: false),
                    IsDestructionOfEndPlate = table.Column<bool>(nullable: false),
                    IsOsteoproliferativeReaction = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsEdgrenVainoSign = table.Column<bool>(nullable: false),
                    IsVertebralHemangioma = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false)
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
                name: "LungInterstitiumFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DistributionSecondaryPulmonaryLobuleType = table.Column<byte>(nullable: false),
                    RandomDistributionType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsMicronodular = table.Column<bool>(nullable: false),
                    IsInterlobularSepta = table.Column<bool>(nullable: false),
                    IsIntralobularSepta = table.Column<bool>(nullable: false),
                    StructureType = table.Column<byte>(nullable: false),
                    IsConsolidation = table.Column<bool>(nullable: false),
                    IsGroundGlassOpacity = table.Column<bool>(nullable: false),
                    IsCrazyPavingPattern = table.Column<bool>(nullable: false),
                    IsBronchiectasis = table.Column<bool>(nullable: false),
                    BronchiectasisType = table.Column<byte>(nullable: false),
                    IsBronchiolectasis = table.Column<bool>(nullable: false),
                    IsBronchialWallThickening = table.Column<bool>(nullable: false),
                    IsMucoidImpaction = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungInterstitiumFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LungParenchymaFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    LocalizationDetailsType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    SubsolidType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsEccentricNecrosis = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsCavitation = table.Column<bool>(nullable: false),
                    IsPleuralFinger = table.Column<bool>(nullable: false),
                    IsCoronaRadiataOrSpiculae = table.Column<bool>(nullable: false),
                    IsAssociatedAtelectasis = table.Column<bool>(nullable: false),
                    IsReversedHaloSign = table.Column<bool>(nullable: false),
                    IsHaloSign = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    MainCharacteristicsLungsFlapsLocation = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ConsolidationLocalizationType = table.Column<byte>(nullable: false),
                    IsGroundGlassOpacity = table.Column<bool>(nullable: false),
                    GroundGlassOpacityType = table.Column<byte>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsRoundedShape = table.Column<bool>(nullable: false),
                    IsPositiveBronchopneumogram = table.Column<bool>(nullable: false),
                    IsDarkBronchusSign = table.Column<bool>(nullable: false),
                    IsAccompanyingEffusion = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsPeribronchovascular = table.Column<bool>(nullable: false),
                    IsLuftsichelSign = table.Column<bool>(nullable: false),
                    IsGeographicAppearance = table.Column<bool>(nullable: false),
                    IsCrazyPavingPattern = table.Column<bool>(nullable: false),
                    IsInterlobularSeptalThickening = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungParenchymaFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MediastinumFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsUpperMediastinum = table.Column<bool>(nullable: false),
                    IsLowerMediastinum = table.Column<bool>(nullable: false),
                    IsAnteriorMediastinum = table.Column<bool>(nullable: false),
                    IsMiddleMediastinum = table.Column<bool>(nullable: false),
                    IsPosteriorMediastinum = table.Column<bool>(nullable: false),
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsFibrousSepta = table.Column<bool>(nullable: false),
                    IsLiquidFatMirror = table.Column<bool>(nullable: false),
                    IsToothBoneSystem = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    NoCMEnhancementHomogeneityType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediastinumFindingPresets", x => x.Id);
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
                name: "SoftPartsFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    DisplacementOfFatTissueType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCysticChanges = table.Column<bool>(nullable: false),
                    IsExtrapleuralFatSign = table.Column<bool>(nullable: false),
                    IsInfiltrationChestWall = table.Column<bool>(nullable: false),
                    IsInfiltrationOfExtrapleuralFatTissue = table.Column<bool>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    HeterogeneousType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftPartsFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IndicationType = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    PCRTestForSARSCoV2Type = table.Column<byte>(nullable: false),
                    AgeOfTestInDays = table.Column<int>(nullable: true),
                    IsCTPreliminaryExamination = table.Column<bool>(nullable: false),
                    CTPreliminaryExaminationMonth = table.Column<byte>(nullable: true),
                    CTPreliminaryExaminationYear = table.Column<int>(nullable: true),
                    IsMRIPreliminaryExamination = table.Column<bool>(nullable: false),
                    MRIPreliminaryExaminationMonth = table.Column<byte>(nullable: true),
                    MRIPreliminaryExaminationYear = table.Column<int>(nullable: true)
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
                name: "LungInterstitiumPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DominantPatternType = table.Column<byte>(nullable: false),
                    LocalizationCraniocaudalType = table.Column<byte>(nullable: false),
                    LungsFlapsLocation = table.Column<byte>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    SideComparisonType = table.Column<byte>(nullable: false),
                    AsymmetricalType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    CauseType1 = table.Column<byte>(nullable: false),
                    CauseType2 = table.Column<byte>(nullable: false),
                    CauseType3 = table.Column<byte>(nullable: false),
                    IIPHRCTPatternType1 = table.Column<byte>(nullable: false),
                    IIPHRCTPatternType2 = table.Column<byte>(nullable: false),
                    IIPHRCTPatternType3 = table.Column<byte>(nullable: false),
                    ClassificationType1 = table.Column<byte>(nullable: false),
                    ClassificationType2 = table.Column<byte>(nullable: false),
                    ClassificationType3 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisDetailsType1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisDetailsType2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisDetailsType3 = table.Column<byte>(nullable: false),
                    SarcoidosisType1 = table.Column<byte>(nullable: false),
                    SarcoidosisType2 = table.Column<byte>(nullable: false),
                    SarcoidosisType3 = table.Column<byte>(nullable: false),
                    IsBronchiolitisObliterans = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungInterstitiumPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LungInterstitiumPages_Reports_ReportId",
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
                name: "SoftPartsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftPartsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftPartsPages_Reports_ReportId",
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
                    IsProcedure = table.Column<bool>(nullable: false),
                    IsCTFollowUp = table.Column<bool>(nullable: false),
                    CtFollowUpType = table.Column<byte>(nullable: false),
                    IsRecommendedBiopsy = table.Column<bool>(nullable: false),
                    BiopsyType = table.Column<byte>(nullable: false),
                    IsEvaluationOfInterdisciplinaryBoard = table.Column<bool>(nullable: false),
                    EvaluationInterdisciplinaryBoardType = table.Column<byte>(nullable: false),
                    IsComplementaryExamination = table.Column<bool>(nullable: false),
                    IsCTAbdomen = table.Column<bool>(nullable: false),
                    IsCTNeck = table.Column<bool>(nullable: false),
                    IsMammographyAndBreastUltrasound = table.Column<bool>(nullable: false),
                    IsMRIChest = table.Column<bool>(nullable: false),
                    IsMRIAbdomen = table.Column<bool>(nullable: false),
                    IsMRIThoracicSpine = table.Column<bool>(nullable: false),
                    IsMRINeck = table.Column<bool>(nullable: false),
                    IsCardiacDiagnostics = table.Column<bool>(nullable: false),
                    IsCTAngiography = table.Column<bool>(nullable: false),
                    IsCTPA = table.Column<bool>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    IsSPECT = table.Column<bool>(nullable: false),
                    IsBoneScan = table.Column<bool>(nullable: false),
                    IsDynamicFindings = table.Column<bool>(nullable: false),
                    DynamicFindingsType = table.Column<byte>(nullable: false),
                    IsTNStaging = table.Column<bool>(nullable: false),
                    TNStagingType = table.Column<byte>(nullable: false),
                    TStagingLevelType = table.Column<byte>(nullable: false),
                    NStagingLevelType = table.Column<byte>(nullable: false),
                    IsLungRADS = table.Column<bool>(nullable: false),
                    SignalType = table.Column<byte>(nullable: false),
                    ScenarioType = table.Column<byte>(nullable: false),
                    IsRiskCalculator = table.Column<bool>(nullable: false),
                    NumberOfRoundHearths = table.Column<int>(nullable: true),
                    CancerProbability = table.Column<decimal>(nullable: true),
                    IsCOVID19CTGroups = table.Column<bool>(nullable: false),
                    COVID19CTGroupsType = table.Column<byte>(nullable: false)
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
                    IsOther = table.Column<bool>(nullable: false)
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
                    PackYears = table.Column<int>(nullable: true),
                    IsAfterPartialLungResectionRight = table.Column<bool>(nullable: false),
                    IsAfterPartialLungResectionLeft = table.Column<bool>(nullable: false),
                    IsAorticValveTAVI = table.Column<bool>(nullable: false),
                    IsCoronary = table.Column<bool>(nullable: false),
                    IsThoracicAortaTEVAR = table.Column<bool>(nullable: false),
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
                    BonesDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalBoneType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    MatrixType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsPunctiformHyperintens = table.Column<bool>(nullable: false),
                    IsFatty = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsGroundGlassAspect = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsExpansion = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsScleroticBorder = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsPedunculatedGrowingFromTheEpiphysis = table.Column<bool>(nullable: false),
                    IsSubchondral = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentSoftTissue = table.Column<bool>(nullable: false),
                    PeriostealReactionType = table.Column<byte>(nullable: false),
                    IsRemodelling = table.Column<bool>(nullable: false),
                    IsSpiculated = table.Column<bool>(nullable: false),
                    IsSunburst = table.Column<bool>(nullable: false),
                    IsCodmanTriangle = table.Column<bool>(nullable: false),
                    IsAdjacentSclerosis = table.Column<bool>(nullable: false),
                    AdjacentSclerosisType = table.Column<byte>(nullable: false),
                    IsDestructionOfEndPlate = table.Column<bool>(nullable: false),
                    IsOsteoproliferativeReaction = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsEdgrenVainoSign = table.Column<bool>(nullable: false),
                    IsVertebralHemangioma = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsFractureOlderRemodeled = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    RibLocation = table.Column<long>(nullable: false),
                    IsAcute = table.Column<bool>(nullable: false),
                    IsOlderRemodeled = table.Column<bool>(nullable: false),
                    VertebralColumnLocalization = table.Column<long>(nullable: false),
                    NotFurtherDefinedClassificationType = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsPermeativeGrowth = table.Column<bool>(nullable: false),
                    IsLamination = table.Column<bool>(nullable: false),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsInvolvingOfThePosteriorWall = table.Column<bool>(nullable: false),
                    BonesDifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    BonesDifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    BonesDifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsAOClassification = table.Column<bool>(nullable: false),
                    ClaviculaeFractureType = table.Column<byte>(nullable: false),
                    MedialEndSegmentClaviculaeType = table.Column<byte>(nullable: false),
                    DiaphysealSegmentClaviculaeType = table.Column<byte>(nullable: false),
                    LateralEndSegmentClaviculaeType = table.Column<byte>(nullable: false),
                    IsRockwood = table.Column<bool>(nullable: false),
                    RockwoodType = table.Column<byte>(nullable: false),
                    IsTossy = table.Column<bool>(nullable: false),
                    TossyType = table.Column<byte>(nullable: false),
                    ScapulaFractureType = table.Column<byte>(nullable: false),
                    ProcessType = table.Column<byte>(nullable: false),
                    BodyType = table.Column<byte>(nullable: false),
                    GlenoidFossaType = table.Column<byte>(nullable: false),
                    RibFractureType = table.Column<byte>(nullable: false),
                    PosteriorSegmentType = table.Column<byte>(nullable: false),
                    ShankType = table.Column<byte>(nullable: false),
                    AnteriorEndSegmentType = table.Column<byte>(nullable: false),
                    SternumFractureType = table.Column<byte>(nullable: false),
                    ManubriumType = table.Column<byte>(nullable: false),
                    BodySternumType = table.Column<byte>(nullable: false),
                    XiphoidType = table.Column<byte>(nullable: false),
                    FractureOfSpineType = table.Column<byte>(nullable: false),
                    CompressionInjuryType = table.Column<byte>(nullable: false),
                    TensionBandInjuryType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsSchmorlNodes = table.Column<bool>(nullable: false),
                    IsEndplateHerniation = table.Column<bool>(nullable: false),
                    VertebralBodyLocalization = table.Column<byte>(nullable: false),
                    IsManubrium = table.Column<bool>(nullable: false),
                    IsCorpus = table.Column<bool>(nullable: false),
                    IsXiphoidProcess = table.Column<bool>(nullable: false),
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
                });

            migrationBuilder.CreateTable(
                name: "LungInterstitiumFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DistributionSecondaryPulmonaryLobuleType = table.Column<byte>(nullable: false),
                    RandomDistributionType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsMicronodular = table.Column<bool>(nullable: false),
                    IsInterlobularSepta = table.Column<bool>(nullable: false),
                    IsIntralobularSepta = table.Column<bool>(nullable: false),
                    StructureType = table.Column<byte>(nullable: false),
                    IsConsolidation = table.Column<bool>(nullable: false),
                    IsGroundGlassOpacity = table.Column<bool>(nullable: false),
                    IsCrazyPavingPattern = table.Column<bool>(nullable: false),
                    IsBronchiectasis = table.Column<bool>(nullable: false),
                    BronchiectasisType = table.Column<byte>(nullable: false),
                    IsBronchiolectasis = table.Column<bool>(nullable: false),
                    IsBronchialWallThickening = table.Column<bool>(nullable: false),
                    IsMucoidImpaction = table.Column<bool>(nullable: false),
                    LungsFlapsLocation1 = table.Column<byte>(nullable: false),
                    LungsFlapsLocation2 = table.Column<byte>(nullable: false),
                    IsMacronodular = table.Column<bool>(nullable: false),
                    IsConfluentGranulomasSarcoidGalaxy = table.Column<bool>(nullable: false),
                    IsGroundGlassNodules = table.Column<bool>(nullable: false),
                    IsMicronodulesClusters = table.Column<bool>(nullable: false),
                    IsReversedHaloSign = table.Column<bool>(nullable: false),
                    IsPseudoplaque = table.Column<bool>(nullable: false),
                    IsLinearPattern = table.Column<bool>(nullable: false),
                    IsReticularPattern = table.Column<bool>(nullable: false),
                    IsArchitecturalDistortion = table.Column<bool>(nullable: false),
                    IsPositiveBronchopneumogram = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    RatioReticularChangesType = table.Column<byte>(nullable: false),
                    IsDarkBronchusSign = table.Column<bool>(nullable: false),
                    IsPleuralThickening = table.Column<bool>(nullable: false),
                    ReducedParenchymaDensityPatternType = table.Column<byte>(nullable: false),
                    CystType = table.Column<byte>(nullable: false),
                    CystWallType = table.Column<byte>(nullable: false),
                    IsMosaicPattern = table.Column<bool>(nullable: false),
                    MosaicPatternType = table.Column<byte>(nullable: false),
                    MosaicIntensityType = table.Column<byte>(nullable: false),
                    IsCurvilinearOpacification = table.Column<bool>(nullable: false),
                    EmphysemaType = table.Column<byte>(nullable: false),
                    IsConfluentEmphysema = table.Column<bool>(nullable: false),
                    DiameterLargestBullaInMm = table.Column<int>(nullable: true),
                    IsTractionBronchiectasis = table.Column<bool>(nullable: false),
                    IsSignetRingSign = table.Column<bool>(nullable: false),
                    IsTractionBronchiolectasis = table.Column<bool>(nullable: false),
                    LocalizationLevel = table.Column<byte>(nullable: false),
                    LungsSegmentsLocation = table.Column<long>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    LungInterstitiumPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungInterstitiumFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LungInterstitiumFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungInterstitiumFindings_LungInterstitiumPages_LungIntersti~",
                        column: x => x.LungInterstitiumPageId,
                        principalTable: "LungInterstitiumPages",
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
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    LocalizationDetailsType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    SubsolidType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsEccentricNecrosis = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsCavitation = table.Column<bool>(nullable: false),
                    IsPleuralFinger = table.Column<bool>(nullable: false),
                    IsCoronaRadiataOrSpiculae = table.Column<bool>(nullable: false),
                    IsAssociatedAtelectasis = table.Column<bool>(nullable: false),
                    IsReversedHaloSign = table.Column<bool>(nullable: false),
                    IsHaloSign = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    MainCharacteristicsLungsFlapsLocation = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ConsolidationLocalizationType = table.Column<byte>(nullable: false),
                    IsGroundGlassOpacity = table.Column<bool>(nullable: false),
                    GroundGlassOpacityType = table.Column<byte>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsRoundedShape = table.Column<bool>(nullable: false),
                    IsPositiveBronchopneumogram = table.Column<bool>(nullable: false),
                    IsDarkBronchusSign = table.Column<bool>(nullable: false),
                    IsAccompanyingEffusion = table.Column<bool>(nullable: false),
                    IsConfluent = table.Column<bool>(nullable: false),
                    IsPeribronchovascular = table.Column<bool>(nullable: false),
                    IsLuftsichelSign = table.Column<bool>(nullable: false),
                    IsGeographicAppearance = table.Column<bool>(nullable: false),
                    IsCrazyPavingPattern = table.Column<bool>(nullable: false),
                    IsInterlobularSeptalThickening = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    MainCharacteristicsLocalizationType = table.Column<byte>(nullable: false),
                    MeasuredValuesMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    MeasuredValuesVolumeInMm3 = table.Column<int>(nullable: true),
                    AverageDensityInHU = table.Column<int>(nullable: true),
                    MainCharacteristicsLungsSegmentsLocation = table.Column<long>(nullable: false),
                    IsRiglerNotchSign = table.Column<bool>(nullable: false),
                    IsCentralNecrosis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesionSamePathology = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisLocalizationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisLungsSegmentsLocation = table.Column<long>(nullable: false),
                    DifferentialDiagnosisLungsFlapsLocation = table.Column<byte>(nullable: false),
                    PerifissuralNodulusType = table.Column<byte>(nullable: false),
                    DistanceToInterlobularSeptumInMm = table.Column<int>(nullable: true),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    IsRib = table.Column<bool>(nullable: false),
                    IsSternum = table.Column<bool>(nullable: false),
                    IsClavicule = table.Column<bool>(nullable: false),
                    IsVertebralBody = table.Column<bool>(nullable: false),
                    IsAPulmonalis = table.Column<bool>(nullable: false),
                    IsAPulmonalisRight = table.Column<bool>(nullable: false),
                    IsAPulmonalisLeft = table.Column<bool>(nullable: false),
                    IsVvPulmonary = table.Column<bool>(nullable: false),
                    IsVvPulmonaryRight = table.Column<bool>(nullable: false),
                    IsVvPulmonaryLeft = table.Column<bool>(nullable: false),
                    IsASubclavia = table.Column<bool>(nullable: false),
                    IsASubclaviaRight = table.Column<bool>(nullable: false),
                    IsASubclaviaLeft = table.Column<bool>(nullable: false),
                    IsVSubclavia = table.Column<bool>(nullable: false),
                    IsVSubclaviaRight = table.Column<bool>(nullable: false),
                    IsVSubclaviaLeft = table.Column<bool>(nullable: false),
                    IsTrachea = table.Column<bool>(nullable: false),
                    IsBifurcation = table.Column<bool>(nullable: false),
                    IsMainBronchus = table.Column<bool>(nullable: false),
                    IsMainBronchusRight = table.Column<bool>(nullable: false),
                    IsMainBronchusLeft = table.Column<bool>(nullable: false),
                    IsPlexusCervicalis = table.Column<bool>(nullable: false),
                    IsPlexusCervicalisRight = table.Column<bool>(nullable: false),
                    IsPlexusCervicalisLeft = table.Column<bool>(nullable: false),
                    IsPlexusBrachialis = table.Column<bool>(nullable: false),
                    IsPlexusBrachialisRight = table.Column<bool>(nullable: false),
                    IsPlexusBrachialisLeft = table.Column<bool>(nullable: false),
                    LungSectionType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    PeculiaritySegmentatelectasisType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsMosaicPattern = table.Column<bool>(nullable: false),
                    WellDefinedType = table.Column<byte>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsPneumatocele = table.Column<bool>(nullable: false),
                    AccompanyingEffusionMaxWidthInMm = table.Column<int>(nullable: true),
                    PulmonaryInfarctionType = table.Column<byte>(nullable: false),
                    IsAbsentBronchopneumogram = table.Column<bool>(nullable: false),
                    IsBubblyConsolidation = table.Column<bool>(nullable: false),
                    IsDrecreased = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    LungParenchymaPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LungParenchymaFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LungParenchymaFindings_LungParenchymaPages_LungParenchymaPa~",
                        column: x => x.LungParenchymaPageId,
                        principalTable: "LungParenchymaPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MediastinumFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsUpperMediastinum = table.Column<bool>(nullable: false),
                    IsLowerMediastinum = table.Column<bool>(nullable: false),
                    IsAnteriorMediastinum = table.Column<bool>(nullable: false),
                    IsMiddleMediastinum = table.Column<bool>(nullable: false),
                    IsPosteriorMediastinum = table.Column<bool>(nullable: false),
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsFibrousSepta = table.Column<bool>(nullable: false),
                    IsLiquidFatMirror = table.Column<bool>(nullable: false),
                    IsToothBoneSystem = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    NoCMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    MediastinumType = table.Column<byte>(nullable: false),
                    DirectionType = table.Column<byte>(nullable: false),
                    LymphNodesType = table.Column<byte>(nullable: false),
                    EnlargedLymphNodesMaxDiameterSADInMm = table.Column<int>(nullable: true),
                    LymphNodeStationsType = table.Column<byte>(nullable: false),
                    TopMediastinalNodesType = table.Column<byte>(nullable: false),
                    ParatrachealNodesType = table.Column<byte>(nullable: false),
                    AorticNodesType = table.Column<byte>(nullable: false),
                    InferiorMediastinalNodesType = table.Column<byte>(nullable: false),
                    HilarLobarNodesType = table.Column<byte>(nullable: false),
                    LymphNodesLocalizationType = table.Column<byte>(nullable: false),
                    EnlargedLymphNodesCalcificationMaxDiameterSADInMm = table.Column<int>(nullable: true),
                    IsSuspect = table.Column<bool>(nullable: false),
                    IsPreservedFattyHilum = table.Column<bool>(nullable: false),
                    IsReferenceLesionAccToRECIST = table.Column<bool>(nullable: false),
                    IsContinuous = table.Column<bool>(nullable: false),
                    LungsLocation = table.Column<long>(nullable: false),
                    LocalizationWithinVesselType = table.Column<byte>(nullable: false),
                    IsPoloMintSign = table.Column<bool>(nullable: false),
                    IsCrumbsBiscuitSign = table.Column<bool>(nullable: false),
                    QuantitativeWideCentralPulmonaryArteryInMm = table.Column<int>(nullable: true),
                    QuantitativeRVLVDiameterQuotient = table.Column<float>(nullable: true),
                    QuantitativeRVLVVolumeQuotient = table.Column<float>(nullable: true),
                    QuantitativePAAADiameterQuotient = table.Column<float>(nullable: true),
                    CurvatureOfInterventricularSeptumType = table.Column<byte>(nullable: false),
                    IsRemodeling = table.Column<bool>(nullable: false),
                    IsIntravascularLigamentsAndNets = table.Column<bool>(nullable: false),
                    IsPouchDefect = table.Column<bool>(nullable: false),
                    IsSuddenChangeOfDiameter = table.Column<bool>(nullable: false),
                    IsStrictures = table.Column<bool>(nullable: false),
                    IsPoststenoticDilatation = table.Column<bool>(nullable: false),
                    IsCollateralFlow = table.Column<bool>(nullable: false),
                    IsMosaicPerfusion = table.Column<bool>(nullable: false),
                    IsUpperLobeRight = table.Column<bool>(nullable: false),
                    IsMiddleLobe = table.Column<bool>(nullable: false),
                    IsLowerLobeRight = table.Column<bool>(nullable: false),
                    IsUpperLobeLeft = table.Column<bool>(nullable: false),
                    IsLingula = table.Column<bool>(nullable: false),
                    IsLowerLobeLeft = table.Column<bool>(nullable: false),
                    DiagnosisType = table.Column<byte>(nullable: false),
                    RightHeartStrainType = table.Column<byte>(nullable: false),
                    DetailsPulmonaryHypertensionType = table.Column<byte>(nullable: false),
                    ChronicThromboembolicType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsRightAtriumEnlargement = table.Column<bool>(nullable: false),
                    IsRightEnlargementOfTheVentricle = table.Column<bool>(nullable: false),
                    IsRightMyocardialThickening = table.Column<bool>(nullable: false),
                    IsVenousContrastAgentReflux = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsLeftAtriumEnlargement = table.Column<bool>(nullable: false),
                    IsLeftEnlargementOfTheVentricle = table.Column<bool>(nullable: false),
                    IsLeftMyocardialThickening = table.Column<bool>(nullable: false),
                    IsCoronarySclerosis = table.Column<bool>(nullable: false),
                    IsRCA = table.Column<bool>(nullable: false),
                    IsLMA = table.Column<bool>(nullable: false),
                    IsLCX = table.Column<bool>(nullable: false),
                    IsLAD = table.Column<bool>(nullable: false),
                    IsEffusion = table.Column<bool>(nullable: false),
                    EffusionWidthMaxInMm = table.Column<int>(nullable: true),
                    IsMass = table.Column<bool>(nullable: false),
                    MassDiameterMaxInMm = table.Column<int>(nullable: true),
                    IsPneumopericardium = table.Column<bool>(nullable: false),
                    IsPericarditisConstrictiva = table.Column<bool>(nullable: false),
                    IsVasosclerosis = table.Column<bool>(nullable: false),
                    IsVascularDilatation = table.Column<bool>(nullable: false),
                    VascularExtentType = table.Column<byte>(nullable: false),
                    IsAorticRoot = table.Column<bool>(nullable: false),
                    IsAortaAscendens = table.Column<bool>(nullable: false),
                    IsAorticArch = table.Column<bool>(nullable: false),
                    IsAortaDescendens = table.Column<bool>(nullable: false),
                    SizeDiameterMaxInMm = table.Column<int>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    ExtentSizeInMm = table.Column<int>(nullable: true),
                    ExtentSecondPlaneInMm = table.Column<int>(nullable: true),
                    ExtentThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsScaloppingDilutedPedicle = table.Column<bool>(nullable: false),
                    IsWidenedNeuroforamen = table.Column<bool>(nullable: false),
                    IsPressureErosionRib = table.Column<bool>(nullable: false),
                    IsLocoregionalOsteolysis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    CaudalExtensionInMmDiagnosis01 = table.Column<int>(nullable: true),
                    CaudalExtensionInMmDiagnosis02 = table.Column<int>(nullable: true),
                    CaudalExtensionInMmDiagnosis03 = table.Column<int>(nullable: true),
                    EsuphagusType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    SpaceClaimMaxWallThicknessInMm = table.Column<int>(nullable: true),
                    MaximumCraniocaudalExtensionInMm = table.Column<int>(nullable: true),
                    IsUpsideDownStomach = table.Column<bool>(nullable: false),
                    TracheaType = table.Column<byte>(nullable: false),
                    TracheaShiftType = table.Column<byte>(nullable: false),
                    HeightInRelationType = table.Column<byte>(nullable: false),
                    MinDiameterAxial = table.Column<int>(nullable: true),
                    MinDiameterCraniocaudal = table.Column<int>(nullable: true),
                    IsTracheomalaciaCollapseInExpiration = table.Column<bool>(nullable: false),
                    MassDetailsMaxDiameterInMm = table.Column<int>(nullable: true),
                    MassDetailsDiagnosisType = table.Column<byte>(nullable: false),
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
                name: "SoftPartsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    DisplacementOfFatTissueType = table.Column<byte>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCysticChanges = table.Column<bool>(nullable: false),
                    IsExtrapleuralFatSign = table.Column<bool>(nullable: false),
                    IsInfiltrationChestWall = table.Column<bool>(nullable: false),
                    IsInfiltrationOfExtrapleuralFatTissue = table.Column<bool>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    HeterogeneousType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SiteType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    LocalizationCraniocaudalType = table.Column<byte>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    IsPosterior = table.Column<bool>(nullable: false),
                    IsFissural = table.Column<bool>(nullable: false),
                    IsMediastinal = table.Column<bool>(nullable: false),
                    SizeMaxWidthInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    AbdomenLocalizationType = table.Column<byte>(nullable: false),
                    AbdomenClassificationType = table.Column<byte>(nullable: false),
                    SiteMaxWidthInMm = table.Column<int>(nullable: true),
                    AverageDensityInHU = table.Column<int>(nullable: true),
                    DistributionType = table.Column<byte>(nullable: false),
                    QualityType = table.Column<byte>(nullable: false),
                    IsCoagulum = table.Column<bool>(nullable: false),
                    IsGasInclusions = table.Column<bool>(nullable: false),
                    IsCMEnrichingCapsule = table.Column<bool>(nullable: false),
                    IsSedimentation = table.Column<bool>(nullable: false),
                    IsSplitPleuraSign = table.Column<bool>(nullable: false),
                    ChestWallAngleType = table.Column<byte>(nullable: false),
                    PleuralMassType = table.Column<byte>(nullable: false),
                    IsCircumferentialSoftTissueAugmentation = table.Column<bool>(nullable: false),
                    IsCircumferentialSoftTissueAugmentationRight = table.Column<bool>(nullable: false),
                    IsCircumferentialSoftTissueAugmentationLeft = table.Column<bool>(nullable: false),
                    IsCloakPleuralEffusion = table.Column<bool>(nullable: false),
                    PleuralThickeningLocalizationType = table.Column<byte>(nullable: false),
                    IsObtusedAngulationOfCostophrenicAngle = table.Column<bool>(nullable: false),
                    IsNodularConfiguration = table.Column<bool>(nullable: false),
                    IsLocoregionalOsteolysis = table.Column<bool>(nullable: false),
                    PneumothoraxType = table.Column<byte>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    ExpansionMaxWidthInMm = table.Column<int>(nullable: true),
                    IsMediastinalshift = table.Column<bool>(nullable: false),
                    MediastinalshiftType = table.Column<byte>(nullable: false),
                    IsAtelectasis = table.Column<bool>(nullable: false),
                    SpineLocation = table.Column<int>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsLungs = table.Column<bool>(nullable: false),
                    IsMediastinum = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    IsPressureErosionRib = table.Column<bool>(nullable: false),
                    VolumeType = table.Column<byte>(nullable: false),
                    LossOfVolumeSiteType = table.Column<byte>(nullable: false),
                    IsAblatioRight = table.Column<bool>(nullable: false),
                    IsAblatioLeft = table.Column<bool>(nullable: false),
                    IsBreastAugmentationRight = table.Column<bool>(nullable: false),
                    IsBreastAugmentationLeft = table.Column<bool>(nullable: false),
                    IsThickened = table.Column<bool>(nullable: false),
                    ThickenedCutisBreastLocation = table.Column<int>(nullable: false),
                    IsBlurred = table.Column<bool>(nullable: false),
                    BlurredSiteType = table.Column<byte>(nullable: false),
                    IsStove = table.Column<bool>(nullable: false),
                    StoveBreastLocation = table.Column<int>(nullable: false),
                    StoveMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    LimitationType = table.Column<byte>(nullable: false),
                    LymphNodesAxillaryType = table.Column<byte>(nullable: false),
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
                    IsFocalLiverLesion = table.Column<bool>(nullable: false),
                    FocalLiverLesionMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    IsDiffuseLiverLesion = table.Column<bool>(nullable: false),
                    DiffuseLesionType = table.Column<byte>(nullable: false),
                    IsCholecystolithiasis = table.Column<bool>(nullable: false),
                    IsWallThickeningOfTheGallBladder = table.Column<bool>(nullable: false),
                    IsFocalPancreaticLesion = table.Column<bool>(nullable: false),
                    FocalPancreaticLesionMaxDiameterAxialInMm = table.Column<int>(nullable: true),
                    IsDiffusePancreaticLesion = table.Column<bool>(nullable: false),
                    IsFattyAtrophy = table.Column<bool>(nullable: false),
                    IsAccumulationDuctusWirsungianus = table.Column<bool>(nullable: false),
                    IsKidney = table.Column<bool>(nullable: false),
                    IsKidneyFocalLesion = table.Column<bool>(nullable: false),
                    KidneyFocalLesionMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsUrinaryRetention = table.Column<bool>(nullable: false),
                    IsUrinaryRetentionRight = table.Column<bool>(nullable: false),
                    IsUrinaryRetentionLeft = table.Column<bool>(nullable: false),
                    GradingType = table.Column<byte>(nullable: false),
                    IsMassAdrenalGland = table.Column<bool>(nullable: false),
                    IsMassAdrenalGlandRight = table.Column<bool>(nullable: false),
                    IsMassAdrenalGlandLeft = table.Column<bool>(nullable: false),
                    MassAdrenalGlandMaxDiameterInMm = table.Column<int>(nullable: true),
                    MassAdrenalGlandClassificationType = table.Column<byte>(nullable: false),
                    IsSplenomegaly = table.Column<bool>(nullable: false),
                    IsEnlargedAbdominalLymphNodes = table.Column<bool>(nullable: false),
                    DiameterSADInMm = table.Column<int>(nullable: true),
                    IsPathological = table.Column<bool>(nullable: false),
                    IsPathologicalMultiple = table.Column<bool>(nullable: false),
                    IsPathologicalConglomerate = table.Column<bool>(nullable: false),
                    IsPathologicalHiatusHernia = table.Column<bool>(nullable: false),
                    SoftPartsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftPartsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftPartsFindings_SoftPartsPages_SoftPartsPageId",
                        column: x => x.SoftPartsPageId,
                        principalTable: "SoftPartsPages",
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
                name: "IX_Acquisitions_TechnologyPageId",
                table: "Acquisitions",
                column: "TechnologyPageId");

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
                name: "IX_LungInterstitiumFindings_ImageFileId",
                table: "LungInterstitiumFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LungInterstitiumFindings_LungInterstitiumPageId",
                table: "LungInterstitiumFindings",
                column: "LungInterstitiumPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LungInterstitiumPages_ReportId",
                table: "LungInterstitiumPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_ImageFileId",
                table: "LungParenchymaFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LungParenchymaFindings_LungParenchymaPageId",
                table: "LungParenchymaFindings",
                column: "LungParenchymaPageId");

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
                name: "IX_SoftPartsFindings_SoftPartsPageId",
                table: "SoftPartsFindings",
                column: "SoftPartsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftPartsPages_ReportId",
                table: "SoftPartsPages",
                column: "ReportId",
                unique: true);

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
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "LungInterstitiumFindingPresets");

            migrationBuilder.DropTable(
                name: "LungInterstitiumFindings");

            migrationBuilder.DropTable(
                name: "LungParenchymaFindingPresets");

            migrationBuilder.DropTable(
                name: "LungParenchymaFindings");

            migrationBuilder.DropTable(
                name: "MediastinumFindingPresets");

            migrationBuilder.DropTable(
                name: "MediastinumFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SoftPartsFindingPresets");

            migrationBuilder.DropTable(
                name: "SoftPartsFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "LungInterstitiumPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "LungParenchymaPages");

            migrationBuilder.DropTable(
                name: "MediastinumPages");

            migrationBuilder.DropTable(
                name: "StudyAreaPages");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SoftPartsPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
