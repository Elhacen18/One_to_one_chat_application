
using AutoMapper;
using Chat_Application.DTOs;
using Chat_Application.Models;

namespace Chat_Application.DTOs
{
    
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RegisterDto, ApplicationUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName));
        }

    }

}
