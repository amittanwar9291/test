using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class MeningesFindingPreset : MeningesFindingBase, IEquatable<MeningesFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as MeningesFindingPreset);
        }

        public bool Equals([AllowNull] MeningesFindingPreset other)
        {
            if (other is null) return false;

            return other.MassDifferentialDiagnosisLocalization == MassDifferentialDiagnosisLocalization;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
