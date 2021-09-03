using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public class ImageFile : ModelBase
    {
        public string FileName { get; set; }

        public string ObjectName { get; set; }

        [RadioReportId("uni_05_007", InstanceName = "ShoulderMRT.RotatorFinding")]
        [RadioReportId("uni_07_007", InstanceName = "ShoulderMRT.JointAndBursaeFinding.FreeJointBody")]
        [RadioReportId("uni_05_007", InstanceName = "KneeMRT.RibbonsFinding")]
        [RadioReportId("uni_11_007", InstanceName = "PelvisMRT.LymphNodesFinding")]
        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.Labrum")]
        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.Ligamenta")]
        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.BicepsTendon")]
        [RadioReportId("uni_06_007", InstanceName = "MammaMRT.DiagnosisFinding")]
        [RadioReportId("uni_04_007", InstanceName = "ShoulderMRT.BonesFinding")]
        [RadioReportId("uni_04_007", InstanceName = "AbdomenMRT.Liver.LiverFinding")]
        [RadioReportId("uni_05_007_01", InstanceName = "SpineMRT.DiscFinding.One")]
        [RadioReportId("uni_05_007_02", InstanceName = "SpineMRT.DiscFinding.Two")]
        [RadioReportId("uni_05_007_03", InstanceName = "SpineMRT.DiscFinding.Three")]
        [RadioReportId("uni_05_007_04", InstanceName = "SpineMRT.DiscFinding.Four")]
        [RadioReportId("uni_05_007_05", InstanceName = "SpineMRT.DiscFinding.Five")]
        [RadioReportId("uni_05_007_06", InstanceName = "SpineMRT.DiscFinding.Six")]
        [RadioReportId("car_m_040217", InstanceName = "AortaAscendensMeasures.FlowCurveImage")]
        [RadioReportId("car_m_040314", InstanceName = "PulmonaryArteryMeasures.FlowCurveImage")]
        [RadioReportId("car_m_040414", InstanceName = "MitralValveMeasures.FlowCurveImage")]
        [RadioReportId("car_m_040219", InstanceName = "AortaAscendensMeasures.PCMeasurementImage")]
        [RadioReportId("car_m_040316", InstanceName = "PulmonaryArteryMeasures.PCMeasurementImage")]
        [RadioReportId("car_m_040416", InstanceName = "MitralValveMeasures.PCMeasurementImage")]
        [RadioReportId("uni_06_007_01", InstanceName = "CardioMRT.LeftVentriclePage.LGEImageFile")]
        [RadioReportId("uni_06_007_02", InstanceName = "CardioMRT.LeftVentriclePage.T1ImageFile")]
        [RadioReportId("uni_06_007_03", InstanceName = "CardioMRT.LeftVentriclePage.T2ImageFile")]
        [RadioReportId("uni_06_007_04", InstanceName = "CardioMRT.LeftVentriclePage.T1GdImageFile")]
        [RadioReportId("car_m_050419", InstanceName  = "CardioMRT.FindingsVentriclesPage.MyocardialStrainImage")]
        [RadioReportId("uni_05_007", InstanceName = "CardioMRT.FindingsVentriclesPage.UploadedImageFile")]
        [RadioReportId("uni_08_007", InstanceName = "CardioMRT.SpatialRequirementFinding")]
        [RadioReportId("uni_05_007", InstanceName = "ThoraxCT.LungParenchymaFinding")]
        [RadioReportId("uni_06_007", InstanceName = "ThoraxCT.LungInterstitiumFinding")]
        [RadioReportId("uni_04_007", InstanceName = "HipMRT.Bones.BonesFinding")]
        [RadioReportId("uni_04_007", InstanceName = "HandMRT.Bones.BonesFinding")]
        [RadioReportId("uni_04_007", InstanceName = "NeckMRT.Pharynx.PharynxFinding")]
        [RadioReportId("uni_05_007", InstanceName = "NeckMRT.Larynx.LarynxFinding")]
        [RadioReportId("uni_06_007", InstanceName = "NeckMRT.SoftTissues.SoftTissuesFinding")]
        [RadioReportId("uni_07_007", InstanceName = "NeckMRT.Thyroid.ThyroidFinding")]
        [RadioReportId("uni_06_007", InstanceName = "ThoraxMRT.PleuraFinding")]
        [RadioReportId("uni_07_007", InstanceName = "ThoraxMRT.BonesFinding")]
        [RadioReportId("uni_08_007", InstanceName = "NeckMRT.LymphNodes.LymphNodesFinding")]
        [RadioReportId("uni_04_007", InstanceName = "HeadMRT.Vessels.VesselsFinding")]
        [RadioReportId("uni_08_007", InstanceName = "SpineCT.SoftTissues.SoftTissuesFinding")]
        [RadioReportId("uni_09_007", InstanceName = "SpineCT.SacroiliacJoint.SacroiliacJointFinding")]
        [RadioReportId("uni_05_007", InstanceName = "AbdomenMRT.Spleen.SpleenFinding")]
        [RadioReportId("uni_06_007", InstanceName = "AbdomenMRT.PancreasFinding")]
        [RadioReportId("uni_08_007", InstanceName = "AbdomenMRT.AdrenalGlands")]
        [RadioReportId("uni_09_007", InstanceName = "AbdomenMRT.Gastrointestinal")]
        [RadioReportId("uni_10_007", InstanceName = "AbdomenMRT.PeritonealCavity.PeritonealCavityFinding")]
        [RadioReportId("uni_11_007", InstanceName = "AbdomenMRT.LymphaticSystem")]
        [RadioReportId("uni_04_007", InstanceName = "HeadCT.Vessels.VesselsFinding")]
        [RadioReportId("uni_04_007_01", InstanceName = "HeadCT.Vessels.VesselsFinding.Perfusion01")]
        [RadioReportId("uni_04_007_02", InstanceName = "HeadCT.Vessels.VesselsFinding.Perfusion02")]
        [RadioReportId("uni_07_007", InstanceName    = "AbdomenMRT.KidneysFinding")]
        [RadioReportId("uni_07_007_01", InstanceName = "AbdomenMRT.KidneysFinding.Char1")]
        [RadioReportId("uni_07_007_02", InstanceName = "AbdomenMRT.KidneysFinding.Char2")]
        [RadioReportId("uni_05_007", InstanceName = "HeadCT.Meninges.MeningesFinding")]
        [RadioReportId("uni_09_007", InstanceName = "HeadCT.CerebrospinalFluidSpace.CerebrospinalFluidSpaceFinding")]
        [RadioReportId("uni_05_007", InstanceName = "AbdomenCT.Spleen.SpleenFinding")]
        public byte[] Stream { get; set; }
    }
}
