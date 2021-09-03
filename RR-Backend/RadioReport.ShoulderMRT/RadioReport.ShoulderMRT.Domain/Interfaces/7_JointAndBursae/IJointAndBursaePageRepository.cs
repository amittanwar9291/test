using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Interfaces
{
    public interface IJointAndBursaePageRepository : IPageRepository<JointAndBursaePage>, IImageFileRepository<JointAndBursaePage, ImageFile>
    {
    }
}
