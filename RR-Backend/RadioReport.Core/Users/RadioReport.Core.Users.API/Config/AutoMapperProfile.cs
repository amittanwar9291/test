using System.Linq;
using AutoMapper;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.API.Config
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ApplicationUser, UserViewModel>()
                .ForMember(dest => dest.Role,
                    src => src.MapFrom(u =>
                        u.UserRoles.FirstOrDefault() != null ? u.UserRoles.FirstOrDefault().Role.Name : UserRole.None.ToString()));

            CreateMap<UserViewModel, ApplicationUser>()
                .ForMember(dest => dest.Initial, src => src.MapFrom(u => u.Initial.ToUpperInvariant()));
        }
    }
}
