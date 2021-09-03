using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class PharynxFindingPreset: PharynxFindingBase, IEquatable<PharynxFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as PharynxFindingPreset);
        }

        public bool Equals([AllowNull] PharynxFindingPreset other)
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
