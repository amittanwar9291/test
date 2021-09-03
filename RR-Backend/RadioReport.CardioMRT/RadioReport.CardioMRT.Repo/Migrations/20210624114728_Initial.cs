using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RadioReport.CardioMRT.Repo.Migrations
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
                name: "KineticDisorderLocalizer",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AkinesiaSections = table.Column<int>(nullable: false),
                    DyskinesiaSections = table.Column<int>(nullable: false),
                    HypokinesiaSections = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KineticDisorderLocalizer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LGESegmentalLocalizer",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    LGELocalizerType = table.Column<byte>(nullable: false),
                    TrasmuralSections = table.Column<int>(nullable: false),
                    SubendocardialSections = table.Column<int>(nullable: false),
                    MesocardialSections = table.Column<int>(nullable: false),
                    SubepicardialSections = table.Column<int>(nullable: false),
                    PointShapedSections = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LGESegmentalLocalizer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PerfusionDefectLocalizer",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UnderStressSections = table.Column<int>(nullable: false),
                    InPeaceAndUnderStressSections = table.Column<int>(nullable: false),
                    InPeaceSections = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerfusionDefectLocalizer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RelaxingTimeLocalizer",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    MeasureType = table.Column<int>(nullable: false),
                    QualitativeType = table.Column<byte>(nullable: false),
                    SeverityType = table.Column<int>(nullable: false),
                    ValueMyocardiumInMs = table.Column<int>(nullable: true),
                    ReferenceValueMyocardiumInMs = table.Column<int>(nullable: true),
                    ValueBloodInMs = table.Column<int>(nullable: true),
                    ECV = table.Column<float>(nullable: true),
                    IsLVTotal = table.Column<bool>(nullable: false),
                    Localizer = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelaxingTimeLocalizer", x => x.Id);
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
                name: "SpatialRequirementFindingPresets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    SignalT1wCharacteristics = table.Column<byte>(nullable: false),
                    SignalT2wCharacteristics = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementPerfusionType = table.Column<byte>(nullable: false),
                    ContrastEnhancementIntensityPerfusionType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQualityPerfusionType = table.Column<byte>(nullable: false),
                    GdEnhancementEGEType = table.Column<byte>(nullable: false),
                    GdEnhancementQualityEGEType = table.Column<byte>(nullable: false),
                    GdEnhancementLGEType = table.Column<byte>(nullable: false),
                    IsBleeding = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsHyperIntensitySTIR = table.Column<bool>(nullable: false),
                    IsValveAssociated = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpatialRequirementFindingPresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Measures",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    MaxFlowInMlSec = table.Column<int>(nullable: true),
                    MinFlowInMlSec = table.Column<int>(nullable: true),
                    PositiveFlowInMl = table.Column<int>(nullable: true),
                    NegativeFlowInMl = table.Column<int>(nullable: true),
                    RegurgitantFractionInPercent = table.Column<int>(nullable: true),
                    FlowCurveImageId = table.Column<Guid>(nullable: true),
                    PCMeasurementImageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Measures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Measures_ImageFiles_FlowCurveImageId",
                        column: x => x.FlowCurveImageId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Measures_ImageFiles_PCMeasurementImageId",
                        column: x => x.PCMeasurementImageId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AnamnesisPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsMRIPreExamination = table.Column<bool>(nullable: false),
                    MonthOfMRIPreExamination = table.Column<byte>(nullable: true),
                    YearOfMRIPreExamination = table.Column<int>(nullable: true),
                    IsLaboratoryParameters = table.Column<bool>(nullable: false),
                    UnitType = table.Column<byte>(nullable: false),
                    TotalCholesterolAmount = table.Column<int>(nullable: true),
                    HDLCholesterolAmount = table.Column<int>(nullable: true),
                    LDLCholesterolAmount = table.Column<int>(nullable: true),
                    TriglyceridesAmount = table.Column<int>(nullable: true),
                    HematocritInPercent = table.Column<byte>(nullable: true),
                    IsNicotineAbuse = table.Column<bool>(nullable: false),
                    IsDiabetesMellitus = table.Column<bool>(nullable: false),
                    IsRenalInsufficiency = table.Column<bool>(nullable: false),
                    EGFRInMlMin = table.Column<int>(nullable: true),
                    IsPositiveFamilyHistory = table.Column<bool>(nullable: false),
                    IsArterialHypertension = table.Column<bool>(nullable: false),
                    IsCurrentAntihypertensiveTherapy = table.Column<bool>(nullable: false),
                    SystolicbloodpressureInMmHg = table.Column<int>(nullable: true),
                    IsEscScore = table.Column<bool>(nullable: false),
                    EscScore = table.Column<byte>(nullable: true),
                    EscScoreType = table.Column<byte>(nullable: false),
                    IsProcamScore = table.Column<bool>(nullable: false),
                    ProcamScore = table.Column<float>(nullable: true)
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
                name: "AreaOfExaminationPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsSpecificHeartMRT = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AreaOfExaminationPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AreaOfExaminationPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FindingsVentriclesPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    HeartRate = table.Column<int>(nullable: true),
                    InterventricularSeptumThicknessInMm = table.Column<int>(nullable: true),
                    LateralInMm = table.Column<int>(nullable: true),
                    InferiorInMm = table.Column<int>(nullable: true),
                    LeftMyocardialMassInG = table.Column<int>(nullable: true),
                    LeftMyocardialMassAndBSAInGM2 = table.Column<int>(nullable: true),
                    LVEndDiastolicDiameterInMm = table.Column<int>(nullable: true),
                    LVEDVInMl = table.Column<int>(nullable: true),
                    LVESVInMl = table.Column<int>(nullable: true),
                    LVEFInPercent = table.Column<int>(nullable: true),
                    LVStrokeVolumeInMl = table.Column<int>(nullable: true),
                    LvsvAndBSAInMlM2 = table.Column<int>(nullable: true),
                    LVOutputInLInMin = table.Column<int>(nullable: true),
                    LVEDVAndBSAInMlM2 = table.Column<int>(nullable: true),
                    LVESVAndBSAInMlM2 = table.Column<int>(nullable: true),
                    LeftEDTimeInMs = table.Column<int>(nullable: true),
                    LeftESTimeInMs = table.Column<int>(nullable: true),
                    LongitudinalInPercent = table.Column<float>(nullable: true),
                    CircumferentialInPercent = table.Column<float>(nullable: true),
                    Global3DStrainInPercent = table.Column<float>(nullable: true),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    MyocardialStrainImageId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    IsLeftHeartFailure = table.Column<bool>(nullable: false),
                    MedioLateralInMm = table.Column<int>(nullable: true),
                    AnteroLateralInMm = table.Column<int>(nullable: true),
                    InferoLateralInMm = table.Column<int>(nullable: true),
                    RightMyocardialMassInG = table.Column<int>(nullable: true),
                    RightMyocardialMassAndBSAInGM2 = table.Column<int>(nullable: true),
                    RVEndDiastolicDiameterInMm = table.Column<int>(nullable: true),
                    RVEDVInMl = table.Column<int>(nullable: true),
                    RVESVInMl = table.Column<int>(nullable: true),
                    RVEFInPercent = table.Column<int>(nullable: true),
                    RVStrokeVolumeInMl = table.Column<int>(nullable: true),
                    RvsvAndBSAInMlM2 = table.Column<int>(nullable: true),
                    RVOutputInLInMin = table.Column<int>(nullable: true),
                    RVEDVAndBSAInMlM2 = table.Column<int>(nullable: true),
                    RVESVAndBSAInMlM2 = table.Column<int>(nullable: true),
                    RightEDTimeInMs = table.Column<int>(nullable: true),
                    RightESTimeInMs = table.Column<int>(nullable: true),
                    IsRightHeartFailure = table.Column<bool>(nullable: false),
                    RAIn4ChamberViewInMm = table.Column<int>(nullable: true),
                    LAIn4ChamberViewInMm = table.Column<int>(nullable: true),
                    Expansion2ndAxisInMm = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FindingsVentriclesPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FindingsVentriclesPages_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FindingsVentriclesPages_ImageFiles_MyocardialStrainImageId",
                        column: x => x.MyocardialStrainImageId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FindingsVentriclesPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LeftVentriclePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    MyocardialEdemaType = table.Column<byte>(nullable: false),
                    WallThickeningType = table.Column<byte>(nullable: false),
                    WallThinningType = table.Column<byte>(nullable: false),
                    HypointensMyokType = table.Column<byte>(nullable: false),
                    MyocardialEdemaLocalizer = table.Column<int>(nullable: false),
                    WallThickeningLocalizer = table.Column<int>(nullable: false),
                    WallThinningLocalizer = table.Column<int>(nullable: false),
                    ReducedMyocardialSignalT1wT2wLocalizer = table.Column<int>(nullable: false),
                    IsFunction = table.Column<bool>(nullable: false),
                    IsKineticDisorder = table.Column<bool>(nullable: false),
                    IsMidVentricularWallMovementDisorder = table.Column<bool>(nullable: false),
                    IsApicalBallooning = table.Column<bool>(nullable: false),
                    IsAneurysm = table.Column<bool>(nullable: false),
                    FunctionType = table.Column<byte>(nullable: false),
                    KineticDisorderLocalizerId = table.Column<Guid>(nullable: true),
                    IsPerfusion = table.Column<bool>(nullable: false),
                    PerfusionType = table.Column<byte>(nullable: false),
                    PerfusionDefectLocalizerId = table.Column<Guid>(nullable: true),
                    IsLGE = table.Column<bool>(nullable: false),
                    LGEType = table.Column<byte>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    NonSegmentalType = table.Column<byte>(nullable: false),
                    LGESegmentalLocalizerId = table.Column<Guid>(nullable: true),
                    LGEImageFileId = table.Column<Guid>(nullable: true),
                    LGESerialNumber = table.Column<string>(nullable: true),
                    LGEPictureNumber = table.Column<string>(nullable: true),
                    T1ImageFileId = table.Column<Guid>(nullable: true),
                    T1SerialNumber = table.Column<string>(nullable: true),
                    T1PictureNumber = table.Column<string>(nullable: true),
                    T2ImageFileId = table.Column<Guid>(nullable: true),
                    T2SerialNumber = table.Column<string>(nullable: true),
                    T2PictureNumber = table.Column<string>(nullable: true),
                    T1GdImageFileId = table.Column<Guid>(nullable: true),
                    T1GdSerialNumber = table.Column<string>(nullable: true),
                    T1GdPictureNumber = table.Column<string>(nullable: true),
                    IsT1 = table.Column<bool>(nullable: false),
                    IsT2 = table.Column<bool>(nullable: false),
                    IsT1Gd = table.Column<bool>(nullable: false),
                    IsT2Asterisk = table.Column<bool>(nullable: false),
                    ValueMyocardiumInMs = table.Column<int>(nullable: true),
                    ReferenceValueOfMyocardiumInMs = table.Column<int>(nullable: true),
                    T1LocalizerId = table.Column<Guid>(nullable: true),
                    T2LocalizerId = table.Column<Guid>(nullable: true),
                    T1GdLocalizerId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeftVentriclePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_KineticDisorderLocalizer_KineticDisorder~",
                        column: x => x.KineticDisorderLocalizerId,
                        principalTable: "KineticDisorderLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_ImageFiles_LGEImageFileId",
                        column: x => x.LGEImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_LGESegmentalLocalizer_LGESegmentalLocali~",
                        column: x => x.LGESegmentalLocalizerId,
                        principalTable: "LGESegmentalLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_PerfusionDefectLocalizer_PerfusionDefect~",
                        column: x => x.PerfusionDefectLocalizerId,
                        principalTable: "PerfusionDefectLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_ImageFiles_T1GdImageFileId",
                        column: x => x.T1GdImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_RelaxingTimeLocalizer_T1GdLocalizerId",
                        column: x => x.T1GdLocalizerId,
                        principalTable: "RelaxingTimeLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_ImageFiles_T1ImageFileId",
                        column: x => x.T1ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_RelaxingTimeLocalizer_T1LocalizerId",
                        column: x => x.T1LocalizerId,
                        principalTable: "RelaxingTimeLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_ImageFiles_T2ImageFileId",
                        column: x => x.T2ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeftVentriclePages_RelaxingTimeLocalizer_T2LocalizerId",
                        column: x => x.T2LocalizerId,
                        principalTable: "RelaxingTimeLocalizer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                name: "PericardiumVesselsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PericardiumVesselsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PericardiumVesselsPages_Reports_ReportId",
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
                name: "RightVentriclePages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsMyocardialEdema = table.Column<bool>(nullable: false),
                    MyocardialEdemaType = table.Column<byte>(nullable: false),
                    IsWallThickening = table.Column<bool>(nullable: false),
                    WallThickeningType = table.Column<byte>(nullable: false),
                    IsWallThinning = table.Column<bool>(nullable: false),
                    WallThinningType = table.Column<byte>(nullable: false),
                    IsMicroAneurysm = table.Column<bool>(nullable: false),
                    IsOverOneLesion = table.Column<bool>(nullable: false),
                    IsFatSignalInMyocardium = table.Column<bool>(nullable: false),
                    FunctionType = table.Column<byte>(nullable: false),
                    LGEType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RightVentriclePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RightVentriclePages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpatialRequirementPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpatialRequirementPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpatialRequirementPages_Reports_ReportId",
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
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsEvaluationARVCAccordingToTaskForceCriteria = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosisTo01 = table.Column<bool>(nullable: false),
                    DifferentialDiagnosisTo01 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    IsDifferentialDiagnosis02 = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsCoronaryCTAngiography = table.Column<bool>(nullable: false),
                    IsCTAngiographyThoracicAorta = table.Column<bool>(nullable: false),
                    IsCTAngiographyOfThePulmonaryArtery = table.Column<bool>(nullable: false),
                    IsCTThorax = table.Column<bool>(nullable: false),
                    IsContrastEnhancedThorax = table.Column<bool>(nullable: false),
                    IsCTAbdomen = table.Column<bool>(nullable: false),
                    IsContrastEnhancedAbdomen = table.Column<bool>(nullable: false),
                    IsStressCardiacMRI = table.Column<bool>(nullable: false),
                    IsMRAngiographyThoracicAorta = table.Column<bool>(nullable: false),
                    IsMRAbdomen = table.Column<bool>(nullable: false),
                    IsContrastEnhanced = table.Column<bool>(nullable: false),
                    IsEchocardiography = table.Column<bool>(nullable: false),
                    IsMyocardialScintigraphyMyocardialSPEC = table.Column<bool>(nullable: false),
                    IsUnderStress = table.Column<bool>(nullable: false),
                    IsCardailePETCT = table.Column<bool>(nullable: false),
                    IsFollowupCardioMRT = table.Column<bool>(nullable: false),
                    FollowUpTime = table.Column<byte>(nullable: false)
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
                    FractionationType = table.Column<byte>(nullable: false),
                    MagneticFieldStrengthType = table.Column<byte>(nullable: false),
                    PharmacologicalStressType = table.Column<byte>(nullable: false),
                    DobutamineInfusionDose = table.Column<int>(nullable: true),
                    IsSusceptibilityArtifacts = table.Column<bool>(nullable: false),
                    IsDarkRimArtifact = table.Column<bool>(nullable: false),
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
                name: "FlapsPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    AreFindings = table.Column<byte>(nullable: false),
                    IsAortaAscendens = table.Column<bool>(nullable: false),
                    AortaAscendensMeasuresId = table.Column<Guid>(nullable: true),
                    IsPulmonaryArtery = table.Column<bool>(nullable: false),
                    PulmonaryArteryMeasuresId = table.Column<Guid>(nullable: true),
                    IsMitralValve = table.Column<bool>(nullable: false),
                    MitralValveMeasuresId = table.Column<Guid>(nullable: true),
                    IsRVOTObstruction = table.Column<bool>(nullable: false),
                    IsLVOTObstruction = table.Column<bool>(nullable: false),
                    LVOTObstructionType = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlapsPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlapsPages_Measures_AortaAscendensMeasuresId",
                        column: x => x.AortaAscendensMeasuresId,
                        principalTable: "Measures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FlapsPages_Measures_MitralValveMeasuresId",
                        column: x => x.MitralValveMeasuresId,
                        principalTable: "Measures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FlapsPages_Measures_PulmonaryArteryMeasuresId",
                        column: x => x.PulmonaryArteryMeasuresId,
                        principalTable: "Measures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FlapsPages_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "IndicationFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    IndicationFindingType = table.Column<byte>(nullable: false),
                    StatusType = table.Column<byte>(nullable: false),
                    KnownType = table.Column<byte>(nullable: false),
                    IsECG = table.Column<bool>(nullable: false),
                    IsEchocardiography = table.Column<bool>(nullable: false),
                    IsSPECT = table.Column<bool>(nullable: false),
                    IsPET = table.Column<bool>(nullable: false),
                    IsCT = table.Column<bool>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IndicationFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IndicationFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InterventionOrPreOpsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    InterventionOrPreOpsFindingType = table.Column<byte>(nullable: false),
                    IsAorticValve = table.Column<bool>(nullable: false),
                    AorticValveType = table.Column<byte>(nullable: false),
                    IsMitralValve = table.Column<bool>(nullable: false),
                    MitralValveType = table.Column<byte>(nullable: false),
                    IsPulmonaryArteryBandingPAB = table.Column<bool>(nullable: false),
                    AnamnesisPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InterventionOrPreOpsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InterventionOrPreOpsFindings_AnamnesisPages_AnamnesisPageId",
                        column: x => x.AnamnesisPageId,
                        principalTable: "AnamnesisPages",
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
                        name: "FK_PatientInformation_AreaOfExaminationPages_Id",
                        column: x => x.Id,
                        principalTable: "AreaOfExaminationPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PericardiumVesselsFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    AtelePulmNoduleDiffDiagnosis = table.Column<byte>(nullable: false),
                    IsSuspicionOf = table.Column<bool>(nullable: false),
                    IsPleura = table.Column<bool>(nullable: false),
                    IsPericardium = table.Column<bool>(nullable: false),
                    IsBone = table.Column<bool>(nullable: false),
                    MaximumDiameterAxialInMm = table.Column<int>(nullable: true),
                    MaximumDiameterInMm = table.Column<int>(nullable: true),
                    IsPericardialEffusion = table.Column<bool>(nullable: false),
                    PericardialEffusionMaxWidth = table.Column<int>(nullable: true),
                    IsPericarditisCalcification = table.Column<bool>(nullable: false),
                    IsPericarditisConstrictiva = table.Column<bool>(nullable: false),
                    MediastinalVesselsType = table.Column<byte>(nullable: false),
                    CoronaryAnomalyType = table.Column<byte>(nullable: false),
                    DetailsOriginType = table.Column<byte>(nullable: false),
                    RCALeftOrLMARightCoronalSinus = table.Column<byte>(nullable: false),
                    DistalRCX = table.Column<byte>(nullable: false),
                    DistalLAD = table.Column<byte>(nullable: false),
                    DistalType = table.Column<byte>(nullable: false),
                    IsRCA = table.Column<bool>(nullable: false),
                    IsLMA = table.Column<bool>(nullable: false),
                    IsLAD = table.Column<bool>(nullable: false),
                    IsRCX = table.Column<bool>(nullable: false),
                    IsExtension = table.Column<bool>(nullable: false),
                    ExtensionType = table.Column<byte>(nullable: false),
                    IsAorticRoot = table.Column<bool>(nullable: false),
                    IsAscendingAorta = table.Column<bool>(nullable: false),
                    IsAorticArch = table.Column<bool>(nullable: false),
                    IsDescendingAorta = table.Column<bool>(nullable: false),
                    AortaMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsStenosis = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    IsThrombus = table.Column<bool>(nullable: false),
                    IsCentral = table.Column<bool>(nullable: false),
                    IsRight = table.Column<bool>(nullable: false),
                    IsRightSegmental = table.Column<bool>(nullable: false),
                    IsLeft = table.Column<bool>(nullable: false),
                    IsLeftSegmental = table.Column<bool>(nullable: false),
                    PericardiumVesselsDiagnosisType = table.Column<byte>(nullable: false),
                    PulmonaryVariantsType = table.Column<byte>(nullable: false),
                    PartialAnomalousType = table.Column<byte>(nullable: false),
                    VenaCavaType = table.Column<byte>(nullable: false),
                    SuperiorVariantsType = table.Column<byte>(nullable: false),
                    InferiorVariantsType = table.Column<byte>(nullable: false),
                    IsCerviSupraParast = table.Column<bool>(nullable: false),
                    IsCervicalRight = table.Column<bool>(nullable: false),
                    IsCervicalLeft = table.Column<bool>(nullable: false),
                    IsMediastinal = table.Column<bool>(nullable: false),
                    IsHilaryLobarSegmental = table.Column<bool>(nullable: false),
                    IsHilaryRight = table.Column<bool>(nullable: false),
                    IsHilaryLeft = table.Column<bool>(nullable: false),
                    IsAxilary = table.Column<bool>(nullable: false),
                    IsAxilaryRight = table.Column<bool>(nullable: false),
                    IsAxilaryLeft = table.Column<bool>(nullable: false),
                    IsEnlargedLymphNodes = table.Column<bool>(nullable: false),
                    EnlargedLymphNodeShortAxisDiameterInMm = table.Column<int>(nullable: true),
                    EnlargedLymphNodesType = table.Column<byte>(nullable: false),
                    IsAnteriorMediastinum = table.Column<bool>(nullable: false),
                    IsMiddleMediastinum = table.Column<bool>(nullable: false),
                    IsPosteriorMediastinum = table.Column<bool>(nullable: false),
                    IsUpperMediastinum = table.Column<bool>(nullable: false),
                    IsLowerMediastinum = table.Column<bool>(nullable: false),
                    PericardiumVesselsMarginType = table.Column<byte>(nullable: false),
                    HomogenityType = table.Column<byte>(nullable: false),
                    SignalT1w = table.Column<byte>(nullable: false),
                    SignalT2w = table.Column<byte>(nullable: false),
                    IsGrease = table.Column<bool>(nullable: false),
                    IsInternalChangesCysts = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsCapsule = table.Column<bool>(nullable: false),
                    IsNecroses = table.Column<bool>(nullable: false),
                    CMEnhancQuantiType = table.Column<byte>(nullable: false),
                    NoHomogenityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis02 = table.Column<byte>(nullable: false),
                    IsSubordinated = table.Column<bool>(nullable: false),
                    LungPathologyType = table.Column<byte>(nullable: false),
                    ConsolidationDiffDiagnosis = table.Column<byte>(nullable: false),
                    LungLocalizer = table.Column<byte>(nullable: false),
                    DistributionType = table.Column<byte>(nullable: false),
                    AtypicalType = table.Column<byte>(nullable: false),
                    IsLocalizationRight = table.Column<bool>(nullable: false),
                    LocalizationRightType = table.Column<byte>(nullable: false),
                    IsLocalizationLeft = table.Column<bool>(nullable: false),
                    LocalizationLeftType = table.Column<byte>(nullable: false),
                    PeculiarityType = table.Column<byte>(nullable: false),
                    FormType = table.Column<byte>(nullable: false),
                    MassMaximumDiameterAxialInMm = table.Column<int>(nullable: true),
                    IsMediastinum = table.Column<bool>(nullable: false),
                    IsFocalLiverLesions = table.Column<bool>(nullable: false),
                    FocalLiverLesionsType = table.Column<byte>(nullable: false),
                    BenignType = table.Column<byte>(nullable: false),
                    IsLesionsMoreOneOfFocalLiver = table.Column<bool>(nullable: false),
                    IsDiffuseLiverLesion = table.Column<bool>(nullable: false),
                    DiffuseLiverLesionType = table.Column<byte>(nullable: false),
                    IsCholecystolithiasis = table.Column<bool>(nullable: false),
                    IsSplenomegaly = table.Column<bool>(nullable: false),
                    IsHiatalHernia = table.Column<bool>(nullable: false),
                    IsMassAdrenalGland = table.Column<bool>(nullable: false),
                    IsMassAdrenalGlandRight = table.Column<bool>(nullable: false),
                    IsMassAdrenalGlandLeft = table.Column<bool>(nullable: false),
                    IsFocalLesionOfKidney = table.Column<bool>(nullable: false),
                    IsFocalLesionOfKidneyRight = table.Column<bool>(nullable: false),
                    IsFocalLesionOfKidneyLeft = table.Column<bool>(nullable: false),
                    FocalLesionOfKidneyType = table.Column<byte>(nullable: false),
                    IsFocalLesionOfKidneyBenignCyst = table.Column<bool>(nullable: false),
                    UnknownType = table.Column<byte>(nullable: false),
                    UnknownMaxDiameterInMm = table.Column<int>(nullable: true),
                    IsLesionsMoreOneOfFocalLesionOfKidney = table.Column<bool>(nullable: false),
                    IsHydronephrosis = table.Column<bool>(nullable: false),
                    IsHydronephrosisRight = table.Column<bool>(nullable: false),
                    IsHydronephrosisLeft = table.Column<bool>(nullable: false),
                    GradingMaxType = table.Column<byte>(nullable: false),
                    IsEnlargedAbdLymphNodes = table.Column<bool>(nullable: false),
                    EnlargedAbdLymphNodesMaxDiameterSADInMm = table.Column<int>(nullable: true),
                    EnlargedAbdLymphNodesType = table.Column<byte>(nullable: false),
                    IsStruma = table.Column<bool>(nullable: false),
                    IsRetrosternalParts = table.Column<bool>(nullable: false),
                    IsNode = table.Column<bool>(nullable: false),
                    OssLesionLocalizationType = table.Column<byte>(nullable: false),
                    UpperAbdomenSide = table.Column<byte>(nullable: false),
                    RibsLocalizationDetails = table.Column<byte>(nullable: false),
                    FocalClavicleType = table.Column<byte>(nullable: false),
                    OssLesionBenignType = table.Column<byte>(nullable: false),
                    VertebralBodyLocalizationDetails = table.Column<byte>(nullable: false),
                    PericardiumVesselsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PericardiumVesselsFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PericardiumVesselsFindings_PericardiumVesselsPages_Pericard~",
                        column: x => x.PericardiumVesselsPageId,
                        principalTable: "PericardiumVesselsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpatialRequirementFindings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    DescriptionType = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis01 = table.Column<byte>(nullable: false),
                    SignalT1wCharacteristics = table.Column<byte>(nullable: false),
                    SignalT2wCharacteristics = table.Column<byte>(nullable: false),
                    MarginType = table.Column<byte>(nullable: false),
                    HomogeneityType = table.Column<byte>(nullable: false),
                    ContrastEnhancementPerfusionType = table.Column<byte>(nullable: false),
                    ContrastEnhancementIntensityPerfusionType = table.Column<byte>(nullable: false),
                    ContrastEnhancementQualityPerfusionType = table.Column<byte>(nullable: false),
                    GdEnhancementEGEType = table.Column<byte>(nullable: false),
                    GdEnhancementQualityEGEType = table.Column<byte>(nullable: false),
                    GdEnhancementLGEType = table.Column<byte>(nullable: false),
                    IsBleeding = table.Column<bool>(nullable: false),
                    IsNecrosis = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    IsFatSignal = table.Column<bool>(nullable: false),
                    IsHyperIntensitySTIR = table.Column<bool>(nullable: false),
                    IsValveAssociated = table.Column<bool>(nullable: false),
                    MainTumorLocalizer = table.Column<byte>(nullable: false),
                    DiameterMaxAxialInMm = table.Column<int>(nullable: true),
                    GdEnhancementIntensityEGEType = table.Column<byte>(nullable: false),
                    GdEnhancementIntensityLGEType = table.Column<byte>(nullable: false),
                    GdEnhancementQualityLGEType = table.Column<byte>(nullable: false),
                    IsInfiltrationThroughDifferentTissue = table.Column<bool>(nullable: false),
                    IsPericardialEffusion = table.Column<bool>(nullable: false),
                    IsHaemorrhage = table.Column<bool>(nullable: false),
                    IsPleuralEffusion = table.Column<bool>(nullable: false),
                    IsSuperimposedThrombus = table.Column<bool>(nullable: false),
                    MobilityType = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis1 = table.Column<byte>(nullable: false),
                    DifferentialDiagnosis2 = table.Column<byte>(nullable: false),
                    IsSubordinate = table.Column<bool>(nullable: false),
                    DifferentialDiagnosis3 = table.Column<byte>(nullable: false),
                    IsLesionSame = table.Column<bool>(nullable: false),
                    NonTargetLesionLocalizer = table.Column<byte>(nullable: false),
                    ImageFileId = table.Column<Guid>(nullable: true),
                    SerialNumber = table.Column<string>(nullable: true),
                    PictureNumber = table.Column<string>(nullable: true),
                    SpatialRequirementPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpatialRequirementFindings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpatialRequirementFindings_ImageFiles_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "ImageFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SpatialRequirementFindings_SpatialRequirementPages_SpatialR~",
                        column: x => x.SpatialRequirementPageId,
                        principalTable: "SpatialRequirementPages",
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
                    ExaminationTechniqueType = table.Column<byte>(nullable: false),
                    SequenceType = table.Column<byte>(nullable: false),
                    IsECGTriggering = table.Column<bool>(nullable: false),
                    IsPostContrast = table.Column<bool>(nullable: false),
                    IsSubtraction = table.Column<bool>(nullable: false),
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
                name: "CongenitalHeartDiseases",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsCardiomegaly = table.Column<bool>(nullable: false),
                    IsDilatedPulmonaryArtery = table.Column<bool>(nullable: false),
                    IsVentricleSeptalDefect = table.Column<bool>(nullable: false),
                    IsAtrialSeptalDefect = table.Column<bool>(nullable: false),
                    IsPersistentForamenOvale = table.Column<bool>(nullable: false),
                    ArtialSeptalDefectType = table.Column<byte>(nullable: false),
                    SinusVenosusType = table.Column<byte>(nullable: false),
                    IsRARVIncrease = table.Column<bool>(nullable: false),
                    VentricleSeptalDefectType = table.Column<byte>(nullable: false),
                    IsLALVIncrease = table.Column<bool>(nullable: false),
                    IsMembranous = table.Column<bool>(nullable: false),
                    IsRVOTObstruction = table.Column<bool>(nullable: false),
                    IsInfundibularPulmonaryStenosis = table.Column<bool>(nullable: false),
                    IsPulmonaryValveStenosis = table.Column<bool>(nullable: false),
                    IsRightVentricularHypertrophy = table.Column<bool>(nullable: false),
                    IsOverridingAorta = table.Column<bool>(nullable: false),
                    IsAortopulmonaryCollateral = table.Column<bool>(nullable: false),
                    IsRightSidedAorticArch = table.Column<bool>(nullable: false),
                    IsCoronaryArteryAnomalies = table.Column<bool>(nullable: false),
                    IsRIVALADOfTheRightCoronarySinus = table.Column<bool>(nullable: false),
                    IsPrepulmonary = table.Column<bool>(nullable: false),
                    IsPersistentLeftSuperiorVena = table.Column<bool>(nullable: false),
                    IsAtrioventricularSeptalDefect = table.Column<bool>(nullable: false),
                    TranspositionOfTheGreatArteriesType = table.Column<byte>(nullable: false),
                    IsPersistentDuctusArteriosus = table.Column<bool>(nullable: false),
                    OneChamberHeartSingleType = table.Column<byte>(nullable: false),
                    MainVentricleType = table.Column<byte>(nullable: false),
                    IsMitralValveDysplasiaAtresia = table.Column<bool>(nullable: false),
                    IsHypoplasticAtreticLVOT = table.Column<bool>(nullable: false),
                    IsTranspositionOfTheGreatArteries = table.Column<bool>(nullable: false),
                    IsTricuspidalAtresia = table.Column<bool>(nullable: false),
                    IsPulmonaryAtresia = table.Column<bool>(nullable: false),
                    AVConnectionType = table.Column<byte>(nullable: false),
                    IsTricuspidInsufficiency = table.Column<bool>(nullable: false),
                    FlapsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CongenitalHeartDiseases", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CongenitalHeartDiseases_FlapsPages_FlapsPageId",
                        column: x => x.FlapsPageId,
                        principalTable: "FlapsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeartValves",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Number = table.Column<byte>(nullable: false),
                    FindingType = table.Column<byte>(nullable: false),
                    IsStenosis = table.Column<bool>(nullable: false),
                    IsInsufficiency = table.Column<bool>(nullable: false),
                    IsCalcification = table.Column<bool>(nullable: false),
                    StenosisType = table.Column<byte>(nullable: false),
                    InsufficiencyType = table.Column<byte>(nullable: false),
                    IsVariant = table.Column<bool>(nullable: false),
                    VariantType = table.Column<byte>(nullable: false),
                    ClassificationType = table.Column<byte>(nullable: false),
                    ClassificationPhenotype = table.Column<byte>(nullable: false),
                    IsQuantification = table.Column<bool>(nullable: false),
                    QuantificationInMm = table.Column<int>(nullable: true),
                    IsSAMPhenomenon = table.Column<bool>(nullable: false),
                    RegurgitationVolumeTypeInMl = table.Column<byte>(nullable: false),
                    RegurgitationVolumeTypeInPercent = table.Column<byte>(nullable: false),
                    FlapsPageId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeartValves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeartValves_FlapsPages_FlapsPageId",
                        column: x => x.FlapsPageId,
                        principalTable: "FlapsPages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnamnesisPages_ReportId",
                table: "AnamnesisPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AreaOfExaminationPages_ReportId",
                table: "AreaOfExaminationPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CMSideEffects_TechnologyPageId",
                table: "CMSideEffects",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CongenitalHeartDiseases_FlapsPageId",
                table: "CongenitalHeartDiseases",
                column: "FlapsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingLocalizers_Code",
                table: "FindingLocalizers",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FindingsVentriclesPages_ImageFileId",
                table: "FindingsVentriclesPages",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingsVentriclesPages_MyocardialStrainImageId",
                table: "FindingsVentriclesPages",
                column: "MyocardialStrainImageId");

            migrationBuilder.CreateIndex(
                name: "IX_FindingsVentriclesPages_ReportId",
                table: "FindingsVentriclesPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FlapsPages_AortaAscendensMeasuresId",
                table: "FlapsPages",
                column: "AortaAscendensMeasuresId");

            migrationBuilder.CreateIndex(
                name: "IX_FlapsPages_MitralValveMeasuresId",
                table: "FlapsPages",
                column: "MitralValveMeasuresId");

            migrationBuilder.CreateIndex(
                name: "IX_FlapsPages_PulmonaryArteryMeasuresId",
                table: "FlapsPages",
                column: "PulmonaryArteryMeasuresId");

            migrationBuilder.CreateIndex(
                name: "IX_FlapsPages_ReportId",
                table: "FlapsPages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_HeartValves_FlapsPageId",
                table: "HeartValves",
                column: "FlapsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_IndicationFindings_AnamnesisPageId",
                table: "IndicationFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_InterventionOrPreOpsFindings_AnamnesisPageId",
                table: "InterventionOrPreOpsFindings",
                column: "AnamnesisPageId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_KineticDisorderLocalizerId",
                table: "LeftVentriclePages",
                column: "KineticDisorderLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_LGEImageFileId",
                table: "LeftVentriclePages",
                column: "LGEImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_LGESegmentalLocalizerId",
                table: "LeftVentriclePages",
                column: "LGESegmentalLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_PerfusionDefectLocalizerId",
                table: "LeftVentriclePages",
                column: "PerfusionDefectLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_ReportId",
                table: "LeftVentriclePages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T1GdImageFileId",
                table: "LeftVentriclePages",
                column: "T1GdImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T1GdLocalizerId",
                table: "LeftVentriclePages",
                column: "T1GdLocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T1ImageFileId",
                table: "LeftVentriclePages",
                column: "T1ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T1LocalizerId",
                table: "LeftVentriclePages",
                column: "T1LocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T2ImageFileId",
                table: "LeftVentriclePages",
                column: "T2ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_LeftVentriclePages_T2LocalizerId",
                table: "LeftVentriclePages",
                column: "T2LocalizerId");

            migrationBuilder.CreateIndex(
                name: "IX_Measures_FlowCurveImageId",
                table: "Measures",
                column: "FlowCurveImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Measures_PCMeasurementImageId",
                table: "Measures",
                column: "PCMeasurementImageId");

            migrationBuilder.CreateIndex(
                name: "IX_PageInfos_ReportId",
                table: "PageInfos",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_PericardiumVesselsFindings_PericardiumVesselsPageId",
                table: "PericardiumVesselsFindings",
                column: "PericardiumVesselsPageId");

            migrationBuilder.CreateIndex(
                name: "IX_PericardiumVesselsPages_ReportId",
                table: "PericardiumVesselsPages",
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
                name: "IX_RightVentriclePages_ReportId",
                table: "RightVentriclePages",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sequences_TechnologyPageId",
                table: "Sequences",
                column: "TechnologyPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SpatialRequirementFindings_ImageFileId",
                table: "SpatialRequirementFindings",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_SpatialRequirementFindings_SpatialRequirementPageId",
                table: "SpatialRequirementFindings",
                column: "SpatialRequirementPageId");

            migrationBuilder.CreateIndex(
                name: "IX_SpatialRequirementPages_ReportId",
                table: "SpatialRequirementPages",
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
                name: "CMSideEffects");

            migrationBuilder.DropTable(
                name: "CongenitalHeartDiseases");

            migrationBuilder.DropTable(
                name: "FindingLocalizers");

            migrationBuilder.DropTable(
                name: "FindingsVentriclesPages");

            migrationBuilder.DropTable(
                name: "HeartValves");

            migrationBuilder.DropTable(
                name: "IndicationFindings");

            migrationBuilder.DropTable(
                name: "InterventionOrPreOpsFindings");

            migrationBuilder.DropTable(
                name: "LeftVentriclePages");

            migrationBuilder.DropTable(
                name: "PageInfos");

            migrationBuilder.DropTable(
                name: "PatientInformation");

            migrationBuilder.DropTable(
                name: "PericardiumVesselsFindings");

            migrationBuilder.DropTable(
                name: "ReportResults");

            migrationBuilder.DropTable(
                name: "ReportSchemaSessions");

            migrationBuilder.DropTable(
                name: "ReportSession");

            migrationBuilder.DropTable(
                name: "RightVentriclePages");

            migrationBuilder.DropTable(
                name: "Sequences");

            migrationBuilder.DropTable(
                name: "SpatialRequirementFindingPresets");

            migrationBuilder.DropTable(
                name: "SpatialRequirementFindings");

            migrationBuilder.DropTable(
                name: "SummaryPages");

            migrationBuilder.DropTable(
                name: "FlapsPages");

            migrationBuilder.DropTable(
                name: "AnamnesisPages");

            migrationBuilder.DropTable(
                name: "KineticDisorderLocalizer");

            migrationBuilder.DropTable(
                name: "LGESegmentalLocalizer");

            migrationBuilder.DropTable(
                name: "PerfusionDefectLocalizer");

            migrationBuilder.DropTable(
                name: "RelaxingTimeLocalizer");

            migrationBuilder.DropTable(
                name: "AreaOfExaminationPages");

            migrationBuilder.DropTable(
                name: "PericardiumVesselsPages");

            migrationBuilder.DropTable(
                name: "ReportSchemas");

            migrationBuilder.DropTable(
                name: "TechnologyPages");

            migrationBuilder.DropTable(
                name: "SpatialRequirementPages");

            migrationBuilder.DropTable(
                name: "Measures");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropTable(
                name: "ImageFiles");
        }
    }
}
