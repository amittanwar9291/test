using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class KidneysFindingPreset : KidneysFindingBase, IEquatable<KidneysFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as KidneysFindingPreset);
        }

        public bool Equals([AllowNull] KidneysFindingPreset other)
        {
            if (other is null) return false;

            return other.KidneysDifferentialDiagnosisType == KidneysDifferentialDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}