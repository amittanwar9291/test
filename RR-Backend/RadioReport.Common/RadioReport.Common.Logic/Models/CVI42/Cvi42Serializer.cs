using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Exceptions;

namespace RadioReport.Common.Logic.Models.CVI42
{
    public static class Cvi42Serializer
    {
        public static T Deserialize<T>(string input) where T : class
        {
            XmlSerializer ser = new XmlSerializer(typeof(T));

            using (StringReader sr = new StringReader(input))
            {
                return (T) ser.Deserialize(sr);
            }
        }

        public static string Serialize<T>(T ObjectToSerialize)
        {
            XmlSerializer xmlSerializer = new XmlSerializer(ObjectToSerialize.GetType());

            using (StringWriter textWriter = new StringWriter())
            {
                xmlSerializer.Serialize(textWriter, ObjectToSerialize);
                return textWriter.ToString();
            }
        }

        public static bool IsValidCvi42Report(XmlReport report, out string studyInstanceUid)
        {
                studyInstanceUid = report.Study.StudyInstanceUid.Val;
                if (studyInstanceUid == null || string.IsNullOrWhiteSpace(studyInstanceUid))
                {
                    throw new Cvi42MissingStudyInstanceUidException("Invalid xml. StudyinstanceUid is missing.");
                }

                if (report.Sax3DFunctions.Count != 1 || report.Sax3DFunctions[0] == null)
                {
                    throw new Cvi42DuplicatedSax3dException("Invalid xml. DuplicatedSax3d found.");
                }

                return true;
        }

        public static Dictionary<string, object> GetValuesFromCvi42Report(XmlReport xmlReport)
        {
            var result = new Dictionary<string, object>();

            if (xmlReport == null)
            {
                return result;
            }

            var sax3dFunction = xmlReport.Sax3DFunctions.Count == 1 ? xmlReport.Sax3DFunctions[0] : null;
            var globalMeasurementReport = xmlReport.GlobalMeasurementReport;
            var t1MapAnalysis = xmlReport.T1MapAnalysis.Count == 1 ? xmlReport.T1MapAnalysis[0] : null;
            var t2MapNative = xmlReport.T2MapNative.Count == 1 ? xmlReport.T2MapNative[0] : null;
            var customMeasurements = xmlReport.CustomMeasurements?.Count == 1 ? xmlReport.CustomMeasurements[0] : null;
            var relevantLv = sax3dFunction?.LV?.FirstOrDefault(sf => sf.ExclPap == "yes" && sf.LaxCorrected == "no");
            var relevantRv = sax3dFunction?.RV?.FirstOrDefault(sf => sf.LaxCorrected == "no");

            var phaseIndexLvDiastValue = relevantLv?.PhaseIndexDiast?.Val;
            var phaseIndexLvSystValue = relevantLv?.PhaseIndexSyst?.Val;

            var phaseIndexRvDiastValue = relevantRv?.PhaseIndexDiast?.Val;
            var phaseIndexRvSystValue = relevantRv?.PhaseIndexSyst?.Val;

            var diastFrameLv = sax3dFunction?.Frame?.FirstOrDefault(f => f.Nb == phaseIndexLvDiastValue);
            var diastFrameRv = sax3dFunction?.Frame?.FirstOrDefault(f => f.Nb == phaseIndexRvDiastValue);
            var systFrameLv = sax3dFunction?.Frame?.FirstOrDefault(f => f.Nb == phaseIndexLvSystValue);
            var systFrameRv = sax3dFunction?.Frame?.FirstOrDefault(f => f.Nb == phaseIndexRvSystValue);

            result.Add("uni_01_002", xmlReport.Patient.Weight.Val);
            result.Add("uni_01_003", xmlReport.Patient.Height.Val);

            if (relevantLv != null)
            {
                result.Add("car_m_050217", relevantLv.Edv?.Val);
                result.Add("car_m_050219", relevantLv.Esv?.Val);
                result.Add("car_m_050303", relevantLv.Sv?.Val);
                result.Add("car_m_050307", relevantLv.Co?.Val);
                result.Add("car_m_050301", relevantLv.Ef?.Val);
                result.Add("car_m_050210", relevantLv.MyoMassHDiast?.Val);
                result.Add("car_m_050309", relevantLv.EdvBsa?.Val);
                result.Add("car_m_050311", relevantLv.EsvBsa?.Val);
                result.Add("car_m_050305", relevantLv.SvBsa?.Val);
                result.Add("car_m_050212", relevantLv.MyoMassBsaDiast?.Val);
            }

            if (relevantRv != null)
            {
                result.Add("car_m_050123", relevantRv.Edv?.Val);
                result.Add("car_m_050125", relevantRv.Esv?.Val);
                result.Add("car_m_050223", relevantRv.Sv?.Val);
                result.Add("car_m_050227", relevantRv.Co?.Val);
                result.Add("car_m_050221", relevantRv.Ef?.Val);
                result.Add("car_m_050229", relevantRv.EdvBsa?.Val);
                result.Add("car_m_050231", relevantRv.EsvBsa?.Val);
                result.Add("car_m_050225", relevantRv.SvBsa?.Val);
                result.Add("car_m_050116", relevantRv.MyoMassHDiast?.Val);
                result.Add("car_m_050118", relevantRv.MyoMassBsaDiast?.Val);
            }

            result.Add("car_m_050313", diastFrameLv?.Lv?.Volume?.FirstOrDefault()?.Val);
            result.Add("car_m_050315", systFrameLv?.Lv?.Volume?.FirstOrDefault()?.Val);
            result.Add("car_m_050233", diastFrameRv?.Rv?.Volume?.FirstOrDefault()?.Val);
            result.Add("car_m_050235", systFrameRv?.Rv?.Volume?.FirstOrDefault()?.Val);

            result.Add("car_m_050404",
                globalMeasurementReport?.LeftVentricle_2DGlobalResults?.SaxGlobal
                    ?.FirstOrDefault(s => s.PeakStrainCircumferential != null)?.PeakStrainCircumferential);
            result.Add("car_m_050402",
                globalMeasurementReport?.LeftVentricle_2DGlobalResults?.LaxGlobal
                    ?.FirstOrDefault(l => l.PeakStrainLongitudinal != null)?.PeakStrainLongitudinal);
            result.Add("car_m_060128",
                t1MapAnalysis?.T1Native?.FirstOrDefault()?.GlobalMyoT1NativeAcrossSlices?.FirstOrDefault()?.mean?.Val);
            result.Add("car_m_060228",
                t2MapNative?.GlobalMyocardialT2?.FirstOrDefault()?.slice?.FirstOrDefault()?.mean?.Val);

            if (customMeasurements != null)
            {
                var resultClass = customMeasurements?.ResultClass;
                var labelledContour = resultClass?.LabelledContour;

                result.Add("car_m_050208",
                    labelledContour?.FirstOrDefault(lc => lc.Label == Cvi42Consts.InferioreEnddiastolischeMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050206",
                    labelledContour?.FirstOrDefault(lc => lc.Label == Cvi42Consts.LateraleEnddiastolischeMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050204",
                    labelledContour
                        ?.FirstOrDefault(lc => lc.Label == Cvi42Consts.InterventrikulaerEenddiastolischeMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050112",
                    labelledContour
                        ?.FirstOrDefault(lc => lc.Label == Cvi42Consts.RvEnddiastolischeAnteroLateraleMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050114",
                    labelledContour
                        ?.FirstOrDefault(lc => lc.Label == Cvi42Consts.RvEnddiastolischeInferoLateraleMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050110",
                    labelledContour
                        ?.FirstOrDefault(lc => lc.Label == Cvi42Consts.RvEnddiastolischeMedioLateraleMyokarddicke)
                        ?.Value?.Text);
                result.Add("car_m_050121",
                    labelledContour?.FirstOrDefault(lc => lc.Label == Cvi42Consts.RvEnddiastolischerDiameter)?.Value
                        ?.Text);
            }

            return result;
        }
    }
}