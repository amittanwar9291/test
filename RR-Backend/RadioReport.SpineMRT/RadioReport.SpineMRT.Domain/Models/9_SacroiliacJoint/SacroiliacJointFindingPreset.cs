using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SacroiliacJointFindingPreset : SacroiliacJointFindingBase, IEquatable<SacroiliacJointFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SacroiliacJointFindingPreset);
        }

        public bool Equals([AllowNull] SacroiliacJointFindingPreset other)
        {
            if (other is null) return false;

            return other.IKnowDifferentialDiagnosis01 == IKnowDifferentialDiagnosis01;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
