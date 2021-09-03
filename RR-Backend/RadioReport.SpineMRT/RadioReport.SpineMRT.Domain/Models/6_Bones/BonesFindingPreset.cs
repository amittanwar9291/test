using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.SpineMRT.Domain.Models
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

            return other.MainCharacteristicsDifferentialDiagnosis01 == MainCharacteristicsDifferentialDiagnosis01;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}