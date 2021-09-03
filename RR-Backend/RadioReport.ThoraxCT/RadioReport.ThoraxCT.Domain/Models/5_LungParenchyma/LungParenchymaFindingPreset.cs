using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungParenchymaFindingPreset : LungParenchymaFindingBase, IEquatable<LungParenchymaFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as LungParenchymaFindingPreset);
        }

        public bool Equals([AllowNull] LungParenchymaFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType 
                && other.MainCharacteristicsDifferentialDiagnosis01 == MainCharacteristicsDifferentialDiagnosis01;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}