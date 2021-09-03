using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments
{
    public class CapsuleAndLigamentsFindingPreset : CapsuleAndLigamentsFindingBase, IEquatable<CapsuleAndLigamentsFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as CapsuleAndLigamentsFindingPreset);
        }

        public bool Equals([AllowNull] CapsuleAndLigamentsFindingPreset other)
        {
            if (other is null) return false;

            return other.SynoviaDifferentialDiagnosis == SynoviaDifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
