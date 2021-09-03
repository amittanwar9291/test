using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class MaleGenderFindingPreset : MaleGenderFindingBase, IEquatable<MaleGenderFindingPreset>
    {
        public MaleGenderDiagnosisType DifferentialDiagnosisType { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as MaleGenderFindingPreset);
        }

        public bool Equals([AllowNull] MaleGenderFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType
                && other.DifferentialDiagnosisType == DifferentialDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
