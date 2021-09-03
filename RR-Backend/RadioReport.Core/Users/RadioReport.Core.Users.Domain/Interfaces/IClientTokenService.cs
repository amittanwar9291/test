using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Interfaces
{
    public interface IClientTokenService
    {
        Task<string> CreateClientToken(ApplicationUser user, string userAgent, Application application);
        Task<bool> ValidateClientToken(Guid clientTokenId, string browser, string operatingSystem, Application application);
        Task RemoveClientToken(Guid clientTokenId);
        Task<List<ClientToken>> GetClientTokens(Guid userId);
    }
}