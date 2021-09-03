using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class SpleenFindingPreset : SpleenFindingBase, IEquatable<SpleenFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SpleenFindingPreset);
        }

        public bool Equals([AllowNull] SpleenFindingPreset other)
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