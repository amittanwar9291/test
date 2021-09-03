using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.ElbowMRT.Repo.Migrations
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
                    LimitationType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientation = table.Column<bool>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPeriostealReactionSunBurst = table.Column<bool>(nullable: false),
                    IsCodmanTriangle = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsRimWithLowSignal = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false)
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
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    MainFeaturesDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    MainHomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSpaghettiLikeAppearanceOfTheNerve = table.Column<bool>(nullable: false),
                    IsDistractedNerveFasciclesAxialPomegranateSign = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsAlongMedianNerve = table.Column<bool>(nullable: false),
                    IsPressureErosionBonyErosion = table.Column<bool>(nullable: false),
                    IsMacrodactyly = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CAEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    HeterogenousType = table.Column<byte>(nullable: false)
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
                    XRayMonth = table.Column<byte>(nullable: true),
                    XRayYear = table.Column<int>(nullable: true),
                    IsCT = table.Column<bool>(nullable: false),
                    CTMonth = table.Column<byte>(nullable: true),
                    CTYear = table.Column<int>(nullable: true),
                    IsMRI = table.Column<bool>(nullable: false),
                    MRIMonth = table.Column<byte>(nullable: true),
                    MRIYear = table.Column<int>(nullable: true)
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
                name: "CartilagePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartilagePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartilagePages_Reports_ReportId",
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
                    IsXRay = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsFollowUp = table.Column<bool>(nullable: false),
                    TimeType = table.Column<byte>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false),
                    TCategoryType = table.Column<byte>(nullable: false)
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
                    IsFABSPosition = table.Column<bool>(nullable: false),
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
                name: "TendonsAndMusclesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TendonsAndMusclesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TendonsAndMusclesPages_Reports_ReportId",
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
                    IsSuspectedDiagnosis = table.Column<bool>(nullable: false),
                    TraumaMonth = table.Column<byte>(nullable: true),
                    TraumaYear = table.Column<int>(nullable: true),
                    IsEpicondylitis = table.Column<bool>(nullable: false),
                    IsLesionOfBicepsTendon = table.Column<bool>(nullable: false),
                    IsLesionOfTricepsTendon = table.Column<bool>(nullable: false),
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
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    IsEpiphyseal = table.Column<bool>(nullable: false),
                    IsMetaphyseal = table.Column<bool>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsGeographic = table.Column<bool>(nullable: false),
                    IsSessile = table.Column<bool>(nullable: false),
                    IsPedunculated = table.Column<bool>(nullable: false),
                    IsOrientation = table.Column<bool>(nullable: false),
                    IsSeptatedChambered = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsNidusT2wHyperintense = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsExpansile = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPeriostealReactionSunBurst = table.Column<bool>(nullable: false),
                    IsCodmanTriangle = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsRimWithLowSignal = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesionSameEntity = table.Column<bool>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsHumerusLateralEpicondyle = table.Column<bool>(nullable: false),
                    IsHumerusMedialEpicondyle = table.Column<bool>(nullable: false),
                    IsUlnaProximal = table.Column<bool>(nullable: false),
                    IsSupracondylarProcess = table.Column<bool>(nullable: false),
                    IsSupratrochlearFormen = table.Column<bool>(nullable: false),
                    IsRadioulnarSynostosis = table.Column<bool>(nullable: false),
                    FractureType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    GraduationType = table.Column<byte>(nullable: false),
                    AoClassificationType = table.Column<byte>(nullable: false),
                    NotFurtherSpecifiedType = table.Column<byte>(nullable: false),
                    FractureFormType = table.Column<byte>(nullable: false),
                    FractureFormDetailsType = table.Column<byte>(nullable: false),
                    LocalizationLongitudinalType = table.Column<byte>(nullable: false),
                    FractureFormSubType = table.Column<byte>(nullable: false),
                    DirectionType = table.Column<byte>(nullable: false),
                    IsDirectionStatusPost = table.Column<bool>(nullable: false),
                    ComplexDislocationFracturesType = table.Column<byte>(nullable: false),
                    IsComplexDislocationFracturesStatusPost = table.Column<bool>(nullable: false),
                    MonteggiaFractureType = table.Column<byte>(nullable: false),
                    IsRadialHead = table.Column<bool>(nullable: false),
                    IsOlecranon = table.Column<bool>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    IsSubchondralFracture = table.Column<bool>(nullable: false),
                    IsImpaction = table.Column<bool>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsEpicondylitisHumeri = table.Column<bool>(nullable: false),
                    IsRadial = table.Column<bool>(nullable: false),
                    IsUlnar = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    IsJointSpaceNarrowing = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    LooseBodyMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsMoreThanOneLooseBody = table.Column<bool>(nullable: false),
                    LooseBodyType = table.Column<byte>(nullable: false),
                    IsIntraosseousAbscess = table.Column<bool>(nullable: false),
                    IntraosseousAbscessSizeInMm = table.Column<int>(nullable: true),
                    IntraosseousAbscessSecondPlaneInMm = table.Column<int>(nullable: true),
                    IntraosseousAbscessThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsPenumbraSign = table.Column<bool>(nullable: false),
                    IsPeripheralContrastEnhancement = table.Column<bool>(nullable: false),
                    IsIntraosseousAbscessMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsSequester = table.Column<bool>(nullable: false),
                    SequesterSizeInMm = table.Column<int>(nullable: true),
                    SequesterSecondPlaneInMm = table.Column<int>(nullable: true),
                    SequesterThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsNoCmEnhancement = table.Column<bool>(nullable: false),
                    IsSequesterMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsThinningScalopping = table.Column<bool>(nullable: false),
                    IsDestruction = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsPeriostealThickening = table.Column<bool>(nullable: false),
                    IsPeriostealRupture = table.Column<bool>(nullable: false),
                    IsSubperiostealAbscess = table.Column<bool>(nullable: false),
                    SubperiostealAbscessSizeInMm = table.Column<int>(nullable: true),
                    SubperiostealAbscessSecondPlaneInMm = table.Column<int>(nullable: true),
                    SubperiostealAbscessThirdPlaneInMm = table.Column<int>(nullable: true),
                    StadiumType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologicallyConfirmed = table.Column<bool>(nullable: false),
                    HistologyConfirmedType = table.Column<byte>(nullable: false),
                    IsHumerusDistal = table.Column<bool>(nullable: false),
                    IsRadiusProximal = table.Column<bool>(nullable: false),
                    IsDiaphyseal = table.Column<bool>(nullable: false),
                    ExtensionSizeInMm = table.Column<int>(nullable: true),
                    ExtensionSecondPlaneInMm = table.Column<int>(nullable: true),
                    ExtensionThirdPlaneInMm = table.Column<int>(nullable: true),
                    CartilageCapMaxThicknessInMm = table.Column<int>(nullable: true),
                    IsInfiltrationOfAdjacentBones = table.Column<bool>(nullable: false),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsPathologicalFractureSuspectedDiagnosis = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    LocalExtensionType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspectedDiagnosis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsWithinThePrimarilyAffectedBone = table.Column<bool>(nullable: false),
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
                name: "CartilageFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    CartilageLocation = table.Column<byte>(nullable: false),
                    SizeInMm = table.Column<int>(nullable: true),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsJointEffusion = table.Column<bool>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    IsGeneral = table.Column<bool>(nullable: false),
                    GeneralCharacterizationType = table.Column<byte>(nullable: false),
                    IsDetailsOsteochondralDefectLooseBody = table.Column<bool>(nullable: false),
                    DetectionFragmentationType = table.Column<byte>(nullable: false),
                    IsIntraosseousCystsAdjacentToLesion = table.Column<bool>(nullable: false),
                    IsLesionOutlinedByHighSignalFluid = table.Column<bool>(nullable: false),
                    StagingType = table.Column<byte>(nullable: false),
                    EpiphysealJointsClassificationType = table.Column<byte>(nullable: false),
                    ClassificationSubType = table.Column<byte>(nullable: false),
                    IsHemarthros = table.Column<bool>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    OuterbridgeClassificationType = table.Column<byte>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    IsChondrocalcinosis = table.Column<bool>(nullable: false),
                    LigamentsLocalizationType = table.Column<byte>(nullable: false),
                    IsAnteriorBundle = table.Column<bool>(nullable: false),
                    IsPosteriorBundle = table.Column<bool>(nullable: false),
                    IsTransversalBundle = table.Column<bool>(nullable: false),
                    IsLesionOfThePronatorFlexorTendonComplex = table.Column<bool>(nullable: false),
                    ExtentOfTearType = table.Column<byte>(nullable: false),
                    IsLocalization = table.Column<bool>(nullable: false),
                    CompleteRuptureLocalizationType = table.Column<byte>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    IsAdjacentSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsConcomitantInjuriesOfTheAdjacentMuscleEnthesis = table.Column<bool>(nullable: false),
                    IsIllDefinedMargin = table.Column<bool>(nullable: false),
                    IsIncreasedSignal = table.Column<bool>(nullable: false),
                    IsMoreThan4MmDiameter = table.Column<bool>(nullable: false),
                    IsTSign = table.Column<bool>(nullable: false),
                    IsWavyAppearance = table.Column<bool>(nullable: false),
                    IsRadialCollateralLigament = table.Column<bool>(nullable: false),
                    IsLateralUlnarCollateralLigament = table.Column<bool>(nullable: false),
                    IsAnnularLigament = table.Column<bool>(nullable: false),
                    IsAccessoryLateralCollateralLigament = table.Column<bool>(nullable: false),
                    IsAnconeusMuscleLesionExtensorTendonComplex = table.Column<bool>(nullable: false),
                    InstabilityRingTheoryType = table.Column<byte>(nullable: false),
                    CapsuleType = table.Column<byte>(nullable: false),
                    IsExtraarticularJointEffusion = table.Column<bool>(nullable: false),
                    IsProminentPlicaHumeroradialis = table.Column<bool>(nullable: false),
                    IsMoreThan3MmMaximumExtension = table.Column<bool>(nullable: false),
                    IsIllDefined = table.Column<bool>(nullable: false),
                    IsPosterolateral = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsLocalChondropathy = table.Column<bool>(nullable: false),
                    IsLocalSynovialInflammation = table.Column<bool>(nullable: false),
                    IsSynovitisWithPannusFormation = table.Column<bool>(nullable: false),
                    IsSynovialCMEnhancement = table.Column<bool>(nullable: false),
                    IsCartilageDestruction = table.Column<bool>(nullable: false),
                    CartilagePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartilageFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartilageFindings_CartilagePages_CartilagePageId",
                        column: x => x.CartilagePageId,
                        principalTable: "CartilagePages",
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
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    MainFeaturesDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    MainHomogeneityType = table.Column<byte>(nullable: false),
                    IsFat = table.Column<bool>(nullable: false),
                    IsCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSpaghettiLikeAppearanceOfTheNerve = table.Column<bool>(nullable: false),
                    IsDistractedNerveFasciclesAxialPomegranateSign = table.Column<bool>(nullable: false),
                    IsSubcutaneous = table.Column<bool>(nullable: false),
                    IsAlongMedianNerve = table.Column<bool>(nullable: false),
                    IsPressureErosionBonyErosion = table.Column<bool>(nullable: false),
                    IsMacrodactyly = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CAEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    HeterogenousType = table.Column<byte>(nullable: false),
                    LocalizationRelatedJointSpaceLevelType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    LocalizationAxialType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologicallyConfirmed = table.Column<bool>(nullable: false),
                    HistologyConfirmedType = table.Column<byte>(nullable: false),
                    ExtensionSizeInMm = table.Column<byte>(nullable: true),
                    ExtensionLevel2InMm = table.Column<byte>(nullable: true),
                    ExtensionLevel3InMm = table.Column<byte>(nullable: true),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsSignalVoids = table.Column<bool>(nullable: false),
                    IsNoDisplacement = table.Column<bool>(nullable: false),
                    IsAlongTheTendonSheath = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsCutisThickening = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    IsSuspectedDiagnosis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsPosterior = table.Column<bool>(nullable: false),
                    IsMedial = table.Column<bool>(nullable: false),
                    IsLateral = table.Column<bool>(nullable: false),
                    HematomaCharacterizationType = table.Column<byte>(nullable: false),
                    IntensityType = table.Column<byte>(nullable: false),
                    AssociatedFindingsType = table.Column<byte>(nullable: false),
                    IsLooseBody = table.Column<bool>(nullable: false),
                    ArticularEffusionLocalizationType = table.Column<byte>(nullable: false),
                    IsIsointenseToCartilage = table.Column<bool>(nullable: false),
                    IsIsointenseToBone = table.Column<bool>(nullable: false),
                    IsForeignBody = table.Column<bool>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    MaxDiameterBursaInMm = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    IsDistendedFluidFilledBursa = table.Column<bool>(nullable: false),
                    IsEdematous = table.Column<bool>(nullable: false),
                    IsInflammatoryChangesOfTheAdjacent = table.Column<bool>(nullable: false),
                    IsSecondaryOsteomyelitis = table.Column<bool>(nullable: false),
                    IsBursitisCalcarea = table.Column<bool>(nullable: false),
                    NeuritisLocalizationType = table.Column<byte>(nullable: false),
                    NUlnarisType = table.Column<byte>(nullable: false),
                    IsBicipitoradialBursitis = table.Column<bool>(nullable: false),
                    NMedianusType = table.Column<byte>(nullable: false),
                    IsHypertrophy = table.Column<bool>(nullable: false),
                    IsSurroundingFibrosis = table.Column<bool>(nullable: false),
                    IsCompression = table.Column<bool>(nullable: false),
                    CompressionType = table.Column<byte>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    AneurysmLocalizationType = table.Column<byte>(nullable: false),
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
                name: "TendonsAndMusclesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    ScopeType = table.Column<byte>(nullable: false),
                    IsBonyAvulsion = table.Column<bool>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    LocalizationType = table.Column<byte>(nullable: false),
                    IsFocalBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsBonyErosion = table.Column<bool>(nullable: false),
                    IsEnthesiophytes = table.Column<bool>(nullable: false),
                    IsPeritendinousEdema = table.Column<bool>(nullable: false),
                    IsVascularization = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsBursitis = table.Column<bool>(nullable: false),
                    IsNecrosisSign = table.Column<bool>(nullable: false),
                    IsLateralJointCapsuleThickening = table.Column<bool>(nullable: false),
                    IsEnthesiopathyDeepExtensorTendons = table.Column<bool>(nullable: false),
                    IsT2wHyperintensity = table.Column<bool>(nullable: false),
                    IsDetailsThickening = table.Column<bool>(nullable: false),
                    IsEnthesiopathyRestrictedTendonExtensorCarpiRadialisBrevisMusc = table.Column<bool>(name: "IsEnthesiopathyRestrictedTendonExtensorCarpiRadialisBrevisMusc~", nullable: false),
                    IsRuptureDeepExtensorTendons = table.Column<bool>(nullable: false),
                    TearOfDeepExtensorType = table.Column<byte>(nullable: false),
                    IsRuptureRestrictedTendonExtensorCarpiRadialisBrevisMuscle = table.Column<bool>(nullable: false),
                    IsLigamentThickening = table.Column<bool>(nullable: false),
                    IsRupture = table.Column<bool>(nullable: false),
                    IsRadialCollateralLigamentThickening = table.Column<bool>(nullable: false),
                    IsRadialCollateralLigamentRupture = table.Column<bool>(nullable: false),
                    IsThickeningJointCapsuleMedial = table.Column<bool>(nullable: false),
                    IsUlnarNerveNeuritis = table.Column<bool>(nullable: false),
                    IsEnthesiopathyFlexorOrPronatorTendons = table.Column<bool>(nullable: false),
                    TendinopathyPronatorThickeningType = table.Column<byte>(nullable: false),
                    IsTendonTear = table.Column<bool>(nullable: false),
                    TendonTearType = table.Column<byte>(nullable: false),
                    IsCompleteRuptureRetraction = table.Column<bool>(nullable: false),
                    CompleteRuptureRetractionType = table.Column<byte>(nullable: false),
                    IsThickening = table.Column<bool>(nullable: false),
                    IsMCLRupture = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPartialRuptureMoreThan50Percent = table.Column<bool>(nullable: false),
                    BicipitalAponeurosisType = table.Column<byte>(nullable: false),
                    IsBursitisBicipitoradialis = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSuperficial = table.Column<bool>(nullable: false),
                    IsDeep = table.Column<bool>(nullable: false),
                    IsBursitisOlecranii = table.Column<bool>(nullable: false),
                    LocalizationMuscleCompartmentsType = table.Column<byte>(nullable: false),
                    LocalizationWithinMuscleType = table.Column<byte>(nullable: false),
                    IsMuscleLesion = table.Column<bool>(nullable: false),
                    ClassificationMunichConsensusType = table.Column<byte>(nullable: false),
                    IsRuptureDiameterBelow5Mm = table.Column<bool>(nullable: false),
                    IsCrossDiameterRuptureOverOrEqual5Mm = table.Column<bool>(nullable: false),
                    IsWavyAppearanceOfTheFibers = table.Column<bool>(nullable: false),
                    IsIntracorticalEdema = table.Column<bool>(nullable: false),
                    IsFattyInfiltration = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFascialLaceration = table.Column<bool>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfascial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    HematomaCharacterizationType = table.Column<byte>(nullable: false),
                    TendonsAndMusclesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TendonsAndMusclesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TendonsAndMusclesFindings_TendonsAndMusclesPages_TendonsAnd~",
                        column: x => x.TendonsAndMusclesPageId,
                        principalTable: "TendonsAndMusclesPages",
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
                name: "IX_BonesPages_ReportId",
                table: "BonesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartilageFindings_CartilagePageId",
                table: "CartilageFindings",
                column: "CartilagePageId");

            migrationBuilder.CreateIndex(
                name: "IX_CartilagePages_ReportId",
                table: "CartilagePages",
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

            migrationBuilder.CreateIndex(
                name: "IX_TendonsAndMusclesFindings_TendonsAndMusclesPageId",
                table: "TendonsAndMusclesFindings",
                column: "TendonsAndMusclesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_TendonsAndMusclesPages_ReportId",
                table: "TendonsAndMusclesPages",
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
                name: "CartilageFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

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
                name: "TendonsAndMusclesFindings");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "CartilagePages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftTissuePages");

            migrationBuilder.DropTable(
                name: "TendonsAndMusclesPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
