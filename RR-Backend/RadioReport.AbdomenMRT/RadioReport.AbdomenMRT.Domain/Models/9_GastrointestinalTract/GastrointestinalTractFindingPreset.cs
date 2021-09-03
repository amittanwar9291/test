using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class GastrointestinalTractFindingPreset : GastrointestinalTractFindingBase, IEquatable<GastrointestinalTractFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as GastrointestinalTractFindingPreset);
        }

        public bool Equals([AllowNull] GastrointestinalTractFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosisType == DifferentialDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}