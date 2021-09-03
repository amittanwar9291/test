using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.MammaMX.Domain.Models
{
    public class MammographyFindingPreset : MammographyFindingBase, IEquatable<MammographyFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as MammographyFindingPreset);
        }

        public bool Equals([AllowNull] MammographyFindingPreset other)
        {
            if (other is null) return false;

            return other.MassKnownDiagnosisType == MassKnownDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
