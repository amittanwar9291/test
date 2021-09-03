using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.NeckMRT.Domain.Models
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

            return other.MainSpatialNeoplasmDifferentialDiagnosisType1 == MainSpatialNeoplasmDifferentialDiagnosisType1;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
