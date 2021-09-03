using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.MammaMRT.Repo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DiagnosisFindingTemplates",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DiagnosisType = table.Column<byte>(nullable: false),
                    AdditionalDiagnosis1Type = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    EnhancementType = table.Column<byte>(nullable: false),
                    KMDynamicInitialType = table.Column<byte>(nullable: false),
                    KMDynamicDelayedType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiagnosisFindingTemplates", x => x.Id);
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
                name: "MamillaFinding",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    IsRetraction = table.Column<bool>(nullable: false),
                    IsInvasion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MamillaFinding", x => x.Id);
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
                name: "SiliconeImplantFinding",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    SiliconeImplantType = table.Column<byte>(nullable: false),
                    CapsularFibrosisType = table.Column<byte>(nullable: true),
                    RuptureType = table.Column<byte>(nullable: true),
                    LongestExtent = table.Column<decimal>(nullable: true),
                    Location = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SiliconeImplantFinding", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    OwnFamilyAnamnesisPresent = table.Column<byte>(nullable: false),
                    MenstruationType = table.Column<byte>(nullable: false),
                    Calendar = table.Column<DateTime>(nullable: true),
                    PregnanciesQuantity = table.Column<int>(nullable: true),
                    ArePreviousTherapies = table.Column<byte>(nullable: false)
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
                name: "AnatomyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Volume = table.Column<byte>(nullable: false),
                    VolumeLocation = table.Column<int>(nullable: false),
                    CutisThickness = table.Column<byte>(nullable: false),
                    CutisThicknessLocation = table.Column<int>(nullable: false),
                    CutisRetraction = table.Column<byte>(nullable: false),
                    CutisRetractionLocation = table.Column<int>(nullable: false),
                    SubcutaneousTissueType = table.Column<byte>(nullable: false),
                    SubcutaneousFatSpaceLocation = table.Column<int>(nullable: false),
                    PectoralisMuscle = table.Column<byte>(nullable: false),
                    PectoralisMuscleLocation = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnatomyPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnatomyPages_Reports_ReportId",
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
                    BonesType = table.Column<byte>(nullable: false)
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
                name: "DiagnosisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiagnosisPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiagnosisPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LymphsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AxillaryLymphNodesType = table.Column<byte>(nullable: false),
                    IsRightAxillary = table.Column<bool>(nullable: false),
                    RightAxillaryShortAxis = table.Column<int>(nullable: true),
                    IsRightAxillaryLevelI = table.Column<bool>(nullable: false),
                    IsRightAxillaryLevelII = table.Column<bool>(nullable: false),
                    IsRightAxillaryLevelIII = table.Column<bool>(nullable: false),
                    IsLeftAxillary = table.Column<bool>(nullable: false),
                    LeftAxillaryShortAxis = table.Column<int>(nullable: true),
                    IsLeftAxillaryLevelI = table.Column<bool>(nullable: false),
                    IsLeftAxillaryLevelII = table.Column<bool>(nullable: false),
                    IsLeftAxillaryLevelIII = table.Column<bool>(nullable: false),
                    OtherLymphNodesType = table.Column<byte>(nullable: false),
                    CervicalMaxShortAxisInMm = table.Column<byte>(nullable: true),
                    IsRightCervical = table.Column<bool>(nullable: false),
                    IsLeftCervical = table.Column<bool>(nullable: false),
                    IsRightParasternal = table.Column<bool>(nullable: false),
                    IsLeftParasternal = table.Column<bool>(nullable: false),
                    IsEnlarged = table.Column<bool>(nullable: false),
                    IsThyroidNodule = table.Column<bool>(nullable: false),
                    FocalLiverLesionType = table.Column<byte>(nullable: false),
                    LiverLesionBenigneType = table.Column<byte>(nullable: false),
                    IsOverOneLesionsOfSameEntity = table.Column<bool>(nullable: false),
                    LungDiseaseType = table.Column<byte>(nullable: false),
                    MaxDiameterAxialInMm = table.Column<byte>(nullable: true),
                    RightBreastDetailType = table.Column<byte>(nullable: false),
                    LeftBreastDetailType = table.Column<byte>(nullable: false),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    IsBones = table.Column<bool>(nullable: false),
                    IsMediastinum = table.Column<bool>(nullable: false),
                    IsSuspected = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisType = table.Column<byte>(nullable: false),
                    IsLocalizationRight = table.Column<bool>(nullable: false),
                    IsLocalizationLeft = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphsPages_Reports_ReportId",
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
                name: "PatientIndicationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    MRIMammaType = table.Column<byte>(nullable: false),
                    MonthOfLastMRT = table.Column<byte>(nullable: true),
                    YearOfLastMRT = table.Column<int>(nullable: true),
                    WasMammography = table.Column<bool>(nullable: false),
                    MonthOfLastMammography = table.Column<byte>(nullable: true),
                    YearOfLastMammography = table.Column<int>(nullable: true),
                    MammographyDetails = table.Column<byte>(nullable: false),
                    WasMammasonography = table.Column<bool>(nullable: false),
                    MonthOfLastMammosonography = table.Column<byte>(nullable: true),
                    YearOfLastMammosonography = table.Column<int>(nullable: true),
                    MammasonographyDetails = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientIndicationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatientIndicationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RatingPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    RightBiRads = table.Column<byte>(nullable: true),
                    RightBiRadsMultifocalType = table.Column<byte>(nullable: false),
                    RightBiRadsMulticentricType = table.Column<byte>(nullable: false),
                    RightBiRadsLevel4Type = table.Column<byte>(nullable: false),
                    LeftBiRads = table.Column<byte>(nullable: true),
                    LeftBiRadsMultifocalType = table.Column<byte>(nullable: false),
                    LeftBiRadsMulticentricType = table.Column<byte>(nullable: false),
                    LeftBiRadsLevel4Type = table.Column<byte>(nullable: false),
                    FurtherActionType = table.Column<byte>(nullable: false),
                    IsEvaluationInTumorBoard = table.Column<bool>(nullable: false),
                    IsBreastSurgeryConsultation = table.Column<bool>(nullable: false),
                    BiopsyLocalizationType = table.Column<byte>(nullable: false),
                    BiopsyModalityType = table.Column<byte>(nullable: false),
                    IsUltrasound = table.Column<bool>(nullable: false),
                    UltrasoundDateType = table.Column<byte>(nullable: false),
                    UltrasoundLocationType = table.Column<byte>(nullable: false),
                    IsMammography = table.Column<bool>(nullable: false),
                    MammographyDateType = table.Column<byte>(nullable: false),
                    MammographyLocationType = table.Column<byte>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MRIDateType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RatingPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RatingPages_Reports_ReportId",
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
                    IsAutomatedCAInjection = table.Column<bool>(nullable: false),
                    IsComputerAidedAnalysisOfCADynamics = table.Column<bool>(nullable: false),
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    IsPulsationOrBreathing = table.Column<bool>(nullable: false),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
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
                name: "AnatomyEnhancementPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    BIRADS = table.Column<byte>(nullable: false),
                    GlandularBody = table.Column<byte>(nullable: false),
                    ParenchymaType = table.Column<byte>(nullable: false),
                    Artefact = table.Column<byte>(nullable: false),
                    ArtefactFinding1 = table.Column<byte>(nullable: false),
                    ArtefactFinding1Location = table.Column<int>(nullable: false),
                    ArtefactFinding2 = table.Column<byte>(nullable: false),
                    ArtefactFinding2Location = table.Column<int>(nullable: false),
                    SiliconeImplant = table.Column<byte>(nullable: false),
                    SiliconeImplantFinding1Id = table.Column<Guid>(nullable: true),
                    SiliconeImplantFinding2Id = table.Column<Guid>(nullable: true),
                    Mamille = table.Column<byte>(nullable: false),
                    MamillaFinding1Id = table.Column<Guid>(nullable: true),
                    MamillaFinding2Id = table.Column<Guid>(nullable: true),
                    ParenchymaDynamicContrastType = table.Column<byte>(nullable: false),
                    NonEnhancingFindingsType = table.Column<byte>(nullable: false),
                    IsFindingsLocalizationRight = table.Column<bool>(nullable: false),
                    IsFindingsLocalizationLeft = table.Column<bool>(nullable: false),
                    LevelParenchymalesSide = table.Column<byte>(nullable: false),
                    OnBothSides = table.Column<byte>(nullable: false),
                    Right = table.Column<byte>(nullable: false),
                    Left = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnatomyEnhancementPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnatomyEnhancementPages_MamillaFinding_MamillaFinding1Id",
                        column: x => x.MamillaFinding1Id,
                        principalTable: "MamillaFinding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AnatomyEnhancementPages_MamillaFinding_MamillaFinding2Id",
                        column: x => x.MamillaFinding2Id,
                        principalTable: "MamillaFinding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AnatomyEnhancementPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AnatomyEnhancementPages_SiliconeImplantFinding_SiliconeImpl~",
                        column: x => x.SiliconeImplantFinding1Id,
                        principalTable: "SiliconeImplantFinding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AnatomyEnhancementPages_SiliconeImplantFinding_SiliconeImp~1",
                        column: x => x.SiliconeImplantFinding2Id,
                        principalTable: "SiliconeImplantFinding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OwnFamilyAnamnesisFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsBreastCancer = table.Column<bool>(nullable: false),
                    BreastCarcinomaType = table.Column<byte>(nullable: false),
                    BreastCarcinomaAge = table.Column<int>(nullable: true),
                    IsOvarianCancer = table.Column<bool>(nullable: false),
                    OvarianCancerAge = table.Column<int>(nullable: true),
                    OwnAnamnesisMonth = table.Column<byte>(nullable: true),
                    OwnAnamnesisYear = table.Column<int>(nullable: true),
                    MenopauseType = table.Column<byte>(nullable: false),
                    BreastLocation = table.Column<int>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OwnFamilyAnamnesisFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OwnFamilyAnamnesisFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousTherapiesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    TheraphyMonth = table.Column<byte>(nullable: true),
                    TheraphyYear = table.Column<int>(nullable: true),
                    TimeStatusType = table.Column<byte>(nullable: false),
                    BreastLocation = table.Column<int>(nullable: false),
                    RightReconstructionLocalization = table.Column<byte>(nullable: false),
                    LeftReconstructionLocalization = table.Column<byte>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousTherapiesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousTherapiesFindings_AnamnesisPages_AnamnesisPageId",
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
                    BoneLocalization = table.Column<byte>(nullable: false),
                    MaxDiameterInMm = table.Column<int>(nullable: true),
                    LesionType = table.Column<byte>(nullable: false),
                    IsTVB1 = table.Column<bool>(nullable: false),
                    IsTVB2 = table.Column<bool>(nullable: false),
                    IsTVB3 = table.Column<bool>(nullable: false),
                    IsTVB4 = table.Column<bool>(nullable: false),
                    IsTVB5 = table.Column<bool>(nullable: false),
                    IsTVB6 = table.Column<bool>(nullable: false),
                    IsTVB7 = table.Column<bool>(nullable: false),
                    IsTVB8 = table.Column<bool>(nullable: false),
                    IsTVB9 = table.Column<bool>(nullable: false),
                    IsTVB10 = table.Column<bool>(nullable: false),
                    IsTVB11 = table.Column<bool>(nullable: false),
                    IsTVB12 = table.Column<bool>(nullable: false),
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
                name: "DiagnosisFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DiagnosisType = table.Column<byte>(nullable: false),
                    AdditionalDiagnosis1Type = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    DemarcationType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    EnhancementType = table.Column<byte>(nullable: false),
                    KMDynamicInitialType = table.Column<byte>(nullable: false),
                    KMDynamicDelayedType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    DistributionPatternType = table.Column<byte>(nullable: false),
                    InternalEnhancementType = table.Column<byte>(nullable: false),
                    FindingLocation = table.Column<int>(nullable: false),
                    LargestDiameterInMm = table.Column<int>(nullable: true),
                    AdditionalDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    AdditionalDiagnosis3Type = table.Column<byte>(nullable: false),
                    IsHistologicalConfirmation = table.Column<bool>(nullable: false),
                    HistologicallySecuredType = table.Column<byte>(nullable: false),
                    AxisRightAngledInMm = table.Column<int>(nullable: true),
                    DistanceToNippleInMm = table.Column<int>(nullable: true),
                    IsIntralesionalFat = table.Column<bool>(nullable: false),
                    IsDiffusionRestriction = table.Column<bool>(nullable: false),
                    IsAdditionalIpsilateralLesionsSameEntity = table.Column<bool>(nullable: false),
                    IsSkinInfiltration = table.Column<bool>(nullable: false),
                    IsPectoralisMuscleInfiltration = table.Column<bool>(nullable: false),
                    IsChestWall = table.Column<bool>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    DiagnosisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiagnosisFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiagnosisFindings_DiagnosisPages_DiagnosisPageId",
                        column: x => x.DiagnosisPageId,
                        principalTable: "DiagnosisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DiagnosisFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PatientIndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    NippleDischargeSinceWhen = table.Column<byte>(nullable: false),
                    NippleDischargeLocalization = table.Column<int>(nullable: false),
                    ChestPainType = table.Column<byte>(nullable: false),
                    IsAntibiosis = table.Column<bool>(nullable: false),
                    PatientIndicationPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientIndicationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatientIndicationFindings_PatientIndicationPages_PatientInd~",
                        column: x => x.PatientIndicationPageId,
                        principalTable: "PatientIndicationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PatientInformations",
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
                    table.PrimaryKey("PK_PatientInformations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PatientInformations_PatientIndicationPages_Id",
                        column: x => x.Id,
                        principalTable: "PatientIndicationPages",
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
                    SiliconeSensitive = table.Column<bool>(nullable: false),
                    SiliconeSuppressing = table.Column<bool>(nullable: false),
                    IsDynamicsFollowingGdApplication = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
                    IsLateStage = table.Column<bool>(nullable: false),
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
                name: "IX_AnatomyEnhancementPages_MamillaFinding1Id",
                table: "AnatomyEnhancementPages",
                column: "MamillaFinding1Id");

            migrationBuilder.CreateIndex(
                name: "IX_AnatomyEnhancementPages_MamillaFinding2Id",
                table: "AnatomyEnhancementPages",
                column: "MamillaFinding2Id");

            migrationBuilder.CreateIndex(
                name: "IX_AnatomyEnhancementPages_ReportId",
                table: "AnatomyEnhancementPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnatomyEnhancementPages_SiliconeImplantFinding1Id",
                table: "AnatomyEnhancementPages",
                column: "SiliconeImplantFinding1Id");

            migrationBuilder.CreateIndex(
                name: "IX_AnatomyEnhancementPages_SiliconeImplantFinding2Id",
                table: "AnatomyEnhancementPages",
                column: "SiliconeImplantFinding2Id");

            migrationBuilder.CreateIndex(
                name: "IX_AnatomyPages_ReportId",
                table: "AnatomyPages",
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
                name: "IX_DiagnosisFindings_DiagnosisPageId",
                table: "DiagnosisFindings",
                column: "DiagnosisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_DiagnosisFindings_ImageFileId",
                table: "DiagnosisFindings",
                column: "ImageFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DiagnosisPages_ReportId",
                table: "DiagnosisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphsPages_ReportId",
                table: "LymphsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OwnFamilyAnamnesisFindings_AnamnesisPageId",
                table: "OwnFamilyAnamnesisFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PatientIndicationFindings_PatientIndicationPageId",
                table: "PatientIndicationFindings",
                column: "PatientIndicationPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PatientIndicationPages_ReportId",
                table: "PatientIndicationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PreviousTherapiesFindings_AnamnesisPageId",
                table: "PreviousTherapiesFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_RatingPages_ReportId",
                table: "RatingPages",
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
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnatomyEnhancementPages");

            migrationBuilder.DropTable(
                name: "AnatomyPages");

            migrationBuilder.DropTable(
                name: "BonesFindings");

            migrationBuilder.DropTable(
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "DiagnosisFindings");

            migrationBuilder.DropTable(
                name: "DiagnosisFindingTemplates");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "LymphsPages");

            migrationBuilder.DropTable(
                name: "OwnFamilyAnamnesisFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientIndicationFindings");

            migrationBuilder.DropTable(
                name: "PatientInformations");

            migrationBuilder.DropTable(
                name: "PreviousTherapiesFindings");

            migrationBuilder.DropTable(
                name: "RatingPages");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "MamillaFinding");

            migrationBuilder.DropTable(
                name: "SiliconeImplantFinding");

            migrationBuilder.DropTable(
                name: "BonesPages");

            migrationBuilder.DropTable(
                name: "DiagnosisPages");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "PatientIndicationPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
