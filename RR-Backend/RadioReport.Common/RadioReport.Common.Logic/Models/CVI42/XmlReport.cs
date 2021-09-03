using System;
using System.Collections.Generic;
using System.Xml.Serialization;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Exceptions;

namespace RadioReport.Common.Logic.Models.CVI42
{
    [XmlRoot(ElementName = "Report")]
    public class XmlReport
    {
        [XmlElement(ElementName = "Study")]
        public Study Study { get; set; }

        [XmlElement(ElementName = "Patient")]
        public Patient Patient { get; set; }

        [XmlElement(ElementName = "SAX3DFunction")]
        public List<Sax3DFunction> Sax3DFunctions { get; set; }

        [XmlElement(ElementName = "GlobalMeasurementReport")]
        public GlobalMeasurementReport GlobalMeasurementReport { get; set; }

        [XmlElement(ElementName = "T1MapAnalysis")]
        public List<T1MapAnalysis> T1MapAnalysis { get; set; }

        [XmlElement(ElementName = "T2MapNative")]
        public List<T2MapNative> T2MapNative { get; set; }
        
        [XmlElement(ElementName = "CustomMeasurements")]
        public List<CustomMeasurements> CustomMeasurements { get; set; }
    }

    [XmlRoot(ElementName = "StudyInstanceUID")]
	public class StudyInstanceUid
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
	}

	[XmlRoot(ElementName = "Study")]
	public class Study
	{
		[XmlElement(ElementName = "StudyInstanceUID")]
		public StudyInstanceUid StudyInstanceUid { get; set; }
	}

	[XmlRoot(ElementName = "Height")]
	public class Height
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
	}

	[XmlRoot(ElementName = "Weight")]
	public class Weight
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
	}

	[XmlRoot(ElementName = "Patient")]
	public class Patient
	{
		[XmlElement(ElementName = "Height")] public Height Height { get; set; }
		[XmlElement(ElementName = "Weight")] public Weight Weight { get; set; }
	}

	[XmlRoot(ElementName = "EDV")]
	public class Edv
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "ESV")]
	public class Esv
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "SV")]
	public class Sv
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "CO")]
	public class Co
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "EF")]
	public class Ef
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}
    
    [XmlRoot(ElementName = "MyoMass_H_diast")]
    public class MyoMassHDiast
    {
        [XmlAttribute(AttributeName = "val")]
        public string Val { get; set; }
        [XmlAttribute(AttributeName = "unit")]
        public string Unit { get; set; }
    }

	[XmlRoot(ElementName = "MyoMass_diast")]
	public class MyoMassDiast
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "EDV_BSA")]
	public class EdvBsa
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "ESV_BSA")]
	public class EsvBsa
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "SV_BSA")]
	public class SvBsa
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "MyoMass_BSA_diast")]
	public class MyoMassBsaDiast
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "PhaseIndex_diast")]
	public class PhaseIndexDiast
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
	}

	[XmlRoot(ElementName = "PhaseIndex_syst")]
	public class PhaseIndexSyst
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
	}

	[XmlRoot(ElementName = "LV")]
	public class LV
	{
		[XmlElement(ElementName = "EDV")] public Edv Edv { get; set; }
		[XmlElement(ElementName = "ESV")] public Esv Esv { get; set; }
		[XmlElement(ElementName = "SV")] public Sv Sv { get; set; }
		[XmlElement(ElementName = "CO")] public Co Co { get; set; }
		[XmlElement(ElementName = "EF")] public Ef Ef { get; set; }

		[XmlElement(ElementName = "MyoMass_diast")]
		public MyoMassDiast MyoMassDiast { get; set; }

		[XmlElement(ElementName = "EDV_BSA")] public EdvBsa EdvBsa { get; set; }
		[XmlElement(ElementName = "ESV_BSA")] public EsvBsa EsvBsa { get; set; }
		[XmlElement(ElementName = "SV_BSA")] public SvBsa SvBsa { get; set; }

        [XmlElement(ElementName = "MyoMass_H_diast")]
        public MyoMassHDiast MyoMassHDiast { get; set; }
        
		[XmlElement(ElementName = "MyoMass_BSA_diast")]
		public MyoMassBsaDiast MyoMassBsaDiast { get; set; }

		[XmlElement(ElementName = "PhaseIndex_diast")]
		public PhaseIndexDiast PhaseIndexDiast { get; set; }

		[XmlElement(ElementName = "PhaseIndex_syst")]
		public PhaseIndexSyst PhaseIndexSyst { get; set; }

		[XmlAttribute(AttributeName = "exclPap")]
		public string ExclPap { get; set; }

		[XmlAttribute(AttributeName = "laxCorrected")]
		public string LaxCorrected { get; set; }
	}

	[XmlRoot(ElementName = "RV")]
	public class RV
	{
		[XmlElement(ElementName = "EDV")] public Edv Edv { get; set; }
		[XmlElement(ElementName = "ESV")] public Esv Esv { get; set; }
		[XmlElement(ElementName = "SV")] public Sv Sv { get; set; }
		[XmlElement(ElementName = "CO")] public Co Co { get; set; }
		[XmlElement(ElementName = "EF")] public Ef Ef { get; set; }
		[XmlElement(ElementName = "EDV_BSA")] public EdvBsa EdvBsa { get; set; }
		[XmlElement(ElementName = "ESV_BSA")] public EsvBsa EsvBsa { get; set; }
		[XmlElement(ElementName = "SV_BSA")] public SvBsa SvBsa { get; set; }
        [XmlElement(ElementName = "MyoMass_H_diast")]
        public MyoMassHDiast MyoMassHDiast { get; set; }
        [XmlElement(ElementName = "MyoMass_BSA_diast")]
        public MyoMassBsaDiast MyoMassBsaDiast { get; set; }
		[XmlElement(ElementName = "PhaseIndex_diast")]
		public PhaseIndexDiast PhaseIndexDiast { get; set; }
        [XmlElement(ElementName = "PhaseIndex_syst")]
		public PhaseIndexSyst PhaseIndexSyst { get; set; }
        [XmlAttribute(AttributeName = "laxCorrected")]
		public string LaxCorrected { get; set; }
	}

	[XmlRoot(ElementName = "volume")]
	public class Volume
	{
		[XmlAttribute(AttributeName = "val")] public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")] public string Unit { get; set; }
		[XmlAttribute(AttributeName = "id")] public string Id { get; set; }

		[XmlAttribute(AttributeName = "basalCorrection")]
		public string BasalCorrection { get; set; }

		[XmlAttribute(AttributeName = "apicalCorrection")]
		public string ApicalCorrection { get; set; }

		[XmlAttribute(AttributeName = "excludingPapillaries")]
		public string ExcludingPapillaries { get; set; }
	}

	[XmlRoot(ElementName = "Lv")]
	public class Lv
	{
		[XmlElement(ElementName = "volume")] public List<Volume> Volume { get; set; }

		[XmlAttribute(AttributeName = "triggerTime")]
		public string TriggerTime { get; set; }
	}

	[XmlRoot(ElementName = "Rv")]
	public class Rv
	{
        [XmlElement(ElementName = "volume")] public List<Volume> Volume { get; set; }

		[XmlAttribute(AttributeName = "triggerTime")]
		public string TriggerTime { get; set; }
	}

	[XmlRoot(ElementName = "frame")]
	public class Frame
	{
		[XmlElement(ElementName = "Lv")] public Lv Lv { get; set; }
		[XmlElement(ElementName = "Rv")] public Rv Rv { get; set; }
		[XmlAttribute(AttributeName = "nb")] public string Nb { get; set; }

		[XmlAttribute(AttributeName = "saxCycle")]
		public string SaxCycle { get; set; }

		[XmlAttribute(AttributeName = "lax1Cycle")]
		public string Lax1Cycle { get; set; }
	}

	[XmlRoot(ElementName = "SAX3DFunction")]
	public class Sax3DFunction
	{
		[XmlElement(ElementName = "LV")] public List<LV> LV { get; set; }
		[XmlElement(ElementName = "RV")] public List<RV> RV { get; set; }
		[XmlElement(ElementName = "frame")] public List<Frame> Frame { get; set; }
	}
    
    [XmlRoot(ElementName = "GlobalMeasurementReport")]
	public class GlobalMeasurementReport
	{
		[XmlElement(ElementName = "LeftVentricle_2DGlobalResults")]
		public LeftVentricle_2DGlobalResults LeftVentricle_2DGlobalResults { get; set; }
	}

	[XmlRoot(ElementName = "LeftVentricle_2DGlobalResults")]
	public class LeftVentricle_2DGlobalResults
	{
		[XmlElement(ElementName = "SAX_Global")]
		public List<SaxGlobal> SaxGlobal { get; set; }
		[XmlElement(ElementName = "LAX_Global")]
		public List<LaxGlobal> LaxGlobal { get; set; }
    }

	[XmlRoot(ElementName = "SAX_Global")]
	public class SaxGlobal
	{
		[XmlAttribute(AttributeName = "PeakStrainCircumferential")]
		public string PeakStrainCircumferential { get; set; }
	}

	[XmlRoot(ElementName = "LAX_Global")]
	public class LaxGlobal
	{
		[XmlAttribute(AttributeName = "PeakStrainLongitudinal")]
		public string PeakStrainLongitudinal { get; set; }
    }

	[XmlRoot(ElementName = "T1MapAnalysis")]
	public class T1MapAnalysis
	{
		[XmlElement(ElementName = "T1Native")]
		public List<T1Native> T1Native { get; set; }
	}

	[XmlRoot(ElementName = "T1Native")]
	public class T1Native
	{
		[XmlElement(ElementName = "GlobalMyoT1NativeAcrossSlices")]
		public List<GlobalMyoT1NativeAcrossSlices> GlobalMyoT1NativeAcrossSlices { get; set; }
	}

	[XmlRoot(ElementName = "GlobalMyoT1NativeAcrossSlices")]
	public class GlobalMyoT1NativeAcrossSlices
	{
		[XmlElement(ElementName = "mean")]
		public mean mean { get; set; }
	}

	[XmlRoot(ElementName = "mean")]
	public class mean
	{
		[XmlAttribute(AttributeName = "val")]
		public string Val { get; set; }
		[XmlAttribute(AttributeName = "unit")]
		public string Unit { get; set; }
	}

	[XmlRoot(ElementName = "T2MapNative")]
	public class T2MapNative
	{
		[XmlElement(ElementName = "GlobalMyocardialT2")]
		public List<GlobalMyocardialT2> GlobalMyocardialT2 { get; set; }
	}

	[XmlRoot(ElementName = "GlobalMyocardialT2")]
	public class GlobalMyocardialT2
	{
		[XmlElement(ElementName = "slice")]
		public List<slice> slice { get; set; }
	}

	[XmlRoot(ElementName = "slice")]
	public class slice
	{
		[XmlElement(ElementName = "mean")]
		public mean mean { get; set; }
	}

    [XmlRoot(ElementName = "CustomMeasurements")]
    public class CustomMeasurements
    {
        [XmlElement(ElementName = "ResultClass")]
        public ResultClass ResultClass { get; set; }
    }

    [XmlRoot(ElementName = "ResultClass")]
    public class ResultClass
    {
        [XmlElement(ElementName = "LabelledContour")]
        public List<LabelledContour> LabelledContour { get; set; }
    }

    [XmlRoot(ElementName = "LabelledContour")]
    public class LabelledContour
    {
        [XmlElement(ElementName = "Value", Namespace = "http://www.circlecvi.com/cvi42/Report")]
        public Value Value { get; set; }
        [XmlAttribute(AttributeName = "label")]
        public string Label { get; set; }
        [XmlAttribute(AttributeName = "imageSeriesNumber")]
        public string ImageSeriesNumber { get; set; }
        [XmlAttribute(AttributeName = "imageInstanceNumber")]
        public string ImageInstanceNumber { get; set; }
        [XmlAttribute(AttributeName = "imageCvi42Id")]
        public string ImageCvi42Id { get; set; }
        [XmlAttribute(AttributeName = "imageSopInstanceUid")]
        public string ImageSopInstanceUid { get; set; }
    }

    [XmlRoot(ElementName = "Value", Namespace = "http://www.circlecvi.com/cvi42/Report")]
    public class Value
    {
        [XmlAttribute(AttributeName = "id")]
        public string Id { get; set; }
        [XmlAttribute(AttributeName = "name")]
        public string Name { get; set; }
        [XmlAttribute(AttributeName = "unit")]
        public string Unit { get; set; }
        [XmlText]
        public string Text { get; set; }
    }
}