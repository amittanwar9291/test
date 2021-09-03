using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ThoraxCT.Domain.Models
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

            return other.FindingType == FindingType 
                && other.BonesDifferentialDiagnosisType == BonesDifferentialDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}