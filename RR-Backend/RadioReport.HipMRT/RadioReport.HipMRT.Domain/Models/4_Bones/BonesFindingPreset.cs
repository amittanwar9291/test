using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HipMRT.Domain.Models.Bones
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

            return other.MainDiagnosisType == MainDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
