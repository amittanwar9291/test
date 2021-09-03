using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.FeetMRT.Repo.Migrations
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
                    SpaceRequirementDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastAgentEnhancementType = table.Column<byte>(nullable: false),
                    ContrastAgentEnhancementFormType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientationFromTheEpiphysisTowardTheDiaphysis = table.Column<bool>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsExpanding = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsEdgeWithLowSignal = table.Column<bool>(nullable: false),
                    NoCaEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false)
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
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    QuantitativeType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    IsAccompanyingBursitis = table.Column<bool>(nullable: false),
                    IsBold = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    IsTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum = table.Column<bool>(nullable: false),
                    QuantitativeHomogeneityType = table.Column<byte>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false)
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
                    XRayMonth = table.Column<byte>(nullable: false),
                    XRayYear = table.Column<int>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    CTMonth = table.Column<byte>(nullable: false),
                    CTYear = table.Column<int>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MRIMonth = table.Column<byte>(nullable: false),
                    MRIYear = table.Column<int>(nullable: false)
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
                name: "LigamentsAndTendonsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LigamentsAndTendonsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LigamentsAndTendonsPages_Reports_ReportId",
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
                    Localization = table.Column<byte>(nullable: false),
                    IsAnkleJoint = table.Column<bool>(nullable: false),
                    IsFoot = table.Column<bool>(nullable: false),
                    IsForefoot = table.Column<bool>(nullable: false)
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
                    EvaluationType = table.Column<int>(nullable: false),
                    IsSupplementaryDiagnosticsXray = table.Column<bool>(nullable: false),
                    isSupplementaryDiagnosticsCT = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    FollowUpTimeType = table.Column<int>(nullable: false),
                    isBiopsy = table.Column<bool>(nullable: false),
                    TClassificationType = table.Column<int>(nullable: false)
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
                name: "AnamnesisIndications",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IndicationType = table.Column<byte>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    PeriodTraumaMonth = table.Column<byte>(nullable: false),
                    PeriodTraumaYear = table.Column<int>(nullable: false),
                    LesionType = table.Column<byte>(nullable: false),
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
                name: "BonesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SpaceRequirementDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastAgentEnhancementType = table.Column<byte>(nullable: false),
                    ContrastAgentEnhancementFormType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientationFromTheEpiphysisTowardTheDiaphysis = table.Column<bool>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsExpanding = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsEdgeWithLowSignal = table.Column<bool>(nullable: false),
                    NoCaEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    FootThreeSidesLocalization = table.Column<int>(nullable: false),
                    ThreeDimensionalLocalization = table.Column<decimal>(nullable: false),
                    IntensityType = table.Column<byte>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsChondropathy = table.Column<bool>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    StandardVariantType = table.Column<byte>(nullable: false),
                    RadioulnarSynostosisType = table.Column<byte>(nullable: false),
                    SynarthrosisType = table.Column<byte>(nullable: false),
                    FractureClassificationType = table.Column<byte>(nullable: false),
                    FractureTypeType = table.Column<byte>(nullable: false),
                    FractureFormSubType = table.Column<byte>(nullable: false),
                    MedialMalleolusType = table.Column<byte>(nullable: false),
                    DistalTibiaFractureType = table.Column<byte>(nullable: false),
                    IsHindfoot = table.Column<bool>(nullable: false),
                    IsMidfoot = table.Column<bool>(nullable: false),
                    IsForefoot = table.Column<bool>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsPosteriorVolkmann = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    IsMedArticularSurfaceInclMedMalleolus = table.Column<bool>(nullable: false),
                    IsMedial = table.Column<bool>(nullable: false),
                    IsFrontalCoronal = table.Column<bool>(nullable: false),
                    IsSagittalPlane = table.Column<bool>(nullable: false),
                    IsnTillauxChaputTubercleFracture = table.Column<bool>(nullable: false),
                    IsWagstaffeLeFortAvulsionFracture = table.Column<bool>(nullable: false),
                    IsSyndesmosisUnstable = table.Column<bool>(nullable: false),
                    IsRuptureOfTheDeltoidLigament = table.Column<bool>(nullable: false),
                    IsFractureOfTheMedialMalleolus = table.Column<bool>(nullable: false),
                    IsFibulaNeckFracture = table.Column<bool>(nullable: false),
                    IsProximalTibiofibularJointDislocation = table.Column<bool>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    AssociatedFindingsType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DislocationLocalizationType = table.Column<byte>(nullable: false),
                    DislocationClassificationType = table.Column<byte>(nullable: false),
                    DislocationClassificationSubType = table.Column<byte>(nullable: false),
                    DislocationClassificationDetailsType = table.Column<byte>(nullable: false),
                    DislocationStageType = table.Column<byte>(nullable: false),
                    DiameterLesionInMm = table.Column<int>(nullable: true),
                    OsteochondralLesionClassificationType = table.Column<byte>(nullable: false),
                    IsDetectionFragment = table.Column<bool>(nullable: false),
                    DetectionDissekatType = table.Column<byte>(nullable: false),
                    IsSubchondralCyst = table.Column<bool>(nullable: false),
                    IsT2HyperintenseRim = table.Column<bool>(nullable: false),
                    IsAdjacentArticularEffusion = table.Column<bool>(nullable: false),
                    EpiphysealJointsType = table.Column<byte>(nullable: false),
                    ApophysitisMorbusSever = table.Column<bool>(nullable: false),
                    ApophysitisMorbusIselin = table.Column<bool>(nullable: false),
                    ThiemannDisease = table.Column<bool>(nullable: false),
                    KohlerDiseaseI = table.Column<bool>(nullable: false),
                    KohlerDiseaseII = table.Column<bool>(nullable: false),
                    OuterbridgeClassificationType = table.Column<byte>(nullable: false),
                    ExpansionLargestDiameterInMm = table.Column<int>(nullable: true),
                    ArticularSurfacesType = table.Column<byte>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsSubchondralCystsGeodes = table.Column<bool>(nullable: false),
                    IsSubchondralEdema = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsLocalBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    IsChondrocalcinosis = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsHyperplasia = table.Column<bool>(nullable: false),
                    IsT2wHyperintensity = table.Column<bool>(nullable: false),
                    IsIncreasedContrastEnhancement = table.Column<bool>(nullable: false),
                    IsPannus = table.Column<bool>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    ErosionsLocalizationType = table.Column<byte>(nullable: false),
                    IsInflammatoryBoneMarrowEdema = table.Column<bool>(nullable: false),
                    InflammatoryBoneMarrowEdemaLocalizationType = table.Column<byte>(nullable: false),
                    IsIntraosseousCysts = table.Column<bool>(nullable: false),
                    IsPeriostitis = table.Column<bool>(nullable: false),
                    IsProliferativeBoneChanges = table.Column<bool>(nullable: false),
                    IsDestructions = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    ArthritisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    StageType = table.Column<byte>(nullable: false),
                    IsDestruction = table.Column<bool>(nullable: false),
                    IsThinning = table.Column<bool>(nullable: false),
                    IsIntraosseousAbscess = table.Column<bool>(nullable: false),
                    IntrabonyAbscessSizeInMm = table.Column<int>(nullable: true),
                    IntraosseousAbscessSecondPlaneInMm = table.Column<int>(nullable: true),
                    IntraosseousAbscessThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsPenumbraSign = table.Column<bool>(nullable: false),
                    IsPeripheralContrastEnhancement = table.Column<bool>(nullable: false),
                    IsIntraossalAbscessMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsSequestrum = table.Column<bool>(nullable: false),
                    SequestrumSizeInMm = table.Column<int>(nullable: true),
                    SequesterSecondPlaneInMm = table.Column<int>(nullable: true),
                    SequesterThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsSequesterNoContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSequestrumMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsPeriostealRupture = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealAbscessSizeInMm = table.Column<int>(nullable: true),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    OsteomyelitisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    HistologyType = table.Column<byte>(nullable: false),
                    IsDiaphyseal = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsGeographic = table.Column<bool>(nullable: false),
                    MaxThicknessInMm = table.Column<int>(nullable: true),
                    IsInfiltrationOfAdjacentBones = table.Column<bool>(nullable: false),
                    IsPathologicFracture = table.Column<bool>(nullable: false),
                    IsPathologicalFractureSuspicionOf = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    LocalPropagationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false),
                    IsInsideTheBonePrimarilyAffected = table.Column<bool>(nullable: false),
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
                name: "LigamentsAndTendonsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSoftTissueHematoma = table.Column<bool>(nullable: false),
                    RuptureType = table.Column<byte>(nullable: false),
                    LigamentaType = table.Column<byte>(nullable: false),
                    LigamentaLocalizationType = table.Column<byte>(nullable: false),
                    IsAnteriorTibiofibularLigament = table.Column<bool>(nullable: false),
                    IsPosteriorTibiofibularLigament = table.Column<bool>(nullable: false),
                    IsTertiusFracture = table.Column<bool>(nullable: false),
                    IsInterosseousTibiofibularLigament = table.Column<bool>(nullable: false),
                    IsAnteriorTalofibularLigament = table.Column<bool>(nullable: false),
                    IsCalcaneofibularLigament = table.Column<bool>(nullable: false),
                    IsPosteriorTalofibularLigament = table.Column<bool>(nullable: false),
                    IsTibionavicularLigament = table.Column<bool>(nullable: false),
                    IsAvulsionFractureOfTheMedialMalleolus = table.Column<bool>(nullable: false),
                    IsTibiocalcanealLigament = table.Column<bool>(nullable: false),
                    IsParsTibiocalcaneareBonyAvulsionOnMalleolusMedialis = table.Column<bool>(nullable: false),
                    IsAnteriorTibiotalarLigament = table.Column<bool>(nullable: false),
                    IsPosteriorTibiotalarLigament = table.Column<bool>(nullable: false),
                    AgeOfTheLesionType = table.Column<byte>(nullable: false),
                    IsScarTissue = table.Column<bool>(nullable: false),
                    IsInferoplantarLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsMedioplantarObliqueLigament = table.Column<bool>(nullable: false),
                    IsSuperomedialCalcaneonavicularLigament = table.Column<bool>(nullable: false),
                    PartialRuptureType = table.Column<byte>(nullable: false),
                    IsIncreasedT2Signal = table.Column<bool>(nullable: false),
                    IsWithRetraction = table.Column<bool>(nullable: false),
                    IsTalocalcanealLigamentRupture = table.Column<bool>(nullable: false),
                    IsCervicalLigamentRupture = table.Column<bool>(nullable: false),
                    IsTalocalcanealInterosseouseLigamentRupture = table.Column<bool>(nullable: false),
                    IsTarsalSinusFatEdema = table.Column<bool>(nullable: false),
                    IsGanglion = table.Column<bool>(nullable: false),
                    DiameterInMm = table.Column<int>(nullable: true),
                    IsCalcaneonavicularLigament = table.Column<bool>(nullable: false),
                    IsCalcaneocuboidalLigament = table.Column<bool>(nullable: false),
                    IsOsseousAvulsionFracture = table.Column<bool>(nullable: false),
                    IsAnteriorProcessOfTheCalcaneus = table.Column<bool>(nullable: false),
                    IsLongPlantarLigament = table.Column<bool>(nullable: false),
                    IsShortPlantarLigament = table.Column<bool>(nullable: false),
                    ExtraarticularLocalizationType = table.Column<byte>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    MaxExtentInCrossSectionInPercent = table.Column<int>(nullable: true),
                    CraniocaudaleExtensionInMm = table.Column<int>(nullable: true),
                    IsTendinopathy = table.Column<bool>(nullable: false),
                    IsTear = table.Column<bool>(nullable: false),
                    IsT2wPDHyperintensity = table.Column<bool>(nullable: false),
                    IsT1wHyperintensity = table.Column<bool>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    IsReRupture = table.Column<bool>(nullable: false),
                    IsPeritendinitis = table.Column<bool>(nullable: false),
                    IsTendonHypervascularization = table.Column<bool>(nullable: false),
                    IsTendonDislocation = table.Column<bool>(nullable: false),
                    IsLongitudinalTear = table.Column<bool>(nullable: false),
                    IsAfterHalluxValgusSurgery = table.Column<bool>(nullable: false),
                    IsContactWithOsteosynthesisMaterial = table.Column<bool>(nullable: false),
                    IsTendovaginitis = table.Column<bool>(nullable: false),
                    IsCalcifyingTendinitis = table.Column<bool>(nullable: false),
                    IsFluidInTendonSheath = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    DistanceToTuberCalcaneiInMm = table.Column<int>(nullable: true),
                    IsConvexAnteriorContour = table.Column<bool>(nullable: false),
                    MaxSagittalDiameterInMm = table.Column<int>(nullable: true),
                    IsFusiformContour = table.Column<bool>(nullable: false),
                    IsRetrocalcanealSubachillealBursitis = table.Column<bool>(nullable: false),
                    IsIntratendinousSoftTissueFoci = table.Column<bool>(nullable: false),
                    IsTendonHypervascularisation = table.Column<bool>(nullable: false),
                    IsOsteitisOnTheTuberCalcanei = table.Column<bool>(nullable: false),
                    IsHaglundDeformity = table.Column<bool>(nullable: false),
                    IsDorsalHeelSpur = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    IsPeritendinousEdema = table.Column<bool>(nullable: false),
                    IsEdemaInKagerFatPad = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    RuptureLocalizationType = table.Column<byte>(nullable: false),
                    DistanceFromTuberCalcanei = table.Column<int>(nullable: true),
                    AssociatedFindingsType = table.Column<byte>(nullable: false),
                    IsMPeroneusLongusTendon = table.Column<bool>(nullable: false),
                    IsFluidInTheCommonTendonSheathOfThePeronealTendons = table.Column<bool>(nullable: false),
                    IsFluidInTheTendonSheathDistalToTheLateralMalleolus = table.Column<bool>(nullable: false),
                    IsOsPeroneum = table.Column<bool>(nullable: false),
                    IsGanglionAtTheLevelOfTheInsertionAtOsMetatarsalD1OsCuboideum = table.Column<bool>(nullable: false),
                    IsTendovaginitisDueToOsteophyteAtDorsomedialDistalTibia = table.Column<bool>(nullable: false),
                    IsGanglionToInsertionBaseDistalPhalanxD1 = table.Column<bool>(nullable: false),
                    IsAnkleJointEffusion = table.Column<bool>(nullable: false),
                    IsOsTrigonumSyndrome = table.Column<bool>(nullable: false),
                    LocalizationOfTendonRuptureType = table.Column<byte>(nullable: false),
                    IsAccompanyingBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsOsTibialAccessorium = table.Column<bool>(nullable: false),
                    IsPseudotumorOnTheBackOfTheFoot = table.Column<bool>(nullable: false),
                    IsPesPlanumDeformity = table.Column<bool>(nullable: false),
                    LigamentsAndTendonsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LigamentsAndTendonsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LigamentsAndTendonsFindings_LigamentsAndTendonsPages_Ligame~",
                        column: x => x.LigamentsAndTendonsPageId,
                        principalTable: "LigamentsAndTendonsPages",
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
                name: "SoftTissueFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    QuantitativeType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    IsAccompanyingBursitis = table.Column<bool>(nullable: false),
                    IsBold = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSepts = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    IsTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum = table.Column<bool>(nullable: false),
                    QuantitativeHomogeneityType = table.Column<byte>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    ThreeDimensionalLocalization = table.Column<decimal>(nullable: false),
                    TendonsLocalization = table.Column<int>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    DetailType = table.Column<byte>(nullable: false),
                    DetailMaxDiameterInMm = table.Column<int>(nullable: true),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    CmEnhancementType = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsFreeJointBody = table.Column<bool>(nullable: false),
                    IsBonyAvulsion = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    LocalizationOfTheSynoviaSynovitisType = table.Column<byte>(nullable: false),
                    IsIntraarticular = table.Column<bool>(nullable: false),
                    IsExtraarticular = table.Column<bool>(nullable: false),
                    IsHistologyKnown = table.Column<bool>(nullable: false),
                    HistologyKnownType = table.Column<byte>(nullable: false),
                    DimensionType = table.Column<byte>(nullable: false),
                    QualityType = table.Column<byte>(nullable: false),
                    IsExtravasationArticularEffusion = table.Column<bool>(nullable: false),
                    FreeJointBodyDiameterInMm = table.Column<int>(nullable: true),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsMedial = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    PlantarFasciaDiseaseType = table.Column<byte>(nullable: false),
                    RuptureType = table.Column<byte>(nullable: false),
                    RetractionDimensionInMm = table.Column<int>(nullable: true),
                    IsPlantarHeelSpur = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaOfTheCalcaneus = table.Column<bool>(nullable: false),
                    IsThickeningOfTheFascia = table.Column<bool>(nullable: false),
                    IsSpindleShaped = table.Column<bool>(nullable: false),
                    IsCloseToTheCalcaneus = table.Column<bool>(nullable: false),
                    IsT1wIncreasedSignalIntensityTheFascia = table.Column<bool>(nullable: false),
                    IsT2wIncreasedSignalIntensityTheFascia = table.Column<bool>(nullable: false),
                    IsSurroundingEdemaOrPerifasciitis = table.Column<bool>(nullable: false),
                    IsSignalIncreaseOfTheAdjacentMusculature = table.Column<bool>(nullable: false),
                    IsHypervascularization = table.Column<bool>(nullable: false),
                    IsDistalLocalization = table.Column<bool>(nullable: false),
                    IsProximalLocalization = table.Column<bool>(nullable: false),
                    IsNode = table.Column<bool>(nullable: false),
                    NodeType = table.Column<byte>(nullable: false),
                    IsFibroma = table.Column<bool>(nullable: false),
                    FibromaMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsHeterogeneousSignalIntensityInT1wOrT2w = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsLowSignalThrombusInDeepPlantarVein = table.Column<bool>(nullable: false),
                    IsDilatedVein = table.Column<bool>(nullable: false),
                    IsLowSignalThrombusWithFillingDefect = table.Column<bool>(nullable: false),
                    IsPerivascularEdema = table.Column<bool>(nullable: false),
                    IsMAbductorDigitiMinimi = table.Column<bool>(nullable: false),
                    IsMFlexorDigitorumBrevis = table.Column<bool>(nullable: false),
                    IsMQuadratusPlantae = table.Column<bool>(nullable: false),
                    MuscleChangeType = table.Column<byte>(nullable: false),
                    IsLinearIntramedullaryT1wHypointensity = table.Column<bool>(nullable: false),
                    DiseasesOfTheMtpType = table.Column<byte>(nullable: false),
                    D1Type = table.Column<byte>(nullable: false),
                    HalluxValgusAngleInDegrees = table.Column<int>(nullable: true),
                    IntermetatarsalAngleInDegrees = table.Column<int>(nullable: true),
                    IsLateralDeviation = table.Column<bool>(nullable: false),
                    IsLateralDislocationTheSesamoidBones = table.Column<bool>(nullable: false),
                    IsLateralProliferationSesamoidBones = table.Column<bool>(nullable: false),
                    IsSubluxationInBigToeMetatarsophalangealJoint = table.Column<bool>(nullable: false),
                    IsSynovialEnhancement = table.Column<bool>(nullable: false),
                    IsPseudoexostosisMedial = table.Column<bool>(nullable: false),
                    DiseasesOfTheMTPLocalizationType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsD1 = table.Column<bool>(nullable: false),
                    IsD2 = table.Column<bool>(nullable: false),
                    IsD3 = table.Column<bool>(nullable: false),
                    IsD4 = table.Column<bool>(nullable: false),
                    IsD5 = table.Column<bool>(nullable: false),
                    IsExpansionUpToCollateralLigaments = table.Column<bool>(nullable: false),
                    IsPericapsularFibrosis = table.Column<bool>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsLuxationMTP = table.Column<bool>(nullable: false),
                    IsAdjacentGanglion = table.Column<bool>(nullable: false),
                    AdjacentGanglionMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsBursaMetatarsophalangealis = table.Column<bool>(nullable: false),
                    IsMetatarsalBursa = table.Column<bool>(nullable: false),
                    IsBursaIntermetatarsale = table.Column<bool>(nullable: false),
                    IsBursaSubcutaneaCalcanea = table.Column<bool>(nullable: false),
                    IsBursaRetrocalcaneal = table.Column<bool>(nullable: false),
                    IsBursaSubcutaneaMedialMalleolus = table.Column<bool>(nullable: false),
                    IsBursaSubcutaneaLateralMalleolus = table.Column<bool>(nullable: false),
                    MaxDiameterBursa = table.Column<int>(nullable: true),
                    LimitationType = table.Column<byte>(nullable: false),
                    IsBleedingIn = table.Column<bool>(nullable: false),
                    IsMortonNovelty = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    ExpansionSizeMaxInMm = table.Column<int>(nullable: true),
                    Expansion2ndStageInMm = table.Column<int>(nullable: true),
                    Expansion3rdStageInMm = table.Column<int>(nullable: true),
                    InterdigitalSpaceType = table.Column<byte>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    IsPressureCorrosionBone = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsInTheSepta = table.Column<bool>(nullable: false),
                    IsHyperplasia = table.Column<bool>(nullable: false),
                    IsHigherT2wOrPDSignal = table.Column<bool>(nullable: false),
                    IsIncreasedCMEnhancement = table.Column<bool>(nullable: false),
                    SignalBehaviorT1wType = table.Column<byte>(nullable: false),
                    SignalBehaviorT2wType = table.Column<byte>(nullable: false),
                    SynoviaFormType = table.Column<byte>(nullable: false),
                    IsSynovialNodulusMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsBloomingArtifact = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifact = table.Column<bool>(nullable: false),
                    IsFreeJointBodyMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsHaemarthros = table.Column<bool>(nullable: false),
                    IsBonyErosionsInsertionSynovialMembrane = table.Column<bool>(nullable: false),
                    PowerfulHomogeneityType = table.Column<byte>(nullable: false),
                    MuscleLesionLocalizationType = table.Column<byte>(nullable: false),
                    LocalizationWithinOfTheMuscleType = table.Column<byte>(nullable: false),
                    IsMuscleLesion = table.Column<bool>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsCrossDiameterOfTheRuptureLessThan5Mm = table.Column<bool>(nullable: false),
                    IsCrossDiameterOfTheRuptureMoreThan5Mm = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsWavyCourseOfTheFibers = table.Column<bool>(nullable: false),
                    IsIntracorticalEdema = table.Column<bool>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFasciaTear = table.Column<bool>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfacial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    AgeType = table.Column<byte>(nullable: false),
                    DistanceOfTheOSGInMm = table.Column<int>(nullable: true),
                    CcExpansionInMm = table.Column<int>(nullable: true),
                    MaxAxialExpansionInMm = table.Column<int>(nullable: true),
                    FredericsonStadiumType = table.Column<byte>(nullable: false),
                    IsPeriarticularlyAccentuated = table.Column<bool>(nullable: false),
                    InTheMetatarsotarsalJoints = table.Column<bool>(nullable: false),
                    IsInTheMetatarsophalangealJoints = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaZone1 = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaZone2 = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaZone3 = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaZone4 = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaZone5 = table.Column<bool>(nullable: false),
                    IsJointDestruction = table.Column<bool>(nullable: false),
                    IsJointDestructionZone1 = table.Column<bool>(nullable: false),
                    IsJointDestructionZone2 = table.Column<bool>(nullable: false),
                    IsJointDestructionZone3 = table.Column<bool>(nullable: false),
                    IsJointDestructionZone4 = table.Column<bool>(nullable: false),
                    IsJointDestructionZone5 = table.Column<bool>(nullable: false),
                    IsMicrofracture = table.Column<bool>(nullable: false),
                    IsFracture = table.Column<bool>(nullable: false),
                    IsOsNavicular = table.Column<bool>(nullable: false),
                    IsFragmentation = table.Column<bool>(nullable: false),
                    IsLuxation = table.Column<bool>(nullable: false),
                    IsOssaMetatarsaliaCranialAndLateral = table.Column<bool>(nullable: false),
                    IsBreakInLongitudinalVault = table.Column<bool>(nullable: false),
                    IsRockerbottomDeformity = table.Column<bool>(nullable: false),
                    IsTalusHeadLowering = table.Column<bool>(nullable: false),
                    IsOsNaviculareAfterCranialMedial = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsLisfrancJoint = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsGhostCharacterInT1w = table.Column<bool>(nullable: false),
                    IsOsCuboideum = table.Column<bool>(nullable: false),
                    IsOssaCuneiforme = table.Column<bool>(nullable: false),
                    IsOssaMetatarsalia = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueInfection = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    AbscessMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsPhlegmone = table.Column<bool>(nullable: false),
                    IsUlcerationOfTheSoleOfTheFoot = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosisOsteomyelitis = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosisArthrosis = table.Column<bool>(nullable: false),
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
                name: "IX_LigamentsAndTendonsFindings_LigamentsAndTendonsPageId",
                table: "LigamentsAndTendonsFindings",
                column: "LigamentsAndTendonsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LigamentsAndTendonsPages_ReportId",
                table: "LigamentsAndTendonsPages",
                column: "ReportId",
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
                name: "AnamnesisIndications");

            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "LigamentsAndTendonsFindings");

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
                name: "LigamentsAndTendonsPages");

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
