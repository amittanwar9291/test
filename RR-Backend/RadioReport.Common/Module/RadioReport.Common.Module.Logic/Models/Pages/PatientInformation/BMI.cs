using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using System;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Module.Logic.Models.Pages
{
    public class BMI : ModelBase
    {
        [RadioReportId("uni_01_014", DecimalPlaces = 1)]
        public decimal Value { get; private set; }

        [RadioReportId("uni_01_004")]
        public BMICategory Category { get; private set; }

        public BMI()
        {

        }

        public BMI(int weight, int height)
        {
            if (weight > 0 && height > 0)
            {
                Value = Math.Round((decimal)weight / (((decimal)height / 100) * ((decimal)height / 100)), 1);
                Category = FindCategory(Value);
            }
        }

        private static BMICategory FindCategory(decimal value)
        {
            if (value < 16) return BMICategory.StrongUnderweight;

            if (value >= 16 && value < 17) return BMICategory.ModerateUnderweight;

            if (value >= 17 && value < 18.5m) return BMICategory.LightUnderweight;

            if (value >= 18.5m && value < 25) return BMICategory.NormalWeight;

            if (value >= 25 && value < 30) return BMICategory.PreAdiposites;

            if (value >= 30 && value < 35) return BMICategory.AdipositesGradI;

            if (value >= 35 && value < 40) return BMICategory.AdipositesGradII;

            if (value >= 40 ) return BMICategory.AdipositesGradIII;

            return BMICategory.None;
        }
    }
}
