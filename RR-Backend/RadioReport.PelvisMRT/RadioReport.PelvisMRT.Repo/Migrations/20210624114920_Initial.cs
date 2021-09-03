using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.PelvisMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BladderFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsCapsuleMembrane = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsInflammatoryReaction = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BladderFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BonesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    IsDiaphyseal = table.Column<bool>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSeptetedOrChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcificationCentral = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsGreaseSignal = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintensity = table.Column<bool>(nullable: false),
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
                    IsAnotherLesion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FemaleGenderFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    AdditionalT1wSignal = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType1 = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogenityType1 = table.Column<byte>(nullable: false),
                    HeterogeneousType = table.Column<byte>(nullable: false),
                    DetailsT2wSignalHomogenityType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsComplexCystic = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsSeptaNodularParts = table.Column<bool>(nullable: false),
                    IsFocalThickening = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsHydrosalpinx = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCapsuleOrPseudoCapsule = table.Column<bool>(nullable: false),
                    IsT2wIncrease = table.Column<bool>(nullable: false),
                    TransitionZoneType = table.Column<byte>(nullable: false),
                    IsClawSign = table.Column<bool>(nullable: false),
                    IsBridgingVesselSign = table.Column<bool>(nullable: false),
                    DegenerationType1 = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FemaleGenderFindingPresets", x => x.Id);
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
                name: "MaleGenderFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSignalLossFlowVoid = table.Column<bool>(nullable: false),
                    IsMarginalCMEnhancement = table.Column<bool>(nullable: false),
                    IsEpididymis = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    SignalLossFlowVoidType = table.Column<byte>(nullable: false),
                    MainFeaturesLocalizationType = table.Column<byte>(nullable: false),
                    UrethraType = table.Column<byte>(nullable: false),
                    SignalT1wSliderType = table.Column<byte>(nullable: false),
                    SignalT2wSliderType = table.Column<byte>(nullable: false),
                    PenisMassCMEnhancementType = table.Column<byte>(nullable: false),
                    ScrotumMassLocalizationType = table.Column<byte>(nullable: false),
                    ScrotumMassSignalT1wSliderType = table.Column<byte>(nullable: false),
                    ScrotumMassSignalT2wSliderType = table.Column<byte>(nullable: false),
                    IsSeptations = table.Column<bool>(nullable: false),
                    SeptationsType = table.Column<byte>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCysticChanges = table.Column<bool>(nullable: false),
                    IsCentralNidus = table.Column<bool>(nullable: false),
                    IsVascularAccumulation = table.Column<bool>(nullable: false),
                    ScrotumMassCMEnhancementType = table.Column<byte>(nullable: false),
                    ScrotumMassHomogeneity01Type = table.Column<byte>(nullable: false),
                    ScrotumMassHomogeneity02Type = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaleGenderFindingPresets", x => x.Id);
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
                    PSALevel = table.Column<decimal>(nullable: true),
                    PSALevelTestMonth = table.Column<byte>(nullable: true),
                    PSALevelTestYear = table.Column<int>(nullable: true),
                    BiopsyMonth = table.Column<byte>(nullable: true),
                    BiopsyYear = table.Column<int>(nullable: true),
                    IsTherapy = table.Column<bool>(nullable: false),
                    IsRadiotherapy = table.Column<bool>(nullable: false),
                    IsHormoneAblative = table.Column<bool>(nullable: false),
                    RadiotherapyContinueType = table.Column<int>(nullable: false),
                    RadiotherapyMonth = table.Column<byte>(nullable: true),
                    RadiotherapyYear = table.Column<int>(nullable: true),
                    HormoneAblativeContinueType = table.Column<int>(nullable: false),
                    HormoneAblativeMonth = table.Column<byte>(nullable: true),
                    HormoneAblativeYear = table.Column<int>(nullable: true),
                    IsNeoadjuvantTherapy = table.Column<bool>(nullable: false),
                    NeoadjuvantTherapyContinueType = table.Column<int>(nullable: false),
                    NeoadjuvantTherapyMonth = table.Column<byte>(nullable: true),
                    NeoadjuvantTherapyYear = table.Column<int>(nullable: true),
                    IsNeoadjuvantTherapyRadiotherapy = table.Column<bool>(nullable: false),
                    IsNeoadjuvantTherapyChemotherapy = table.Column<bool>(nullable: false),
                    ParityType = table.Column<byte>(nullable: false),
                    IsHypermenorrhea = table.Column<bool>(nullable: false),
                    IsMenorrhagia = table.Column<bool>(nullable: false),
                    IsMetrorrhagia = table.Column<bool>(nullable: false),
                    IsCryptorchidismRight = table.Column<bool>(nullable: false),
                    IsCryptorchidismLeft = table.Column<bool>(nullable: false),
                    IsWeightChange = table.Column<bool>(nullable: false),
                    WeightChangeType = table.Column<byte>(nullable: false),
                    PrevExaminationMonth = table.Column<byte>(nullable: true),
                    PrevExaminationYear = table.Column<int>(nullable: true)
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
                name: "BladderPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BladderPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BladderPages_Reports_ReportId",
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
                name: "FemaleGenderPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FemaleGenderPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FemaleGenderPages_Reports_ReportId",
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
                    IsMultiparametric = table.Column<bool>(nullable: false),
                    IsDynamic = table.Column<bool>(nullable: false),
                    InvestigationType = table.Column<byte>(nullable: false)
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
                name: "LymphNodesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MaleGenderPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaleGenderPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaleGenderPages_Reports_ReportId",
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
                name: "PelvicFloorPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PelvicFloorPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PelvicFloorPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProstataPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false),
                    WidthInMm = table.Column<int>(nullable: true),
                    HeightInMm = table.Column<int>(nullable: true),
                    APdiameterInMm = table.Column<int>(nullable: true),
                    VolumeInCm3 = table.Column<decimal>(nullable: true),
                    VolumeType = table.Column<byte>(nullable: false),
                    PsaVolume = table.Column<decimal>(nullable: true),
                    PsaVolumeType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProstataPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProstataPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RectumPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RectumPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RectumPages_Reports_ReportId",
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
                    ProcedureType = table.Column<byte>(nullable: false),
                    IsCtThorax = table.Column<bool>(nullable: false),
                    IsCtAbdomen = table.Column<bool>(nullable: false),
                    IsMriAbdomen = table.Column<bool>(nullable: false),
                    IsPetCt = table.Column<bool>(nullable: false),
                    IsSpectCt = table.Column<bool>(nullable: false),
                    IsSkeletalScintigraphy = table.Column<bool>(nullable: false),
                    MRIFollowUpType = table.Column<byte>(nullable: false),
                    IsBiopsyRecommended = table.Column<bool>(nullable: false),
                    BiopsyRecommendedType = table.Column<byte>(nullable: false),
                    IsEvaluationInInterdisciplinaryTumorBoard = table.Column<bool>(nullable: false),
                    PiradsScoreTotal = table.Column<int>(nullable: true),
                    TNStagingType = table.Column<byte>(nullable: false),
                    DynamicsOfFinding = table.Column<byte>(nullable: false),
                    TumorRegressionGradeTRG = table.Column<byte>(nullable: false),
                    ProstateCarcinomaTStageType = table.Column<byte>(nullable: false),
                    ProstateCarcinomaNStageType = table.Column<byte>(nullable: false),
                    ProstateCarcinomaMStageType = table.Column<byte>(nullable: false),
                    bladderCarcinomaTStageType = table.Column<byte>(nullable: false),
                    BladderCarcinomaNStageType = table.Column<byte>(nullable: false),
                    RectalCancerTStageType = table.Column<byte>(nullable: false),
                    RectalCancerNStageType = table.Column<byte>(nullable: false),
                    SigmoidColonTStageType = table.Column<byte>(nullable: false),
                    SigmoidColonNStageType = table.Column<byte>(nullable: false)
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
                    PositionType = table.Column<byte>(nullable: false),
                    IsSpasmolysis = table.Column<bool>(nullable: false),
                    SpasmolysisType = table.Column<byte>(nullable: false),
                    IsOralContrast = table.Column<bool>(nullable: false),
                    IsVaginalContrast = table.Column<bool>(nullable: false),
                    IsRectalContrast = table.Column<bool>(nullable: false),
                    IsPulsationOrBreathing = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsChemicalShift = table.Column<bool>(nullable: false),
                    IsIncorrectSubtraction = table.Column<bool>(nullable: false)
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
                name: "ClinicFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsDigitalRectalExam = table.Column<bool>(nullable: false),
                    IsPressurePainLowerAbdomen = table.Column<bool>(nullable: false),
                    IsPressurePainRight = table.Column<bool>(nullable: false),
                    IsPressurePainLeft = table.Column<bool>(nullable: false),
                    IsBonePain = table.Column<bool>(nullable: false),
                    IsStressIncontinence = table.Column<bool>(nullable: false),
                    IsUrgeIncontinence = table.Column<bool>(nullable: false),
                    IsParadoxical = table.Column<bool>(nullable: false),
                    IsAnemiaDueToBleeding = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClinicFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousOperationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    Month = table.Column<byte>(nullable: true),
                    Year = table.Column<int>(nullable: true),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsLeftPartial = table.Column<bool>(nullable: false),
                    IsRightPartial = table.Column<bool>(nullable: false),
                    IsRadical = table.Column<bool>(nullable: false),
                    SugicalProceduresType = table.Column<byte>(nullable: false),
                    IsDeep = table.Column<bool>(nullable: false),
                    IsAnusPraeter = table.Column<bool>(nullable: false),
                    IsHartmannsRectalStump = table.Column<bool>(nullable: false),
                    IsPouchReconstruction = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousOperationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousOperationFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BladderFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsCapsuleMembrane = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsInflammatoryReaction = table.Column<bool>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    SideType = table.Column<byte>(nullable: false),
                    MaxExpansionInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsCalcification = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsMoreThan1Lesion = table.Column<bool>(nullable: false),
                    IsArtifacts = table.Column<bool>(nullable: false),
                    IsNotSufficientBladderFilling = table.Column<bool>(nullable: false),
                    IsInsertedBladderCatheter = table.Column<bool>(nullable: false),
                    IsDoubleJCatheterRight = table.Column<bool>(nullable: false),
                    IsDoubleJCatheterLeft = table.Column<bool>(nullable: false),
                    IsSmallIntestine = table.Column<bool>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    IsMuscleAtrophy = table.Column<bool>(nullable: false),
                    AscitesCharacterizationType = table.Column<byte>(nullable: false),
                    IsDetectionOfHemosiderin = table.Column<bool>(nullable: false),
                    PeritonealNodulesCharacterizationType = table.Column<byte>(nullable: false),
                    IsRectoUterinePouch = table.Column<bool>(nullable: false),
                    AffectedVesselUreterType = table.Column<byte>(nullable: false),
                    ArteriopathyType = table.Column<byte>(nullable: false),
                    PathologyAnatomicVariantsType = table.Column<byte>(nullable: false),
                    VesselsUreterPathologyType = table.Column<byte>(nullable: false),
                    ThickeningLocalizationType = table.Column<byte>(nullable: false),
                    IsBaseOfTheBladder = table.Column<bool>(nullable: false),
                    IsRightLateralWall = table.Column<bool>(nullable: false),
                    IsLeftLateralWall = table.Column<bool>(nullable: false),
                    IsBladderNeck = table.Column<bool>(nullable: false),
                    IsTrigonum = table.Column<bool>(nullable: false),
                    IsRoofOfBladder = table.Column<bool>(nullable: false),
                    IsAnteriorWall = table.Column<bool>(nullable: false),
                    IsPosteriorWall = table.Column<bool>(nullable: false),
                    HeterogeneousType = table.Column<byte>(nullable: false),
                    GrowthPatternsType = table.Column<byte>(nullable: false),
                    InfiltrativeGrowthType = table.Column<byte>(nullable: false),
                    SecondaryWallThickeningType = table.Column<byte>(nullable: false),
                    IsPatentUrachus = table.Column<bool>(nullable: false),
                    IsInfection = table.Column<bool>(nullable: false),
                    IsMass = table.Column<bool>(nullable: false),
                    IsCongenitalBladderFistula = table.Column<bool>(nullable: false),
                    IsRectumSigma = table.Column<bool>(nullable: false),
                    IsUterusVagina = table.Column<bool>(nullable: false),
                    IsCutan = table.Column<bool>(nullable: false),
                    IsBladderrupture = table.Column<bool>(nullable: false),
                    IsIntraperitoneal = table.Column<bool>(nullable: false),
                    IsExtraperitoneal = table.Column<bool>(nullable: false),
                    IsBladderTamponade = table.Column<bool>(nullable: false),
                    IsBloodClot = table.Column<bool>(nullable: false),
                    TumorLocalizationType = table.Column<byte>(nullable: false),
                    IntrapelvicLocalizationType = table.Column<byte>(nullable: false),
                    ExtrapelvicLocalizationType = table.Column<byte>(nullable: false),
                    AffectedNerveType = table.Column<byte>(nullable: false),
                    IsSuspicionOfMalignancy = table.Column<bool>(nullable: false),
                    IsSmoothMargins = table.Column<bool>(nullable: false),
                    IsFusiformShape = table.Column<bool>(nullable: false),
                    IsMarginSplitFatSign = table.Column<bool>(nullable: false),
                    IsT1wIsointensToMuscleSignal = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SoftTissueMassLocalizationType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsUterus = table.Column<bool>(nullable: false),
                    IsVagina = table.Column<bool>(nullable: false),
                    IsProstate = table.Column<bool>(nullable: false),
                    IsSeminalVesicles = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsSigma = table.Column<bool>(nullable: false),
                    IsVascular = table.Column<bool>(nullable: false),
                    IsSkinExulceration = table.Column<bool>(nullable: false),
                    MusclesLocalizationType = table.Column<byte>(nullable: false),
                    LocalizationWithinMuscleType = table.Column<byte>(nullable: false),
                    IsMuscleLesion = table.Column<bool>(nullable: false),
                    ClassificationMunichConsensusType = table.Column<byte>(nullable: false),
                    IsCrossDiameterOfRuptureLessThan5Mm = table.Column<bool>(nullable: false),
                    IsCrossDiameterOfRupture5OrMoreMm = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsWavyCourseOfTheFibres = table.Column<bool>(nullable: false),
                    IsOsseousAvulsion = table.Column<bool>(nullable: false),
                    OsseousAvulsionLocalizationType = table.Column<byte>(nullable: false),
                    IsIntracorticalEdema = table.Column<bool>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfacial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    HematomaCharacterizationType = table.Column<byte>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsMuscularHypotrophy = table.Column<bool>(nullable: false),
                    MuscleAtrophyType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFascialLaceration = table.Column<bool>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    IsReducedIschiofemoralSpace = table.Column<bool>(nullable: false),
                    ShortestDistanceInMm = table.Column<int>(nullable: true),
                    TendonsLocalizationType = table.Column<byte>(nullable: false),
                    TendonsPathologyType = table.Column<byte>(nullable: false),
                    DetailsRuptureLocalizationType = table.Column<byte>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    ExtensionInMm = table.Column<int>(nullable: true),
                    IsSurroundingHematoma = table.Column<bool>(nullable: false),
                    IsBoneBruise = table.Column<bool>(nullable: false),
                    IsAvulsionTuberosityTibiae = table.Column<bool>(nullable: false),
                    MorphologyTendinopathyType = table.Column<byte>(nullable: false),
                    IsSignalIncreaseInPDAndT1w = table.Column<bool>(nullable: false),
                    IsGanglion = table.Column<bool>(nullable: false),
                    BladderPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BladderFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BladderFindings_BladderPages_BladderPageId",
                        column: x => x.BladderPageId,
                        principalTable: "BladderPages",
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
                    IsCalcification = table.Column<bool>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    IsDiaphyseal = table.Column<bool>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    ContrastHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsSeptetedOrChambered = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCalcificationCentral = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsGreaseSignal = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintensity = table.Column<bool>(nullable: false),
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
                    IsAnotherLesion = table.Column<bool>(nullable: false),
                    HipLocalizer = table.Column<int>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsTransientBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsOsteochondralFragment = table.Column<bool>(nullable: false),
                    IsPseudarthrosis = table.Column<bool>(nullable: false),
                    FpfClassificationType = table.Column<byte>(nullable: false),
                    FpfNotFurtherSpecifiedType = table.Column<byte>(nullable: false),
                    TrochantericRegionFractureFormType = table.Column<byte>(nullable: false),
                    SimplePertrochantericType = table.Column<byte>(nullable: false),
                    TrochantericRuptureType = table.Column<byte>(nullable: false),
                    MultiFragmentalPertrochantericType = table.Column<byte>(nullable: false),
                    IntertrochantericType = table.Column<byte>(nullable: false),
                    FemoralNeckFractureFormType = table.Column<byte>(nullable: false),
                    SubcapitalType = table.Column<byte>(nullable: false),
                    TranscervicalType = table.Column<byte>(nullable: false),
                    ShearFractureAngleType = table.Column<byte>(nullable: false),
                    FemoralHeadFractureFormType = table.Column<byte>(nullable: false),
                    ShearFractureType = table.Column<byte>(nullable: false),
                    ImpressionFractureType = table.Column<byte>(nullable: false),
                    FfsLocalizationType = table.Column<byte>(nullable: false),
                    FfsFractureFormType = table.Column<byte>(nullable: false),
                    SimpleFractureType = table.Column<byte>(nullable: false),
                    WedgeFractureType = table.Column<byte>(nullable: false),
                    MultiFragmentaryFractureType = table.Column<byte>(nullable: false),
                    FsfNotFurtherSpecifiedType = table.Column<byte>(nullable: false),
                    FaClassificationType = table.Column<byte>(nullable: false),
                    FractureWallAbutmentPartialJointInvolvementType = table.Column<byte>(nullable: false),
                    TransverseFracturePartialJointInvolvementType = table.Column<byte>(nullable: false),
                    FractureBothAbutmentsCompleteJointInvolvementType = table.Column<byte>(nullable: false),
                    AcetabularFractureNotFurtherSpecifiedType = table.Column<byte>(nullable: false),
                    FbClassificationType = table.Column<byte>(nullable: false),
                    FbFractureFormAType = table.Column<byte>(nullable: false),
                    FbFractureFormA1SubType = table.Column<byte>(nullable: false),
                    FbFractureFormA2SubType = table.Column<byte>(nullable: false),
                    FbFractureFormA3SubType = table.Column<byte>(nullable: false),
                    FbFractureFormBType = table.Column<byte>(nullable: false),
                    FbFractureFormB1SubType = table.Column<byte>(nullable: false),
                    FbFractureFormB2SubType = table.Column<byte>(nullable: false),
                    FbFractureFormB3SubType = table.Column<byte>(nullable: false),
                    FbFractureFormCType = table.Column<byte>(nullable: false),
                    FbFractureFormC1SubType = table.Column<byte>(nullable: false),
                    FbFractureFormC2SubType = table.Column<byte>(nullable: false),
                    FbFractureFormC3SubType = table.Column<byte>(nullable: false),
                    PelvicFractureNotFurtherSpecifiedType = table.Column<byte>(nullable: false),
                    LocalizationFemoralNeckType = table.Column<byte>(nullable: false),
                    IsHypointenseLine = table.Column<bool>(nullable: false),
                    BoneWidthType = table.Column<byte>(nullable: false),
                    WideEdemaMeasurementCoronaryType = table.Column<byte>(nullable: false),
                    IsCorrespondingHypointensityT1w = table.Column<bool>(nullable: false),
                    IsPeriostealOedema = table.Column<bool>(nullable: false),
                    IsLowSignalLine = table.Column<bool>(nullable: false),
                    IsLowSignalArea = table.Column<bool>(nullable: false),
                    IsArticularSurfaceCollapseCortical = table.Column<bool>(nullable: false),
                    IsLiquidFilledSubchondralGap = table.Column<bool>(nullable: false),
                    OsteochondralFragmentInMm = table.Column<int>(nullable: true),
                    IsCMEnhancementPerifocal = table.Column<bool>(nullable: false),
                    IsSubchondralFracture = table.Column<bool>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    ExpansionHipLocalizer = table.Column<int>(nullable: false),
                    IsOsSacrum = table.Column<bool>(nullable: false),
                    IsOsSacrumRight = table.Column<bool>(nullable: false),
                    IsOsSacrumLeft = table.Column<bool>(nullable: false),
                    TbmeDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsDoubleLineCharacterT2w = table.Column<bool>(nullable: false),
                    IsInverselyRelatedToThe = table.Column<bool>(nullable: false),
                    IsAnterosuperior = table.Column<bool>(nullable: false),
                    IsAdjacentBoneMarrowEdema = table.Column<bool>(nullable: false),
                    MeasurementCoronaryInDegrees = table.Column<int>(nullable: true),
                    MeasurementSagittalinDegrees = table.Column<int>(nullable: true),
                    IsCoexistenceCoaxarthosis = table.Column<bool>(nullable: false),
                    IsBilateralDiagnosis = table.Column<bool>(nullable: false),
                    IsClassificationAccordingToARCO = table.Column<bool>(nullable: false),
                    AnfhCortexType = table.Column<byte>(nullable: false),
                    ClassificationAccordingToARCOType = table.Column<byte>(nullable: false),
                    AnfhDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsChondropathy = table.Column<bool>(nullable: false),
                    IsSubchondralCystsGeodes = table.Column<bool>(nullable: false),
                    IsSubchondralOedema = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsFreeJointBody = table.Column<bool>(nullable: false),
                    IsQuantity = table.Column<bool>(nullable: false),
                    IsLabrumLesion = table.Column<bool>(nullable: false),
                    IsLabrumHypertrophy = table.Column<bool>(nullable: false),
                    IsParalabralCysts = table.Column<bool>(nullable: false),
                    ChondropathyIntensityType = table.Column<byte>(nullable: false),
                    ExpansionType = table.Column<byte>(nullable: false),
                    IntensityType = table.Column<byte>(nullable: false),
                    IsIntrabonyAbscess = table.Column<bool>(nullable: false),
                    IntrabonyAbscessDiameterInMm = table.Column<int>(nullable: true),
                    IntrabonyAbscessSecondLayerInMm = table.Column<int>(nullable: true),
                    IsPenumbraSign = table.Column<bool>(nullable: false),
                    IsPeripheralCMEnhancement = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsSequester = table.Column<bool>(nullable: false),
                    SequesterDiameterInMm = table.Column<int>(nullable: true),
                    IsSequesterMoreThanLesion = table.Column<bool>(nullable: false),
                    IsNoKMEnhancement = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    PeriostealBoneApposition = table.Column<bool>(nullable: false),
                    IsDestruction = table.Column<bool>(nullable: false),
                    IsThinningScalopping = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealAbscessLargestLesionAxialInMm = table.Column<int>(nullable: true),
                    IsPeriostrupture = table.Column<bool>(nullable: false),
                    StadiumType = table.Column<byte>(nullable: false),
                    ODifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsBoneMarrowEdemaOs = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaOsRight = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdemaOsLeft = table.Column<bool>(nullable: false),
                    IsMuscleEdemaAdductors = table.Column<bool>(nullable: false),
                    IsIrregularityJoint = table.Column<bool>(nullable: false),
                    IsSecondaryCleftSign = table.Column<bool>(nullable: false),
                    IsSecondaryCleftSignRight = table.Column<bool>(nullable: false),
                    IsSecondaryCleftSignLeft = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsRectusAbdominisTendinopathy = table.Column<bool>(nullable: false),
                    IsRectusAbdominisTendinopathyRight = table.Column<bool>(nullable: false),
                    IsRectusAbdominisTendinopathyLeft = table.Column<bool>(nullable: false),
                    IsJointEffusionRight = table.Column<bool>(nullable: false),
                    IsJointEffusionLeft = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    IsHemorrhagic = table.Column<bool>(nullable: false),
                    IsSedimentation = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    BursitisLocalizationType = table.Column<byte>(nullable: false),
                    BursitisLimitationType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    BursitisHomogeneityType = table.Column<byte>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    SingleSelectionTumorHipLocalizer = table.Column<int>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    ExpansionSizeInMm = table.Column<int>(nullable: true),
                    Expansion2ndLayerSizeInMm = table.Column<int>(nullable: true),
                    Expansion3rdLayerSizeInMm = table.Column<int>(nullable: true),
                    IsContrastInSepta = table.Column<bool>(nullable: false),
                    IsCalcificationDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintensity = table.Column<bool>(nullable: false),
                    IsInfiltrationBoundary = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsWithinThePrimarilyAffectedBone = table.Column<bool>(nullable: false),
                    LocalSpreadType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    IsHistologicallySecured = table.Column<bool>(nullable: false),
                    HistologicallySecuredType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
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
                name: "FemaleGenderFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    AdditionalT1wSignal = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType1 = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogenityType1 = table.Column<byte>(nullable: false),
                    HeterogeneousType = table.Column<byte>(nullable: false),
                    DetailsT2wSignalHomogenityType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsComplexCystic = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsSeptaNodularParts = table.Column<bool>(nullable: false),
                    IsFocalThickening = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsHydrosalpinx = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsCapsuleOrPseudoCapsule = table.Column<bool>(nullable: false),
                    IsT2wIncrease = table.Column<bool>(nullable: false),
                    TransitionZoneType = table.Column<byte>(nullable: false),
                    IsClawSign = table.Column<bool>(nullable: false),
                    IsBridgingVesselSign = table.Column<bool>(nullable: false),
                    DegenerationType1 = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    LabiaMajoraSideType = table.Column<byte>(nullable: false),
                    LabiaMinoraSideType = table.Column<byte>(nullable: false),
                    SideSubType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    LocalizationSubType = table.Column<byte>(nullable: false),
                    LocalizationOfMassType = table.Column<byte>(nullable: false),
                    EndometriosisLocalizationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    AdditionalT2wSignal = table.Column<byte>(nullable: false),
                    ContrastEnhancementType2 = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogenityType2 = table.Column<byte>(nullable: false),
                    ContrastEnhancementType3 = table.Column<byte>(nullable: false),
                    IntactCervicalStromaRingHomogenityType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsPeritonealNodules = table.Column<bool>(nullable: false),
                    IsRectouterinePouch = table.Column<bool>(nullable: false),
                    IsAscites = table.Column<bool>(nullable: false),
                    IsAscitesT1wSignalIncrease = table.Column<bool>(nullable: false),
                    IsHemosiderin = table.Column<bool>(nullable: false),
                    IsFocal = table.Column<bool>(nullable: false),
                    IsGeneralized = table.Column<bool>(nullable: false),
                    IsUterus = table.Column<bool>(nullable: false),
                    IsParametria = table.Column<bool>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsTuboovarianAbscess1 = table.Column<bool>(nullable: false),
                    IsTuboovarianAbscess2 = table.Column<bool>(nullable: false),
                    IsEnlarged = table.Column<bool>(nullable: false),
                    IsTwistedOvarianVessel = table.Column<bool>(nullable: false),
                    IsPeripheralFollicularDisplacement = table.Column<bool>(nullable: false),
                    SurroundingDetailsType = table.Column<byte>(nullable: false),
                    IsOvarianVeinThrombosis = table.Column<bool>(nullable: false),
                    ExpansionInMm = table.Column<int>(nullable: true),
                    IsPeritonealContrastEnhancement = table.Column<bool>(nullable: false),
                    IsIleus = table.Column<bool>(nullable: false),
                    IsHydroureter = table.Column<bool>(nullable: false),
                    IsPID = table.Column<bool>(nullable: false),
                    IsHydrosalpinxT1wSignalIncrease = table.Column<bool>(nullable: false),
                    IsHeterogeneousNodularParts = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsUnifocal = table.Column<bool>(nullable: false),
                    IsMultifocal = table.Column<bool>(nullable: false),
                    IsOvary = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    WideningObstructionType = table.Column<byte>(nullable: false),
                    IsObstructionOfTheEndometrialCanal = table.Column<bool>(nullable: false),
                    IsCervixUteri = table.Column<bool>(nullable: false),
                    IsVagina = table.Column<bool>(nullable: false),
                    FigoStageType1 = table.Column<byte>(nullable: false),
                    FigoStageType2 = table.Column<byte>(nullable: false),
                    FigoStageDetailsType1 = table.Column<byte>(nullable: false),
                    FigoStageDetailsType2 = table.Column<byte>(nullable: false),
                    FigoStageAdditionalDetailsType1 = table.Column<byte>(nullable: false),
                    FigoStageAdditionalDetailsType2 = table.Column<byte>(nullable: false),
                    IsThickenedEndometrium = table.Column<bool>(nullable: false),
                    IsThickenedUterosacralLigaments = table.Column<bool>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsPossiblySuperinfectedOrNecroticAreas = table.Column<bool>(nullable: false),
                    IsUreter = table.Column<bool>(nullable: false),
                    IsMarginal = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsDegeneration1 = table.Column<bool>(nullable: false),
                    IsDegeneration2 = table.Column<bool>(nullable: false),
                    IsAbscess1 = table.Column<bool>(nullable: false),
                    IsAbscess2 = table.Column<bool>(nullable: false),
                    IsDetectionOfACapsule = table.Column<bool>(nullable: false),
                    IsExpansionBeyondTheCapsule = table.Column<bool>(nullable: false),
                    IsComplexCysticNodularParts = table.Column<bool>(nullable: false),
                    DceMriType = table.Column<byte>(nullable: false),
                    IsCentripetalEnhancement = table.Column<bool>(nullable: false),
                    IsBeakSign = table.Column<bool>(nullable: false),
                    PeritonealNodulesType = table.Column<byte>(nullable: false),
                    IsTubes = table.Column<bool>(nullable: false),
                    IsIntestine = table.Column<bool>(nullable: false),
                    IsFollicularCysts1 = table.Column<bool>(nullable: false),
                    IsFollicularCysts2 = table.Column<bool>(nullable: false),
                    IsCystadenofibroma1 = table.Column<bool>(nullable: false),
                    IsCystadenofibroma2 = table.Column<bool>(nullable: false),
                    IsSalpingitis1 = table.Column<bool>(nullable: false),
                    IsSalpingitis2 = table.Column<bool>(nullable: false),
                    IsKrukenbergTumor1 = table.Column<bool>(nullable: false),
                    IsKrukenbergTumor2 = table.Column<bool>(nullable: false),
                    IsDetailsT2wSignalIncrease = table.Column<bool>(nullable: false),
                    IsPolycysticChanges = table.Column<bool>(nullable: false),
                    IsCentralStromaEnlargement = table.Column<bool>(nullable: false),
                    IsSurroundingT2wSignalIncrease = table.Column<bool>(nullable: false),
                    IsEnlargementOfTheCentralAfollicularStromas = table.Column<bool>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsFocalOrParietalT1wSignalIncrease = table.Column<bool>(nullable: false),
                    IsEnlargedOvary = table.Column<bool>(nullable: false),
                    IsT2wSignalIncrease = table.Column<bool>(nullable: false),
                    IsOvarianMass = table.Column<bool>(nullable: false),
                    IsHematosalpinx = table.Column<bool>(nullable: false),
                    IsIpsilateralUterineDeviation = table.Column<bool>(nullable: false),
                    ComplexCysticType = table.Column<byte>(nullable: false),
                    IsOtherIntestineParts = table.Column<bool>(nullable: false),
                    IsDilatedLumen = table.Column<bool>(nullable: false),
                    IsIntraluminalFluid = table.Column<bool>(nullable: false),
                    UterusLocation = table.Column<byte>(nullable: false),
                    SizeUterusAxialInMm = table.Column<int>(nullable: true),
                    SecondPlaneOrthogonalInMm = table.Column<int>(nullable: true),
                    CraniocaudalInMm = table.Column<int>(nullable: true),
                    DiameterOfTheEndometriumInMm = table.Column<int>(nullable: true),
                    DiameterOfEndometrialMyometrialZoneInMm = table.Column<int>(nullable: true),
                    IsMucosalOrSubmucosal = table.Column<bool>(nullable: false),
                    IsMucosalOrSubmucosalPedunculated = table.Column<bool>(nullable: false),
                    MucosalOrSubmucosalLengthInMm = table.Column<int>(nullable: true),
                    IsIntramural = table.Column<bool>(nullable: false),
                    IsSubserous = table.Column<bool>(nullable: false),
                    IsSubserousPedunculated = table.Column<bool>(nullable: false),
                    SubserousLengthInMm = table.Column<int>(nullable: true),
                    IsExtensionIntoTheLigamentumLatumUteri = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsAbnormalVesselCollection = table.Column<bool>(nullable: false),
                    IsCentralNidus = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsWideningOfTheInternalUterineOstium = table.Column<bool>(nullable: false),
                    IsIntactRingOfTheCervicalStroma = table.Column<bool>(nullable: false),
                    FigoClassificationLocation1 = table.Column<int>(nullable: false),
                    FigoClassificationLocation2 = table.Column<int>(nullable: false),
                    DegenerationType2 = table.Column<byte>(nullable: false),
                    IsTorsion1 = table.Column<bool>(nullable: false),
                    IsTorsion2 = table.Column<bool>(nullable: false),
                    IsFocalSignalVoidIntrauterine = table.Column<bool>(nullable: false),
                    IsMarkedUterineVessels = table.Column<bool>(nullable: false),
                    IsIntactCervicalStromaRing = table.Column<bool>(nullable: false),
                    IsDetailsCapsule = table.Column<bool>(nullable: false),
                    IsAlteredInternalStructureCapsule = table.Column<bool>(nullable: false),
                    IsCorpusUteri = table.Column<bool>(nullable: false),
                    IsPelvisWall = table.Column<bool>(nullable: false),
                    Is1BMacroinvasiveLesion1 = table.Column<bool>(nullable: false),
                    Is1BMacroinvasiveLesion2 = table.Column<bool>(nullable: false),
                    IsFocalSignalVoidsInTheCervicalCanal = table.Column<bool>(nullable: false),
                    IsMarkedCervicalVessels = table.Column<bool>(nullable: false),
                    IsFistula = table.Column<bool>(nullable: false),
                    IsVesicovaginal = table.Column<bool>(nullable: false),
                    IsRectovaginal = table.Column<bool>(nullable: false),
                    IsParavaginalSoftTissue = table.Column<bool>(nullable: false),
                    IsPelvicWall = table.Column<bool>(nullable: false),
                    IsPeritoneum = table.Column<bool>(nullable: false),
                    IsBartholinitis1 = table.Column<bool>(nullable: false),
                    IsBartholinitis2 = table.Column<bool>(nullable: false),
                    IsFluidDebrisLevel = table.Column<bool>(nullable: false),
                    IsVaginalDisplacement = table.Column<bool>(nullable: false),
                    IsPerineum = table.Column<bool>(nullable: false),
                    IsUrethra = table.Column<bool>(nullable: false),
                    IsAnalSphincter = table.Column<bool>(nullable: false),
                    IsAnusOrRectum = table.Column<bool>(nullable: false),
                    IsUrethralLeiomyoma1 = table.Column<bool>(nullable: false),
                    IsUrethralLeiomyoma2 = table.Column<bool>(nullable: false),
                    IsUrethralMetastasis1 = table.Column<bool>(nullable: false),
                    IsUrethralMetastasis2 = table.Column<bool>(nullable: false),
                    IsSoftTissueSwelling = table.Column<bool>(nullable: false),
                    IsFourniersGangrene = table.Column<bool>(nullable: false),
                    IsVenousThrombosis = table.Column<bool>(nullable: false),
                    IsT2wSignalIncreasePerivascular = table.Column<bool>(nullable: false),
                    IsCystOfSkenesGlands = table.Column<bool>(nullable: false),
                    IsUrethralDiverticula = table.Column<bool>(nullable: false),
                    IsHypointenseCapsule = table.Column<bool>(nullable: false),
                    IsSpicula = table.Column<bool>(nullable: false),
                    IsNodular = table.Column<bool>(nullable: false),
                    IsLigamentousThickening = table.Column<bool>(nullable: false),
                    IsMushroomSign = table.Column<bool>(nullable: false),
                    IsShading = table.Column<bool>(nullable: false),
                    IsMultifocalSignalIncreaseT1w = table.Column<bool>(nullable: false),
                    IsMultifocalSignalIncreaseT2w = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsComplex = table.Column<bool>(nullable: false),
                    IsDetectionOfBloodClots = table.Column<bool>(nullable: false),
                    IsInternalBleeding = table.Column<bool>(nullable: false),
                    DepthOfInfiltrationType = table.Column<byte>(nullable: false),
                    SubperitonealInfiltrationType = table.Column<byte>(nullable: false),
                    IsPerifocalFatTissueObliteration = table.Column<bool>(nullable: false),
                    IsPerifocalTighteningOrShortening = table.Column<bool>(nullable: false),
                    ComplicationsType = table.Column<byte>(nullable: false),
                    IsAtTheLevelOfTheUreterostium = table.Column<bool>(nullable: false),
                    IsPrestenoticDilatation = table.Column<bool>(nullable: false),
                    IsPoststenoticCollapse = table.Column<bool>(nullable: false),
                    IsPosteriorDisplacementOfTheUterus = table.Column<bool>(nullable: false),
                    IsPosteriorDisplacementOfTheOvaries = table.Column<bool>(nullable: false),
                    IsKissingOvaries = table.Column<bool>(nullable: false),
                    IsCranialDisplacementOfThePosteriorFornixVaginae = table.Column<bool>(nullable: false),
                    IsDisplacementOfIntestinalLoops = table.Column<bool>(nullable: false),
                    IsMoreThan1LesionSamePathology = table.Column<bool>(nullable: false),
                    FemaleGenderPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FemaleGenderFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FemaleGenderFindings_FemaleGenderPages_FemaleGenderPageId",
                        column: x => x.FemaleGenderPageId,
                        principalTable: "FemaleGenderPages",
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
                name: "LymphNodesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<int>(nullable: false),
                    Is12to2 = table.Column<bool>(nullable: false),
                    Is2to4oclock = table.Column<bool>(nullable: false),
                    Is4to6oclock = table.Column<bool>(nullable: false),
                    Is6to8oclock = table.Column<bool>(nullable: false),
                    Is8to10oclock = table.Column<bool>(nullable: false),
                    Is10to12oclock = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MaxShortAxisDiameter = table.Column<int>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    LimitationType = table.Column<byte>(nullable: false),
                    LymphNodesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_LymphNodesPages_LymphNodesPageId",
                        column: x => x.LymphNodesPageId,
                        principalTable: "LymphNodesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MaleGenderFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsSignalLossFlowVoid = table.Column<bool>(nullable: false),
                    IsMarginalCMEnhancement = table.Column<bool>(nullable: false),
                    IsEpididymis = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    SignalLossFlowVoidType = table.Column<byte>(nullable: false),
                    MainFeaturesLocalizationType = table.Column<byte>(nullable: false),
                    UrethraType = table.Column<byte>(nullable: false),
                    SignalT1wSliderType = table.Column<byte>(nullable: false),
                    SignalT2wSliderType = table.Column<byte>(nullable: false),
                    PenisMassCMEnhancementType = table.Column<byte>(nullable: false),
                    ScrotumMassLocalizationType = table.Column<byte>(nullable: false),
                    ScrotumMassSignalT1wSliderType = table.Column<byte>(nullable: false),
                    ScrotumMassSignalT2wSliderType = table.Column<byte>(nullable: false),
                    IsSeptations = table.Column<bool>(nullable: false),
                    SeptationsType = table.Column<byte>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsCysticChanges = table.Column<bool>(nullable: false),
                    IsCentralNidus = table.Column<bool>(nullable: false),
                    IsVascularAccumulation = table.Column<bool>(nullable: false),
                    ScrotumMassCMEnhancementType = table.Column<byte>(nullable: false),
                    ScrotumMassHomogeneity01Type = table.Column<byte>(nullable: false),
                    ScrotumMassHomogeneity02Type = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsDistension = table.Column<bool>(nullable: false),
                    IsAirInclusions = table.Column<bool>(nullable: false),
                    IsCircumscribedFluidAccumulation = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    ExpansionInMm = table.Column<int>(nullable: true),
                    IsFascialThickening = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsTunicaAlbuginea = table.Column<bool>(nullable: false),
                    IsTesticles = table.Column<bool>(nullable: false),
                    IsVasDeferens = table.Column<bool>(nullable: false),
                    IsPerifocalEdema = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsHomogeneous = table.Column<bool>(nullable: false),
                    IsHeterogeneous = table.Column<bool>(nullable: false),
                    IsDuctusDeferensRight = table.Column<bool>(nullable: false),
                    IsDuctusDeferensLeft = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    ExpansionType = table.Column<byte>(nullable: false),
                    NodularComponentsType = table.Column<byte>(nullable: false),
                    DirectionType = table.Column<byte>(nullable: false),
                    TunicaAlbugineaType = table.Column<byte>(nullable: false),
                    IsCorpusCavernosumRight = table.Column<bool>(nullable: false),
                    IsCorpusCavernosumLeft = table.Column<bool>(nullable: false),
                    IsCorpusSpongiosum = table.Column<bool>(nullable: false),
                    IsFocalT2wCorpusCavernosumRight = table.Column<bool>(nullable: false),
                    IsFocalT2wCorpusCavernosumLeft = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsScrotalHematocele = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisPenisTraumaType = table.Column<byte>(nullable: false),
                    SignalBehaviourT2wType = table.Column<byte>(nullable: false),
                    CMEnhancementType = table.Column<byte>(nullable: false),
                    IsScrotalExpansion = table.Column<bool>(nullable: false),
                    IsFocalPlaquesOfTheTunicaAlbuginea = table.Column<bool>(nullable: false),
                    IsT1wHypointense = table.Column<bool>(nullable: false),
                    IsT2wHypointense = table.Column<bool>(nullable: false),
                    ExampleThicknessInMm = table.Column<int>(nullable: true),
                    IsLocalizationCorpusCavernosumRight = table.Column<bool>(nullable: false),
                    IsLocalizationCorpusCavernosumLeft = table.Column<bool>(nullable: false),
                    IsLocalizationCorpusSpongiosum = table.Column<bool>(nullable: false),
                    CMEnhancementFocalPlaquesType = table.Column<byte>(nullable: false),
                    IsFocalSignalVoids = table.Column<bool>(nullable: false),
                    IsFluidAroundProsthesis = table.Column<bool>(nullable: false),
                    IsProsthesisDefect = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisInfection01Type = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisInfection02Type = table.Column<byte>(nullable: false),
                    IsAdjacentTo = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisMainFeatures01Type = table.Column<byte>(nullable: false),
                    PenisMassHomogeneity01Type = table.Column<byte>(nullable: false),
                    PenisMassHomogeneity02Type = table.Column<byte>(nullable: false),
                    IsAdjacentStructuresCorpusSpongiosum = table.Column<bool>(nullable: false),
                    IsAdjacentStructuresCorpusCavernosum = table.Column<bool>(nullable: false),
                    CorpusCavernosumRight = table.Column<bool>(nullable: false),
                    CorpusCavernosumLeft = table.Column<bool>(nullable: false),
                    IsUrethra = table.Column<bool>(nullable: false),
                    IsExulceration = table.Column<bool>(nullable: false),
                    IsScrotum = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisPenisMass01Type = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisPenisMass02Type = table.Column<byte>(nullable: false),
                    TesticlesType = table.Column<byte>(nullable: false),
                    IsDiscontinuityOfTheTunicaAlbugineaLeft = table.Column<bool>(nullable: false),
                    IsDiscontinuityOfTheTunicaAlbugineaRight = table.Column<bool>(nullable: false),
                    IsHematocele = table.Column<bool>(nullable: false),
                    IsScrotal = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisScrotumTraumaType = table.Column<byte>(nullable: false),
                    IsNonDisplacing = table.Column<bool>(nullable: false),
                    IsCryptorchidismRight = table.Column<bool>(nullable: false),
                    IsCryptorchidismLeft = table.Column<bool>(nullable: false),
                    IsTesticularAtrophyRight = table.Column<bool>(nullable: false),
                    IsTesticularAtrophyLeft = table.Column<bool>(nullable: false),
                    LocalizationOfTheNondescendedType = table.Column<byte>(nullable: false),
                    TesticlesSignalT2wSliderType = table.Column<byte>(nullable: false),
                    TesticlesCMEnhancement = table.Column<byte>(nullable: false),
                    IsHomogeneousTesticles = table.Column<bool>(nullable: false),
                    IsHeterogeneousTesticles = table.Column<bool>(nullable: false),
                    EpididymisSignalT2wSliderType = table.Column<byte>(nullable: false),
                    EpididymisCMEnhancement = table.Column<byte>(nullable: false),
                    IsHomogeneousEpididymis = table.Column<bool>(nullable: false),
                    IsHeterogeneousEpididymis = table.Column<bool>(nullable: false),
                    SurroundingSoftTissueSignalT1wSliderType = table.Column<byte>(nullable: false),
                    SurroundingSoftTissueSignalT2wSliderType = table.Column<byte>(nullable: false),
                    SurroundingSoftTissueCMEnhancement = table.Column<byte>(nullable: false),
                    IsDiscontinuityOfTheTunicaAlbuginea = table.Column<bool>(nullable: false),
                    IsVenousInfarction = table.Column<bool>(nullable: false),
                    IsSinusTract = table.Column<bool>(nullable: false),
                    IsCutaneousFistula = table.Column<bool>(nullable: false),
                    IsAirFluidLevel = table.Column<bool>(nullable: false),
                    IsPyrocele = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisScrotumInfectionInflammationType = table.Column<byte>(nullable: false),
                    IsEpididymitisFournierGangrene = table.Column<bool>(nullable: false),
                    IsEpididymoorchitis = table.Column<bool>(nullable: false),
                    IsEnlargedTesticle = table.Column<bool>(nullable: false),
                    IsEnlargedTesticleRight = table.Column<bool>(nullable: false),
                    IsEnlargedTesticleLeft = table.Column<bool>(nullable: false),
                    IsEnlargedEpididymis = table.Column<bool>(nullable: false),
                    IsEnlargedEpididymisRight = table.Column<bool>(nullable: false),
                    IsEnlargedEpididymisLeft = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisScrotumMassType = table.Column<byte>(nullable: false),
                    ScrotumMassInternalChangeLocalizationType = table.Column<byte>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    FatType = table.Column<byte>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsWashout = table.Column<bool>(nullable: false),
                    IsEarlyArterialCmEnhancement = table.Column<bool>(nullable: false),
                    IsTunicaVaginalis = table.Column<bool>(nullable: false),
                    IsCremasterMuscle = table.Column<bool>(nullable: false),
                    IsTesticularArtery = table.Column<bool>(nullable: false),
                    IsTesticularArteryRight = table.Column<bool>(nullable: false),
                    IsTesticularArteryLeft = table.Column<bool>(nullable: false),
                    IsPampiniformPlexus = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisScrotumMassType01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisScrotumMassType02 = table.Column<byte>(nullable: false),
                    IsScrotalPearl01 = table.Column<bool>(nullable: false),
                    IsScrotalPearl02 = table.Column<bool>(nullable: false),
                    IsSpermaticCordLipoma01 = table.Column<bool>(nullable: false),
                    IsSpermaticCordLipoma02 = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    SeminalVesiclesInfectionInflammationCmEnhancementType = table.Column<byte>(nullable: false),
                    IsDiffuseWallThickening = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    IsParietal = table.Column<bool>(nullable: false),
                    IsSeptal = table.Column<bool>(nullable: false),
                    SeminalVesicleChannelType = table.Column<byte>(nullable: false),
                    IsSeminalVesiculitis = table.Column<bool>(nullable: false),
                    SeminalVesiclesMassSignalT2wSliderType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisSeminalVesiclesMassMainFeatures01Type = table.Column<byte>(nullable: false),
                    IsCircumscribedFluidCollection = table.Column<bool>(nullable: false),
                    IsT1wSignalBoost = table.Column<bool>(nullable: false),
                    IsCysticNecrotic = table.Column<bool>(nullable: false),
                    IsDilatationOfSeminalVesicularTubules = table.Column<bool>(nullable: false),
                    CMEnhancementSeminalVesiclesMassType = table.Column<byte>(nullable: false),
                    HomogeneitySeminalVesiclesMassType = table.Column<byte>(nullable: false),
                    IsProstate = table.Column<bool>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisSeminalVesiclesMass01Type = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisSeminalVesiclesMass02Type = table.Column<byte>(nullable: false),
                    MaleGenderPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaleGenderFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaleGenderFindings_MaleGenderPages_MaleGenderPageId",
                        column: x => x.MaleGenderPageId,
                        principalTable: "MaleGenderPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PelvicFloorFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsVaginaLossOfTheHShape = table.Column<bool>(nullable: false),
                    IsPosteriorDislocationOfTheVaginaFornix = table.Column<bool>(nullable: false),
                    IsBladderSaddlebagSign = table.Column<bool>(nullable: false),
                    IsLesionPeriurethralLigament = table.Column<bool>(nullable: false),
                    IsLesionPeriurethralLigamentRight = table.Column<bool>(nullable: false),
                    IsLesionPeriurethralLigamentLeft = table.Column<bool>(nullable: false),
                    IsLesionPeriurethralLigamentSuspicionOf = table.Column<bool>(nullable: false),
                    IsLesionParaurethralLigament = table.Column<bool>(nullable: false),
                    IsLesionParaurethralLigamentRight = table.Column<bool>(nullable: false),
                    IsLesionParaurethralLigamentLeft = table.Column<bool>(nullable: false),
                    IsLesionParaurethralLigamentSuspicionOf = table.Column<bool>(nullable: false),
                    IsPubourethralLigamentLesion = table.Column<bool>(nullable: false),
                    IsPubourethralLigamentLesionRight = table.Column<bool>(nullable: false),
                    IsPubourethralLigamentLesionLeft = table.Column<bool>(nullable: false),
                    IsPubourethralLigamentLesionSuspicionOf = table.Column<bool>(nullable: false),
                    IsLesionOfOuterSphincterMuscle = table.Column<bool>(nullable: false),
                    IsOuterSsl = table.Column<bool>(nullable: false),
                    SslOuterType = table.Column<byte>(nullable: false),
                    SslLesionOuterSphincterMuscleType = table.Column<byte>(nullable: false),
                    IsInnerSphincterLesion = table.Column<bool>(nullable: false),
                    IsInnerSsl = table.Column<bool>(nullable: false),
                    SslInnerType = table.Column<byte>(nullable: false),
                    SslLesionInnerSphincterMuscleType = table.Column<byte>(nullable: false),
                    IsLesionPuborectalisMuscle = table.Column<bool>(nullable: false),
                    PuborectalisLesionType = table.Column<byte>(nullable: false),
                    IsLesionMPuborectalisRight = table.Column<bool>(nullable: false),
                    IsLesionMPuborectalisLeft = table.Column<bool>(nullable: false),
                    IsMPuborectalisSuspicionOf = table.Column<bool>(nullable: false),
                    IsLesionMIliococcygeusMuscle = table.Column<bool>(nullable: false),
                    MIliococcygeusLesionType = table.Column<byte>(nullable: false),
                    IsLesionMIliococcygeusRight = table.Column<bool>(nullable: false),
                    IsLesionMIliococcygeusLeft = table.Column<bool>(nullable: false),
                    IsMIliococcygeusSuspicionOf = table.Column<bool>(nullable: false),
                    IsLesionPubococygeusMuscle = table.Column<bool>(nullable: false),
                    MPubococygeusLesionType = table.Column<byte>(nullable: false),
                    IsLesionMPubococygeusRight = table.Column<bool>(nullable: false),
                    IsLesionMPubococygeusLeft = table.Column<bool>(nullable: false),
                    IsMPubococygeusSuspicionOf = table.Column<bool>(nullable: false),
                    IsCystocele = table.Column<bool>(nullable: false),
                    MaxCraniocaudalExtensioToPlcInMm = table.Column<int>(nullable: true),
                    CraniocaudalExtensioToPlcPhaseType = table.Column<byte>(nullable: false),
                    CraniocaudalExtensioToPlcGradingInMm = table.Column<byte>(nullable: false),
                    CraniocaudalExtensionInReferenceToMplType = table.Column<byte>(nullable: false),
                    CraniocaudalExtensionInReferenceToMlpInMm = table.Column<int>(nullable: true),
                    CraniocaudalExtensionInReferenceToMlpPhaseType = table.Column<byte>(nullable: false),
                    CraniocaudalExtensionInReferenceToMplGradingInMm = table.Column<byte>(nullable: false),
                    IsUrethrovesicalJunctionKinking = table.Column<bool>(nullable: false),
                    IsAnteriorUrethralAngulation = table.Column<bool>(nullable: false),
                    AnteriorUrethralAngulationInDegrees = table.Column<int>(nullable: true),
                    IsUterineVaginalProlapse = table.Column<bool>(nullable: false),
                    MaxMiddleCraniocaudalExtensionToPclInMm = table.Column<int>(nullable: true),
                    MiddleCraniocaudalExtensionToPclPhaseType = table.Column<byte>(nullable: false),
                    MiddleCraniocaudalExtensionToPclGradingInMm = table.Column<byte>(nullable: false),
                    MiddleCraniocoudalExtensionMlpPositionType = table.Column<byte>(nullable: false),
                    MiddleCraniocoudalExtensionToMPLInMm = table.Column<int>(nullable: true),
                    MiddleCraniocaudalExtensionToMplPhaseType = table.Column<byte>(nullable: false),
                    MiddleCraniocaudalExtensionToMplGradingInMm = table.Column<byte>(nullable: false),
                    IsUterineProlapseExceedingGenital = table.Column<bool>(nullable: false),
                    IsEversionOfTheVaginalWalls = table.Column<bool>(nullable: false),
                    IsHorizontalShiftOfTheVaginalAxis = table.Column<bool>(nullable: false),
                    IsEvidenceOfLargeUterusMyoma = table.Column<bool>(nullable: false),
                    IsEnterocele = table.Column<bool>(nullable: false),
                    EnterocelePhaseType = table.Column<byte>(nullable: false),
                    IsIncarceration = table.Column<bool>(nullable: false),
                    IsCulDeSacFailureOfPassage = table.Column<bool>(nullable: false),
                    IsPerienericFreeFluid = table.Column<bool>(nullable: false),
                    IsPerinealHernia = table.Column<bool>(nullable: false),
                    IsPeritoneocele = table.Column<bool>(nullable: false),
                    PeritoneocelePhaseType = table.Column<byte>(nullable: false),
                    IsFreeFluid = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsSigmoidocele = table.Column<bool>(nullable: false),
                    SigmoidocelePhaseType = table.Column<byte>(nullable: false),
                    IsSigmoidoceleIncarceration = table.Column<bool>(nullable: false),
                    IsSigmoidoceleFailureOfPassage = table.Column<bool>(nullable: false),
                    IsSigmoidocelePerisigmoidalFluid = table.Column<bool>(nullable: false),
                    IsAnteriorRectocele = table.Column<bool>(nullable: false),
                    ExpansionInReferenceToAnteriorRectalWallInMm = table.Column<int>(nullable: true),
                    AnteriorRectocelePhaseType = table.Column<byte>(nullable: false),
                    AnteriorRectoceleGradingInMm = table.Column<byte>(nullable: false),
                    IsIntraluminalCmRetentionAfterDefecation = table.Column<bool>(nullable: false),
                    IsPosteriorRectocele = table.Column<bool>(nullable: false),
                    IsLateralRectocele = table.Column<bool>(nullable: false),
                    LateralRectoceleDirectionType = table.Column<byte>(nullable: false),
                    IsRectalIntussusception = table.Column<bool>(nullable: false),
                    RectalIntussusceptionType = table.Column<byte>(nullable: false),
                    LongitudinalExpansionType = table.Column<byte>(nullable: false),
                    HorizontalExpansionType = table.Column<byte>(nullable: false),
                    IsPosteriorCompartmentFailureOfPassage = table.Column<bool>(nullable: false),
                    IsHiatalExtension = table.Column<bool>(nullable: false),
                    HiatalExtensionInMm = table.Column<int>(nullable: true),
                    HiatalExtensionPhaseType = table.Column<byte>(nullable: false),
                    HiatalExtensionGrading = table.Column<byte>(nullable: false),
                    IsDescendingPelvicFloor = table.Column<bool>(nullable: false),
                    DescendingPelvicFloorInMm = table.Column<int>(nullable: true),
                    DescendingPelvicFloorPhaseType = table.Column<byte>(nullable: false),
                    DescendingPelvicFloorGrading = table.Column<byte>(nullable: false),
                    IsCaudalAngulationOfLevatorPlate = table.Column<bool>(nullable: false),
                    IsAnorectalAngle = table.Column<bool>(nullable: false),
                    AnorectalAngleAtRestInDegrees = table.Column<int>(nullable: true),
                    AnorectalAngleWhilePressingInDegrees = table.Column<int>(nullable: true),
                    AnorectalAngleDuringDefecationInDegrees = table.Column<int>(nullable: true),
                    ReductionOfTheAnorectalAngleDuringPressing = table.Column<int>(nullable: true),
                    OpeningOfTheAnorectalAngleAtDefecation = table.Column<int>(nullable: true),
                    IsAbsentPelvicFloorDescentAtDefecation = table.Column<bool>(nullable: false),
                    IsEmphasizedPuborectalisMuscle = table.Column<bool>(nullable: false),
                    IsDelayedDefecation = table.Column<bool>(nullable: false),
                    IsIncreasedIntervalBetweenOpeningAndDefecation = table.Column<bool>(nullable: false),
                    IsIncompleteRectalEvacuation = table.Column<bool>(nullable: false),
                    PelvicFloorPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PelvicFloorFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PelvicFloorFindings_PelvicFloorPages_PelvicFloorPageId",
                        column: x => x.PelvicFloorPageId,
                        principalTable: "PelvicFloorPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProstataFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    LocalizationT1wSignalEnhancementType = table.Column<decimal>(nullable: false),
                    PatternType = table.Column<byte>(nullable: false),
                    TransitionaZoneTZLocalizerType = table.Column<int>(nullable: false),
                    SignalPowerType = table.Column<byte>(nullable: false),
                    IsSignalLossFlowVoid = table.Column<bool>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    TransitionaZoneTZCapsuleType = table.Column<byte>(nullable: false),
                    IsAnteriorFibromuscularStroma = table.Column<bool>(nullable: false),
                    IsCentralZone = table.Column<bool>(nullable: false),
                    IsEjaculatoryDuct = table.Column<bool>(nullable: false),
                    EjaculatoryDuctDirectionType = table.Column<byte>(nullable: false),
                    IsProstaticUrethra = table.Column<bool>(nullable: false),
                    IsLentiform = table.Column<bool>(nullable: false),
                    IsInfiltrationSpiculated = table.Column<bool>(nullable: false),
                    IsErasedCharcoalSign = table.Column<bool>(nullable: false),
                    IsTypicalBphNode = table.Column<bool>(nullable: false),
                    IsIncreasedDwiSignal = table.Column<bool>(nullable: false),
                    IncreasedDwiSignalType = table.Column<byte>(nullable: false),
                    DwiDiscreteType = table.Column<byte>(nullable: false),
                    IsAdcHypointensity = table.Column<bool>(nullable: false),
                    AdcHypointensityType = table.Column<byte>(nullable: false),
                    AdcDiscreteType = table.Column<byte>(nullable: false),
                    DynamicContrastEnhancedType = table.Column<byte>(nullable: false),
                    DceMrtNegativeType = table.Column<byte>(nullable: false),
                    ExtraprostaticGrowthType = table.Column<byte>(nullable: false),
                    PenetrationOfPseudocapsuleType = table.Column<byte>(nullable: false),
                    IsPseudocapsularBulgingSpiculated = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSeminalVesicles = table.Column<bool>(nullable: false),
                    SeminalVesiclesDirectionType = table.Column<byte>(nullable: false),
                    IsAlteredInternalStructure = table.Column<bool>(nullable: false),
                    IsFocalOrDiffuseT2wSignalReduction = table.Column<bool>(nullable: false),
                    IsSeparateFocalT2wSignalReduction = table.Column<bool>(nullable: false),
                    IsEnlargedEjaculatoryDuctWithT2wSignalReduction = table.Column<bool>(nullable: false),
                    IsObliterationOfProstateSeminalVesicleAngle = table.Column<bool>(nullable: false),
                    IsDirectInfiltrationPerContinuitatem = table.Column<bool>(nullable: false),
                    IsNeurovascularBundle = table.Column<bool>(nullable: false),
                    NeurovascularBundleDirectionType = table.Column<byte>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsExternalUrethrasphincter = table.Column<bool>(nullable: false),
                    IsMembranousUrethra = table.Column<bool>(nullable: false),
                    PiradsScoreSizeType = table.Column<byte>(nullable: false),
                    SliderPiradasScoreType = table.Column<byte>(nullable: false),
                    IndexLesionType = table.Column<byte>(nullable: false),
                    PiradsScoreTotal = table.Column<int>(nullable: true),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsSuspicionOf01 = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSuspicionOf02 = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosis01GranulomatousProstatitis = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosis02GranulomatousProstatitis = table.Column<bool>(nullable: false),
                    SideAsymmetryType = table.Column<byte>(nullable: false),
                    IsDisplacementOrDeformationInBph = table.Column<bool>(nullable: false),
                    PeripheralZonePZLocalizerType = table.Column<int>(nullable: false),
                    CentralZoneCZLocalizerType = table.Column<int>(nullable: false),
                    ProstataPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProstataFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProstataFindings_ProstataPages_ProstataPageId",
                        column: x => x.ProstataPageId,
                        principalTable: "ProstataPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RectumFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsUterus = table.Column<bool>(nullable: false),
                    IsVagina = table.Column<bool>(nullable: false),
                    IsSacrum = table.Column<bool>(nullable: false),
                    IsCoccygis = table.Column<bool>(nullable: false),
                    IsLevatorAniMuscle = table.Column<bool>(nullable: false),
                    IsUpperThird = table.Column<bool>(nullable: false),
                    IsMiddleThird = table.Column<bool>(nullable: false),
                    IsLowerThird = table.Column<bool>(nullable: false),
                    IsMesentericFatObliteration = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsPerforation = table.Column<bool>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsFocalWallThickening = table.Column<bool>(nullable: false),
                    IsUrinaryBladder = table.Column<bool>(nullable: false),
                    IsColon = table.Column<bool>(nullable: false),
                    IsRectum = table.Column<bool>(nullable: false),
                    IsAccompanyingAscites = table.Column<bool>(nullable: false),
                    MaximumDiameterInMm = table.Column<int>(nullable: true),
                    IsFistula = table.Column<bool>(nullable: false),
                    IsProstate = table.Column<bool>(nullable: false),
                    IsIleus = table.Column<bool>(nullable: false),
                    IsPeritonitis = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSeminalVesicles = table.Column<bool>(nullable: false),
                    IsTargetSign = table.Column<bool>(nullable: false),
                    IsFreeAir = table.Column<bool>(nullable: false),
                    IsDistanceToPectinateLine = table.Column<bool>(nullable: false),
                    DistanceToPectinateLine = table.Column<int>(nullable: true),
                    IsUpperPeritonealFoldInfiltration = table.Column<bool>(nullable: false),
                    IsMiddlePeritonealFoldInfiltration = table.Column<bool>(nullable: false),
                    RelationToPuborectalisMuscleType = table.Column<byte>(nullable: false),
                    PuborectalisMuscleDistance = table.Column<int>(nullable: true),
                    IsInfiltrationOfInternalSphicter = table.Column<bool>(nullable: false),
                    IsInfiltrationOfExternalSphicter = table.Column<bool>(nullable: false),
                    IsInfiltrationOfLevatorMuscle = table.Column<bool>(nullable: false),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    LocationAccordingToSslType = table.Column<byte>(nullable: false),
                    MaximumTumourDiameter = table.Column<int>(nullable: true),
                    MaximumCcExpansion = table.Column<int>(nullable: true),
                    RectalCarcinomaMorphologyType = table.Column<byte>(nullable: false),
                    HighT2wSignalIntensityMucinous = table.Column<bool>(nullable: false),
                    RectalCancerCraniallyToPuborectalisType = table.Column<byte>(nullable: false),
                    TumorGrowthOverMuscularisType = table.Column<byte>(nullable: false),
                    InfiltrationType = table.Column<byte>(nullable: false),
                    IsMSphincterAni = table.Column<bool>(nullable: false),
                    LowRectalCancerType = table.Column<byte>(nullable: false),
                    MinimumDistanceToMesorectalFasciaType = table.Column<byte>(nullable: false),
                    RectumCircumferencialTumorLocationType = table.Column<byte>(nullable: false),
                    MaximumExtramuralTumorExtension = table.Column<int>(nullable: true),
                    IsExtramuralVenousInfiltration = table.Column<bool>(nullable: false),
                    DiameterInfiltratedVeinType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    NumberOfDiverticulaType = table.Column<byte>(nullable: false),
                    SingularDiverticulaDiameter = table.Column<int>(nullable: true),
                    IsIntestinalWallThickening = table.Column<bool>(nullable: false),
                    IntestinalWallThickeningType = table.Column<byte>(nullable: false),
                    MaximumWallThickness = table.Column<int>(nullable: true),
                    LongitudinalExpansion = table.Column<int>(nullable: true),
                    IsIncreasedEnhancementOfIntestinalWall = table.Column<bool>(nullable: false),
                    SigmoidDiverticularDiseasePerforationType = table.Column<byte>(nullable: false),
                    AbscessMaximumDiameter = table.Column<int>(nullable: true),
                    AbscessMaximumDiameterType = table.Column<byte>(nullable: false),
                    IsPossibleCtGuidedDrainage = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsFreeFluid = table.Column<bool>(nullable: false),
                    IsHemorrhagic = table.Column<bool>(nullable: false),
                    ComplicationsFistulaType = table.Column<byte>(nullable: false),
                    IsPhlegmons = table.Column<bool>(nullable: false),
                    IsHansenAndStock = table.Column<bool>(nullable: false),
                    HansenAndStockType = table.Column<byte>(nullable: false),
                    IsClassificationOfDiverticularDisease = table.Column<bool>(nullable: false),
                    ClassificationOfDiverticularDiseaseType = table.Column<byte>(nullable: false),
                    ClassificationOfDiverticularDiseaseSubType = table.Column<byte>(nullable: false),
                    SigmoidDiverticularDiseaseDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    ExpansionSize = table.Column<int>(nullable: true),
                    Expansion2ndPlane = table.Column<int>(nullable: true),
                    Expansion3rdPlane = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    InternalChangeType = table.Column<byte>(nullable: false),
                    IsConglomerate = table.Column<bool>(nullable: false),
                    IsTumorNecrosis = table.Column<bool>(nullable: false),
                    IsMesentericFatStranding = table.Column<bool>(nullable: false),
                    SigmaMassKmEnhancementType = table.Column<byte>(nullable: false),
                    CmEnhancementInternalChangeType = table.Column<byte>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    GrowthPatternType = table.Column<byte>(nullable: false),
                    IsOcclusive = table.Column<bool>(nullable: false),
                    SigmaMassPerforationType = table.Column<byte>(nullable: false),
                    IsInvagination = table.Column<bool>(nullable: false),
                    IsInvaginationPrestenoticDilatation = table.Column<bool>(nullable: false),
                    IsInvaginationPoststenoticCollapse = table.Column<bool>(nullable: false),
                    IsInvaginationIleus = table.Column<bool>(nullable: false),
                    IsStenosisPrestenoticDilatation = table.Column<bool>(nullable: false),
                    IsStenosisPoststenoticCollapse = table.Column<bool>(nullable: false),
                    IsStenosisIleus = table.Column<bool>(nullable: false),
                    IsIntestinalWallNecroses = table.Column<bool>(nullable: false),
                    SigmaMassDiameter = table.Column<int>(nullable: true),
                    SigmaMassDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    SigmaMassDifferentialDiagnosis02Type = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisTStadiumType = table.Column<byte>(nullable: false),
                    TstadiumInfiltrationType = table.Column<byte>(nullable: false),
                    IsPeritoneum = table.Column<bool>(nullable: false),
                    IsAbdomenPelvicWall = table.Column<bool>(nullable: false),
                    IsSmallIntestine = table.Column<bool>(nullable: false),
                    IsLeftExternalIliacVessels = table.Column<bool>(nullable: false),
                    IsIleum = table.Column<bool>(nullable: false),
                    IsSigmoidColon = table.Column<bool>(nullable: false),
                    PatternsOfInflammationType = table.Column<byte>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    ThickeningSize = table.Column<int>(nullable: true),
                    MaxLongitudinalExpansion = table.Column<int>(nullable: true),
                    IsStratification = table.Column<bool>(nullable: false),
                    IsLossHaustration = table.Column<bool>(nullable: false),
                    WallAlterationType = table.Column<byte>(nullable: false),
                    IsLymphadenopathy = table.Column<bool>(nullable: false),
                    IsFatTissueStranding = table.Column<bool>(nullable: false),
                    IsFatTissueProliferation = table.Column<bool>(nullable: false),
                    IsMarkedVasaRecta = table.Column<bool>(nullable: false),
                    IsCombSign = table.Column<bool>(nullable: false),
                    ChronicBowelDiseaseKMEnhancementType = table.Column<byte>(nullable: false),
                    ChronicBowelKmEnhancementFormType = table.Column<byte>(nullable: false),
                    IsSubmucosalStripe = table.Column<bool>(nullable: false),
                    IsPerifocal = table.Column<bool>(nullable: false),
                    IsStricture = table.Column<bool>(nullable: false),
                    IsDilatation = table.Column<bool>(nullable: false),
                    IsPseudotumor = table.Column<bool>(nullable: false),
                    IsToxicMegacolon = table.Column<bool>(nullable: false),
                    ActivityType = table.Column<byte>(nullable: false),
                    ChronicBowelDiseaseDifferentialDiagnosisType01 = table.Column<byte>(nullable: false),
                    ChronicBowelDiseaseDifferentialDiagnosisType02 = table.Column<byte>(nullable: false),
                    IsT2wSignalBoostInPerifocal = table.Column<bool>(nullable: false),
                    DiameterOfTheAppendix = table.Column<int>(nullable: true),
                    LengthOfTheAppendix = table.Column<int>(nullable: true),
                    WallThickening = table.Column<int>(nullable: true),
                    IsT2wSignalBoostOfIntestinalWall = table.Column<bool>(nullable: false),
                    IsIntraluminalFluid = table.Column<bool>(nullable: false),
                    IsCecalWallThickening = table.Column<bool>(nullable: false),
                    IsArrowheadSign = table.Column<bool>(nullable: false),
                    IsCecalBarSign = table.Column<bool>(nullable: false),
                    IsWallEdemaOfIntestinalSegments = table.Column<bool>(nullable: false),
                    IsAppendicolith = table.Column<bool>(nullable: false),
                    IsObliterationOfSurroundingTissue = table.Column<bool>(nullable: false),
                    IsThickenedMesoappendix = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsPerityphliticAbscess = table.Column<bool>(nullable: false),
                    IsPeritonealInvolvement = table.Column<bool>(nullable: false),
                    IsAdhesions = table.Column<bool>(nullable: false),
                    IsAccompanyingInflammatoryPsoas = table.Column<bool>(nullable: false),
                    AppendicitisKMEnhancementType = table.Column<byte>(nullable: false),
                    AppendicitisInternalChangeType = table.Column<byte>(nullable: false),
                    AppendicitisInternalChangeSubType = table.Column<byte>(nullable: false),
                    IsKMEnhancementInTheEnvironment = table.Column<bool>(nullable: false),
                    AppendicitisInflammationStageType = table.Column<byte>(nullable: false),
                    AppendictisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    EpiploicAppendagitisLocalizationType = table.Column<byte>(nullable: false),
                    IsFatEquivalentMass = table.Column<bool>(nullable: false),
                    EpiploicAppendagitisDiameterInMm = table.Column<int>(nullable: true),
                    IsThickeningAdjacentToPeritoneum = table.Column<bool>(nullable: false),
                    IsAdjacentSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsThickeningAdjacentToWall = table.Column<bool>(nullable: false),
                    EpiploicAppendagitisDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsCoffeeBeanSign = table.Column<bool>(nullable: false),
                    IsWhirlSign = table.Column<bool>(nullable: false),
                    IsFreePerforation = table.Column<bool>(nullable: false),
                    MaximumDilatation = table.Column<int>(nullable: true),
                    FistulaType = table.Column<byte>(nullable: false),
                    FistulaLocalizationSSLType = table.Column<byte>(nullable: false),
                    FistulaLocalizer = table.Column<byte>(nullable: false),
                    FistulaEndType = table.Column<byte>(nullable: false),
                    IsAdditionalFistulaBranches = table.Column<bool>(nullable: false),
                    IsBlindEnding = table.Column<bool>(nullable: false),
                    StJamesClassificationType = table.Column<byte>(nullable: false),
                    MaxAbscessDiameter = table.Column<int>(nullable: true),
                    LengthOfTheFistula = table.Column<int>(nullable: true),
                    FistulaKMEnhancementType = table.Column<byte>(nullable: false),
                    IsT2wSignalElevation = table.Column<bool>(nullable: false),
                    LocationCraniocaudalType = table.Column<byte>(nullable: false),
                    IsFocalPerifocalFibrosis = table.Column<bool>(nullable: false),
                    IsFocalPerifocalAdhesions = table.Column<bool>(nullable: false),
                    IsAnalSphincterInvolvement = table.Column<bool>(nullable: false),
                    IsMAniInternus = table.Column<bool>(nullable: false),
                    IsMAniExternus = table.Column<bool>(nullable: false),
                    IsFistulaInMalignantTumor = table.Column<bool>(nullable: false),
                    IsFistulaInMalignantSuspicionOf = table.Column<bool>(nullable: false),
                    IsTumourRecurrence = table.Column<bool>(nullable: false),
                    AxialExpansion = table.Column<int>(nullable: true),
                    IsFistulaAfterRadiotherapyChemotherapy = table.Column<bool>(nullable: false),
                    IsFistulaAfterSurgery = table.Column<bool>(nullable: false),
                    IsPostinflammatoryFistulaTract = table.Column<bool>(nullable: false),
                    IsInflamedDiverticulum = table.Column<bool>(nullable: false),
                    IsAbsenceOfASeparatingFatLamellaBetweenBladderAndColon = table.Column<bool>(nullable: false),
                    IsAirInTheUrinaryBladder = table.Column<bool>(nullable: false),
                    IsFluidAndAirInVaginalFornix = table.Column<bool>(nullable: false),
                    IsUterineCervix = table.Column<bool>(nullable: false),
                    IsSphincter = table.Column<bool>(nullable: false),
                    IsAnalChannel = table.Column<bool>(nullable: false),
                    QuantityType = table.Column<byte>(nullable: false),
                    MaximumLength = table.Column<int>(nullable: true),
                    IsFocalWallThickeningUrinaryBladder = table.Column<bool>(nullable: false),
                    IsFocalWallThickeningColon = table.Column<bool>(nullable: false),
                    IsOsteomyelitis = table.Column<bool>(nullable: false),
                    IsSubcutaneousFatTissueSacrococcygeal = table.Column<bool>(nullable: false),
                    MoreThan2CmPosteriorToTheAnus = table.Column<bool>(nullable: false),
                    FistulaMorphologyType = table.Column<byte>(nullable: false),
                    IsCmEnhancementOfThePerifocalSoftTissue = table.Column<bool>(nullable: false),
                    IsInvolvementMLevatorAnMuscle = table.Column<bool>(nullable: false),
                    IsInvolvementOfAnalSphincters = table.Column<bool>(nullable: false),
                    IsInvolvementOfTheIschioanalFossa = table.Column<bool>(nullable: false),
                    FistulaInternalChangeType = table.Column<byte>(nullable: false),
                    ExpansionInMm = table.Column<int>(nullable: true),
                    RectumPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RectumFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RectumFindings_RectumPages_RectumPageId",
                        column: x => x.RectumPageId,
                        principalTable: "RectumPages",
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
                    IsDefaecography = table.Column<bool>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
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
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BladderFindings_BladderPageId",
                table: "BladderFindings",
                column: "BladderPageId");

            migrationBuilder.CreateIndex(
                name: "IX_BladderPages_ReportId",
                table: "BladderPages",
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
                name: "IX_ClinicFindings_AnamnesisPageId",
                table: "ClinicFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FemaleGenderFindings_FemaleGenderPageId",
                table: "FemaleGenderFindings",
                column: "FemaleGenderPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FemaleGenderPages_ReportId",
                table: "FemaleGenderPages",
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
                name: "IX_LymphNodesFindings_ImageFileId",
                table: "LymphNodesFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_LymphNodesPageId",
                table: "LymphNodesFindings",
                column: "LymphNodesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesPages_ReportId",
                table: "LymphNodesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MaleGenderFindings_MaleGenderPageId",
                table: "MaleGenderFindings",
                column: "MaleGenderPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MaleGenderPages_ReportId",
                table: "MaleGenderPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PelvicFloorFindings_PelvicFloorPageId",
                table: "PelvicFloorFindings",
                column: "PelvicFloorPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PelvicFloorPages_ReportId",
                table: "PelvicFloorPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PreviousOperationFindings_AnamnesisPageId",
                table: "PreviousOperationFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ProstataFindings_ProstataPageId",
                table: "ProstataFindings",
                column: "ProstataPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ProstataPages_ReportId",
                table: "ProstataPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RectumFindings_RectumPageId",
                table: "RectumFindings",
                column: "RectumPageId");

            migrationBuilder.CreateIndex(
                name: "IX_RectumPages_ReportId",
                table: "RectumPages",
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
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BladderFindingPresets");

            migrationBuilder.DropTable(
                name: "BladderFindings");

            migrationBuilder.DropTable(
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "ClinicFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FemaleGenderFindingPresets");

            migrationBuilder.DropTable(
                name: "FemaleGenderFindings");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "LymphNodesFindings");

            migrationBuilder.DropTable(
                name: "MaleGenderFindingPresets");

            migrationBuilder.DropTable(
                name: "MaleGenderFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PelvicFloorFindings");

            migrationBuilder.DropTable(
                name: "PreviousOperationFindings");

            migrationBuilder.DropTable(
                name: "ProstataFindings");

            migrationBuilder.DropTable(
                name: "RectumFindings");

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
                name: "BladderPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "FemaleGenderPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "LymphNodesPages");

            migrationBuilder.DropTable(
                name: "MaleGenderPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "PelvicFloorPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "ProstataPages");

            migrationBuilder.DropTable(
                name: "RectumPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
