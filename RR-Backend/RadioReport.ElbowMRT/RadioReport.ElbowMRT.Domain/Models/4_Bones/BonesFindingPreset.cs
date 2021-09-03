using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class BonesFindingPreset : BonesFindingBase, IEquatable<BonesFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as BonesFindingPreset);
        }

        public bool Equals([AllowNull] BonesFindingPreset other)
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