using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class PancreasFindingPreset : PancreasFindingBase, IEquatable<PancreasFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SpleenFindingPreset);
        }

        public bool Equals([AllowNull] PancreasFindingPreset other)
        {
            if (other is null) return false;

            return other.MainMassDifferentialDiagnosisType1 == MainMassDifferentialDiagnosisType1;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
