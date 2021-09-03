using RadioReport.ThoraxCT.Domain.Enums;
using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungInterstitiumFindingPreset : LungInterstitiumFindingBase, IEquatable<LungInterstitiumFindingPreset>
    {
        public LungInterstitiumDiagnosisType DifferentialDiagnosis { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as LungInterstitiumFindingPreset);
        }

        public bool Equals([AllowNull] LungInterstitiumFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosis == DifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}