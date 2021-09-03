using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using RadioReport.Common.Extensions;

namespace RadioReport.Common.Helpers
{
    public static class EncodingHelper
    {
        public static string EncodeBase64(string decoded) => Convert.ToBase64String(Encoding.UTF8.GetBytes(decoded));

        public static string DecodeBase64(string encoded) => Encoding.UTF8.GetString(Convert.FromBase64String(encoded));

        public static string HashSha256(string str, string salt = null)
        {
            using var sha256 = SHA256.Create();

            var bytesUnhashed = Encoding.UTF8.GetBytes(str);
            if (!salt.IsNullOrEmpty())
            {
                var saltBytes = Encoding.UTF8.GetBytes(salt!);
                bytesUnhashed = bytesUnhashed.Concat(saltBytes).ToArray();
            }

            var bytesHashed = sha256.ComputeHash(bytesUnhashed);
            var stringBuilder = new StringBuilder(bytesHashed.Length);
            foreach (var b in bytesHashed)
            {
                stringBuilder.Append(b);
            }

            return stringBuilder.ToString();
        }
    }
}
