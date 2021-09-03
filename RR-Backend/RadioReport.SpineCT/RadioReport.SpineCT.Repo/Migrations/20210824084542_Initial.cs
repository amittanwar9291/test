using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.SpineCT.Repo.Migrations
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
                    BonesDiagnosis1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsPolkaDotSign = table.Column<bool>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentSoftTissues = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsMarginalSclerosis = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsSunburst = table.Column<bool>(nullable: false),
                    IsExtensiveVertebralHemangioma = table.Column<bool>(nullable: false)
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
                name: "SoftTissuesFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCapsuleOrMembrane = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsSurroundinginflammatoryReaction = table.Column<bool>(nullable: false),
                    IsCommunicationWithTheIntraduralSpace = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    MonthOfCT = table.Column<byte>(nullable: false),
                    YearOfCT = table.Column<int>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MonthOfMRI = table.Column<byte>(nullable: false),
                    YearOfMRI = table.Column<int>(nullable: false),
                    IsXRay = table.Column<bool>(nullable: false),
                    MonthOfXRay = table.Column<byte>(nullable: false),
                    YearOfXRay = table.Column<int>(nullable: false)
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
                    SpineLocation = table.Column<decimal>(nullable: false)
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
                name: "MyelonSpinalCanalPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyelonSpinalCanalPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MyelonSpinalCanalPages_Reports_ReportId",
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
                name: "SummaryPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsComplementaryImaging = table.Column<bool>(nullable: false),
                    IsMRTCervicalSpine = table.Column<bool>(nullable: false),
                    IsMRTThoracicSpine = table.Column<bool>(nullable: false),
                    IsMRTLumbarSpine = table.Column<bool>(nullable: false),
                    IsMRTSacroiliacJoint = table.Column<bool>(nullable: false),
                    IsWithIVContrastAgent = table.Column<bool>(nullable: false),
                    IsPETCT = table.Column<bool>(nullable: false),
                    IsBoneScintigraphy = table.Column<bool>(nullable: false),
                    IsConsultationNeurology = table.Column<bool>(nullable: false),
                    IsConsultationNeurosurgery = table.Column<bool>(nullable: false),
                    IsConsultationOrthopedics = table.Column<bool>(nullable: false),
                    IsConsultationPainTherapist = table.Column<bool>(nullable: false),
                    IsPainTherapyInterventional = table.Column<bool>(nullable: false),
                    PainTherapyInterventionalType = table.Column<byte>(nullable: false),
                    IsISGInfiltrationRight = table.Column<bool>(nullable: false),
                    IsISGInfiltrationLeft = table.Column<bool>(nullable: false),
                    IsBiopsyRecommended = table.Column<bool>(nullable: false),
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
                    IsIntravenous = table.Column<bool>(nullable: false),
                    IsIntradural = table.Column<bool>(nullable: false),
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
                    AnamnesisIndicationType = table.Column<byte>(nullable: false),
                    IsRadiculopathy = table.Column<bool>(nullable: false),
                    IsRadiculopathyRight = table.Column<bool>(nullable: false),
                    IsRadiculopathyLeft = table.Column<bool>(nullable: false),
                    IsPseudoradicularSymptoms = table.Column<bool>(nullable: false),
                    IsPseudoradicularSymptomsRight = table.Column<bool>(nullable: false),
                    IsPseudoradicularSymptomsLeft = table.Column<bool>(nullable: false),
                    IsDiffuseLumbago = table.Column<bool>(nullable: false),
                    IsDiffuseLumbagoRight = table.Column<bool>(nullable: false),
                    IsDiffuseLumbagoLeft = table.Column<bool>(nullable: false),
                    SpineLocationBones = table.Column<decimal>(nullable: false),
                    IsPain = table.Column<bool>(nullable: false),
                    IsMotorDeficit = table.Column<bool>(nullable: false),
                    IsSensoryDeficit = table.Column<bool>(nullable: false),
                    IsConusCaudaSyndrome = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    IsTrauma = table.Column<bool>(nullable: false),
                    IsMinorInjury = table.Column<bool>(nullable: false),
                    MonthOfVertebralBodyFracture = table.Column<byte>(nullable: false),
                    YearOfVertebralBodyFracture = table.Column<int>(nullable: false),
                    IntracranialHypotensionSyndromeType = table.Column<byte>(nullable: false),
                    IsCSFLeakage = table.Column<bool>(nullable: false),
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
                name: "PreviousInterventions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    PreviousInterventionType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    DetailsInterventionType = table.Column<byte>(nullable: false),
                    MonthOfLumbarPuncture = table.Column<byte>(nullable: false),
                    YearOfLumbarPuncture = table.Column<int>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousInterventions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousInterventions_AnamnesisPages_AnamnesisPageId",
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
                    BonesDiagnosis1 = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    CortexType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsLiquidLevel = table.Column<bool>(nullable: false),
                    IsPolkaDotSign = table.Column<bool>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsInfiltrationOfAdjacentSoftTissues = table.Column<bool>(nullable: false),
                    IsOsteolytic = table.Column<bool>(nullable: false),
                    IsMarginalSclerosis = table.Column<bool>(nullable: false),
                    IsPeriostealReaction = table.Column<bool>(nullable: false),
                    IsSunburst = table.Column<bool>(nullable: false),
                    IsExtensiveVertebralHemangioma = table.Column<bool>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    IsTrailingEdgeParticipation = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    MinVertebralBodyHeightInMm = table.Column<int>(nullable: true),
                    IsFractureOccipitalCondyleSideRight = table.Column<bool>(nullable: false),
                    FractureStabilityRight = table.Column<byte>(nullable: false),
                    RotationOrTranslationRight = table.Column<byte>(nullable: false),
                    RotationRightInDeg = table.Column<int>(nullable: true),
                    TranslationRightInMm = table.Column<int>(nullable: true),
                    C0NoFutherDefinedTypeRight = table.Column<byte>(nullable: false),
                    IsFractureOccipitalCondyleSideLeft = table.Column<bool>(nullable: false),
                    FractureStabilityLeft = table.Column<byte>(nullable: false),
                    RotationOrTranslationLeft = table.Column<byte>(nullable: false),
                    RotationLeftInDeg = table.Column<int>(nullable: true),
                    TranslationLeftInMm = table.Column<int>(nullable: true),
                    C0NoFutherDefinedTypeLeft = table.Column<byte>(nullable: false),
                    GehweilerType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    IsVertebralArteryInvolvement = table.Column<bool>(nullable: false),
                    IsInvolvementOfRightVertebralArtery = table.Column<bool>(nullable: false),
                    IsInvolvementOfLeftVertebralArtery = table.Column<bool>(nullable: false),
                    C1NoFutherDefinedType = table.Column<byte>(nullable: false),
                    C1SpecialFractureTypesType = table.Column<byte>(nullable: false),
                    C2FractureLocalizationType = table.Column<byte>(nullable: false),
                    C2SpecialFractureTypesType = table.Column<byte>(nullable: false),
                    C2FractureDetailsType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    AxisArcType = table.Column<byte>(nullable: false),
                    C2NoFutherDefinedType = table.Column<byte>(nullable: false),
                    StabilityType = table.Column<byte>(nullable: false),
                    C1ToC2FractureType = table.Column<byte>(nullable: false),
                    AtlantodentalIntervalInMm = table.Column<int>(nullable: true),
                    IsIncreasedAtlantodentalInterval = table.Column<bool>(nullable: false),
                    FractureType = table.Column<byte>(nullable: false),
                    CCommonSpecialFractureType = table.Column<byte>(nullable: false),
                    A0ClassificationType = table.Column<byte>(nullable: false),
                    A0ClassificationASubtype = table.Column<byte>(nullable: false),
                    A0ClassificationBSubtype = table.Column<byte>(nullable: false),
                    GenantClassificationGradeType = table.Column<byte>(nullable: false),
                    GenantFractureType = table.Column<byte>(nullable: false),
                    IsAnteriorColumn = table.Column<bool>(nullable: false),
                    IsMiddleColumn = table.Column<bool>(nullable: false),
                    IsPosteriorColumn = table.Column<bool>(nullable: false),
                    CommonNoFutherDefinedType = table.Column<byte>(nullable: false),
                    BonesFractureDiagnosisType = table.Column<byte>(nullable: false),
                    IsSchmorlNode = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    A0OsSacrumClassificationType = table.Column<byte>(nullable: false),
                    A0OsSacrumClassificationASubtype = table.Column<byte>(nullable: false),
                    A0OsSacrumClassificationBSubtype = table.Column<byte>(nullable: false),
                    A0OsSacrumClassificationCSubtype = table.Column<byte>(nullable: false),
                    OsSacrumNoFutherDefinedType = table.Column<byte>(nullable: false),
                    OsSacrumDenisClassificationType = table.Column<byte>(nullable: false),
                    IsOsSacrumRight = table.Column<bool>(nullable: false),
                    IsOsSacrumLeft = table.Column<bool>(nullable: false),
                    OsSacrumSpecialFractureType = table.Column<byte>(nullable: false),
                    A0CoccygisClassificationType = table.Column<byte>(nullable: false),
                    IsWithSignificantDisplacement = table.Column<bool>(nullable: false),
                    IsAdjacentSoftTissueInjury = table.Column<bool>(nullable: false),
                    CoccygisNoFutherDefinedType = table.Column<byte>(nullable: false),
                    InterventionType = table.Column<byte>(nullable: false),
                    SpondylodesisSpineLocations = table.Column<decimal>(nullable: false),
                    InterventionSpineLocations = table.Column<decimal>(nullable: false),
                    IsSpineSideRight = table.Column<bool>(nullable: false),
                    IsSpineSideLeft = table.Column<bool>(nullable: false),
                    IntervertebralDiscReplacementSpineLocations = table.Column<decimal>(nullable: false),
                    DetailsInterventionType = table.Column<byte>(nullable: false),
                    ComplicationsType = table.Column<byte>(nullable: false),
                    IsBoneCementLeakage = table.Column<bool>(nullable: false),
                    IsCompressionOfAdjacentStructures = table.Column<bool>(nullable: false),
                    IsCementEvidenceInParavertebralVeins = table.Column<bool>(nullable: false),
                    IsIndicationOfPulmonaryArteryEmbolism = table.Column<bool>(nullable: false),
                    IsMaterialFracture = table.Column<bool>(nullable: false),
                    IsDislocation = table.Column<bool>(nullable: false),
                    VertebraSpineLocations = table.Column<decimal>(nullable: false),
                    LocationSideType = table.Column<byte>(nullable: false),
                    LocalizationVertebralArchType = table.Column<byte>(nullable: false),
                    PathologyOfTheVertebralArchBonesDiagnosis = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    VertebralBodyLocalizations = table.Column<byte>(nullable: false),
                    ExpansionMaxDiameterInMm = table.Column<int>(nullable: true),
                    Expansion2ndPlaneInMm = table.Column<int>(nullable: true),
                    Expansion3rdPlaneInMm = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    MassSpineDensityType = table.Column<byte>(nullable: false),
                    MatrixType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsNidus = table.Column<bool>(nullable: false),
                    IsIntralesionalFat = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsGroundGlassAspect = table.Column<bool>(nullable: false),
                    IsSwelling = table.Column<bool>(nullable: false),
                    IsOsteoblastic = table.Column<bool>(nullable: false),
                    IsPermeativeGrowthPattern = table.Column<bool>(nullable: false),
                    IsGeographicAppearance = table.Column<bool>(nullable: false),
                    IsPedunculateGrowingAwayFromNearbyJoint = table.Column<bool>(nullable: false),
                    IsSubchondral = table.Column<bool>(nullable: false),
                    IsAdjacentSclerosis = table.Column<bool>(nullable: false),
                    AdjacentSclerosisType = table.Column<byte>(nullable: false),
                    IsInterruptionOfEndPlate = table.Column<bool>(nullable: false),
                    IsOsteoproliferativeReaction = table.Column<bool>(nullable: false),
                    IsBoneApposition = table.Column<bool>(nullable: false),
                    IsEdgrenVainoSign = table.Column<bool>(nullable: false),
                    IsRemodelling = table.Column<bool>(nullable: false),
                    IsMultilayered = table.Column<bool>(nullable: false),
                    IsCodmanTriangle = table.Column<bool>(nullable: false),
                    IsPathologicFracture = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    SignificantType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistribution = table.Column<byte>(nullable: false),
                    MassSpineDD1 = table.Column<byte>(nullable: false),
                    IsDD1SuspicionOf = table.Column<bool>(nullable: false),
                    MassSpineDD2 = table.Column<byte>(nullable: false),
                    IsDD2Subordinate = table.Column<bool>(nullable: false),
                    MassSpineDD3 = table.Column<byte>(nullable: false),
                    IsAbove1LesionSameEntity = table.Column<bool>(nullable: false),
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
                    IsThoracolumbar = table.Column<bool>(nullable: false),
                    CervicalSpinePathologyType = table.Column<byte>(nullable: false),
                    ThoracicSpinePathologyType = table.Column<byte>(nullable: false),
                    LumbarSpinePathologyType = table.Column<byte>(nullable: false),
                    SpondylolisthesisLocation = table.Column<decimal>(nullable: false),
                    DetailsType = table.Column<byte>(nullable: false),
                    MeyerdingClassificationType = table.Column<byte>(nullable: false),
                    EtiologyType = table.Column<byte>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsC7NeckRib = table.Column<bool>(nullable: false),
                    IsLumbalizedTH12 = table.Column<bool>(nullable: false),
                    IsLumbosacral = table.Column<bool>(nullable: false),
                    LumbosacralType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    DefinitionType = table.Column<byte>(nullable: false),
                    CastellviType = table.Column<byte>(nullable: false),
                    PatternType = table.Column<byte>(nullable: false),
                    IsCervicothoracic = table.Column<bool>(nullable: false),
                    IsTorsionCervicalSpine = table.Column<bool>(nullable: false),
                    IsTorsionThoracicSpine = table.Column<bool>(nullable: false),
                    IsTorsionLumbarSpine = table.Column<bool>(nullable: false),
                    CervicalSpineCobbAngle = table.Column<int>(nullable: true),
                    ThoracicSpineCobbAngle = table.Column<int>(nullable: true),
                    LumbarSpineCobbAngle = table.Column<int>(nullable: true),
                    CervicalVertexSpineType = table.Column<byte>(nullable: false),
                    ThoracicVertexSpineType = table.Column<byte>(nullable: false),
                    LumbarVertexSpineType = table.Column<byte>(nullable: false),
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
                    IsDiscCalcification = table.Column<bool>(nullable: false),
                    IsVacuumPhenomenon = table.Column<bool>(nullable: false),
                    NerveRootAffectionType = table.Column<byte>(nullable: false),
                    IsNerveRootAffectionRight = table.Column<bool>(nullable: false),
                    IsNerveRootAffectionLeft = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    IsStenosisRight = table.Column<bool>(nullable: false),
                    IsStenosisLeft = table.Column<bool>(nullable: false),
                    ProtrusionExtrusionDetailsType = table.Column<byte>(nullable: false),
                    DiscLocation = table.Column<int>(nullable: false),
                    ExpansionIntoSpinalCanalType = table.Column<byte>(nullable: false),
                    IsSpinalCanalStenosis = table.Column<bool>(nullable: false),
                    GradeType = table.Column<byte>(nullable: false),
                    SagittalDiameterInMm = table.Column<int>(nullable: true),
                    TransverseDiameterSpinalCanalWidthInMm = table.Column<int>(nullable: true),
                    IsOsteochondrosis = table.Column<bool>(nullable: false),
                    IsOsteophyteFormation = table.Column<bool>(nullable: false),
                    IsFacetJointArthropathy = table.Column<bool>(nullable: false),
                    IsFacetJointArthropathyRight = table.Column<bool>(nullable: false),
                    IsFacetJointArthropathyLeft = table.Column<bool>(nullable: false),
                    IsHypertrophy = table.Column<bool>(nullable: false),
                    IsSynovialCyst = table.Column<bool>(nullable: false),
                    IsSynovialCystRight = table.Column<bool>(nullable: false),
                    IsSynovialCystLeft = table.Column<bool>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsNarrowingOfTheIntervertebralDisc = table.Column<bool>(nullable: false),
                    IsBulging = table.Column<bool>(nullable: false),
                    BulgingDetailsType = table.Column<byte>(nullable: false),
                    SideType = table.Column<byte>(nullable: false),
                    DirectionOfMigrationType = table.Column<byte>(nullable: false),
                    CraniocaudalExtensionInMm = table.Column<int>(nullable: true),
                    LevelCraniocaudalType = table.Column<byte>(nullable: false),
                    IsRetrospondylophyte = table.Column<bool>(nullable: false),
                    IsOsteoarthritis = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosis = table.Column<bool>(nullable: false),
                    IsSpondylolysis = table.Column<bool>(nullable: false),
                    IsLuxation = table.Column<bool>(nullable: false),
                    IsFacetJointArthrosisRight = table.Column<bool>(nullable: false),
                    IsFacetJointArthrosisLeft = table.Column<bool>(nullable: false),
                    PathriaClassificationType = table.Column<byte>(nullable: false),
                    IsCyst = table.Column<bool>(nullable: false),
                    IsMultiple = table.Column<bool>(nullable: false),
                    IsFacetJointArthrosisForaminalStenosis = table.Column<bool>(nullable: false),
                    FacetJointArthrosisForaminalStenosisType = table.Column<byte>(nullable: false),
                    IsForaminalStenosisRight = table.Column<bool>(nullable: false),
                    IsForaminalStenosisLeft = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosisForaminalStenosis = table.Column<bool>(nullable: false),
                    UncovertebralArthrosisForaminalStenosisType = table.Column<byte>(nullable: false),
                    IsUncovertebralArthrosisRight = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosisLeft = table.Column<bool>(nullable: false),
                    IsSpondylolysisRight = table.Column<bool>(nullable: false),
                    IsSpondylolysisLeft = table.Column<bool>(nullable: false),
                    IsLuxationRight = table.Column<bool>(nullable: false),
                    IsLuxationLeft = table.Column<bool>(nullable: false),
                    IsIncreasedSizeOfTheDisc = table.Column<bool>(nullable: false),
                    IsContrastEnhancementOfTheDisc = table.Column<bool>(nullable: false),
                    IsIrregularityOfAdjacentVertebralEndplates = table.Column<bool>(nullable: false),
                    SpineAxialLocation = table.Column<byte>(nullable: false),
                    IsParavertebralInflammatoryResponse = table.Column<bool>(nullable: false),
                    IsSoftTissueEdema = table.Column<bool>(nullable: false),
                    IsAbscess = table.Column<bool>(nullable: false),
                    IsIntraspinal = table.Column<bool>(nullable: false),
                    IntraspinalLargestDiameterInMm = table.Column<int>(nullable: true),
                    IsParavertebral = table.Column<bool>(nullable: false),
                    ParavertebralLargestDiameterInMm = table.Column<int>(nullable: true),
                    IsLocatedAtPsoasMuscle = table.Column<bool>(nullable: false),
                    IsActiveDiscitis = table.Column<bool>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsRuptureOfPosteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsRuptureOfAnteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsIntervertebralDiscRupture = table.Column<bool>(nullable: false),
                    IsAnteriorColumn = table.Column<bool>(nullable: false),
                    IsMiddleColumn = table.Column<bool>(nullable: false),
                    IsPosteriorColumn = table.Column<bool>(nullable: false),
                    IsEnthesitisChronic = table.Column<bool>(nullable: false),
                    IsOsteoproliferativeReaction = table.Column<bool>(nullable: false),
                    IsOsteophyte = table.Column<bool>(nullable: false),
                    IsSyndesmophyte = table.Column<bool>(nullable: false),
                    IsParasyndesmophyte = table.Column<bool>(nullable: false),
                    IsMixtaosteophyte = table.Column<bool>(nullable: false),
                    IsHyperostoticSpondylophyte = table.Column<bool>(nullable: false),
                    OsteoproliferativeReactionType = table.Column<byte>(nullable: false),
                    IsRomanusLesion = table.Column<bool>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsErosion = table.Column<bool>(nullable: false),
                    IsAnderssonLesion = table.Column<bool>(nullable: false),
                    ComplicationType = table.Column<byte>(nullable: false),
                    IsConsolidated = table.Column<bool>(nullable: false),
                    IsOssificationOfTheIntervertebralSpace = table.Column<bool>(nullable: false),
                    IsAnteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsPosteriorLongitudinalLigament = table.Column<bool>(nullable: false),
                    IsLiggFlava = table.Column<bool>(nullable: false),
                    IsLiggInterspinosa = table.Column<bool>(nullable: false),
                    IsLiggSupraspinosa = table.Column<bool>(nullable: false),
                    IsLigNuchae = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsOssification = table.Column<bool>(nullable: false),
                    IsArthrosis = table.Column<bool>(nullable: false),
                    IsArthritis = table.Column<bool>(nullable: false),
                    AtlantodentalDistanceInMm = table.Column<int>(nullable: true),
                    IsAtlantoaxialJointErosions = table.Column<bool>(nullable: false),
                    IsDensErosion = table.Column<bool>(nullable: false),
                    IsDensProtrusion = table.Column<bool>(nullable: false),
                    ReferenceChamberlainLineInMm = table.Column<int>(nullable: true),
                    IsBasilarImpression = table.Column<bool>(nullable: false),
                    IsSubluxation = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    IsFacetJointsErosions = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    DiscPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiscFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiscFindings_DiscPages_DiscPageId",
                        column: x => x.DiscPageId,
                        principalTable: "DiscPages",
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
                name: "MyelonSpinalCanalFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    SpinalCanalStenosisDetailType = table.Column<byte>(nullable: false),
                    SagittalDiameterInMm = table.Column<int>(nullable: true),
                    TransverseDiameterInMm = table.Column<int>(nullable: true),
                    IsSpondylosis = table.Column<bool>(nullable: false),
                    IsSpondylosisRightSide = table.Column<bool>(nullable: false),
                    IsSpondylosisLeftSide = table.Column<bool>(nullable: false),
                    SpondylosisDetailsType = table.Column<byte>(nullable: false),
                    IsLigFlavumHypertrophy = table.Column<bool>(nullable: false),
                    IsLigFlavumHypertrophyRightSide = table.Column<bool>(nullable: false),
                    IsLigFlavumHypertrophyLeftSide = table.Column<bool>(nullable: false),
                    IsLDiscProtrusion = table.Column<bool>(nullable: false),
                    IsRetrospondylosis = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosis = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosisRightSide = table.Column<bool>(nullable: false),
                    IsUncovertebralArthrosisLeftSide = table.Column<bool>(nullable: false),
                    IsNeuralForaminalCompression = table.Column<bool>(nullable: false),
                    IsNeuralForaminalCompressionRightSide = table.Column<bool>(nullable: false),
                    IsNeuralForaminalCompressionLeftSide = table.Column<bool>(nullable: false),
                    IsLateralRecessStenosis = table.Column<bool>(nullable: false),
                    IsTShapedStenosisSpinalCanal = table.Column<bool>(nullable: false),
                    IsPseudospondylolisthesis = table.Column<bool>(nullable: false),
                    AccordingToMeyerdingType = table.Column<byte>(nullable: false),
                    LocalizationTopOrBottomVertebra = table.Column<decimal>(nullable: false),
                    SpinalCanalLocation = table.Column<byte>(nullable: false),
                    IsAnterior = table.Column<bool>(nullable: false),
                    IsPosterior = table.Column<bool>(nullable: false),
                    IsSpinalCanalLocalizationLeft = table.Column<bool>(nullable: false),
                    IsIsSpinalCanalLocalizationRight = table.Column<bool>(nullable: false),
                    IsHourglassNeurinoma = table.Column<bool>(nullable: false),
                    ExpansionMaxDiameterInMm = table.Column<int>(nullable: true),
                    Expansion2ndPlaneInMm = table.Column<int>(nullable: true),
                    Expansion3rdPlaneInMm = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    MyelonSpinalCanalDensityType = table.Column<byte>(nullable: false),
                    IsGasInclusion = table.Column<bool>(nullable: false),
                    MeasurementInHU = table.Column<int>(nullable: true),
                    MarginType = table.Column<byte>(nullable: false),
                    CharIIHomogeneityType = table.Column<byte>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsIntralesionalFat = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    MyelonAffectionType = table.Column<byte>(nullable: false),
                    IsCompressionFromAnterior = table.Column<bool>(nullable: false),
                    IsCompressionFromRightSide = table.Column<bool>(nullable: false),
                    IsCompressionFromLeftSide = table.Column<bool>(nullable: false),
                    IsCompressionFromPosterior = table.Column<bool>(nullable: false),
                    IsSerpiginousVascularStructures = table.Column<bool>(nullable: false),
                    IsSignificantVascularization = table.Column<bool>(nullable: false),
                    IsRootDisplacement = table.Column<bool>(nullable: false),
                    IsClottedNerveRoots = table.Column<bool>(nullable: false),
                    IsEmptyDuralSac = table.Column<bool>(nullable: false),
                    IsSeptationInTheSubarachnoidSpace = table.Column<bool>(nullable: false),
                    IsLeptomeningealSpread = table.Column<bool>(nullable: false),
                    IsScaloppingOrThinnedPedicle = table.Column<bool>(nullable: false),
                    IsNeuralForaminalWidening = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsHemorrhage = table.Column<bool>(nullable: false),
                    LocalizationOfNerveRootDisplacement = table.Column<decimal>(nullable: false),
                    LocalizationOfNeuralForaminalWidening = table.Column<decimal>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    DDHomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<int>(nullable: false),
                    DifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosisAbove1LesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisAbove1LesionLocations = table.Column<decimal>(nullable: false),
                    MyelonSpinalCanalPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyelonSpinalCanalFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MyelonSpinalCanalFindings_MyelonSpinalCanalPages_MyelonSpin~",
                        column: x => x.MyelonSpinalCanalPageId,
                        principalTable: "MyelonSpinalCanalPages",
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
                    PelvisLocation = table.Column<byte>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    IsBoneBridges = table.Column<bool>(nullable: false),
                    IsAnkylosis = table.Column<bool>(nullable: false),
                    AnkylosisType = table.Column<byte>(nullable: false),
                    IsOsteophytesAnterior = table.Column<bool>(nullable: false),
                    IsErosions = table.Column<bool>(nullable: false),
                    IsJointSpaceNarrowing = table.Column<bool>(nullable: false),
                    IsVacuumPhenomenon = table.Column<bool>(nullable: false),
                    IsSubchondralCysts = table.Column<bool>(nullable: false),
                    IsSubchondralSclerosis = table.Column<bool>(nullable: false),
                    SubchondralSclerosisType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosisType02 = table.Column<byte>(nullable: false),
                    IsSecondary = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SacroiliacJointPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SacroiliacJointFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SacroiliacJointFindings_SacroiliacJointPages_SacroiliacJoin~",
                        column: x => x.SacroiliacJointPageId,
                        principalTable: "SacroiliacJointPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoftTissuesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    IsFluidLevel = table.Column<bool>(nullable: false),
                    IsCapsuleOrMembrane = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsSurroundinginflammatoryReaction = table.Column<bool>(nullable: false),
                    IsCommunicationWithTheIntraduralSpace = table.Column<bool>(nullable: false),
                    ContrastEnhancementQuantitativeType = table.Column<byte>(nullable: false),
                    ContrastEnhancementDistributionType = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    CharacterizationType = table.Column<byte>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologicallyProven = table.Column<bool>(nullable: false),
                    HistologicallyProvenType = table.Column<byte>(nullable: false),
                    SpineLocation = table.Column<decimal>(nullable: false),
                    SpineAxialLocation = table.Column<byte>(nullable: false),
                    SecondPlaneInMm = table.Column<int>(nullable: true),
                    ThirdPlaneInMm = table.Column<int>(nullable: true),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ShapeType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    IsGasInclusion = table.Column<bool>(nullable: false),
                    MeasurementInHU = table.Column<int>(nullable: true),
                    CalcificationType = table.Column<byte>(nullable: false),
                    IsSclerosis = table.Column<bool>(nullable: false),
                    IsSepta = table.Column<bool>(nullable: false),
                    IsIntralesionalFat = table.Column<bool>(nullable: false),
                    IsCystic = table.Column<bool>(nullable: false),
                    IsMassEffect = table.Column<bool>(nullable: false),
                    IsInfiltration = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsMuscle = table.Column<bool>(nullable: false),
                    IsNerveRoot = table.Column<bool>(nullable: false),
                    SpineLocationBones = table.Column<decimal>(nullable: false),
                    IsUrether = table.Column<bool>(nullable: false),
                    IsUretherRight = table.Column<bool>(nullable: false),
                    IsUretherLeft = table.Column<bool>(nullable: false),
                    IsVessels = table.Column<bool>(nullable: false),
                    ContrastEnhancementHomogeneityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsMoreThanOneLesion = table.Column<bool>(nullable: false),
                    MoreThanOneLesionSpineLocation = table.Column<decimal>(nullable: false),
                    IsCervical = table.Column<bool>(nullable: false),
                    IsCervicalRight = table.Column<bool>(nullable: false),
                    IsCervicalLeft = table.Column<bool>(nullable: false),
                    IsParaaortal = table.Column<bool>(nullable: false),
                    IsAortocaval = table.Column<bool>(nullable: false),
                    IsParailiacal = table.Column<bool>(nullable: false),
                    IsParailiacalRight = table.Column<bool>(nullable: false),
                    IsParailiacalLeft = table.Column<bool>(nullable: false),
                    IsPresacral = table.Column<bool>(nullable: false),
                    IsPresacralRight = table.Column<bool>(nullable: false),
                    IsPresacralLeft = table.Column<bool>(nullable: false),
                    IsInguinal = table.Column<bool>(nullable: false),
                    IsInguinalRight = table.Column<bool>(nullable: false),
                    IsInguinalLeft = table.Column<bool>(nullable: false),
                    IsFemoral = table.Column<bool>(nullable: false),
                    IsFemoralRight = table.Column<bool>(nullable: false),
                    IsFemoralLeft = table.Column<bool>(nullable: false),
                    LargestLymphNodeSADInMm = table.Column<int>(nullable: true),
                    AffectedVesselOrUreterType = table.Column<byte>(nullable: false),
                    IsAffectedVesselOrUreterRight = table.Column<bool>(nullable: false),
                    RightPathologyType = table.Column<byte>(nullable: false),
                    IsAffectedVesselOrUreterLeft = table.Column<bool>(nullable: false),
                    LeftPathologyType = table.Column<byte>(nullable: false),
                    PathologyType = table.Column<byte>(nullable: false),
                    RightMaxDiameterInMm = table.Column<int>(nullable: true),
                    LeftMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsLongissimusCapitisMuscle = table.Column<bool>(nullable: false),
                    LongissimusCapitisMuscleSideType = table.Column<byte>(nullable: false),
                    IsLevatorScapulaeMuscle = table.Column<bool>(nullable: false),
                    LevatorScapulaeMuscleSideType = table.Column<byte>(nullable: false),
                    IsSemispinalisColliMuscle = table.Column<bool>(nullable: false),
                    SemispinalisColliMuscleSideType = table.Column<byte>(nullable: false),
                    IsSemispinalisCapitisMuscle = table.Column<bool>(nullable: false),
                    SemispinalisCapitisMuscleSideType = table.Column<byte>(nullable: false),
                    IsSpleniusCapitisMuscle = table.Column<bool>(nullable: false),
                    SpleniusCapitisMuscleSideType = table.Column<byte>(nullable: false),
                    IsTrapeziusMuscle = table.Column<bool>(nullable: false),
                    IsCervicalSpineAutochthonous = table.Column<bool>(nullable: false),
                    CervicalSpineAutochthonousSideType = table.Column<byte>(nullable: false),
                    IsThoracicOrLumbarSpineAutochthonous = table.Column<bool>(nullable: false),
                    ThoracicOrLumbarSpineAutochthonousSideType = table.Column<byte>(nullable: false),
                    IsIliocostalisMuscle = table.Column<bool>(nullable: false),
                    IliocostalisMuscleSideType = table.Column<byte>(nullable: false),
                    IsLongissimusMuscle = table.Column<bool>(nullable: false),
                    LongissimusMuscleSideType = table.Column<byte>(nullable: false),
                    IsQuadratusLumborumMuscle = table.Column<bool>(nullable: false),
                    QuadratusLumborumMuscleSideType = table.Column<byte>(nullable: false),
                    IsPsoasMajorMuscle = table.Column<bool>(nullable: false),
                    PsoasMajorMuscleSideType = table.Column<byte>(nullable: false),
                    IsMultifidusMuscle = table.Column<bool>(nullable: false),
                    MultifidusMuscleSideType = table.Column<byte>(nullable: false),
                    IsHematoma = table.Column<bool>(nullable: false),
                    IsIntramuscular = table.Column<bool>(nullable: false),
                    IsInterfascial = table.Column<bool>(nullable: false),
                    IsIntermuscular = table.Column<bool>(nullable: false),
                    IsFattyDegeneration = table.Column<bool>(nullable: false),
                    IsMuscularHypotrophy = table.Column<bool>(nullable: false),
                    IsMuscularAtrophy = table.Column<bool>(nullable: false),
                    MuscularAtrophyType = table.Column<byte>(nullable: false),
                    IsSuperinfection = table.Column<bool>(nullable: false),
                    SoftTissuesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftTissuesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftTissuesFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SoftTissuesFindings_SoftTissuesPages_SoftTissuesPageId",
                        column: x => x.SoftTissuesPageId,
                        principalTable: "SoftTissuesPages",
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
                    IsCTMyelography = table.Column<bool>(nullable: false),
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
                name: "IX_ConfigurationFindings_ConfigurationPageId",
                table: "ConfigurationFindings",
                column: "ConfigurationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_ConfigurationPages_ReportId",
                table: "ConfigurationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DiscFindings_DiscPageId",
                table: "DiscFindings",
                column: "DiscPageId");

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
                name: "IX_LocalizationPages_ReportId",
                table: "LocalizationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MyelonSpinalCanalFindings_MyelonSpinalCanalPageId",
                table: "MyelonSpinalCanalFindings",
                column: "MyelonSpinalCanalPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MyelonSpinalCanalPages_ReportId",
                table: "MyelonSpinalCanalPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PreviousInterventions_AnamnesisPageId",
                table: "PreviousInterventions",
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
                name: "IX_SacroiliacJointFindings_ImageFileId",
                table: "SacroiliacJointFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointFindings_SacroiliacJointPageId",
                table: "SacroiliacJointFindings",
                column: "SacroiliacJointPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SacroiliacJointPages_ReportId",
                table: "SacroiliacJointPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SoftTissuesFindings_ImageFileId",
                table: "SoftTissuesFindings",
                column: "ImageFileId");

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
                name: "ConfigurationFindings");

            migrationBuilder.DropTable(
                name: "DiscFindings");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "MyelonSpinalCanalFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PreviousInterventions");

            migrationBuilder.DropTable(
                name: "Reconstructions");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "SacroiliacJointFindings");

            migrationBuilder.DropTable(
                name: "SoftTissuesFindingPresets");

            migrationBuilder.DropTable(
                name: "SoftTissuesFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "ConfigurationPages");

            migrationBuilder.DropTable(
                name: "DiscPages");

            migrationBuilder.DropTable(
                name: "MyelonSpinalCanalPages");

            migrationBuilder.DropTable(
                name: "LocalizationPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "Acquisitions");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "SacroiliacJointPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "SoftTissuesPages");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
