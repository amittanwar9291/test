using System;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Extensions;

namespace RadioReport.Common.Logic.Extensions
{
    public static class JwtSecurityTokenExtensions
    {
        public static bool TryGetGuid(this JwtSecurityToken token, string payloadKey, out Guid value)
        {
            if (token == null) throw new ArgumentNullException(nameof(token));

            if (token.Payload.ContainsKey(payloadKey))
            {
                return Guid.TryParse(token.Payload[payloadKey].ToString(), out value);
            }

            value = default;

            return false;
        }

        public static bool TryGetLong(this JwtSecurityToken token, string payloadKey, out long value)
        {
            if (token == null) throw new ArgumentNullException(nameof(token));

            if (token.Payload.ContainsKey(payloadKey))
            {
                return long.TryParse(token.Payload[payloadKey].ToString(), out value);
            }

            value = default;

            return false;
        }

        public static bool TryGetDateTime(this JwtSecurityToken token, string payloadKey, out DateTime value)
        {
            if (token == null) throw new ArgumentNullException(nameof(token));

            if (token.Payload.ContainsKey(payloadKey))
            {
                return DateTime.TryParse(token.Payload[payloadKey].ToString(), out value);
            }

            value = default;

            return false;
        }

        public static bool TryGetJObject(this JwtSecurityToken token, string payloadKey, out JObject value)
        {
            if (token == null) throw new ArgumentNullException(nameof(token));

            if (token.Payload.TryGetValue(payloadKey, out var obj))
            {
                value = obj as JObject;

                return value != null;
            }

            value = default;

            return false;
        }

        public static bool TryGetSerialized<T>(this JwtSecurityToken token, string payloadKey, out T value)
        {
            if (token == null) throw new ArgumentNullException(nameof(token));

            if (token.Payload.ContainsKey(payloadKey) && !token.Payload[payloadKey].ToString().IsNullOrEmpty())
            {
                try
                {
                    value = token.Payload[payloadKey].ToString().Deserialize<T>();

                    return true;
                }
                catch
                {
                    value = default;

                    return false;
                }
            }

            value = default;

            return false;
        }

        public static Guid GetGuid(this JwtSecurityToken token, string payloadKey) => token.TryGetGuid(payloadKey, out var value) ? value : default;

        public static long GetLong(this JwtSecurityToken token, string payloadKey) => token.TryGetLong(payloadKey, out var value) ? value : default;

        public static DateTime GetDateTime(this JwtSecurityToken token, string payloadKey) => token.TryGetDateTime(payloadKey, out var value) ? value : default;

        public static T GetSerialized<T>(this JwtSecurityToken token, string payloadKey) => token.TryGetSerialized(payloadKey, out T value) ? value : default;
    }
}
