using System;
using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class PancreasFinding : PancreasFindingBase, IImageFileContainer
    {
        #region common

        [RadioReportId("uni_06_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_06_007-l", InstanceName = "AbdomenMRT.PancreasFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public List<Guid> ImageIds => ImageFileId.HasValue ? new List<Guid> { ImageFileId.Value } : new List<Guid>();

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            UploadedImageFile = imageFile;
        }

        [RadioReportId("abd_m_060207", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060258", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060299", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsUncinateProcess { get; set; }

        [RadioReportId("abd_m_060208", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060259", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602100", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPancreaticHead { get; set; }

        [RadioReportId("abd_m_060210", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060261", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602102", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPancreaticTail { get; set; }

        [RadioReportId("abd_m_0604120", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060293", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0604116", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("abd_m_060209", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_0602101", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPancreaticBody { get; set; }

        [RadioReportId("abd_m_060290", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0604113", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_0604124", InstanceName = nameof(PancreasFindingType.PostinterventionalPostoperativeFindings))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("abd_m_060321", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060239", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060239", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCharacterizationIPancreaticHead { get; set; }

        [RadioReportId("abd_m_060322", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060264", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060264", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCharacterizationIPancreaticCorpus { get; set; }

        [RadioReportId("abd_m_060323", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060265", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060265", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCharacterizationIPancreaticTail { get; set; }

        [RadioReportId("abd_m_060415", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060362", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060362", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsIrregularConfiguration { get; set; }

        [RadioReportId("abd_m_060416", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060363", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060363", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsStringOfPearlsConfiguration { get; set; }

        [RadioReportId("abd_m_060417", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060364", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060364", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsFillingDefects { get; set; }

        [RadioReportId("abd_m_060418", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060365", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060365", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsConcretion { get; set; }

        [RadioReportId("abd_m_060420", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060367", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060367", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPapillaDuodeniMajor { get; set; }

        [RadioReportId("abd_m_060422", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060369", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060369", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public byte? Diameter { get; set; }

        [RadioReportId("abd_m_060424", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_0603120", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0603120", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsIntraductalGas { get; set; }

        [RadioReportId("abd_m_060218", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060218", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060218", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public byte? MeasurementDilatation { get; set; }

        [RadioReportId("abd_m_060221", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060221", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060221", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsDilationUpstreamDuct { get; set; }

        [RadioReportId("abd_m_060222", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060222", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060222", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public byte? DilationUpstreamDuct { get; set; }

        [RadioReportId("abd_m_060335", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060449", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDuodenum { get; set; }

        [RadioReportId("abd_m_060334", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060451", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsStomach { get; set; }

        [RadioReportId("abd_m_0604100", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060385", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060496", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsSplenicArtery { get; set; }

        [RadioReportId("abd_m_060510", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060388", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsCommonHepaticArtery { get; set; }

        [RadioReportId("abd_m_060428", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060537", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsPortalVein { get; set; }

        [RadioReportId("abd_m_060439", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060393", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public SignalTypeExtended SignalT1wFSType { get; set; }

        [RadioReportId("abd_m_060504", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060465", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsFat { get; set; }

        [RadioReportId("abd_m_060514", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060466", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCysts { get; set; }

        [RadioReportId("abd_m_060517", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060469", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsSepts { get; set; }

        [RadioReportId("abd_m_060518", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060470", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("abd_m_060519", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060471", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("abd_m_060406", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        [RadioReportId("abd_m_060493", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsDuodenalStenosis { get; set; }

        [RadioReportId("abd_m_060434", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060497", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_060453", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsGastroduodenalArtery { get; set; }

        [RadioReportId("abd_m_060435", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060498", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_060456", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsPancreaticoduodenalArtery { get; set; }

        [RadioReportId("abd_m_060505", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060494", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPseudoaneurysm { get; set; }

        [RadioReportId("abd_m_060267", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060486", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalFattyDegeneration { get; set; }

        [RadioReportId("abd_m_060268", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060487", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalAtrophy { get; set; }

        [RadioReportId("abd_m_060270", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060489", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalAtrophyUncinateProcess { get; set; }

        [RadioReportId("abd_m_060271", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060490", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalAtrophyPancreaticHead { get; set; }

        [RadioReportId("abd_m_060272", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060491", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalAtrophyPancreaticBody { get; set; }

        [RadioReportId("abd_m_060273", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060492", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsParenchymalAtrophyPancreaticTail { get; set; }

        [RadioReportId("abd_m_060341", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        [RadioReportId("abd_m_060556", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsWalledOffNecrosis { get; set; }

        [RadioReportId("abd_m_060536", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060397", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsDiffusionRestriction { get; set; }

        #endregion


        #region AnatomicalVariantsAnomaly

        public AnatomicalVariantsAnomalyFindingType AnatomicalVariantsAnomalyFindingType { get; set; }

        public PancreasDivisumClassificationType PancreasDivisumClassificationType { get; set; }

        [RadioReportId("abd_m_060402", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        public bool IsStenosisOfTheMinorPapilla { get; set; }

        [RadioReportId("abd_m_060404", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        public byte? PancreaticDuctDilatation { get; set; }

        public PancreasAnulareClassificationType PancreasAnulareClassificationType { get; set; }

        [RadioReportId("abd_m_060407", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        public bool IsObstructionOfTheAbberantPancreaticDuct { get; set; }

        #endregion


        #region AcutePancreatitis

        [RadioReportId("abd_m_060309", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsFluidAccumulation { get; set; }

        [RadioReportId("abd_m_060311", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsIsolated { get; set; }

        [RadioReportId("abd_m_060312", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsConnectionToTheDuctusPancreaticus { get; set; }

        [RadioReportId("abd_m_060313", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsMultifocal { get; set; }

        [RadioReportId("abd_m_060314", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsCommunicating { get; set; }

        [RadioReportId("abd_m_060316", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsBursaOmentalis { get; set; }

        [RadioReportId("abd_m_060317", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPeritonealCavity { get; set; }

        [RadioReportId("abd_m_060318", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAnteriorPararenalSpace { get; set; }

        [RadioReportId("abd_m_060319", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPelvis { get; set; }

        [RadioReportId("abd_m_060409", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsParenchymalNecrosis { get; set; }

        public AcutePancreatitisExpansionType AcutePancreatitisExpansionType { get; set; }

        [RadioReportId("abd_m_060502", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsGas { get; set; }

        [RadioReportId("abd_m_060503", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsDebris { get; set; }

        [RadioReportId("abd_m_060226", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAdjacentEdematousIntestinalWallChange { get; set; }

        [RadioReportId("abd_m_060227", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsExtrahepaticCholestasis { get; set; }

        [RadioReportId("abd_m_060229", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public byte? DuctHepatocholedochusDiameter { get; set; }

        [RadioReportId("abd_m_060231", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsExtrahepaticCholestasisAdjacent { get; set; }

        [RadioReportId("abd_m_060233", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public byte? ExtrahepaticCholestasis { get; set; }

        [RadioReportId("abd_m_060324", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsCholecystitis { get; set; }

        [RadioReportId("abd_m_060325", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAbscess { get; set; }

        [RadioReportId("abd_m_060326", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsIntrapancreatic { get; set; }

        [RadioReportId("abd_m_060327", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsExtrapancreatic { get; set; }

        [RadioReportId("abd_m_0603100", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public byte? AbscessExpansion { get; set; }

        [RadioReportId("abd_m_060333", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsFistula { get; set; }

        [RadioReportId("abd_m_060336", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsColon { get; set; }

        [RadioReportId("abd_m_060425", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsThrombosis { get; set; }

        [RadioReportId("abd_m_060426", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsSplenicVein { get; set; }

        [RadioReportId("abd_m_060427", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsSplenicVeinCompleteOcclusion { get; set; }

        [RadioReportId("abd_m_060429", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPortalVeinCompleteOcclusion { get; set; }

        [RadioReportId("abd_m_060430", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsBleeding { get; set; }

        [RadioReportId("abd_m_060506", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPseudoaneurysmSplenicArtery { get; set; }

        [RadioReportId("abd_m_060507", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPseudoaneurysmGastroduodenalArtery { get; set; }

        [RadioReportId("abd_m_060508", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPseudoaneurysmPancreaticoduodenalArtery { get; set; }

        [RadioReportId("abd_m_060509", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsTruncusCoelicus { get; set; }

        [RadioReportId("abd_m_060511", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsFatTissueNecrosis { get; set; }

        public AssessmentType AssessmentType { get; set; }

        [RadioReportId("abd_m_060236", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAcuteOnChronic { get; set; }

        [RadioReportId("abd_m_060338", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAcutePeripancreaticFluidCollection { get; set; }

        [RadioReportId("abd_m_060339", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPseudocysts { get; set; }

        [RadioReportId("abd_m_060432", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public AcutePancreatitisDiagnosisType AcutePancreatitisDiagnosisType { get; set; }

        [RadioReportId("abd_m_060340", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsAcuteNecroticFluidCollection { get; set; }

        [RadioReportId("abd_m_060343", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsParenchymatous { get; set; }

        [RadioReportId("abd_m_060344", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        public bool IsPeripancreatic { get; set; }

        #endregion


        #region Mass

        [RadioReportId("abd_m_060109-l", InstanceName = nameof(InstanceNames.Pancreas), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("abd_m_060254", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("abd_m_060260", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsPancreaticCorpus { get; set; }

        [RadioReportId("abd_m_060262", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsPancreaticDuct { get; set; }

        [RadioReportId("abd_m_060263", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsBranchduct { get; set; }

        [RadioReportId("abd_m_060347", InstanceName = nameof(PancreasFindingType.Mass))]
        public int? Size { get; set; }

        [RadioReportId("abd_m_060350", InstanceName = nameof(PancreasFindingType.Mass))]
        public int? SecondPlane { get; set; }

        [RadioReportId("abd_m_060353", InstanceName = nameof(PancreasFindingType.Mass))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("abd_m_060513", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsInternalChangesFat { get; set; }

        public PhaseType PhaseType { get; set; }

        [RadioReportId("abd_m_060446", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("abd_m_060448", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsSpleen { get; set; }

        [RadioReportId("abd_m_060450", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsMesocolonTransversum { get; set; }

        [RadioReportId("abd_m_060452", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsStomachSuspicionOf { get; set; }

        [RadioReportId("abd_m_060274", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsExtensionDuctHepatocholedochus { get; set; }

        [RadioReportId("abd_m_060276", InstanceName = nameof(PancreasFindingType.Mass))]
        public byte? MaxDiameter { get; set; }

        [RadioReportId("abd_m_060278", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDoubleDuctSign { get; set; }

        [RadioReportId("abd_m_060279", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsVesselInvolvement { get; set; }

        [RadioReportId("abd_m_060382", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsCeliacTrunk { get; set; }

        [RadioReportId("abd_m_060384", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType CeliacTrunkCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060387", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType SplenicArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060390", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType CommonHepaticArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060455", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType GastroduodenalArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060458", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType PancreaticoduodenalArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060459", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsASuperiorMesentericArtery { get; set; }

        [RadioReportId("abd_m_060461", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType ASuperiorMesentericArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060539", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType PortalVeinCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060540", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsVSuperiorMesentericArtery { get; set; }

        [RadioReportId("abd_m_060542", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType VSuperiorMesentericArteryCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060543", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsTearDropSign { get; set; }

        [RadioReportId("abd_m_060544", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsVCavaInferior { get; set; }

        [RadioReportId("abd_m_060550", InstanceName = nameof(PancreasFindingType.Mass))]
        public CharacteristicsType VCavaInferiorCharacteristicsType { get; set; }

        [RadioReportId("abd_m_060289", InstanceName = nameof(PancreasFindingType.Mass))]
        public MassDifferentialDiagnosisType MassDifferentialDiagnosisType1 { get; set; }

        [RadioReportId("abd_m_060292", InstanceName = nameof(PancreasFindingType.Mass))]
        public MassDifferentialDiagnosisType MassDifferentialDiagnosisType2 { get; set; }

        [RadioReportId("abd_m_060295", InstanceName = nameof(PancreasFindingType.Mass))]
        public MassDifferentialDiagnosisType MassDifferentialDiagnosisType3 { get; set; }

        [RadioReportId("abd_m_060296", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsLesionAboveOne { get; set; }

        public FukuokaCriteriaType FukuokaCriteriaType { get; set; }

        [RadioReportId("abd_m_060462", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsFollowUpInOneTwoYears { get; set; }

        [RadioReportId("abd_m_060377", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsObstructiveCholestasisWithCysticLesion { get; set; }

        [RadioReportId("abd_m_060378", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDilatationOfThePancreaticDuct { get; set; }

        [RadioReportId("abd_m_060379", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsHighRiskContrastEnhancingmuralNodule { get; set; }

        [RadioReportId("abd_m_060380", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDiscussionSurgicalIndication { get; set; }

        [RadioReportId("abd_m_060475", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsClinicalPancreatitis { get; set; }

        [RadioReportId("abd_m_060476", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDiameterCysticLesionOver3cm { get; set; }

        [RadioReportId("abd_m_060483", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsGrowthAboveFiveMmInTwoYears { get; set; }

        [RadioReportId("abd_m_060477", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsContrastEnhancingMuralNodules { get; set; }

        [RadioReportId("abd_m_060478", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsThickenedWall { get; set; }

        [RadioReportId("abd_m_060479", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("abd_m_060480", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsPancreaticDuctFiveToNineMm { get; set; }

        [RadioReportId("abd_m_060481", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsAbruptChangeInPancreatic { get; set; }

        [RadioReportId("abd_m_060482", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsCAIsIncreased { get; set; }

        [RadioReportId("abd_m_060463", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsLymphNodes { get; set; }

        [RadioReportId("abd_m_0604127", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsDiscussionEndosonography { get; set; }

        [RadioReportId("abd_m_060555", InstanceName = nameof(PancreasFindingType.Mass))]
        public FukuokaNegativeCystSizeType FukuokaNegativeCystSizeType { get; set; }

        [RadioReportId("abd_m_060551", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsCTMRIIn6MonthsThen { get; set; }

        [RadioReportId("abd_m_060552", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsCTMRIIn6MonthsThereafter { get; set; }

        [RadioReportId("abd_m_060553", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsEndosonography { get; set; }

        [RadioReportId("abd_m_060554", InstanceName = nameof(PancreasFindingType.Mass))]
        public bool IsMRIWithEndosonography { get; set; }

        #endregion


        #region DiffuseParenchymalChanges 

        [RadioReportId("abd_m_060281-l", InstanceName = nameof(DiffuseParenchymalChangesHomogeneityType), IsExportable = false)]
        public HomogeneityType DiffuseParenchymalChangesHomogeneityType { get; set; }

        [RadioReportId("abd_m_060557", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsEnhancementOfTheCapsule { get; set; }

        [RadioReportId("abd_m_060558", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsDiffuseSmallestFatNecroses { get; set; }

        [RadioReportId("abd_m_060559", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsMultipleLesions { get; set; }

        [RadioReportId("abd_m_060561", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public int? DiameterLargestLesion { get; set; }

        [RadioReportId("abd_m_060563", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPseudocyst { get; set; }

        [RadioReportId("abd_m_060564", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPseudocystEnhancementOfTheCapsule { get; set; }

        [RadioReportId("abd_m_060565", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsPseudocystMultipleLesions { get; set; }

        [RadioReportId("abd_m_060567", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public int? PseudocystDiameterLargestLesion { get; set; }

        [RadioReportId("abd_m_0602103-l", InstanceName = nameof(CharacterizationIIIHomogeneityType), IsExportable = false)]
        public HomogeneityType CharacterizationIIIHomogeneityType { get; set; }

        [RadioReportId("abd_m_0604112", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public DiffuseParenchymalDifferentialDiagnosis DiffuseParenchymalDifferentialDiagnosis1 { get; set; }

        [RadioReportId("abd_m_0604115", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public DiffuseParenchymalDifferentialDiagnosis DiffuseParenchymalDifferentialDiagnosis2 { get; set; }

        #endregion


        #region PostinterventionalPostoperativeFindings 

        [RadioReportId("abd_m_0602134", InstanceName = nameof(PancreasFindingType.PostinterventionalPostoperativeFindings))]
        public byte? MonthOfOperation { get; set; }

        [RadioReportId("abd_m_0602135", InstanceName = nameof(PancreasFindingType.PostinterventionalPostoperativeFindings))]
        public int? YearOfOperation { get; set; }

        public PostoperativeFindingType PostoperativeFindingType { get; set; }

        public PathologyType PathologyType { get; set; }

        #endregion        
    }
}
