using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class LarynxFindingPreset : LarynxFindingBase, IEquatable<LarynxFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as LarynxFindingPreset);
        }

        public bool Equals([AllowNull] LarynxFindingPreset other)
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