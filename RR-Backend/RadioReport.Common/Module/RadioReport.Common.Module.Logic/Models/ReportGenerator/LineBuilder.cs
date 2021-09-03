using System;
using System.Text;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class LineBuilder
    {
        public StringBuilder Builder { get; set; }
        public Func<string, Line, string> Formatting { get; set; }
        public Predicate<Line> CustomLineValidity { get; set; }
        public Func<Line, string, string> LineText { get; set; }
        public bool IsMain { get; set; }

        public LineBuilder() 
        {
            Builder = new StringBuilder();
        }

        public LineBuilder(LineBuilder builder)
        {
            Builder = new StringBuilder();
            if (builder != null)
            {
                Formatting = builder.Formatting;
                CustomLineValidity = builder.CustomLineValidity;
                LineText = builder.LineText;
                IsMain = builder.IsMain;
            }
        }
    }
}
