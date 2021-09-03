using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.SpineMRT.Repo.Migrations
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
                    TraumaLocation = table.Column<byte>(nullable: false),
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    CMEnhancementForm = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsSeptaChambered = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsCartilagecap = table.Column<bool>(nullable: false),
                    IsGroundGlassMatrix = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsInvolvementAdjacentEndplate = table.Column<bool>(nullable: false),
                    IsOriginFromMidline = table.Column<bool>(nullable: false),
                    InfiltrationPatternType = table.Column<byte>(nullable: false),
                    SignalSTIR = table.Column<byte>(nullable: false),
                    IsCartilagecapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsInterruptionEndPlate = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false)
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
                name: "SacroiliacJointFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IKnowDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsBoneBridges = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    JointSurfaceSubType = table.Column<byte>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    IsSurfaceNarrowing = table.Column<bool>(nullable: false),
                    IsVacuumPhenomenon = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    SclerosisType = table.Column<byte>(nullable: false),
                    IsFatDeposition = table.Column<bool>(nullable: false),
                    IsEnthesitis = table.Column<bool>(nullable: false),
                    EntheitisType = table.Column<byte>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsCmEnhancement = table.Column<bool>(nullable: false),
                    IsJointSpaceWidening = table.Column<bool>(nullable: false),
                    IsJointEffusion = table.Column<bool>(nullable: false),
                    IsBoneMarrow = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsSoftTissue = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SacroiliacJointFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Scores",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ScoreLocation = table.Column<byte>(nullable: false),
                    IsManifestationRight = table.Column<bool>(nullable: false),
                    IsManifestationLeft = table.Column<bool>(nullable: false),
                    IsSTIRRight = table.Column<bool>(nullable: false),
                    IsSTIRLeft = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    HematomaCharacterizationType = table.Column<byte>(nullable: false),
                    IsHypointensAfterFatSaturation = table.Column<bool>(nullable: false),
                    IsIsointenseToCerebrospinalFluid = table.Column<bool>(nullable: false),
                    IsMirrorFormation = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsCommunicationWithIntraduralSpace = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsThickeningOfTheNerve = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsTargetSign = table.Column<bool>(nullable: false),
                    IsHourglassShape = table.Column<bool>(nullable: false),
                    IsSpindleShaped = table.Column<bool>(nullable: false),
                    NeurofibromatosisType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SpinalCanalFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    SpinalCanalDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    LocalizationInTheSpinalCordType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsSwelling = table.Column<bool>(nullable: false),
                    IsSerpiginousVascularStructures = table.Column<bool>(nullable: false),
                    IsFlowVoids = table.Column<bool>(nullable: false),
                    IsClottedNerveRoots = table.Column<bool>(nullable: false),
                    IsEmptyDuralSac = table.Column<bool>(nullable: false),
                    IsSeptationInTheSubarachnoidSpace = table.Column<bool>(nullable: false),
                    SpinalCanalLocation = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsT2wHypointenseRim = table.Column<bool>(nullable: false),
                    IsT1wHeterogeneousSignalIntensity = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsHypointenseAfterFatSaturation = table.Column<bool>(nullable: false),
                    IsSTIROrTIRMHyperintense = table.Column<bool>(nullable: false),
                    IsCystSyrinx = table.Column<bool>(nullable: false),
                    IsCentralCavityFormation = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsNumerousVessels = table.Column<bool>(nullable: false),
                    IsUsuringOrRemodellingSpinalCanal = table.Column<bool>(nullable: false),
                    IsLeptomeningealSpread = table.Column<bool>(nullable: false),
                    IsIntraAndExtradural = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsCompression = table.Column<bool>(nullable: false),
                    IsScaloppingOrThinnedPedicle = table.Column<bool>(nullable: false),
                    IsExtendedNeuralForamen = table.Column<bool>(nullable: false),
                    IsWideningEpiduralFatTissueMoreThan7Mm = table.Column<bool>(nullable: false),
                    IsDeformationOfTheDuralSac = table.Column<bool>(nullable: false),
                    IsEpiduralReaction = table.Column<bool>(nullable: false),
                    IsLiquorisointense = table.Column<bool>(nullable: false),
                    IsFatIsointens = table.Column<bool>(nullable: false),
                    QuantityTransverseType = table.Column<byte>(nullable: false),
                    IsIntramedullaryFocal = table.Column<bool>(nullable: false),
                    IsAnteriorRadix = table.Column<bool>(nullable: false),
                    IsPial = table.Column<bool>(nullable: false),
                    PialType = table.Column<byte>(nullable: false),
                    IsSubarachnoid = table.Column<bool>(nullable: false),
                    IsEpidural = table.Column<bool>(nullable: false),
                    IsAberrantCourse = table.Column<bool>(nullable: false),
                    AberrantCourseType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpinalCanalFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ComplaintsType = table.Column<byte>(nullable: false),
                    LumbagoSideType = table.Column<byte>(nullable: false),
                    NeurologySideType = table.Column<byte>(nullable: false)
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
                name: "ConfigurationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfigurationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConfigurationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DiscPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiscPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiscPages_Reports_ReportId",
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
                    SpineLocation = table.Column<decimal>(nullable: false),
                    ScanAreaType = table.Column<byte>(nullable: false)
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
                name: "SacroiliacJointPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SacroiliacJointPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpinalCanalPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpinalCanalPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpinalCanalPages_Reports_ReportId",
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
                    IsCT = table.Column<bool>(nullable: false),
                    IsScintigraphy = table.Column<bool>(nullable: false),
                    IsSPECTCT = table.Column<bool>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    ConsultationType = table.Column<byte>(nullable: false),
                    IsInterventional = table.Column<bool>(nullable: false),
                    InterventionType = table.Column<byte>(nullable: false),
                    IsFacetJointInfiltrationRight = table.Column<bool>(nullable: false),
                    IsFacetJointInfiltrationLeft = table.Column<bool>(nullable: false),
                    IsSIJInfiltrationRight = table.Column<bool>(nullable: false),
                    IsSIJInfiltrationLeft = table.Column<bool>(nullable: false),
                    IsRegistrationVia = table.Column<bool>(nullable: false),
                    IsBiopsy = table.Column<bool>(nullable: false)
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
                name: "Interventions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    InterventionType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    DetailInterventionType = table.Column<byte>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Interventions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Interventions_AnamnesisPages_AnamnesisPageId",
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
                    TraumaLocation = table.Column<byte>(nullable: false),
                    MainCharacteristicsDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    CorticalisType = table.Column<byte>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsInfiltrationOfSoftTissue = table.Column<bool>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    LimitationType = table.Column<byte>(nullable: false),
                    CMEnhancementForm = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    IsSeptaChambered = table.Column<bool>(nullable: false),
                    IsExpansive = table.Column<bool>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsScleroticMargin = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsPerifocalSclerosis = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    IsCartilagecap = table.Column<bool>(nullable: false),
                    IsGroundGlassMatrix = table.Column<bool>(nullable: false),
                    IsOsteoidMatrix = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsInvolvementAdjacentEndplate = table.Column<bool>(nullable: false),
                    IsOriginFromMidline = table.Column<bool>(nullable: false),
                    InfiltrationPatternType = table.Column<byte>(nullable: false),
                    SignalSTIR = table.Column<byte>(nullable: false),
                    IsCartilagecapT2wHyperintense = table.Column<bool>(nullable: false),
                    IsInterruptionEndPlate = table.Column<bool>(nullable: false),
                    IsPeriostealSpur = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    SpineLocation2 = table.Column<decimal>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsPathologicFracture = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    FractureStabilityType = table.Column<byte>(nullable: false),
                    RotationOrTranslationType = table.Column<byte>(nullable: false),
                    Rotation = table.Column<int>(nullable: true),
                    Translation = table.Column<int>(nullable: true),
                    GehweilerType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsRightVertebralArteryDetectable = table.Column<bool>(nullable: false),
                    IsLeftVertebralArteryDetectable = table.Column<bool>(nullable: false),
                    C1C2FractureType = table.Column<byte>(nullable: false),
                    C2FractureType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    AxisArcType = table.Column<byte>(nullable: false),
                    IsStability = table.Column<bool>(nullable: false),
                    StabilityType = table.Column<byte>(nullable: false),
                    C1ToC2FractureType = table.Column<byte>(nullable: false),
                    C3FractureType = table.Column<byte>(nullable: false),
                    ValuationOfFractureType = table.Column<byte>(nullable: false),
                    C3FractureFormType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsSchmorlNode = table.Column<bool>(nullable: false),
                    OsSacrumFractureType = table.Column<byte>(nullable: false),
                    OsSacrumFractureFormType = table.Column<byte>(nullable: false),
                    OsCoccygisFractureType = table.Column<byte>(nullable: false),
                    NoSpecType = table.Column<byte>(nullable: false),
                    LocalizationSideType = table.Column<byte>(nullable: false),
                    LocalizationInTheVertebralArchType = table.Column<byte>(nullable: false),
                    ClassificationArcusVertebraeInjuryType = table.Column<byte>(nullable: false),
                    IsLocationInferiorCortex = table.Column<bool>(nullable: false),
                    IsDeepFractureLine = table.Column<bool>(nullable: false),
                    MeasurementInMmFromTheInferiorCortex = table.Column<int>(nullable: true),
                    IsObliqueSagittalFractureLine = table.Column<bool>(nullable: false),
                    IsHistoryOfVertebroplastyy = table.Column<bool>(nullable: false),
                    IsHistoryOfSpondylodesis = table.Column<bool>(nullable: false),
                    LocalizationSagittalType = table.Column<byte>(nullable: false),
                    IsHistoryOfOsteosynthesis = table.Column<bool>(nullable: false),
                    SpineLocation3 = table.Column<decimal>(nullable: false),
                    Size = table.Column<int>(nullable: true),
                    IsInTheSepta = table.Column<bool>(nullable: false),
                    IsDiffuse = table.Column<bool>(nullable: false),
                    MaxThicknessOfCap = table.Column<int>(nullable: true),
                    IsLowSignalOfTheRim = table.Column<bool>(nullable: false),
                    IsSclerotic = table.Column<bool>(nullable: false),
                    IsSpinalCanalInfiltration = table.Column<bool>(nullable: false),
                    IsPedicleDestruction = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentBones = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    IsHistologyProven = table.Column<bool>(nullable: false),
                    HistologySecuredType = table.Column<byte>(nullable: false),
                    IsInfiltrationAdjacentSoftTissues = table.Column<bool>(nullable: false),
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
                name: "ConfigurationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsCervicalSpine = table.Column<bool>(nullable: false),
                    IsThoracicSpine = table.Column<bool>(nullable: false),
                    IsLumbarSpine = table.Column<bool>(nullable: false),
                    CervicalSpineLocation = table.Column<decimal>(nullable: false),
                    ThoracicSpineLocation = table.Column<decimal>(nullable: false),
                    LumbarSpineLocation = table.Column<decimal>(nullable: false),
                    CervicalSpinePathologyType = table.Column<byte>(nullable: false),
                    ThoracicSpinePathologyType = table.Column<byte>(nullable: false),
                    LumbarSpinePathologyType = table.Column<byte>(nullable: false),
                    SpondylolisthesisLocation = table.Column<decimal>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    MeyerdingClassificationType = table.Column<byte>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsC7NeckRib = table.Column<bool>(nullable: false),
                    IsThoracolumbar = table.Column<bool>(nullable: false),
                    IsLumbalizedTH12 = table.Column<bool>(nullable: false),
                    IsLumbosacral = table.Column<bool>(nullable: false),
                    LumbosacralType = table.Column<byte>(nullable: false),
                    SacralizedL5Type = table.Column<byte>(nullable: false),
                    CervicalSpineScoliosisType = table.Column<int>(nullable: false),
                    CervicalSpineCobbAngle = table.Column<int>(nullable: true),
                    ThoracicSpineScoliosisType = table.Column<int>(nullable: false),
                    ThoracicSpineCobbAngle = table.Column<int>(nullable: true),
                    LumbarSpineScoliosisType = table.Column<int>(nullable: false),
                    LumbarSpineCobbAngle = table.Column<int>(nullable: true),
                    ConfigurationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfigurationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConfigurationFindings_ConfigurationPages_ConfigurationPageId",
                        column: x => x.ConfigurationPageId,
                        principalTable: "ConfigurationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DiscFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    FindingDetailType = table.Column<byte>(nullable: false),
                    DiscLocation = table.Column<int>(nullable: false),
                    ExpansionType = table.Column<byte>(nullable: false),
                    SpinalCanalStenosisType = table.Column<byte>(nullable: false),
                    WidthOfTheSpinalCanalInMm = table.Column<int>(nullable: true),
                    NerveRootAffectionType = table.Column<byte>(nullable: false),
                    IsNerveRootRight = table.Column<bool>(nullable: false),
                    IsNerveRootLeft = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    IsStenosisRight = table.Column<bool>(nullable: false),
                    IsStenosisLeft = table.Column<bool>(nullable: false),
                    IsOsteophyteFormation = table.Column<bool>(nullable: false),
                    IsAccompanyingOsteochondrosis = table.Column<bool>(nullable: false),
                    ModicClassificationType = table.Column<byte>(nullable: false),
                    IsAccompanyingFacetJointArthrosis = table.Column<bool>(nullable: false),
                    IsAccompanyingFacetJointArthrosisLocalizationRight = table.Column<bool>(nullable: false),
                    IsAccompanyingFacetJointArthrosisLocalizationLeft = table.Column<bool>(nullable: false),
                    IsHypertrophy = table.Column<bool>(nullable: false),
                    IsJointEffusion = table.Column<bool>(nullable: false),
                    IsBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    IsSynovialCystRight = table.Column<bool>(nullable: false),
                    IsSynovialCystLeft = table.Column<bool>(nullable: false),
                    MaxDiameter = table.Column<int>(nullable: true),
                    IsDiameterMigrationSequester = table.Column<bool>(nullable: false),
                    DiameterMigrationSequester = table.Column<int>(nullable: true),
                    IsCraniocaudalesLevel = table.Column<bool>(nullable: false),
                    CraniocaudalesLevelType = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsNarrowing = table.Column<bool>(nullable: false),
                    IsT2SignalReductionOfTheIntervertebralDisc = table.Column<bool>(nullable: false),
                    IsBulging = table.Column<bool>(nullable: false),
                    BulgingType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsFacetJointArthrosisLocalizationRight = table.Column<bool>(nullable: false),
                    IsFacetJointArthrosisLocalizationLeft = table.Column<bool>(nullable: false),
                    IsForaminalStenosis = table.Column<bool>(nullable: false),
                    IsIncreasedSizeOfTheDisc = table.Column<bool>(nullable: false),
                    IsT2wHyperintensityOfTheDisc = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheDisc = table.Column<bool>(nullable: false),
                    IsEpiduralInflammationOrAbscess = table.Column<bool>(nullable: false),
                    IsExpansionInZDimension = table.Column<bool>(nullable: false),
                    ExpansionInZDimensionInMm = table.Column<int>(nullable: true),
                    IsEpiduralContrastEnhancement = table.Column<bool>(nullable: false),
                    SpineAxialLocation = table.Column<byte>(nullable: false),
                    IsParavertebralInflammatoryResponse = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsEpidural = table.Column<bool>(nullable: false),
                    LargestDiameterEpidural = table.Column<int>(nullable: true),
                    IsIntraspinal = table.Column<bool>(nullable: false),
                    LargestDiameterIntraspinal = table.Column<int>(nullable: true),
                    IsActiveDiscitis = table.Column<bool>(nullable: false),
                    IsRuptureOfPosteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsRuptureOfAnteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsRuptureOfDiscusIntervertebralis = table.Column<bool>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsEntheitis = table.Column<bool>(nullable: false),
                    IsDiscitis = table.Column<bool>(nullable: false),
                    IsArthritis = table.Column<bool>(nullable: false),
                    EntheitisType = table.Column<byte>(nullable: false),
                    IsSpondylitisAnterior = table.Column<bool>(nullable: false),
                    IsAnteriorT1w = table.Column<bool>(nullable: false),
                    IsAnteriorSTIR = table.Column<bool>(nullable: false),
                    IsAnteriorContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSpondylitisPosterior = table.Column<bool>(nullable: false),
                    IsPosteriorT1w = table.Column<bool>(nullable: false),
                    IsPosteriorSTIR = table.Column<bool>(nullable: false),
                    IsPosteriorContrastEnhancement = table.Column<bool>(nullable: false),
                    IsSpondylitisMarginalis = table.Column<bool>(nullable: false),
                    IsMarginalisT1w = table.Column<bool>(nullable: false),
                    IsMarginalisSTIR = table.Column<bool>(nullable: false),
                    IsMarginalisContrastEnhancement = table.Column<bool>(nullable: false),
                    SpondylitisNumberType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsT1wHyperintensity = table.Column<bool>(nullable: false),
                    IsSTIRHypointense = table.Column<bool>(nullable: false),
                    IsSyndesmophyterose = table.Column<bool>(nullable: false),
                    IsErosionOfAnteriorVertebraRomanusLesion = table.Column<bool>(nullable: false),
                    IsVertebralBodySquaring = table.Column<bool>(nullable: false),
                    IsMultisegmAnkylosing = table.Column<bool>(nullable: false),
                    IsLigamentOssification = table.Column<bool>(nullable: false),
                    IsAnteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsPosteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsLiggFlava = table.Column<bool>(nullable: false),
                    IsLiggInterspinosa = table.Column<bool>(nullable: false),
                    IsLiggSupraspinosa = table.Column<bool>(nullable: false),
                    IsAnderssonLesion = table.Column<bool>(nullable: false),
                    IsAnderssonFracture = table.Column<bool>(nullable: false),
                    AnderssonFractureType = table.Column<byte>(nullable: false),
                    IsSynovialitis = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType2 = table.Column<byte>(nullable: false),
                    IsParasyndesmophyte = table.Column<bool>(nullable: false),
                    IsPeriostitis = table.Column<bool>(nullable: false),
                    IsAtlantBoneMarrowEdema = table.Column<bool>(nullable: false),
                    IsAtlantSynovialitis = table.Column<bool>(nullable: false),
                    IsAtlantSynovialProliferation = table.Column<bool>(nullable: false),
                    IsAtlantJointEffusion = table.Column<bool>(nullable: false),
                    IsAtlantErosions = table.Column<bool>(nullable: false),
                    IsDensErosion = table.Column<bool>(nullable: false),
                    AtlantoOccipitaleDistanceType = table.Column<byte>(nullable: false),
                    IsContrastEnhancement = table.Column<bool>(nullable: false),
                    IsIrregularThickeningOfTheCorticalBone = table.Column<bool>(nullable: false),
                    AnteriorSerialNumber = table.Column<string>(nullable: true),
                    AnteriorPictureNumber = table.Column<string>(nullable: true),
                    AnteriorImageFileId = table.Column<Guid>(nullable: true),
                    PosteriorSerialNumber = table.Column<string>(nullable: true),
                    PosteriorPictureNumber = table.Column<string>(nullable: true),
                    PosteriorImageFileId = table.Column<Guid>(nullable: true),
                    MarginalisSerialNumber = table.Column<string>(nullable: true),
                    MarginalisPictureNumber = table.Column<string>(nullable: true),
                    MarginalisImageFileId = table.Column<Guid>(nullable: true),
                    DiscitisSerialNumber = table.Column<string>(nullable: true),
                    DiscitisPictureNumber = table.Column<string>(nullable: true),
                    DiscitisImageFileId = table.Column<Guid>(nullable: true),
                    PeriostitisSerialNumber = table.Column<string>(nullable: true),
                    PeriostitisPictureNumber = table.Column<string>(nullable: true),
                    PeriostitisImageFileId = table.Column<Guid>(nullable: true),
                    DiscPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiscFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiscFindings_ImageFiles_AnteriorImageFileId",
                        column: x => x.AnteriorImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DiscFindings_DiscPages_DiscPageId",
                        column: x => x.DiscPageId,
                        principalTable: "DiscPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DiscFindings_ImageFiles_DiscitisImageFileId",
                        column: x => x.DiscitisImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DiscFindings_ImageFiles_MarginalisImageFileId",
                        column: x => x.MarginalisImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DiscFindings_ImageFiles_PeriostitisImageFileId",
                        column: x => x.PeriostitisImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DiscFindings_ImageFiles_PosteriorImageFileId",
                        column: x => x.PosteriorImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                name: "SacroiliacJointFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IKnowDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsBoneBridges = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    IsOsteophytes = table.Column<bool>(nullable: false),
                    JointSurfaceSubType = table.Column<byte>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    IsSurfaceNarrowing = table.Column<bool>(nullable: false),
                    IsVacuumPhenomenon = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    SclerosisType = table.Column<byte>(nullable: false),
                    IsFatDeposition = table.Column<bool>(nullable: false),
                    IsEnthesitis = table.Column<bool>(nullable: false),
                    EntheitisType = table.Column<byte>(nullable: false),
                    IsSynovitis = table.Column<bool>(nullable: false),
                    IsCmEnhancement = table.Column<bool>(nullable: false),
                    IsJointSpaceWidening = table.Column<bool>(nullable: false),
                    IsJointEffusion = table.Column<bool>(nullable: false),
                    IsBoneMarrow = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsSoftTissue = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    PelvisLocation = table.Column<byte>(nullable: false),
                    IDescribeDifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsSPARCCScore = table.Column<bool>(nullable: false),
                    Score1Id = table.Column<Guid>(nullable: true),
                    Score2Id = table.Column<Guid>(nullable: true),
                    Score3Id = table.Column<Guid>(nullable: true),
                    Score4Id = table.Column<Guid>(nullable: true),
                    Score5Id = table.Column<Guid>(nullable: true),
                    Score6Id = table.Column<Guid>(nullable: true),
                    SPARCCScore = table.Column<int>(nullable: true),
                    MaximumExpansion = table.Column<int>(nullable: true),
                    SacroiliacJointPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SacroiliacJointFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_SacroiliacJointPages_SacroiliacJoin~",
                        column: x => x.SacroiliacJointPageId,
                        principalTable: "SacroiliacJointPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score1Id",
                        column: x => x.Score1Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score2Id",
                        column: x => x.Score2Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score3Id",
                        column: x => x.Score3Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score4Id",
                        column: x => x.Score4Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score5Id",
                        column: x => x.Score5Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_Scores_Score6Id",
                        column: x => x.Score6Id,
                        principalTable: "Scores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    CMEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    HematomaCharacterizationType = table.Column<byte>(nullable: false),
                    IsHypointensAfterFatSaturation = table.Column<bool>(nullable: false),
                    IsIsointenseToCerebrospinalFluid = table.Column<bool>(nullable: false),
                    IsMirrorFormation = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsSurroundingInflammatoryReaction = table.Column<bool>(nullable: false),
                    IsCommunicationWithIntraduralSpace = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsThickeningOfTheNerve = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsTargetSign = table.Column<bool>(nullable: false),
                    IsHourglassShape = table.Column<bool>(nullable: false),
                    IsSpindleShaped = table.Column<bool>(nullable: false),
                    NeurofibromatosisType = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SizeDiameterInMm = table.Column<int>(nullable: true),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    SpineLocation1 = table.Column<decimal>(nullable: false),
                    ExpansionInMm = table.Column<int>(nullable: true),
                    SpineAxialLocation = table.Column<byte>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsMuscle = table.Column<bool>(nullable: false),
                    IsNerveRoot = table.Column<bool>(nullable: false),
                    SpineLocationBones = table.Column<decimal>(nullable: false),
                    SpineLocation2 = table.Column<decimal>(nullable: false),
                    SpineLocationDisks1 = table.Column<decimal>(nullable: false),
                    MaxCraniocaudalDiameter = table.Column<int>(nullable: true),
                    IsExtensionOsseousNeuralForamen = table.Column<bool>(nullable: false),
                    IsScalloping = table.Column<bool>(nullable: false),
                    IsOsteolysis = table.Column<bool>(nullable: false),
                    SpineLocationDisks2 = table.Column<decimal>(nullable: false),
                    SpineLocationDisks3 = table.Column<decimal>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsCervicalRight = table.Column<bool>(nullable: false),
                    IsCervicalLeft = table.Column<bool>(nullable: false),
                    IsParaaortal = table.Column<bool>(nullable: false),
                    IsAortocaval = table.Column<bool>(nullable: false),
                    IsParailiacal = table.Column<bool>(nullable: false),
                    IsParailiacalRight = table.Column<bool>(nullable: false),
                    IsParailiacalLeft = table.Column<bool>(nullable: false),
                    IsPreSacral = table.Column<bool>(nullable: false),
                    IsPreSacralRight = table.Column<bool>(nullable: false),
                    IsPreSacralLeft = table.Column<bool>(nullable: false),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    LymphadenopathyInMm = table.Column<int>(nullable: true),
                    VesselsUretersType = table.Column<byte>(nullable: false),
                    VesselsSide = table.Column<byte>(nullable: false),
                    ArteriopathyType = table.Column<byte>(nullable: false),
                    AneurysmMaximumDiameter = table.Column<int>(nullable: true),
                    PathologyType = table.Column<byte>(nullable: false),
                    IsUreterRight = table.Column<bool>(nullable: false),
                    IsUreterLeft = table.Column<bool>(nullable: false),
                    IsLongissimusCapitisMuscle = table.Column<bool>(nullable: false),
                    IsLevatorScapulaeMuscle = table.Column<bool>(nullable: false),
                    IsSemispinalisColliMuscle = table.Column<bool>(nullable: false),
                    IsSemispinalisCapitisMuscle = table.Column<bool>(nullable: false),
                    IsSpleniusCapitisMuscle = table.Column<bool>(nullable: false),
                    IsTrapeziusMuscle = table.Column<bool>(nullable: false),
                    IsErectorSpinaeMuscle = table.Column<bool>(nullable: false),
                    IsIliocostalisMuscle = table.Column<bool>(nullable: false),
                    IsLongissimusMuscle = table.Column<bool>(nullable: false),
                    IsQuadratusLumborumMuscle = table.Column<bool>(nullable: false),
                    IsPsoasMajorMuscle = table.Column<bool>(nullable: false),
                    IsMultifidusMuscle = table.Column<bool>(nullable: false),
                    LocalizationWithinTheMuscleType = table.Column<byte>(nullable: false),
                    IsMuscleLesion = table.Column<bool>(nullable: false),
                    ClassificationMunichConsensusType = table.Column<byte>(nullable: false),
                    IsDiameterOfRupture = table.Column<bool>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    RetractionInMm = table.Column<int>(nullable: true),
                    IsWavyAppearanceOfTheFibers = table.Column<bool>(nullable: false),
                    IsOsseousAvulsion = table.Column<bool>(nullable: false),
                    BonyAvulsionType = table.Column<byte>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsIntramuscularly = table.Column<bool>(nullable: false),
                    IsInterfascial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsMuscleHypertrophy = table.Column<bool>(nullable: false),
                    IsMuscleAtrophy = table.Column<bool>(nullable: false),
                    MuscleAtrophyType = table.Column<byte>(nullable: false),
                    IsApophysitis = table.Column<bool>(nullable: false),
                    IsFascialRupture = table.Column<bool>(nullable: false),
                    IsMuscleHernia = table.Column<bool>(nullable: false),
                    SoftTissuesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuesFindings_SoftTissuesPages_SoftTissuesPageId",
                        column: x => x.SoftTissuesPageId,
                        principalTable: "SoftTissuesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpinalCanalFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    SpinalCanalDifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    LocalizationInTheSpinalCordType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    T1wSignal = table.Column<byte>(nullable: false),
                    T2wSignal = table.Column<byte>(nullable: false),
                    ContrastEnhancementType = table.Column<byte>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    IsSwelling = table.Column<bool>(nullable: false),
                    IsSerpiginousVascularStructures = table.Column<bool>(nullable: false),
                    IsFlowVoids = table.Column<bool>(nullable: false),
                    IsClottedNerveRoots = table.Column<bool>(nullable: false),
                    IsEmptyDuralSac = table.Column<bool>(nullable: false),
                    IsSeptationInTheSubarachnoidSpace = table.Column<bool>(nullable: false),
                    SpinalCanalLocation = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsT2wHypointenseRim = table.Column<bool>(nullable: false),
                    IsT1wHeterogeneousSignalIntensity = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    IsHypointenseAfterFatSaturation = table.Column<bool>(nullable: false),
                    IsSTIROrTIRMHyperintense = table.Column<bool>(nullable: false),
                    IsCystSyrinx = table.Column<bool>(nullable: false),
                    IsCentralCavityFormation = table.Column<bool>(nullable: false),
                    IsEdema = table.Column<bool>(nullable: false),
                    IsNumerousVessels = table.Column<bool>(nullable: false),
                    IsUsuringOrRemodellingSpinalCanal = table.Column<bool>(nullable: false),
                    IsLeptomeningealSpread = table.Column<bool>(nullable: false),
                    IsIntraAndExtradural = table.Column<bool>(nullable: false),
                    IsDisplacement = table.Column<bool>(nullable: false),
                    IsCompression = table.Column<bool>(nullable: false),
                    IsScaloppingOrThinnedPedicle = table.Column<bool>(nullable: false),
                    IsExtendedNeuralForamen = table.Column<bool>(nullable: false),
                    IsWideningEpiduralFatTissueMoreThan7Mm = table.Column<bool>(nullable: false),
                    IsDeformationOfTheDuralSac = table.Column<bool>(nullable: false),
                    IsEpiduralReaction = table.Column<bool>(nullable: false),
                    IsLiquorisointense = table.Column<bool>(nullable: false),
                    IsFatIsointens = table.Column<bool>(nullable: false),
                    QuantityTransverseType = table.Column<byte>(nullable: false),
                    IsIntramedullaryFocal = table.Column<bool>(nullable: false),
                    IsAnteriorRadix = table.Column<bool>(nullable: false),
                    IsPial = table.Column<bool>(nullable: false),
                    PialType = table.Column<byte>(nullable: false),
                    IsSubarachnoid = table.Column<bool>(nullable: false),
                    IsEpidural = table.Column<bool>(nullable: false),
                    IsAberrantCourse = table.Column<bool>(nullable: false),
                    AberrantCourseType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    SpineLocationNonTarget = table.Column<decimal>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    SpinalCanalStenosisDetailType = table.Column<byte>(nullable: false),
                    WidthOfTheSpinalCanal = table.Column<int>(nullable: true),
                    IsMyelopathy = table.Column<bool>(nullable: false),
                    MalformationType = table.Column<byte>(nullable: false),
                    IsCaudalPositionOfTheMedullaryCone = table.Column<bool>(nullable: false),
                    IsThickenedFilumTerminale = table.Column<bool>(nullable: false),
                    ExpansionInCcDimension = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    ExpansionProtrusionCcDimension = table.Column<int>(nullable: true),
                    Diameter = table.Column<int>(nullable: true),
                    CharacterizationOpenType = table.Column<byte>(nullable: false),
                    LocalizationType = table.Column<byte>(nullable: false),
                    IsPerineuralCyst = table.Column<bool>(nullable: false),
                    DetailsClosedDysraphismType = table.Column<byte>(nullable: false),
                    ClassificationSubcutaneousMassType = table.Column<byte>(nullable: false),
                    ClassificationDysraphyType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosesType = table.Column<byte>(nullable: false),
                    IsT1wHyperintense = table.Column<bool>(nullable: false),
                    IsT2wHyperintense = table.Column<bool>(nullable: false),
                    IsT1wFatSaturationHypointense = table.Column<bool>(nullable: false),
                    IsNoContrastEnhancement = table.Column<bool>(nullable: false),
                    SizeAxial = table.Column<int>(nullable: true),
                    SizeCraniocaudal = table.Column<int>(nullable: true),
                    AdditionalExtensionType = table.Column<byte>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsPosterior = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsRootDisplacement = table.Column<bool>(nullable: false),
                    SpineLocationBones = table.Column<decimal>(nullable: false),
                    SpineLocationDisks = table.Column<decimal>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCharacterizationIIIHemorrhage = table.Column<bool>(nullable: false),
                    LocalizationInTheSpinalCanalType = table.Column<byte>(nullable: false),
                    LongitudinalExpansionInMyelon = table.Column<byte>(nullable: false),
                    IsPosteriorRadix = table.Column<bool>(nullable: false),
                    IsMedullaryCone = table.Column<bool>(nullable: false),
                    IsCaudaEquina = table.Column<bool>(nullable: false),
                    IsArachnoidDiverticula = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis03 = table.Column<byte>(nullable: false),
                    SpinalCanalPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpinalCanalFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpinalCanalFindings_SpinalCanalPages_SpinalCanalPageId",
                        column: x => x.SpinalCanalPageId,
                        principalTable: "SpinalCanalPages",
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
                name: "IX_ConfigurationFindings_ConfigurationPageId",
                table: "ConfigurationFindings",
                column: "ConfigurationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ConfigurationPages_ReportId",
                table: "ConfigurationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_AnteriorImageFileId",
                table: "DiscFindings",
                column: "AnteriorImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_DiscPageId",
                table: "DiscFindings",
                column: "DiscPageId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_DiscitisImageFileId",
                table: "DiscFindings",
                column: "DiscitisImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_MarginalisImageFileId",
                table: "DiscFindings",
                column: "MarginalisImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_PeriostitisImageFileId",
                table: "DiscFindings",
                column: "PeriostitisImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_PosteriorImageFileId",
                table: "DiscFindings",
                column: "PosteriorImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_DiscPages_ReportId",
                table: "DiscPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Interventions_AnamnesisPageId",
                table: "Interventions",
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
                name: "IX_SacroiliacJointFindings_SacroiliacJointPageId",
                table: "SacroiliacJointFindings",
                column: "SacroiliacJointPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score1Id",
                table: "SacroiliacJointFindings",
                column: "Score1Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score2Id",
                table: "SacroiliacJointFindings",
                column: "Score2Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score3Id",
                table: "SacroiliacJointFindings",
                column: "Score3Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score4Id",
                table: "SacroiliacJointFindings",
                column: "Score4Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score5Id",
                table: "SacroiliacJointFindings",
                column: "Score5Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_Score6Id",
                table: "SacroiliacJointFindings",
                column: "Score6Id");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointPages_ReportId",
                table: "SacroiliacJointPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesFindings_SoftTissuesPageId",
                table: "SoftTissuesFindings",
                column: "SoftTissuesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesPages_ReportId",
                table: "SoftTissuesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SpinalCanalFindings_SpinalCanalPageId",
                table: "SpinalCanalFindings",
                column: "SpinalCanalPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SpinalCanalPages_ReportId",
                table: "SpinalCanalPages",
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
                name: "BonesFindingPresets");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "ConfigurationFindings");

            migrationBuilder.DropTable(
                name: "DiscFindings");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "Interventions");

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
                name: "SacroiliacJointFindingPresets");

            migrationBuilder.DropTable(
                name: "SacroiliacJointFindings");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SoftTissuesFindingPresets");

            migrationBuilder.DropTable(
                name: "SoftTissuesFindings");

            migrationBuilder.DropTable(
                name: "SpinalCanalFindingPresets");

            migrationBuilder.DropTable(
                name: "SpinalCanalFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "ConfigurationPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "DiscPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SacroiliacJointPages");

            migrationBuilder.DropTable(
                name: "Scores");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SoftTissuesPages");

            migrationBuilder.DropTable(
                name: "SpinalCanalPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
