using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums.SacroiliacJoint;

namespace RadioReport.SpineCT.Domain.Models
{
	public class SacroiliacJointFinding : FindingBase, IImageFileContainer
	{
		public override string InstanceName { get => FindingType.ToString(); }
        
        [RadioReportId("spi_c_090107")]
		public SacroiliacJointFindingType FindingType { get; set; }
        
        #region Common
        
        [RadioReportId("spi_c_090203")]
        public PelvisLocations PelvisLocation { get; set; }
        
        public ExtensionType ExtensionType { get; set; }
        
        [RadioReportId("spi_c_090305")]
        public bool IsBoneBridges { get; set; }
        
        [RadioReportId("spi_c_090307")]
        public bool IsAnkylosis { get; set; }
        
        public AnkylosisType AnkylosisType { get; set; }
        
        [RadioReportId("spi_c_090311")]
        public bool IsOsteophytesAnterior { get; set; }
        
        [RadioReportId("spi_c_090313")]
        public bool IsErosions { get; set; }

        [RadioReportId("spi_c_090314")]
        public bool IsJointSpaceNarrowing { get; set; }

        [RadioReportId("spi_c_090315")]
        public bool IsVacuumPhenomenon { get; set; }
        
        [RadioReportId("spi_c_090402")]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("spi_c_090403")]
        public bool IsSubchondralSclerosis { get; set; }
        
        public SubchondralSclerosisType SubchondralSclerosisType { get; set; }
        
        [RadioReportId("spi_c_090503")]
        public SacroiliacJointDifferentialDiagnosisType DifferentialDiagnosisType01 { get; set; }
        
        [RadioReportId("spi_c_090505")]
        public SacroiliacJointDifferentialDiagnosisType DifferentialDiagnosisType02 { get; set; }
        
        [RadioReportId("spi_c_090506")]
        public bool IsSecondary { get; set; }
        
        [RadioReportId("spi_c_090507")]
        public bool IsSuspicionOf { get; set; }
        
        #endregion
        
        #region ImageFile

        [RadioReportId("uni_09_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_09_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_09_007-l", InstanceName = "SpineCT.SacroiliacJoint.SacroiliacJointFinding", IsExportable = false)]
        public ImageFile ImageFile { get; set; }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            ImageFile = imageFile;
        }

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            ImageFile = null;
        }

        #endregion
	}
}
