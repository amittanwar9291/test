using System;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models
{
    public class Patient
    {
        private Patient()
        {
        }

        public Guid Id { get; protected set; }
        public Guid InstituteId { get; protected set; }
        public string FirstName { get; protected set; }
        public string LastName { get; protected set; }
        public string Name { get; protected set; }
        public DateTime BirthDate { get; protected set; }
        public Gender Gender { get; protected set; }
        public string ExternalIdentifier { get; protected set; }

        public static Patient Create(HttpAuthContext authContext)
        {
            if (authContext == null) throw new ArgumentNullException(nameof(authContext));
            if (authContext.InstituteId.IsEmpty()) throw new ArgumentException("Missing institute id", nameof(authContext));

            return new Patient
            {
                Id = Guid.NewGuid(),
                InstituteId = authContext.InstituteId,
                ExternalIdentifier = Guid.NewGuid().ToString()
            };
        }

        public static Patient Create(HttpAuthContext authContext, PatientDto dto)
        {
            if (authContext == null) throw new ArgumentNullException(nameof(authContext));
            if (dto == null) throw new ArgumentNullException(nameof(dto));

            if (authContext.InstituteId.IsEmpty()) throw new ArgumentException("Missing institute id", nameof(authContext));

            return new Patient
            {
                Id = dto.Id.IsEmpty() ? Guid.NewGuid() : dto.Id,
                InstituteId = authContext.InstituteId,
                Gender = dto.Gender,
                Name = dto.Name,
                BirthDate = dto.BirthDate,
                ExternalIdentifier = dto.ExternalIdentifier.IsNullOrEmpty() ? Guid.NewGuid().ToString() : dto.ExternalIdentifier,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
            };
        }
    }
}
