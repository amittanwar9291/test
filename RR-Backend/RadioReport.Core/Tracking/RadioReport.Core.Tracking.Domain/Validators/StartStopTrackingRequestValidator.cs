using FluentValidation;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Validators
{
    public class StartStopTrackingRequestValidator : AbstractValidator<StartStopTrackingRequest>
    {
        public StartStopTrackingRequestValidator()
        {
            RuleFor(e => e.ReportId).NotEmpty();
            RuleFor(e => e.TrackingSubjectType).NotEmpty();
            RuleFor(e => e.TrackingSubjectId).NotEmpty();
        }
    }
}