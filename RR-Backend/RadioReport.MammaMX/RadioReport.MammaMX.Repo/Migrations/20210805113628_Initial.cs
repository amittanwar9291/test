using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.MammaMX.Repo.Migrations
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
                name: "LymphNodeDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    ShortAxisDiameterInMm = table.Column<int>(nullable: true),
                    LongitudinalDiameterInMm = table.Column<int>(nullable: true),
                    IsDisturbedInternalArchitecture = table.Column<bool>(nullable: false),
                    IsHilarObliteration = table.Column<bool>(nullable: false),
                    IsIrregularCorticalWidth = table.Column<bool>(nullable: false),
                    IsIncreasedVascularization = table.Column<bool>(nullable: false),
                    IsCapsularInfiltration = table.Column<bool>(nullable: false),
                    IsLesion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodeDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MammographyFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassKnownDiagnosisType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MammographyFindingPresets", x => x.Id);
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
                name: "UltrasoundFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsPartiallyWithinTheSkin = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MarginEchodelimitationType = table.Column<byte>(nullable: false),
                    EchoContentType = table.Column<byte>(nullable: false),
                    ExitEchodorsalSoundPatternsType = table.Column<byte>(nullable: false),
                    EnvironmentalReactionType = table.Column<byte>(nullable: false),
                    VascularDrawingLesionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UltrasoundFindingPresets", x => x.Id);
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
                name: "MammographyFindingPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MammographyFindingPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MammographyFindingPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MammographyParenchymaAnatomyPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    VolumeType = table.Column<byte>(nullable: false),
                    VolumeLocalization = table.Column<int>(nullable: false),
                    SubcutaneousFattyTissueType = table.Column<byte>(nullable: false),
                    SubcutaneousAdiposeTissueLocalization = table.Column<int>(nullable: false),
                    RightParenchymaDensityBreastCompositionType = table.Column<byte>(nullable: false),
                    LeftParenchymaDensityBreastCompositionType = table.Column<byte>(nullable: false),
                    PectoralisMuscleType = table.Column<byte>(nullable: false),
                    PectoralisMuscleLocalization = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MammographyParenchymaAnatomyPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MammographyParenchymaAnatomyPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicalHistoryPages",
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
                    table.PrimaryKey("PK_MedicalHistoryPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalHistoryPages_Reports_ReportId",
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
                    MXMammaType = table.Column<byte>(nullable: false),
                    MonthOfLastMX = table.Column<byte>(nullable: true),
                    YearOfLastMX = table.Column<int>(nullable: true),
                    MammographyDetails = table.Column<byte>(nullable: false),
                    WasMammography = table.Column<bool>(nullable: false),
                    MonthOfLastMammography = table.Column<byte>(nullable: true),
                    YearOfLastMammography = table.Column<int>(nullable: true),
                    MammasonographyDetails = table.Column<byte>(nullable: false),
                    WasMammasonography = table.Column<bool>(nullable: false),
                    MonthOfLastMammosonography = table.Column<byte>(nullable: true),
                    YearOfLastMammosonography = table.Column<int>(nullable: true),
                    MammographyMRTDetails = table.Column<byte>(nullable: false)
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
                    RightBiRads = table.Column<byte>(nullable: true),
                    RightBiRadsMultifocalType = table.Column<byte>(nullable: false),
                    RightBiRadsMulticentricType = table.Column<byte>(nullable: false),
                    RightBiRadsLevel4Type = table.Column<byte>(nullable: false),
                    LeftBiRads = table.Column<byte>(nullable: true),
                    LeftBiRadsMultifocalType = table.Column<byte>(nullable: false),
                    LeftBiRadsMulticentricType = table.Column<byte>(nullable: false),
                    LeftBiRadsLevel4Type = table.Column<byte>(nullable: false),
                    CourseOfDiseaseType = table.Column<byte>(nullable: false),
                    ProcedureFindingType = table.Column<byte>(nullable: false),
                    BiopsyLocalizationType = table.Column<byte>(nullable: false),
                    BiopsyModalityType = table.Column<byte>(nullable: false),
                    IsStereotactic = table.Column<bool>(nullable: false),
                    IsVacuumPunchBiopsy = table.Column<bool>(nullable: false),
                    IsUltrasound = table.Column<bool>(nullable: false),
                    UltrasoundDate = table.Column<byte>(nullable: false),
                    UltrasoundStrategy = table.Column<byte>(nullable: false),
                    IsMammography = table.Column<bool>(nullable: false),
                    MammographyDate = table.Column<byte>(nullable: false),
                    MammographyStrategy = table.Column<byte>(nullable: false),
                    IsMRI = table.Column<bool>(nullable: false),
                    MRIDate = table.Column<byte>(nullable: false)
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
                    IsMammography = table.Column<bool>(nullable: false),
                    BreastLocationCC = table.Column<int>(nullable: false),
                    BreastLocationMLO = table.Column<int>(nullable: false),
                    IsUltrasound = table.Column<bool>(nullable: false),
                    BreastLocationSonography = table.Column<int>(nullable: false),
                    IsColorCodedDopplerUltrasound = table.Column<bool>(nullable: false),
                    IsElastography = table.Column<bool>(nullable: false),
                    IsUltrasoundGuidedBreastBiopsy = table.Column<bool>(nullable: false),
                    IsPunchBiopsyRight = table.Column<bool>(nullable: false),
                    IsPunchBiopsyLeft = table.Column<bool>(nullable: false),
                    IsVeryDenseParenchyma = table.Column<bool>(nullable: false),
                    IsParenchymaNotCompletelyVisible = table.Column<bool>(nullable: false),
                    IsProjectionError = table.Column<bool>(nullable: false),
                    IsArtifact = table.Column<bool>(nullable: false),
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
                name: "UltrasoundFindingPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UltrasoundFindingPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UltrasoundFindingPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UltrasoundMammaryGlandsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CutisType = table.Column<byte>(nullable: false),
                    CutisLocation = table.Column<int>(nullable: false),
                    IsRightNipple = table.Column<bool>(nullable: false),
                    IsLeftNipple = table.Column<bool>(nullable: false),
                    CutisRetractionPresence = table.Column<byte>(nullable: false),
                    RetractionLocation = table.Column<int>(nullable: false),
                    SubcutaneousFatTissueType = table.Column<byte>(nullable: false),
                    SubcutaneousFatTissueLocation = table.Column<int>(nullable: false),
                    MPectoralisType = table.Column<byte>(nullable: false),
                    MPectoralisLocation = table.Column<int>(nullable: false),
                    ParenchymaDensityType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UltrasoundMammaryGlandsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UltrasoundMammaryGlandsPages_Reports_ReportId",
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
                name: "LymphNodesFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    LeftLymphNodeDetailsId = table.Column<Guid>(nullable: true),
                    RightLymphNodeDetailsId = table.Column<Guid>(nullable: true),
                    LymphNodesPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LymphNodesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_LymphNodeDetails_LeftLymphNodeDetailsId",
                        column: x => x.LeftLymphNodeDetailsId,
                        principalTable: "LymphNodeDetails",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_LymphNodesPages_LymphNodesPageId",
                        column: x => x.LymphNodesPageId,
                        principalTable: "LymphNodesPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LymphNodesFindings_LymphNodeDetails_RightLymphNodeDetailsId",
                        column: x => x.RightLymphNodeDetailsId,
                        principalTable: "LymphNodeDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MammographyFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    MassKnownDiagnosisType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    DensityType = table.Column<byte>(nullable: false),
                    BreastLocation = table.Column<int>(nullable: false),
                    DistanceToNippleInMm = table.Column<byte>(nullable: true),
                    IsSkinRetraction = table.Column<bool>(nullable: false),
                    IsNippleRetraction = table.Column<bool>(nullable: false),
                    IsSkinThickening = table.Column<bool>(nullable: false),
                    IsTrabecularThickening = table.Column<bool>(nullable: false),
                    IsAxillaryLymphadenopathy = table.Column<bool>(nullable: false),
                    IsArchitecturalDistorsion = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    LargestDiameterInMm = table.Column<byte>(nullable: true),
                    LayerRectangularInMm = table.Column<byte>(nullable: true),
                    DepthType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologicallyConfirmed = table.Column<bool>(nullable: false),
                    HistologicallySecuredType = table.Column<byte>(nullable: false),
                    IsCalcificationInTheLesion = table.Column<bool>(nullable: false),
                    CalcificationInTheLesionType = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis1Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis2Type = table.Column<byte>(nullable: false),
                    MassDifferentialDiagnosis3Type = table.Column<byte>(nullable: false),
                    MaxExpansionInMm = table.Column<byte>(nullable: true),
                    DistributionType = table.Column<byte>(nullable: false),
                    CalcificationFormType = table.Column<byte>(nullable: false),
                    CalcificationDiagnosisType = table.Column<byte>(nullable: false),
                    IsAsymmetryWithoutEvidenceOfSuspiciousMasses = table.Column<bool>(nullable: false),
                    IsAsymmetry = table.Column<bool>(nullable: false),
                    ArchitectureDistorsionDiagnosis1Type = table.Column<byte>(nullable: false),
                    ArchitectureDistorsionDiagnosis2Type = table.Column<byte>(nullable: false),
                    AsymmetryType = table.Column<byte>(nullable: false),
                    IsOnlyVisibleInOne = table.Column<bool>(nullable: false),
                    IsConcaveEdges = table.Column<bool>(nullable: false),
                    IsMixedWithFat = table.Column<bool>(nullable: false),
                    IsNoCentralHyperdensity = table.Column<bool>(nullable: false),
                    AsymmetricDiagnosisType = table.Column<byte>(nullable: false),
                    IsSurroundingBrighteningHemair = table.Column<bool>(nullable: false),
                    SkinLesionDiagnosis1Type = table.Column<byte>(nullable: false),
                    SkinLesionDiagnosis2Type = table.Column<byte>(nullable: false),
                    IsOverOneLesionOfTheSameEntity = table.Column<bool>(nullable: false),
                    SolitaryMammaryDiagnosis1Type = table.Column<byte>(nullable: false),
                    SolitaryMammaryDiagnosis2Type = table.Column<byte>(nullable: false),
                    MammographyFindingPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MammographyFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MammographyFindings_MammographyFindingPages_MammographyFind~",
                        column: x => x.MammographyFindingPageId,
                        principalTable: "MammographyFindingPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OwnFamilyAnamnesisFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsBreastCarcinoma = table.Column<bool>(nullable: false),
                    BreastCarcinomaType = table.Column<byte>(nullable: false),
                    BreastCarcinomaAge = table.Column<byte>(nullable: true),
                    IsOvarianCancer = table.Column<bool>(nullable: false),
                    OvarianCancerAge = table.Column<byte>(nullable: true),
                    OwnAnamnesisMonth = table.Column<byte>(nullable: true),
                    OwnAnamnesisYear = table.Column<int>(nullable: true),
                    MenopauseType = table.Column<byte>(nullable: false),
                    BreastLocation = table.Column<int>(nullable: false),
                    MedicalHistoryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OwnFamilyAnamnesisFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OwnFamilyAnamnesisFindings_MedicalHistoryPages_MedicalHisto~",
                        column: x => x.MedicalHistoryPageId,
                        principalTable: "MedicalHistoryPages",
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
                    MedicalHistoryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousTherapiesFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousTherapiesFindings_MedicalHistoryPages_MedicalHistor~",
                        column: x => x.MedicalHistoryPageId,
                        principalTable: "MedicalHistoryPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PatientIndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IsProgressiveFinding = table.Column<bool>(nullable: false),
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
                        name: "FK_PatientInformation_PatientIndicationPages_Id",
                        column: x => x.Id,
                        principalTable: "PatientIndicationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TechnologyFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsContrastAgentForGalactography = table.Column<bool>(nullable: false),
                    ContrastVolumeInMl = table.Column<float>(nullable: true),
                    TechnologyPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TechnologyFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TechnologyFindings_TechnologyPages_TechnologyPageId",
                        column: x => x.TechnologyPageId,
                        principalTable: "TechnologyPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UltrasoundFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis = table.Column<byte>(nullable: false),
                    IsPartiallyWithinTheSkin = table.Column<bool>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MarginEchodelimitationType = table.Column<byte>(nullable: false),
                    EchoContentType = table.Column<byte>(nullable: false),
                    ExitEchodorsalSoundPatternsType = table.Column<byte>(nullable: false),
                    EnvironmentalReactionType = table.Column<byte>(nullable: false),
                    VascularDrawingLesionType = table.Column<byte>(nullable: false),
                    CalcificationsType = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    IsHistologicallyConfirmed = table.Column<bool>(nullable: false),
                    HistologicallySecuredType = table.Column<byte>(nullable: false),
                    Location = table.Column<int>(nullable: false),
                    DiameterInMm = table.Column<int>(nullable: true),
                    SizeOfSecondLayerInMm = table.Column<int>(nullable: true),
                    SizeOfThirdLayerInMm = table.Column<int>(nullable: true),
                    DistanceToNippleInMm = table.Column<int>(nullable: true),
                    OrientationType = table.Column<byte>(nullable: false),
                    IsIndistinct = table.Column<bool>(nullable: false),
                    IsAngularMargins = table.Column<bool>(nullable: false),
                    IsMicrolobulated = table.Column<bool>(nullable: false),
                    IsSpiculated = table.Column<bool>(nullable: false),
                    EchoPatternType = table.Column<byte>(nullable: false),
                    DeformabilityCompressionType = table.Column<byte>(nullable: false),
                    MovabilityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    IsSuspectedOfDifferentialDiagnosis1 = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    UltrasoundFindingPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UltrasoundFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UltrasoundFindings_UltrasoundFindingPages_UltrasoundFinding~",
                        column: x => x.UltrasoundFindingPageId,
                        principalTable: "UltrasoundFindingPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FindingRelations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    MammographyFindingId = table.Column<Guid>(nullable: true),
                    IsNoCorrelation = table.Column<bool>(nullable: false),
                    UltrasoundFindingId = table.Column<Guid>(nullable: true),
                    SummaryPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FindingRelations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FindingRelations_MammographyFindings_MammographyFindingId",
                        column: x => x.MammographyFindingId,
                        principalTable: "MammographyFindings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FindingRelations_SummaryPages_SummaryPageId",
                        column: x => x.SummaryPageId,
                        principalTable: "SummaryPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FindingRelations_UltrasoundFindings_UltrasoundFindingId",
                        column: x => x.UltrasoundFindingId,
                        principalTable: "UltrasoundFindings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingRelations_MammographyFindingId",
                table: "FindingRelations",
                column: "MammographyFindingId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingRelations_SummaryPageId",
                table: "FindingRelations",
                column: "SummaryPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingRelations_UltrasoundFindingId",
                table: "FindingRelations",
                column: "UltrasoundFindingId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_LeftLymphNodeDetailsId",
                table: "LymphNodesFindings",
                column: "LeftLymphNodeDetailsId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_LymphNodesPageId",
                table: "LymphNodesFindings",
                column: "LymphNodesPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesFindings_RightLymphNodeDetailsId",
                table: "LymphNodesFindings",
                column: "RightLymphNodeDetailsId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LymphNodesPages_ReportId",
                table: "LymphNodesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MammographyFindingPages_ReportId",
                table: "MammographyFindingPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MammographyFindings_MammographyFindingPageId",
                table: "MammographyFindings",
                column: "MammographyFindingPageId");

            migrationBuilder.CreateIndex(
                name: "IX_MammographyParenchymaAnatomyPages_ReportId",
                table: "MammographyParenchymaAnatomyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MedicalHistoryPages_ReportId",
                table: "MedicalHistoryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OwnFamilyAnamnesisFindings_MedicalHistoryPageId",
                table: "OwnFamilyAnamnesisFindings",
                column: "MedicalHistoryPageId");

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
                name: "IX_PreviousTherapiesFindings_MedicalHistoryPageId",
                table: "PreviousTherapiesFindings",
                column: "MedicalHistoryPageId");

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
                name: "IX_SummaryPages_ReportId",
                table: "SummaryPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TechnologyFindings_TechnologyPageId",
                table: "TechnologyFindings",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_TechnologyPages_ReportId",
                table: "TechnologyPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UltrasoundFindingPages_ReportId",
                table: "UltrasoundFindingPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UltrasoundFindings_UltrasoundFindingPageId",
                table: "UltrasoundFindings",
                column: "UltrasoundFindingPageId");

            migrationBuilder.CreateIndex(
                name: "IX_UltrasoundMammaryGlandsPages_ReportId",
                table: "UltrasoundMammaryGlandsPages",
                column: "ReportId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "FindingRelations");

            migrationBuilder.DropTable(
                name: "ImageFiles");

            migrationBuilder.DropTable(
                name: "LymphNodesFindings");

            migrationBuilder.DropTable(
                name: "MammographyFindingPresets");

            migrationBuilder.DropTable(
                name: "MammographyParenchymaAnatomyPages");

            migrationBuilder.DropTable(
                name: "OwnFamilyAnamnesisFindings");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientIndicationFindings");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PreviousTherapiesFindings");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "TechnologyFindings");

            migrationBuilder.DropTable(
                name: "UltrasoundFindingPresets");

            migrationBuilder.DropTable(
                name: "UltrasoundMammaryGlandsPages");

            migrationBuilder.DropTable(
                name: "MammographyFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "UltrasoundFindings");

            migrationBuilder.DropTable(
                name: "LymphNodeDetails");

            migrationBuilder.DropTable(
                name: "LymphNodesPages");

            migrationBuilder.DropTable(
                name: "PatientIndicationPages");

            migrationBuilder.DropTable(
                name: "MedicalHistoryPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "MammographyFindingPages");

            migrationBuilder.DropTable(
                name: "UltrasoundFindingPages");

            migrationBuilder.DropTable(
                name: "Reports");
        }
    }
}
