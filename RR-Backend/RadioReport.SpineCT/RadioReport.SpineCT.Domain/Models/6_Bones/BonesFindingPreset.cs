using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.SpineCT.Domain.Models
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

            return other.BonesDiagnosis1 == BonesDiagnosis1;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
