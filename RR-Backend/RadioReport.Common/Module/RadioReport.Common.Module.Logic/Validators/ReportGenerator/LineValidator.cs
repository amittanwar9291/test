using FluentValidation;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Validators.ReportGenerator
{
    public class LineValidator : AbstractValidator<Line>
    {
        public LineValidator()
        {
            RuleFor(l => l.LevelOrder).Must(l => l >= 0);
            RuleFor(l => l.Translations).NotNull().NotEmpty();
            RuleForEach(l => l.Translations).SetValidator(new TranslationValidator());
            RuleForEach(l => l.Metadata).SetValidator(new MetadataValidator());
            RuleForEach(l => l.ChildLines).SetValidator(this);
        }
    }
}
