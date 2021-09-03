using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.MammaMX.Domain.Models
{
    public class UltrasoundFindingPreset : UltrasoundFindingBase, IEquatable<UltrasoundFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as UltrasoundFindingPreset);
        }

        public bool Equals([AllowNull] UltrasoundFindingPreset other)
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
