using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class SoftPartsFindingPreset : SoftPartsFindingBase, IEquatable<SoftPartsFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SoftPartsFindingPreset);
        }

        public bool Equals([AllowNull] SoftPartsFindingPreset other)
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
