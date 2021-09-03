using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.KneeMRT.Repo.Migrations
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
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSeptetedOrChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCalcificationCentral = table.Column<bool>(nullable: false),
                    IsCalcificationDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsGreaseSignal = table.Column<bool>(nullable: false),
                    IsPeriostalReaction = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsSclerosingRim = table.Column<bool>(nullable: false),
                    IsRimLowSignal = table.Column<bool>(nullable: false),
                    IsFormLobbied = table.Column<bool>(nullable: false),
                    IsFormRoundly = table.Column<bool>(nullable: false),
                    IsFormMaplikeConfiguration = table.Column<bool>(nullable: false),
                    IsFormBroadBased = table.Column<bool>(nullable: false),
                    IsFormStored = table.Column<bool>(nullable: false),
                    IsFormOrientation = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationSoftTissue = table.Column<bool>(nullable: false),
                    IsReactionBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsAnotherLesion = table.Column<bool>(nullable: false),
                    IsReactionSoftTissueEdema = table.Column<bool>(nullable: false)
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
                name: "OsteoInterfacePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OsteoInterfacePages", x => x.Id);
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
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    SynoviaCMEnhancementType = table.Column<byte>(nullable: false),
                    SynoviaShapeType = table.Column<byte>(nullable: false),
                    IsSynovialNodulusGreaterThan1Lesions = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsLooseBodyGreaterThan1Lesions = table.Column<bool>(nullable: false),
                    IsHaemarthros = table.Column<bool>(nullable: false),
                    IsBonyErosions = table.Column<bool>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    TissueTumorHomogeneityType = table.Column<byte>(nullable: false),
                    IsGrease = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsPressureCorrosionerosionBone = table.Column<bool>(nullable: false),
                    TissueTumorCMEnhancementType = table.Column<byte>(nullable: false),
                    QuantitativeType = table.Column<byte>(nullable: false),
                    IsPeripheral = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftPartsFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OsteoInterfaceFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    Location = table.Column<byte>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsChondropathy = table.Column<bool>(nullable: false),
                    OuterbridgeClassificationType = table.Column<byte>(nullable: false),
                    IsExpansiveness = table.Column<bool>(nullable: false),
                    ExpansivenessMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsJointSurfaces = table.Column<bool>(nullable: false),
                    JointSurfaceType = table.Column<byte>(nullable: false),
                    UnipolarJointSurfaceType = table.Column<byte>(nullable: false),
                    IsChondrocalcinosis = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsSubchondralEdema = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsFormOfArthrosis = table.Column<bool>(nullable: false),
                    FormOfArthrosisType = table.Column<byte>(nullable: false),
                    ChondralLesionType = table.Column<byte>(nullable: false),
                    IsHypointenseLineParallelToCortex = table.Column<bool>(nullable: false),
                    IsNoContourIrregularity = table.Column<bool>(nullable: false),
                    IsNoArticularSurfaceInvolvement = table.Column<bool>(nullable: false),
                    IsHypointenseLineIrregular = table.Column<bool>(nullable: false),
                    IsHypointenseAreaBetweenCortexAndLine = table.Column<bool>(nullable: false),
                    IsArticularSurfaceImpression = table.Column<bool>(nullable: false),
                    IsCorticalisImpression = table.Column<bool>(nullable: false),
                    IsDetectionOfFluidInTheSubchondralSpace = table.Column<bool>(nullable: false),
                    IsOsteochondralFragment = table.Column<bool>(nullable: false),
                    SubchondralTraumaMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsBoneMarrowEdemaExtended = table.Column<bool>(nullable: false),
                    IsAssociatedMeniscusLesion = table.Column<bool>(nullable: false),
                    IsLocationCentralInMainLoadZone = table.Column<bool>(nullable: false),
                    IsHypointenseLineInterruptionCorticalis = table.Column<bool>(nullable: false),
                    IsCurvedLine = table.Column<bool>(nullable: false),
                    IsOsteochondralCorticalImpression = table.Column<bool>(nullable: false),
                    IsArticularSurfaceInvolvement = table.Column<bool>(nullable: false),
                    IsFragmentationArticularSurface = table.Column<bool>(nullable: false),
                    IsOsteochondraFragment = table.Column<bool>(nullable: false),
                    OsteochondralTraumaMaxDiameterInMm = table.Column<int>(nullable: true),
                    StageType = table.Column<byte>(nullable: false),
                    IsDetectionLooseBody = table.Column<bool>(nullable: false),
                    DetectionJointMouseLocalizationType = table.Column<byte>(nullable: false),
                    AssociatedFindingType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsBoneMarrowOedema = table.Column<bool>(nullable: false),
                    IsDetectionOsteochondralFragment = table.Column<bool>(nullable: false),
                    DetectionDissekatType = table.Column<byte>(nullable: false),
                    IsIntraosseousCysts = table.Column<bool>(nullable: false),
                    IsFluidEquivalentHem = table.Column<bool>(nullable: false),
                    IsIsointensToSynovia = table.Column<bool>(nullable: false),
                    IsExpiringDefect = table.Column<bool>(nullable: false),
                    EpiphysealJointType = table.Column<byte>(nullable: false),
                    LesionDiameter = table.Column<int>(nullable: true),
                    IsUninterruptedMarginalSclerosis = table.Column<bool>(nullable: false),
                    IsWavyAppearance = table.Column<bool>(nullable: false),
                    IsDoubleLineSign = table.Column<bool>(nullable: false),
                    DiameterInfarction = table.Column<int>(nullable: true),
                    IsSurroundingBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsBurglaryOfTheJointSurface = table.Column<bool>(nullable: false),
                    BurglaryOfTheJointSurfaceDiameterInMm = table.Column<int>(nullable: true),
                    IsSubchondralFatSignalIntensityLoss = table.Column<bool>(nullable: false),
                    OsteoInterfacePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OsteoInterfaceFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OsteoInterfaceFindings_OsteoInterfacePages_OsteoInterfacePa~",
                        column: x => x.OsteoInterfacePageId,
                        principalTable: "OsteoInterfacePages",
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
                    IsTrauma = table.Column<bool>(nullable: false),
                    TraumaType = table.Column<byte>(nullable: false),
                    TraumaVelocityType = table.Column<byte>(nullable: false),
                    MonthOfPeriodTrauma = table.Column<byte>(nullable: false),
                    YearOfPeriodTrauma = table.Column<int>(nullable: false),
                    IsLuxationPatella = table.Column<bool>(nullable: false),
                    MonthOfLuxation = table.Column<byte>(nullable: false),
                    YearOfLuxation = table.Column<int>(nullable: false),
                    IsFracture = table.Column<bool>(nullable: false),
                    IsFemur = table.Column<bool>(nullable: false),
                    IsTibia = table.Column<bool>(nullable: false),
                    IsFibula = table.Column<bool>(nullable: false),
                    IsPatella = table.Column<bool>(nullable: false),
                    IsLigamentReconstruction = table.Column<bool>(nullable: false),
                    IsAnteriorCruciateLigament = table.Column<bool>(nullable: false),
                    IsMedialCollateralLigament = table.Column<bool>(nullable: false),
                    IsLateralCollateralLigament = table.Column<bool>(nullable: false),
                    IsPosteriorCruciateLigament = table.Column<bool>(nullable: false),
                    IsOsteosynthesis = table.Column<bool>(nullable: false),
                    IsIntramedullaryNailingOsteosynthesis = table.Column<bool>(nullable: false),
                    IsEndoprosthesis = table.Column<bool>(nullable: false),
                    IsCartilageTransplantation = table.Column<bool>(nullable: false),
                    CartilageTransplantationType = table.Column<byte>(nullable: false),
                    IsSubchondralDrilling = table.Column<bool>(nullable: false),
                    IsLateralRetinacularRelease = table.Column<bool>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    IsMeniscusSurgery = table.Column<bool>(nullable: false),
                    IsResection = table.Column<bool>(nullable: false),
                    ResectionLocation = table.Column<byte>(nullable: false),
                    IsSuture = table.Column<bool>(nullable: false),
                    SutureLocation = table.Column<byte>(nullable: false),
                    IsInstability = table.Column<bool>(nullable: false),
                    InstabilityLocalizationType = table.Column<byte>(nullable: false),
                    IsKneePain = table.Column<bool>(nullable: false),
                    KneePainLocalizationType = table.Column<byte>(nullable: false),
                    MonthOfMRIPreliminaryExamination = table.Column<byte>(nullable: false),
                    YearOfMRIPreliminaryExamination = table.Column<int>(nullable: false)
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
                name: "LocalizationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    KneeLocation = table.Column<byte>(nullable: false)
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
                name: "PatellaPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatellaPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatellaPages_Reports_ReportId",
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
                name: "RibbonsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RibbonsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RibbonsPages_Reports_ReportId",
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
                name: "SummaryPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsXRay = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    FollowUpTimeType = table.Column<byte>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    FindingsDynamicsType = table.Column<byte>(nullable: false)
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
                    IsMagicAngleArtifact = table.Column<bool>(nullable: false),
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
                name: "BonesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSeptetedOrChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCalcificationCentral = table.Column<bool>(nullable: false),
                    IsCalcificationDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsGreaseSignal = table.Column<bool>(nullable: false),
                    IsPeriostalReaction = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsSclerosingRim = table.Column<bool>(nullable: false),
                    IsRimLowSignal = table.Column<bool>(nullable: false),
                    IsFormLobbied = table.Column<bool>(nullable: false),
                    IsFormRoundly = table.Column<bool>(nullable: false),
                    IsFormMaplikeConfiguration = table.Column<bool>(nullable: false),
                    IsFormBroadBased = table.Column<bool>(nullable: false),
                    IsFormStored = table.Column<bool>(nullable: false),
                    IsFormOrientation = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationSoftTissue = table.Column<bool>(nullable: false),
                    IsReactionBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsAnotherLesion = table.Column<bool>(nullable: false),
                    IsReactionSoftTissueEdema = table.Column<bool>(nullable: false),
                    EvaluationFractureType = table.Column<byte>(nullable: false),
                    FractureDistType = table.Column<byte>(nullable: false),
                    AvulsionFractureType = table.Column<byte>(nullable: false),
                    KneeExtensionLocation = table.Column<int>(nullable: false),
                    KneeLocation = table.Column<byte>(nullable: false),
                    FemurExtraarticularType = table.Column<byte>(nullable: false),
                    SimpleFractureType = table.Column<byte>(nullable: false),
                    WedgeFractureType = table.Column<byte>(nullable: false),
                    FemurPartiallyArticularType = table.Column<byte>(nullable: false),
                    SimpleLateralFractureType = table.Column<byte>(nullable: false),
                    SimpleMedialFractureType = table.Column<byte>(nullable: false),
                    CoronaryFractureType = table.Column<byte>(nullable: false),
                    FemurArticularType = table.Column<byte>(nullable: false),
                    ArticularOneFractureLineType = table.Column<byte>(nullable: false),
                    ArticularMultipleFractureLinesType = table.Column<byte>(nullable: false),
                    TibiaExtraarticularType = table.Column<byte>(nullable: false),
                    MetaphysealOneFragmentType = table.Column<byte>(nullable: false),
                    MetaphysealMultifragmentaryType = table.Column<byte>(nullable: false),
                    RatingFractureDetailsType = table.Column<byte>(nullable: false),
                    TibiaPartiallyArticularType = table.Column<byte>(nullable: false),
                    FissionFractureType = table.Column<byte>(nullable: false),
                    LateralImpressionFractureDepthInMm = table.Column<int>(nullable: true),
                    MedialImpressionFractureDepthInMm = table.Column<int>(nullable: true),
                    ObliqueImpressionFractureDepthInMm = table.Column<int>(nullable: true),
                    ImpressionType = table.Column<byte>(nullable: false),
                    FissionAndImpressionFractureType = table.Column<byte>(nullable: false),
                    TibiaArticularType = table.Column<byte>(nullable: false),
                    SimplyArticulateType = table.Column<byte>(nullable: false),
                    MultifragmentaryFractureType = table.Column<byte>(nullable: false),
                    FibulaFractureDetailsType = table.Column<byte>(nullable: false),
                    IsAvulsionFracture = table.Column<bool>(nullable: false),
                    PatellaFractureBType = table.Column<byte>(nullable: false),
                    PatellaFractureCType = table.Column<byte>(nullable: false),
                    PatellaFractureLateralDetailsType = table.Column<byte>(nullable: false),
                    PatellaFractureMedialDetailsType = table.Column<byte>(nullable: false),
                    HorizontalFractureType = table.Column<byte>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    IsThickenedAndEdematizedSynovial = table.Column<bool>(nullable: false),
                    IsSubchondralFracture = table.Column<bool>(nullable: false),
                    IsTransientOsteoporosis = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    AbscessDiameter = table.Column<int>(nullable: true),
                    IsAbscessMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsAbscessPeripheralCMEnhancement = table.Column<bool>(nullable: false),
                    IsOsteomyelitisBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsSequestrum = table.Column<bool>(nullable: false),
                    SequestrumDiameter = table.Column<int>(nullable: true),
                    IsSequestrumMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsSequestrumNoCMEnhancement = table.Column<bool>(nullable: false),
                    IsCorticalisDestruction = table.Column<bool>(nullable: false),
                    IsCorticalisThinning = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealAbscessDiameter = table.Column<int>(nullable: true),
                    IsPeriostrupture = table.Column<bool>(nullable: false),
                    IsOsteomyelitisSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPeriostealBoneApposition = table.Column<bool>(nullable: false),
                    StageType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsDiagnosisSubordinated = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidMetaphyseal = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidLessThan30MM = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidRimSclerosis = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidLobbied = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidT1wIsointens = table.Column<bool>(nullable: false),
                    IsCorticalDesmoidHeterogeneous = table.Column<bool>(nullable: false),
                    EpiphysealJointType = table.Column<byte>(nullable: false),
                    BonesEpiphysealJointDetailsType = table.Column<byte>(nullable: false),
                    AitkenClassificationType = table.Column<byte>(nullable: false),
                    IsBonyBridging = table.Column<bool>(nullable: false),
                    BoneDiameterInPercent = table.Column<int>(nullable: true),
                    IsEpiphysisJointExtension = table.Column<bool>(nullable: false),
                    IsIrregularityEpiphysisJoint = table.Column<bool>(nullable: false),
                    IsBMEInAdjacentMetaphysis = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    ExpansionAxialMaxInMm = table.Column<int>(nullable: true),
                    Expansion2ndPlaneAxialInMm = table.Column<int>(nullable: true),
                    ExpansionCraniocaudalInMm = table.Column<int>(nullable: true),
                    IsContrastInSepta = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintensity = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintensity = table.Column<bool>(nullable: false),
                    IsInfiltrationBoundary = table.Column<bool>(nullable: false),
                    IsGrowthPatternPathologicalFracture = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsWithinThePrimarilyAffectedBone = table.Column<bool>(nullable: false),
                    IsStagingPathologicalFracture = table.Column<bool>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    LocalSpreadType = table.Column<byte>(nullable: false),
                    IsHistologicallySecured = table.Column<bool>(nullable: false),
                    HistologicallySecuredType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsDifferentialDiagnosisSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
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
                name: "PatellaFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsAccessoryOssificationCenters = table.Column<bool>(nullable: false),
                    AdditionalOssificationType = table.Column<byte>(nullable: false),
                    IsVerticalPosition = table.Column<bool>(nullable: false),
                    VerticalPositionType = table.Column<byte>(nullable: false),
                    VisualSelectionType = table.Column<byte>(nullable: false),
                    LargestVerticalExpansionPatella = table.Column<int>(nullable: true),
                    LengthPatellae = table.Column<int>(nullable: true),
                    IsSulcusAngleTrochlea = table.Column<bool>(nullable: false),
                    SulcusAngleTrochleaInDegrees = table.Column<int>(nullable: true),
                    IsTrochleadysplasia = table.Column<bool>(nullable: false),
                    TrochleadysplasiaType = table.Column<byte>(nullable: false),
                    IsTtTgDistance = table.Column<bool>(nullable: false),
                    TtTgDistanceInMm = table.Column<int>(nullable: true),
                    IsPlicaMediopatellaris = table.Column<bool>(nullable: false),
                    PlicaMediopatellarisWidthInMm = table.Column<int>(nullable: true),
                    IsExtendingIntoThePrecondylarSpace = table.Column<bool>(nullable: false),
                    IsMediopatellarisChondropathyMedialPatella = table.Column<bool>(nullable: false),
                    IsMediopatellarisChondropathyMedialTrochlearand = table.Column<bool>(nullable: false),
                    IsPlicaLateralisPatellae = table.Column<bool>(nullable: false),
                    PlicaLateralisPatellaeWidthInMm = table.Column<int>(nullable: true),
                    IsLateralisReachesToPrekondylar = table.Column<bool>(nullable: false),
                    IsLateralisChondropathyMedialPatella = table.Column<bool>(nullable: false),
                    IsLateralisChondropathyMedialTrochlearand = table.Column<bool>(nullable: false),
                    IsMedialFacet = table.Column<bool>(nullable: false),
                    IsPatellaRidge = table.Column<bool>(nullable: false),
                    IsLateralFacet = table.Column<bool>(nullable: false),
                    OuterbridgeClassificationType = table.Column<byte>(nullable: false),
                    ExpansivenessMaxDiameterInMm = table.Column<int>(nullable: true),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsChondrocalcinosis = table.Column<bool>(nullable: false),
                    IsContusionEdemaMedial = table.Column<bool>(nullable: false),
                    IsAvulsionMedialPatella = table.Column<bool>(nullable: false),
                    IsContusionEdemaLateral = table.Column<bool>(nullable: false),
                    IsSoftPartEdema = table.Column<bool>(nullable: false),
                    IsOsteochondralLesionInferomedial = table.Column<bool>(nullable: false),
                    IsOsteochondralLesionLateral = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsMedialPatellofemoralRupture = table.Column<bool>(nullable: false),
                    MedialPatellofemoralRuptureType = table.Column<byte>(nullable: false),
                    PatellaPositionType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    DetectionDissekatType = table.Column<byte>(nullable: false),
                    ClassificationRegardingJointsType = table.Column<byte>(nullable: false),
                    IsLesionDiameter = table.Column<bool>(nullable: false),
                    LesionDiameterInMm = table.Column<int>(nullable: true),
                    IsOldLesion = table.Column<bool>(nullable: false),
                    PatellaPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatellaFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatellaFindings_PatellaPages_PatellaPageId",
                        column: x => x.PatellaPageId,
                        principalTable: "PatellaPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RibbonsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    GradeClassification = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    TearClassification = table.Column<byte>(nullable: false),
                    IsSuperiorArticularSurface = table.Column<bool>(nullable: false),
                    IsInferiorArticularSurface = table.Column<bool>(nullable: false),
                    Dislocation = table.Column<byte>(nullable: false),
                    FlapTearType = table.Column<byte>(nullable: false),
                    BucketHandleTear = table.Column<byte>(nullable: false),
                    IsChondropathyAssociated = table.Column<bool>(nullable: false),
                    IsChondropathyTibial = table.Column<bool>(nullable: false),
                    IsChondropathyFemoral = table.Column<bool>(nullable: false),
                    IsCMOedemaSubchondralAssociated = table.Column<bool>(nullable: false),
                    IsCMOedemaTibial = table.Column<bool>(nullable: false),
                    IsCMOedemaFemoral = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosisAssociated = table.Column<bool>(nullable: false),
                    IsSubchondralTibial = table.Column<bool>(nullable: false),
                    IsSubchondralFemoral = table.Column<bool>(nullable: false),
                    IsMeniscalExtrusionSubluxation = table.Column<bool>(nullable: false),
                    IsDegenerationRearAttachment = table.Column<bool>(nullable: false),
                    IsMeniscalCyst = table.Column<bool>(nullable: false),
                    MeniscusDiameterMM = table.Column<int>(nullable: true),
                    Measurement = table.Column<byte>(nullable: false),
                    IsMeniscocapsularSeparation = table.Column<bool>(nullable: false),
                    IsLigmeniskotibial = table.Column<bool>(nullable: false),
                    IsMeniscofemoralFascicle = table.Column<bool>(nullable: false),
                    IsDiscoidMeniscus = table.Column<bool>(nullable: false),
                    DiscoidMeniscusType = table.Column<byte>(nullable: false),
                    IsDislocated = table.Column<bool>(nullable: false),
                    IsThickeningLigMeniscofemoralPosterius = table.Column<bool>(nullable: false),
                    IsParsIntermediaWavyRepresentation = table.Column<bool>(nullable: false),
                    IsPhysiologicalT2Hyperintensity = table.Column<bool>(nullable: false),
                    MeniscusLocalization1 = table.Column<byte>(nullable: false),
                    MeniscusLocalization2 = table.Column<byte>(nullable: false),
                    IsMeniscalOssile = table.Column<bool>(nullable: false),
                    IsAbsentMeniscus = table.Column<bool>(nullable: false),
                    IsSignificantVolumeDeclineIM = table.Column<bool>(nullable: false),
                    IsMeniscPosterLigamWrisberg = table.Column<bool>(nullable: false),
                    IsMeniscAnteriusLigamHumphry = table.Column<bool>(nullable: false),
                    MeniscotibialLigamentum = table.Column<bool>(nullable: false),
                    IsSignificantVolumeDeclineEM = table.Column<bool>(nullable: false),
                    IsBursitisBetweenDeepAndMidLayers = table.Column<bool>(nullable: false),
                    BandPortion = table.Column<byte>(nullable: false),
                    IsDistortionGrade1Injury = table.Column<bool>(nullable: false),
                    IsLateralCollateralLigament = table.Column<bool>(nullable: false),
                    IsTractusIliotibialis = table.Column<bool>(nullable: false),
                    IsBicepsFemorisTendon = table.Column<bool>(nullable: false),
                    IsLiggPopliteofibulare = table.Column<bool>(nullable: false),
                    IsLigMeniscopliteale = table.Column<bool>(nullable: false),
                    Detail = table.Column<byte>(nullable: false),
                    DetailLocalization = table.Column<byte>(nullable: false),
                    IsRetracted = table.Column<bool>(nullable: false),
                    DimensionGrad2 = table.Column<byte>(nullable: true),
                    DimensionGrad3 = table.Column<byte>(nullable: true),
                    IsSegondFracture = table.Column<bool>(nullable: false),
                    IsAvulsionTibia = table.Column<bool>(nullable: false),
                    IsRuptureOfAnteriorCruciateLigament = table.Column<bool>(nullable: false),
                    IsArcuateSign = table.Column<bool>(nullable: false),
                    IsAvulsionFrakturFibula = table.Column<bool>(nullable: false),
                    IsPullOutPosterolateralCapsule = table.Column<bool>(nullable: false),
                    IsPosteriorCruciateLigament = table.Column<bool>(nullable: false),
                    InjuryType = table.Column<byte>(nullable: false),
                    RuptureKind = table.Column<byte>(nullable: false),
                    IsFreshTotalSignalIncreased = table.Column<bool>(nullable: false),
                    IsFreshTotalThickening = table.Column<bool>(nullable: false),
                    IsFreshTotalContusionOrBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsFreshTotalLatFemoralCondyleVentral = table.Column<bool>(nullable: false),
                    IsFreshTotalAnterolateralTibialPlateauDorsal = table.Column<bool>(nullable: false),
                    IsFreshTotalBonyAvulsion = table.Column<bool>(nullable: false),
                    IsFreshTotalFracture = table.Column<bool>(nullable: false),
                    IsFreshTotalFrakturLatFemoralCondyleVentral = table.Column<bool>(nullable: false),
                    IsFreshTotalFrakturLatTibialPlateauDorsal = table.Column<bool>(nullable: false),
                    IsTibialEminence = table.Column<bool>(nullable: false),
                    IsFreshTotalProximaleFibula = table.Column<bool>(nullable: false),
                    IsFreshTotalLateralTibialPlateau = table.Column<bool>(nullable: false),
                    IsFreshTotalSubluxationTibiaAnteriorOver5mm = table.Column<bool>(nullable: false),
                    IsBucklingOfThePCL = table.Column<bool>(nullable: false),
                    BundleType = table.Column<byte>(nullable: false),
                    IsAvulsionFibula = table.Column<bool>(nullable: false),
                    IsFreshTotalLatFemoralCondyle = table.Column<bool>(nullable: false),
                    IsFreshTotalAnterolateralTibialPlateau = table.Column<bool>(nullable: false),
                    IsFreshTotalProximaleFibula1 = table.Column<bool>(nullable: false),
                    IsFreshTotalLateralTibialPlateau1 = table.Column<bool>(nullable: false),
                    IsFreshTotalMedialTibialPlateau = table.Column<bool>(nullable: false),
                    IsFreshPartialThickening = table.Column<bool>(nullable: false),
                    IsFreshPartialSignalIncrease = table.Column<bool>(nullable: false),
                    IsFreshPartialMiddleThird = table.Column<bool>(nullable: false),
                    IsFreshPartialroximalThird = table.Column<bool>(nullable: false),
                    IsFreshPartialDistalThird = table.Column<bool>(nullable: false),
                    IsFreshPartialPoplitealTendonRupture = table.Column<bool>(nullable: false),
                    IsChronicSignalIncreased = table.Column<bool>(nullable: false),
                    IsChronicThickening = table.Column<bool>(nullable: false),
                    IsChronicSynovialization = table.Column<bool>(nullable: false),
                    IsChronicGanglionCyst = table.Column<bool>(nullable: false),
                    ChronicDimensionMM = table.Column<int>(nullable: true),
                    TransplantDetail = table.Column<byte>(nullable: false),
                    IsTunnelCyst = table.Column<bool>(nullable: false),
                    IsTunnelCystTibial = table.Column<bool>(nullable: false),
                    IsTunnelCystFemoral = table.Column<bool>(nullable: false),
                    RibbonsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RibbonsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RibbonsFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RibbonsFindings_RibbonsPages_RibbonsPageId",
                        column: x => x.RibbonsPageId,
                        principalTable: "RibbonsPages",
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
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    SynoviaCMEnhancementType = table.Column<byte>(nullable: false),
                    SynoviaShapeType = table.Column<byte>(nullable: false),
                    IsSynovialNodulusGreaterThan1Lesions = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsLooseBodyGreaterThan1Lesions = table.Column<bool>(nullable: false),
                    IsHaemarthros = table.Column<bool>(nullable: false),
                    IsBonyErosions = table.Column<bool>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    TissueTumorHomogeneityType = table.Column<byte>(nullable: false),
                    IsGrease = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsPressureCorrosionerosionBone = table.Column<bool>(nullable: false),
                    TissueTumorCMEnhancementType = table.Column<byte>(nullable: false),
                    QuantitativeType = table.Column<byte>(nullable: false),
                    IsPeripheral = table.Column<bool>(nullable: false),
                    IsTear = table.Column<bool>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<byte>(nullable: true),
                    IsBoneBruise = table.Column<bool>(nullable: false),
                    IsEnthesiopathy = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaUpperPatellarPole = table.Column<bool>(nullable: false),
                    IsHaematoma = table.Column<bool>(nullable: false),
                    IsThickeningEdema = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    Location = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    TendonLocalizationType = table.Column<byte>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    QualityType = table.Column<byte>(nullable: false),
                    IsSedimentation = table.Column<bool>(nullable: false),
                    IsBakerCyst = table.Column<bool>(nullable: false),
                    ExpansivenessMaxDiameterInMm = table.Column<byte>(nullable: true),
                    ExpansivenessMaxLinearExpansionInMm = table.Column<byte>(nullable: true),
                    IsRuptured = table.Column<bool>(nullable: false),
                    IsSynovialCystProxTibiofibularJoint = table.Column<bool>(nullable: false),
                    SynovialCystProxTibiofibularJointMaxDiameterInMm = table.Column<byte>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    HingeType = table.Column<byte>(nullable: false),
                    SynoviaType = table.Column<byte>(nullable: false),
                    DistributionPatternsType = table.Column<byte>(nullable: false),
                    FocalType = table.Column<byte>(nullable: false),
                    IsHyperplasia = table.Column<bool>(nullable: false),
                    IsIncreasedContrastEnhancement = table.Column<bool>(nullable: false),
                    IsHigherT2wOrPDSignal = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    EdemaType = table.Column<byte>(nullable: false),
                    IsEdemaFocalDistal = table.Column<bool>(nullable: false),
                    IsEdemaFocalDorsal = table.Column<bool>(nullable: false),
                    IsEdemaFocalProximal = table.Column<bool>(nullable: false),
                    IsEdemaFocalSuperolateral = table.Column<bool>(nullable: false),
                    IsEdemaFocalMaltrackingOfThePatella = table.Column<bool>(nullable: false),
                    IsFragmentation = table.Column<bool>(nullable: false),
                    IsFibrosis = table.Column<bool>(nullable: false),
                    IsLowSIInT1w = table.Column<bool>(nullable: false),
                    IsLowSIInT2w = table.Column<bool>(nullable: false),
                    IsHypertrophy = table.Column<bool>(nullable: false),
                    IsCartilageIsointenserNodulus = table.Column<bool>(nullable: false),
                    IsCartilageIsointenserNodulusGreaterThen1Lesion = table.Column<bool>(nullable: false),
                    IsThickeningPlicaSynovialisInfrapatellaris = table.Column<bool>(nullable: false),
                    IsBursaSuprapatellar = table.Column<bool>(nullable: false),
                    IsBursaSubcutaneaPraepatellaris = table.Column<bool>(nullable: false),
                    IsBursaSubfascialisPraepatellaris = table.Column<bool>(nullable: false),
                    IsBursaInfrapatellarisProfunda = table.Column<bool>(nullable: false),
                    IsBursaAnserina = table.Column<bool>(nullable: false),
                    IsBursaWithinTheInnerBand = table.Column<bool>(nullable: false),
                    IsBursaSubtendineaMusculiSemimembranosi = table.Column<bool>(nullable: false),
                    IsBursaTractusIliotibialis = table.Column<bool>(nullable: false),
                    IsBursaSubtendineaMusculiBicipitisFemorisInferior = table.Column<bool>(nullable: false),
                    BursitisMarginsType = table.Column<byte>(nullable: false),
                    BursaDiameterInMm = table.Column<byte>(nullable: true),
                    IsHaemorrhage = table.Column<bool>(nullable: false),
                    TPTLocalizationType = table.Column<byte>(nullable: false),
                    IsAvulsionTuberosityTibiae = table.Column<bool>(nullable: false),
                    IsSurroundingHematoma = table.Column<bool>(nullable: false),
                    IsPatellaAlta = table.Column<bool>(nullable: false),
                    EnthesiopathyType = table.Column<byte>(nullable: false),
                    IsSindingLarsenJohanssonSyndrome = table.Column<bool>(nullable: false),
                    IsThickeningEdemaOfTheProximalLigamentPatellae = table.Column<bool>(nullable: false),
                    IsDeep = table.Column<bool>(nullable: false),
                    IsSuperficial = table.Column<bool>(nullable: false),
                    IsEdemaOfTheInfrapatellarFattyBody = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaOfTheCaudalPatellapol = table.Column<bool>(nullable: false),
                    EnthesiopathyDistalType = table.Column<byte>(nullable: false),
                    IsMOsgoodSlatterThickeningEdemaOfTheDistalPatellarLigament = table.Column<bool>(nullable: false),
                    IsMOsgoodSlatterBoneMarrowEdemaOfTuberosity = table.Column<bool>(nullable: false),
                    IsBuritisInfrapatellarisProfunda = table.Column<bool>(nullable: false),
                    IsEdemaOfTheVentralSoftTissues = table.Column<bool>(nullable: false),
                    IsHoffaFatPad = table.Column<bool>(nullable: false),
                    IsFragmentationOfTuberosity = table.Column<bool>(nullable: false),
                    IsMOsgoodSlatterBursitisInfrapatellarisProfunda = table.Column<bool>(nullable: false),
                    IsIrregularityOfTuberosityTibiae = table.Column<bool>(nullable: false),
                    IsThickeningEdemaOfTheDistalLigamentPatellae = table.Column<bool>(nullable: false),
                    IsThickeningEdemaOfTheDistalPatellarLigament = table.Column<bool>(nullable: false),
                    IsBursitisInfrapatellarisProfunda = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaOfTuberosity = table.Column<bool>(nullable: false),
                    IsIntratendinousCalcification = table.Column<bool>(nullable: false),
                    IsTractionSpur = table.Column<bool>(nullable: false),
                    TearType = table.Column<byte>(nullable: false),
                    IsRectusFemoris = table.Column<bool>(nullable: false),
                    IsVastusMedialis = table.Column<bool>(nullable: false),
                    IsVastusLateralis = table.Column<bool>(nullable: false),
                    IsVastusIntermedius = table.Column<bool>(nullable: false),
                    IsAvulsionPatella = table.Column<bool>(nullable: false),
                    IsHematomaSuprapatellar = table.Column<bool>(nullable: false),
                    IsTendonsQuadricepsTendonHaemarthros = table.Column<bool>(nullable: false),
                    IsPatellaBaja = table.Column<bool>(nullable: false),
                    IsBursitisSuprapatellaris = table.Column<bool>(nullable: false),
                    IsIntratendinalCalcification = table.Column<bool>(nullable: false),
                    IsTendonsQuadricepsTendonTractionSpur = table.Column<bool>(nullable: false),
                    IsAvulsionFibulaHeads = table.Column<bool>(nullable: false),
                    IsBursitisSubtendineaMusculiBicipitisFemorisInferior = table.Column<bool>(nullable: false),
                    IsBursitisSubtendineaMusculusPoplitei = table.Column<bool>(nullable: false),
                    IsTendonsPopliteusTendonMuscularAtrophy = table.Column<bool>(nullable: false),
                    IsCyamella = table.Column<bool>(nullable: false),
                    IsTBursitisOfTheIliotibialTract = table.Column<bool>(nullable: false),
                    IsFibrovascularStimulus = table.Column<bool>(nullable: false),
                    IsGanglionCyst = table.Column<bool>(nullable: false),
                    IsLayer = table.Column<bool>(nullable: false),
                    IsSuperficialPars = table.Column<bool>(nullable: false),
                    IsParsProfundus = table.Column<bool>(nullable: false),
                    IsTendonsPesAnserinusBursitisPesAnserinus = table.Column<bool>(nullable: false),
                    IsTendonsPesAnserinusMSemitendinosus = table.Column<bool>(nullable: false),
                    IsTendonsPesAnserinusMGracilis = table.Column<bool>(nullable: false),
                    IsTendonsPesAnserinusMSartorius = table.Column<bool>(nullable: false),
                    IsTendonsPesAnserinusMusculusSemiMembranosus = table.Column<bool>(nullable: false),
                    MusculatureLocation = table.Column<int>(nullable: false),
                    IsIntramuscularHaematoma = table.Column<bool>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfacial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    IntramuscularHaematomaType = table.Column<byte>(nullable: false),
                    IsMuscleLesion = table.Column<bool>(nullable: false),
                    ClassificationMunichConsensusType = table.Column<byte>(nullable: false),
                    IsCrossDiameterRuptureBelow5Mm = table.Column<bool>(nullable: false),
                    IsCrossDiameterRuptureOver5Mm = table.Column<bool>(nullable: false),
                    TornMuscleOrTendonRetractionInMm = table.Column<byte>(nullable: true),
                    IsWavyAppearanceOfTheFibers = table.Column<bool>(nullable: false),
                    IsBonyAvulsionFracture = table.Column<bool>(nullable: false),
                    OsseousAvulsionType = table.Column<byte>(nullable: false),
                    IsIntracorticalOedema = table.Column<bool>(nullable: false),
                    IsFurtherFindingsMusculature = table.Column<bool>(nullable: false),
                    FurtherFindingsMusculatureType = table.Column<byte>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    VesselsNervesType = table.Column<byte>(nullable: false),
                    APoliteaAneurysmaDiameterInMm = table.Column<byte>(nullable: true),
                    IsSuperficialLegVeins = table.Column<bool>(nullable: false),
                    IsDeepVeins = table.Column<bool>(nullable: false),
                    IsSmoothMargins = table.Column<bool>(nullable: false),
                    IsSpindleShaped = table.Column<bool>(nullable: false),
                    IsSplitFatSign = table.Column<bool>(nullable: false),
                    IsT1wIsointensToTheMusculature = table.Column<bool>(nullable: false),
                    MusculatureCMEnchancementType = table.Column<byte>(nullable: false),
                    KMEnchancementDiameterInMm = table.Column<byte>(nullable: true),
                    VesselsNervesLocalizationType = table.Column<byte>(nullable: false),
                    VesselsNervesHomogeneityType = table.Column<byte>(nullable: false),
                    IsMalignantAspect = table.Column<bool>(nullable: false),
                    SoftPartsFindingType = table.Column<byte>(nullable: false),
                    KneeRetractionInMm = table.Column<int>(nullable: true),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    LocalizationCraniocaudalRelationType = table.Column<byte>(nullable: false),
                    AxialMaxInMm = table.Column<int>(nullable: true),
                    SecondPlaneAxialInMm = table.Column<int>(nullable: true),
                    CraniocaudalInMm = table.Column<int>(nullable: true),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    IsNoMassEffect = table.Column<bool>(nullable: false),
                    IsAlongTendonSheath = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    IsCentrally = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
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
                name: "IX_LocalizationPages_ReportId",
                table: "LocalizationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OsteoInterfaceFindings_OsteoInterfacePageId",
                table: "OsteoInterfaceFindings",
                column: "OsteoInterfacePageId");

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PatellaFindings_PatellaPageId",
                table: "PatellaFindings",
                column: "PatellaPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PatellaPages_ReportId",
                table: "PatellaPages",
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
                name: "IX_RibbonsFindings_ImageFileId",
                table: "RibbonsFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RibbonsFindings_RibbonsPageId",
                table: "RibbonsFindings",
                column: "RibbonsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_RibbonsPages_ReportId",
                table: "RibbonsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

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
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "OsteoInterfaceFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatellaFindings");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "RibbonsFindings");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SoftPartsFindingPresets");

            migrationBuilder.DropTable(
                name: "SoftPartsFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "OsteoInterfacePages");

            migrationBuilder.DropTable(
                name: "PatellaPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "RibbonsPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftPartsPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
