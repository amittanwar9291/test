
using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class LabrumAndRibbonsFindingPreset : LabrumAndRibbonsFindingBase, IEquatable<LabrumAndRibbonsFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as LabrumAndRibbonsFindingPreset);
        }

        public bool Equals([AllowNull] LabrumAndRibbonsFindingPreset other)
        {
            if (other is null) return false;

            return other.ExtensionLabrumPathologyDiagnosis1 == ExtensionLabrumPathologyDiagnosis1;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
