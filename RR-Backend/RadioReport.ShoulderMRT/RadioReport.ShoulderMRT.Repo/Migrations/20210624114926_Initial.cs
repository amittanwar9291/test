using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.ShoulderMRT.Repo.Migrations
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
                    TumorDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    SecondLocalizationType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    CMenhancementQuantitativeType = table.Column<byte>(nullable: false),
                    NoCMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    CMEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsGeographicConfiguration = table.Column<bool>(nullable: false),
                    IsBroadBased = table.Column<bool>(nullable: false),
                    IsStalked = table.Column<bool>(nullable: false),
                    IsOrientationFromTheEpiphysisTowardsTheDiaphysis = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentrally = table.Column<bool>(nullable: false),
                    IsDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsT2wHyperIntense = table.Column<bool>(nullable: false),
                    IsPeriostealReactionSunburst = table.Column<bool>(nullable: false),
                    IsPeriostealSpurCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsMarginWithLowSignalPerichondriumAboveCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false)
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
                name: "LabrumAndRibbonsFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    ExtensionLabrumPathologyDiagnosis1 = table.Column<byte>(nullable: false),
                    LabrumMorphologyResultType = table.Column<byte>(nullable: false),
                    IsExtensionToLongBicepsTendon = table.Column<bool>(nullable: false),
                    IsDislocationIntoJointSpace = table.Column<bool>(nullable: false),
                    IsLongitudinalSplitting = table.Column<bool>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsLigGlenohumeraleMedium = table.Column<bool>(nullable: false),
                    IsLigGlenohumeraleInferior = table.Column<bool>(nullable: false),
                    IsLigGlenohumerale = table.Column<bool>(nullable: false),
                    IsMGHL = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LabrumAndRibbonsFindingPresets", x => x.Id);
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
                    IsLuxation = table.Column<bool>(nullable: false),
                    Frequency = table.Column<byte>(nullable: false),
                    Details = table.Column<byte>(nullable: false),
                    Therapy = table.Column<byte>(nullable: false),
                    MonthOfLuxation = table.Column<byte>(nullable: false),
                    YearOfLuxation = table.Column<int>(nullable: false),
                    IsFracture = table.Column<bool>(nullable: false),
                    IsLocalizationHumeralHead = table.Column<bool>(nullable: false),
                    IsLocalizationScapula = table.Column<bool>(nullable: false),
                    IsGlenoid = table.Column<bool>(nullable: false),
                    IsLocalizationClavicle = table.Column<bool>(nullable: false),
                    MonthOfFracture = table.Column<byte>(nullable: false),
                    YearOfFracture = table.Column<int>(nullable: false),
                    IsTeresMinor = table.Column<bool>(nullable: false),
                    IsSubscapularis = table.Column<bool>(nullable: false),
                    IsInfraspinatus = table.Column<bool>(nullable: false),
                    IsSupraspinatus = table.Column<bool>(nullable: false),
                    IsBicepsCaputLongum = table.Column<bool>(nullable: false),
                    IsLabralReconstruction = table.Column<bool>(nullable: false),
                    IsBalloonSpacer = table.Column<bool>(nullable: false),
                    IsAcromioplasty = table.Column<bool>(nullable: false),
                    IsOsteosynthesisHumeralHead = table.Column<bool>(nullable: false),
                    IsOsteosynthesisClavicle = table.Column<bool>(nullable: false),
                    IsOsteosynthesisScapula = table.Column<bool>(nullable: false),
                    IsEndoprosthesis = table.Column<bool>(nullable: false),
                    Endoprosthesis = table.Column<byte>(nullable: false),
                    IsOther = table.Column<bool>(nullable: false),
                    IsInstability = table.Column<bool>(nullable: false),
                    Instability = table.Column<byte>(nullable: false),
                    IsImpingement = table.Column<bool>(nullable: false),
                    IsProfessionalOverheadWork = table.Column<bool>(nullable: false),
                    IsPowerSports = table.Column<bool>(nullable: false),
                    AreOverheadSports = table.Column<bool>(nullable: false),
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
                name: "JointAndBursaePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JointAndBursaePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JointAndBursaePages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LabrumAndRibbonsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LabrumAndRibbonsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LabrumAndRibbonsPages_Reports_ReportId",
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
                name: "RotatorPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AcromionType = table.Column<byte>(nullable: false),
                    IsOsAcromiale = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RotatorPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RotatorPages_Reports_ReportId",
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
                    IsXray = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsFollowup = table.Column<bool>(nullable: false),
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
                    IsArmPositionABER = table.Column<bool>(nullable: false),
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
                    TumorDifferentialDiagnosis = table.Column<byte>(nullable: false),
                    SecondLocalizationType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    CMenhancementQuantitativeType = table.Column<byte>(nullable: false),
                    NoCMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    CMEnhancementDistributionType = table.Column<byte>(nullable: false),
                    IsLobulated = table.Column<bool>(nullable: false),
                    IsRound = table.Column<bool>(nullable: false),
                    IsGeographicConfiguration = table.Column<bool>(nullable: false),
                    IsBroadBased = table.Column<bool>(nullable: false),
                    IsStalked = table.Column<bool>(nullable: false),
                    IsOrientationFromTheEpiphysisTowardsTheDiaphysis = table.Column<bool>(nullable: false),
                    IsSeptated = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCentrally = table.Column<bool>(nullable: false),
                    IsDiffuselyDistributed = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsT2wHyperIntense = table.Column<bool>(nullable: false),
                    IsPeriostealReactionSunburst = table.Column<bool>(nullable: false),
                    IsPeriostealSpurCodmanSpur = table.Column<bool>(nullable: false),
                    IsCartilageCap = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsMarginWithLowSignalPerichondriumAboveCartilageCap = table.Column<bool>(nullable: false),
                    IsCapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    IsEnvironmentalReactionSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    BoneType = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FractureNotSpecifiedType = table.Column<byte>(nullable: false),
                    FractureHumerusClassificationType = table.Column<byte>(nullable: false),
                    FractureHumerusAoRatingType = table.Column<byte>(nullable: false),
                    FractureHumerusAoEvaluationType = table.Column<byte>(nullable: false),
                    FractureHumerusNeerRatingType = table.Column<byte>(nullable: false),
                    IsFractureHumerusFragmentsHumeraHead = table.Column<bool>(nullable: false),
                    IsFractureHumerusFragmentsMajusTubercle = table.Column<bool>(nullable: false),
                    IsFractureHumerusFragmentsTuberculumMinus = table.Column<bool>(nullable: false),
                    IsFractureHumerusFragmentsHumerumShaft = table.Column<bool>(nullable: false),
                    FractureHumerusNeerDetailsType = table.Column<byte>(nullable: false),
                    FractureClaviculaEvaluationType = table.Column<byte>(nullable: false),
                    FractureClaviculaAoClassificationType = table.Column<byte>(nullable: false),
                    FractureScapulaEvaluationType = table.Column<byte>(nullable: false),
                    FractureScapulaAoClassificationType = table.Column<byte>(nullable: false),
                    AOClassificationAO12Type = table.Column<byte>(nullable: false),
                    AOClassificationFractureType = table.Column<byte>(nullable: false),
                    FractureSpecificType = table.Column<byte>(nullable: false),
                    IsProximalerHumerus = table.Column<bool>(nullable: false),
                    IsHillSachsLesion = table.Column<bool>(nullable: false),
                    IsReverseHillSachsLesion = table.Column<bool>(nullable: false),
                    IsHumeralHead = table.Column<bool>(nullable: false),
                    IsGreaterTubercle = table.Column<bool>(nullable: false),
                    IsLesserTubercle = table.Column<bool>(nullable: false),
                    IsLateralClavicle = table.Column<bool>(nullable: false),
                    IsAcromialEnd = table.Column<bool>(nullable: false),
                    IsClavicularBody = table.Column<bool>(nullable: false),
                    IsExtremitasClaviculae = table.Column<bool>(nullable: false),
                    IsScapula = table.Column<bool>(nullable: false),
                    IsAkromion = table.Column<bool>(nullable: false),
                    IsProcessusCoracoideus = table.Column<bool>(nullable: false),
                    IsScapularSpine = table.Column<bool>(nullable: false),
                    IsSupraspinatousFossa = table.Column<bool>(nullable: false),
                    IsGlenoidFossa = table.Column<bool>(nullable: false),
                    IsInfraspinatousFossa = table.Column<bool>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsThickenedAndEdematizedSynovialis = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    PosttraumaticHillSachsType = table.Column<byte>(nullable: false),
                    IsImpressionPosteroSuperior = table.Column<bool>(nullable: false),
                    PosteroSuperiorDegrees = table.Column<byte>(nullable: true),
                    IsImpressionAnteroSuperior = table.Column<bool>(nullable: false),
                    AnteroSuperiorDegrees = table.Column<byte>(nullable: true),
                    IsHumerusSubchondral = table.Column<bool>(nullable: false),
                    HumerusDiameter = table.Column<byte>(nullable: true),
                    IsHumerusIntactCortex = table.Column<bool>(nullable: false),
                    IsSeverityOfGlenohumeralOsteoarthritis = table.Column<bool>(nullable: false),
                    DegenerationIntensityType = table.Column<byte>(nullable: false),
                    IsDegenerationSclerosis = table.Column<bool>(nullable: false),
                    IsDegenerationEdema = table.Column<bool>(nullable: false),
                    IsDegenerationCyst = table.Column<bool>(nullable: false),
                    IsDegenerationChondropathy = table.Column<bool>(nullable: false),
                    IsDegenerationChondrocalcinosis = table.Column<bool>(nullable: false),
                    IsDegenerationOsteophytes = table.Column<bool>(nullable: false),
                    IsDegenerationArthropathy = table.Column<bool>(nullable: false),
                    DegenerationOutbridgeType = table.Column<byte>(nullable: false),
                    DegenerationExpansiveness = table.Column<int>(nullable: true),
                    DegenerationJointSurfacesType = table.Column<byte>(nullable: false),
                    FirstLocalizationType = table.Column<byte>(nullable: false),
                    AxialMaxInMm = table.Column<int>(nullable: true),
                    PlaneAxialInMm = table.Column<int>(nullable: true),
                    CraniocaudalInMm = table.Column<int>(nullable: true),
                    IsSeptal = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentBones = table.Column<bool>(nullable: false),
                    IsPathologicalFracture = table.Column<bool>(nullable: false),
                    IsPerilesionalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsAnotherLesionSameEntity = table.Column<bool>(nullable: false),
                    IsWithinThePrimarilyAffected = table.Column<bool>(nullable: false),
                    IsStagingPathologicalFracture = table.Column<bool>(nullable: false),
                    LocalPropagationType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    IsRoundedPosteriorGlenoidRim = table.Column<bool>(nullable: false),
                    IsPosteriorLabrumHypertrophy = table.Column<bool>(nullable: false),
                    IsLabrumHyperintensity = table.Column<bool>(nullable: false),
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
                name: "JointAndBursaeFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    FindingType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsThickeningJointCapsule = table.Column<bool>(nullable: false),
                    IsThickeningLigCoracohumeraleMoreThan3 = table.Column<bool>(nullable: false),
                    IsPericapsularEdema = table.Column<bool>(nullable: false),
                    IsEdemaAroundRotatorInterval = table.Column<bool>(nullable: false),
                    IsIncreasedCAEnhancementByRotator = table.Column<bool>(nullable: false),
                    IsIncreasedCAEnhancementOfTheCapsule = table.Column<bool>(nullable: false),
                    IsObliterationOfTheTriangular = table.Column<bool>(nullable: false),
                    IsProliferations = table.Column<bool>(nullable: false),
                    IsInsertionAnteriorJointCapsule = table.Column<bool>(nullable: false),
                    InsertionPosteriorType = table.Column<byte>(nullable: false),
                    ArticularEffusionType = table.Column<byte>(nullable: false),
                    IsBursitisSubacromial = table.Column<bool>(nullable: false),
                    IsBursitisSubdeltoide = table.Column<bool>(nullable: false),
                    IsBursitisSubscapular = table.Column<bool>(nullable: false),
                    IsSubcoracoid = table.Column<bool>(nullable: false),
                    DiameterInMm = table.Column<int>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    JointAndBursaePageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JointAndBursaeFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JointAndBursaeFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_JointAndBursaeFindings_JointAndBursaePages_JointAndBursaePa~",
                        column: x => x.JointAndBursaePageId,
                        principalTable: "JointAndBursaePages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LabrumAndRibbonsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    ExtensionLabrumPathologyDiagnosis1 = table.Column<byte>(nullable: false),
                    LabrumMorphologyResultType = table.Column<byte>(nullable: false),
                    IsExtensionToLongBicepsTendon = table.Column<bool>(nullable: false),
                    IsDislocationIntoJointSpace = table.Column<bool>(nullable: false),
                    IsLongitudinalSplitting = table.Column<bool>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    IsLigGlenohumeraleMedium = table.Column<bool>(nullable: false),
                    IsLigGlenohumeraleInferior = table.Column<bool>(nullable: false),
                    IsLigGlenohumerale = table.Column<bool>(nullable: false),
                    IsMGHL = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    LabrumLocation = table.Column<byte>(nullable: false),
                    IsLabrumCyst = table.Column<bool>(nullable: false),
                    DiameterInMm = table.Column<int>(nullable: true),
                    Diagnosis1 = table.Column<byte>(nullable: false),
                    Diagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsLigGlenohumeraleSuperior = table.Column<bool>(nullable: false),
                    RupturePulleyLesionAfterHabermayer = table.Column<byte>(nullable: false),
                    IsDuplicateMGH = table.Column<bool>(nullable: false),
                    IsIGHLPrevious = table.Column<bool>(nullable: false),
                    IsIGHLBack = table.Column<bool>(nullable: false),
                    RuptureLigGlenoIGHLLocalization = table.Column<byte>(nullable: false),
                    IsBonyAvulsion = table.Column<bool>(nullable: false),
                    IsLigCoracohumerale = table.Column<bool>(nullable: false),
                    IsLigCoracohumeraleMedia = table.Column<bool>(nullable: false),
                    IsLigCoracohumeraleLateral = table.Column<bool>(nullable: false),
                    IsRuptureLigCoracoacromiale = table.Column<bool>(nullable: false),
                    IsRuptureLigCoracoclaviculare = table.Column<bool>(nullable: false),
                    IsRuptureLigHumeriTransversum = table.Column<bool>(nullable: false),
                    IsRuptureLigSemicirculareHumeri = table.Column<bool>(nullable: false),
                    IsSGHL = table.Column<bool>(nullable: false),
                    IsMissingOrHypoPlasticMGHL = table.Column<bool>(nullable: false),
                    IsBufordComplex = table.Column<bool>(nullable: false),
                    IsIGHL = table.Column<bool>(nullable: false),
                    IsThickeningLigCoracohumerale = table.Column<bool>(nullable: false),
                    IsThickeningLigCoracoacromiale = table.Column<bool>(nullable: false),
                    IsThickeningLigCoracoclaviculare = table.Column<bool>(nullable: false),
                    IsThickeningLigHumeriTransversum = table.Column<bool>(nullable: false),
                    IsThickeningLigSemicirculareHumeri = table.Column<bool>(nullable: false),
                    LongBicepsTendonType = table.Column<byte>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsRetractedTendonStumpBicepsAnchor = table.Column<bool>(nullable: false),
                    IsIntraArticularEntrapment = table.Column<bool>(nullable: false),
                    IsThinningOutDegeneration = table.Column<bool>(nullable: false),
                    IsThickeningMoreThan5Degeneration = table.Column<bool>(nullable: false),
                    IsCystDegeneration = table.Column<bool>(nullable: false),
                    CystDiameterInMm = table.Column<int>(nullable: true),
                    IsIncreasedSignalOnT2wOrPdAndT1w = table.Column<bool>(nullable: false),
                    IsTendinitisLiquidInTendonSheath = table.Column<bool>(nullable: false),
                    IsTendinitisThickening = table.Column<bool>(nullable: false),
                    IsTendinitisThinningOut = table.Column<bool>(nullable: false),
                    IsTendinitisT2wSignalIncrease = table.Column<bool>(nullable: false),
                    PulleyLesionBiceps = table.Column<byte>(nullable: false),
                    DislocationDetailsType = table.Column<byte>(nullable: false),
                    DislocationFromSulcusType = table.Column<byte>(nullable: false),
                    LabrumAndRibbonsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LabrumAndRibbonsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LabrumAndRibbonsFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LabrumAndRibbonsFindings_LabrumAndRibbonsPages_LabrumAndRib~",
                        column: x => x.LabrumAndRibbonsPageId,
                        principalTable: "LabrumAndRibbonsPages",
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
                name: "RotatorFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    Type = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    AfflicationType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    IsCapsularHypertrophy = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsSubchondralEdema = table.Column<bool>(nullable: false),
                    IsArticularEffusion = table.Column<bool>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsOsteolysisOrLateralClavicles = table.Column<bool>(nullable: false),
                    IsCorticalThinning = table.Column<bool>(nullable: false),
                    IsCorticalBoneErosion = table.Column<bool>(nullable: false),
                    ACJointClassificationType = table.Column<byte>(nullable: false),
                    TossyType = table.Column<byte>(nullable: false),
                    RockwoodType = table.Column<byte>(nullable: false),
                    LesionType = table.Column<byte>(nullable: false),
                    PartialLesionLocationType = table.Column<byte>(nullable: false),
                    TendonPartType = table.Column<byte>(nullable: false),
                    PartialRuptureType = table.Column<byte>(nullable: false),
                    PatteClassificationType = table.Column<byte>(nullable: false),
                    IsTendonRetraction = table.Column<bool>(nullable: false),
                    TendonRetractionClassificationType = table.Column<byte>(nullable: false),
                    IsAccordingToBayneAndBateman = table.Column<bool>(nullable: false),
                    TendonRetractionBayneClassificationType = table.Column<byte>(nullable: false),
                    TendonRetractionClassificationByPatentType = table.Column<byte>(nullable: false),
                    IsAtrophy = table.Column<bool>(nullable: false),
                    IsAccordingToGoutallier = table.Column<bool>(nullable: false),
                    AtrophyClassificationType = table.Column<byte>(nullable: false),
                    ClassificationAccGoutallierType = table.Column<byte>(nullable: false),
                    ClassificationAccZanettiType = table.Column<byte>(nullable: false),
                    CrossType = table.Column<byte>(nullable: false),
                    Lengthwise = table.Column<byte>(nullable: false),
                    BursaSideType = table.Column<byte>(nullable: false),
                    InsertionOrFootprintType = table.Column<byte>(nullable: false),
                    ExpansivenessLengthInMM = table.Column<int>(nullable: true),
                    ExpansivenessDepthInMM = table.Column<int>(nullable: true),
                    RotatorCuffClassificationType = table.Column<byte>(nullable: false),
                    ClassificationBayneClassificationType = table.Column<byte>(nullable: false),
                    ClassificationSnyderClassificationType = table.Column<byte>(nullable: false),
                    LafosseClassificationType = table.Column<byte>(nullable: false),
                    PartialLesionUpperThirdType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    MorphologyType = table.Column<byte>(nullable: false),
                    IsSignalIncreaseInPDAndT1w = table.Column<bool>(nullable: false),
                    AreHumeralHeadCysts = table.Column<bool>(nullable: false),
                    CystsAtTheHeadOfTheHumerusLargestAxialDiameter = table.Column<int>(nullable: true),
                    CalcificationOrTendinitisCalcarea = table.Column<bool>(nullable: false),
                    LimeOrTendinitisCalcareaLargestAxialDiameter = table.Column<int>(nullable: true),
                    IsOsteitis = table.Column<bool>(nullable: false),
                    RotatorPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RotatorFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RotatorFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RotatorFindings_RotatorPages_RotatorPageId",
                        column: x => x.RotatorPageId,
                        principalTable: "RotatorPages",
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
                    LymphNodesAxillaryType = table.Column<byte>(nullable: false),
                    LargestTransverseDiameterInMm = table.Column<int>(nullable: true),
                    LocationType = table.Column<byte>(nullable: false),
                    DeltoideusLocationType = table.Column<byte>(nullable: false),
                    SternoclavicularJointType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsArthrosisArticularEffusion = table.Column<bool>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsInflammationArticularEffusion = table.Column<bool>(nullable: false),
                    IsRuptureSternoclavicularLigament = table.Column<bool>(nullable: false),
                    IsRuptureDiscusArticularis = table.Column<bool>(nullable: false),
                    PleuraType = table.Column<byte>(nullable: false),
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

            migrationBuilder.CreateTable(
                name: "MusculatureFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfacial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    T1w = table.Column<byte>(nullable: false),
                    T2w = table.Column<byte>(nullable: false),
                    AgeType = table.Column<byte>(nullable: false),
                    ClassificationMunichConsensusType = table.Column<byte>(nullable: false),
                    IsCrossDiameterRuptureBelow5Mm = table.Column<bool>(nullable: false),
                    IsCrossDiameterRuptureOver5Mm = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsWavyCourseFibres = table.Column<bool>(nullable: false),
                    IsOsseousAvulsion = table.Column<bool>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsMuscularHypotrophy = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFascialTear = table.Column<bool>(nullable: false),
                    IsMuscleHerniation = table.Column<bool>(nullable: false),
                    SoftPartsFindingId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MusculatureFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MusculatureFindings_SoftPartsFindings_SoftPartsFindingId",
                        column: x => x.SoftPartsFindingId,
                        principalTable: "SoftPartsFindings",
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
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_JointAndBursaeFindings_ImageFileId",
                table: "JointAndBursaeFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_JointAndBursaeFindings_JointAndBursaePageId",
                table: "JointAndBursaeFindings",
                column: "JointAndBursaePageId");

            migrationBuilder.CreateIndex(
                name: "IX_JointAndBursaePages_ReportId",
                table: "JointAndBursaePages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LabrumAndRibbonsFindings_ImageFileId",
                table: "LabrumAndRibbonsFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LabrumAndRibbonsFindings_LabrumAndRibbonsPageId",
                table: "LabrumAndRibbonsFindings",
                column: "LabrumAndRibbonsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LabrumAndRibbonsPages_ReportId",
                table: "LabrumAndRibbonsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocalizationPages_ReportId",
                table: "LocalizationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MusculatureFindings_SoftPartsFindingId",
                table: "MusculatureFindings",
                column: "SoftPartsFindingId");

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
                name: "IX_RotatorFindings_ImageFileId",
                table: "RotatorFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RotatorFindings_RotatorPageId",
                table: "RotatorFindings",
                column: "RotatorPageId");

            migrationBuilder.CreateIndex(
                name: "IX_RotatorPages_ReportId",
                table: "RotatorPages",
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
                name: "JointAndBursaeFindings");

            migrationBuilder.DropTable(
                name: "LabrumAndRibbonsFindingPresets");

            migrationBuilder.DropTable(
                name: "LabrumAndRibbonsFindings");

            migrationBuilder.DropTable(
                name: "MusculatureFindings");

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
                name: "RotatorFindings");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "JointAndBursaePages");

            migrationBuilder.DropTable(
                name: "LabrumAndRibbonsPages");

            migrationBuilder.DropTable(
                name: "SoftPartsFindings");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "RotatorPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftPartsPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
