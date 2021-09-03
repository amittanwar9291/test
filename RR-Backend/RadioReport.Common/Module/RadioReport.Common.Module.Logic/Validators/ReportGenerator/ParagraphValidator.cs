using FluentValidation;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Validators.ReportGenerator
{
    public class ParagraphValidator : AbstractValidator<Paragraph>
    {
        public ParagraphValidator() {
            RuleFor(p => p.Name).Must(n => !string.IsNullOrEmpty(n));
            RuleFor(p => p.Order).Must(o => o >= 0);
            RuleForEach(p => p.Lines).SetValidator(new LineValidator());
        }
    }
}
