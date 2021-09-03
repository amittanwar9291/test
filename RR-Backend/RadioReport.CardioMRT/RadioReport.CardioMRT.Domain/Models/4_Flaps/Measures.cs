using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class Measures : ModelBase, IImageFileContainer
    {
        [RadioReportId("car_m_040205", InstanceName = nameof(FlapsPage.AortaAscendensMeasures))]
        [RadioReportId("car_m_040303", InstanceName = nameof(FlapsPage.PulmonaryArteryMeasures))]
        [RadioReportId("car_m_040403", InstanceName = nameof(FlapsPage.MitralValveMeasures))]
        public int? MaxFlowInMlSec { get; set; }

        [RadioReportId("car_m_040207", InstanceName = nameof(FlapsPage.AortaAscendensMeasures))]
        [RadioReportId("car_m_040305", InstanceName = nameof(FlapsPage.PulmonaryArteryMeasures))]
        [RadioReportId("car_m_040405", InstanceName = nameof(FlapsPage.MitralValveMeasures))]
        public int? MinFlowInMlSec { get; set; }

        [RadioReportId("car_m_040209", InstanceName = nameof(FlapsPage.AortaAscendensMeasures))]
        [RadioReportId("car_m_040307", InstanceName = nameof(FlapsPage.PulmonaryArteryMeasures))]
        [RadioReportId("car_m_040407", InstanceName = nameof(FlapsPage.MitralValveMeasures))]
        public int? PositiveFlowInMl { get; set; }

        [RadioReportId("car_m_040212", InstanceName = nameof(FlapsPage.AortaAscendensMeasures))]
        [RadioReportId("car_m_040309", InstanceName = nameof(FlapsPage.PulmonaryArteryMeasures))]
        [RadioReportId("car_m_040409", InstanceName = nameof(FlapsPage.MitralValveMeasures))]
        public int? NegativeFlowInMl { get; set; }

        [RadioReportId("car_m_040214", InstanceName = nameof(FlapsPage.AortaAscendensMeasures))]
        [RadioReportId("car_m_040311", InstanceName = nameof(FlapsPage.PulmonaryArteryMeasures))]
        [RadioReportId("car_m_040411", InstanceName = nameof(FlapsPage.MitralValveMeasures))]
        public int? RegurgitantFractionInPercent { get; set; }

        #region IMAGE FILE

        public Guid? FlowCurveImageId { get; set; }

        [RadioReportId("car_m_040217l", InstanceName = "AortaAscendensMeasures.FlowCurveImage", IsExportable = false)]
        [RadioReportId("car_m_040314l", InstanceName = "PulmonaryArteryMeasures.FlowCurveImage", IsExportable = false)]
        [RadioReportId("car_m_040414l", InstanceName = "MitralValveMeasures.FlowCurveImage", IsExportable = false)]
        public ImageFile FlowCurveImage { get; set; }

        public Guid? PCMeasurementImageId { get; set; }

        [RadioReportId("car_m_040219l", InstanceName = "AortaAscendensMeasures.PCMeasurementImage", IsExportable = false)]
        [RadioReportId("car_m_040316l", InstanceName = "PulmonaryArteryMeasures.PCMeasurementImage", IsExportable = false)]
        [RadioReportId("car_m_040416l", InstanceName = "MitralValveMeasures.PCMeasurementImage", IsExportable = false)]
        public ImageFile PCMeasurementImage { get; set; }

        public void DropImageFile(Guid? imageFileId)
        {
            if (imageFileId == FlowCurveImageId)
            {
                FlowCurveImageId = null;
                FlowCurveImage = null;
            }
            else if (imageFileId == PCMeasurementImageId)
            {
                PCMeasurementImageId = null;
                PCMeasurementImage = null;
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(FlowCurveImage), StringComparison.OrdinalIgnoreCase))
            {
                return FlowCurveImageId;
            }
            else if (fileType.Equals(nameof(PCMeasurementImage), StringComparison.OrdinalIgnoreCase))
            {
                return PCMeasurementImageId;
            }
            return null;
        }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (imageFile == null) throw new ArgumentNullException(nameof(imageFile));
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(FlowCurveImage), StringComparison.OrdinalIgnoreCase))
            {
                FlowCurveImageId = imageFile.Id;
                FlowCurveImage = imageFile;
            }
            else if (fileType.Equals(nameof(PCMeasurementImage), StringComparison.OrdinalIgnoreCase))
            {
                PCMeasurementImageId = imageFile.Id;
                PCMeasurementImage = imageFile;
            }
        }

        public bool HasImages => PCMeasurementImageId.HasValue || FlowCurveImageId.HasValue;

        public List<Guid> ImageIds
        {
            get
            {
                var result = new List<Guid>();
                if (PCMeasurementImageId.HasValue)
                {
                    result.Add(PCMeasurementImageId.Value);
                }
                if (FlowCurveImageId.HasValue)
                {
                    result.Add(FlowCurveImageId.Value);
                }
                return result;
            }
        }

        #endregion
    }
}