using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class BladderFindingPreset : BladderFindingBase, IEquatable<BladderFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as BladderFindingPreset);
        }

        public bool Equals([AllowNull] BladderFindingPreset other)
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