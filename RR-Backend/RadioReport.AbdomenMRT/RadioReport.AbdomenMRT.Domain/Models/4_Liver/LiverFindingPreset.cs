using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class LiverFindingPreset : LiverFindingBase, IEquatable<LiverFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as LiverFindingPreset);
        }

        public bool Equals([AllowNull] LiverFindingPreset other)
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