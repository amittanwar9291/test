using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class SoftTissueFindingPreset : SoftTissueFindingBase, IEquatable<SoftTissueFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SoftTissueFindingPreset);
        }

        public bool Equals([AllowNull] SoftTissueFindingPreset other)
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
