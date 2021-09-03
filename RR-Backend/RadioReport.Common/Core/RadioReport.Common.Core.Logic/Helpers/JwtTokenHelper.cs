using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Common.Core.Logic.Helpers
{
    public static class JwtTokenHelper
    {
        public static JwtSecurityToken ValidateRsaSignedJwtToken(string jwtTokenString, IKeyStoreService keyStoreService)
        {
            if (keyStoreService == null) throw new ArgumentNullException(nameof(keyStoreService));

            var jwtToken = ReadJwtToken(jwtTokenString);
            if (!jwtToken.TryGetGuid(JwtPayloadKey.KeyId, out var keyId) || keyId.IsEmpty()) throw new InvalidJwtTokenException("Missing key id");

            var keyCipher = keyStoreService.GetByKeyIdOrLast(keyId);
            var rsaKeyParameters = (RsaKeyParameters) PublicKeyFactory.CreateKey(Convert.FromBase64String(keyCipher));
            using var rsa = new RSACryptoServiceProvider();
            rsa.ImportParameters(new RSAParameters
            {
                Modulus = rsaKeyParameters.Modulus.ToByteArrayUnsigned(),
                Exponent = rsaKeyParameters.Exponent.ToByteArrayUnsigned()
            });
            var validationParameters = new TokenValidationParameters()
            {
                RequireExpirationTime = false,
                RequireSignedTokens = true,
                ValidateAudience = false,
                ValidateIssuer = false,
                IssuerSigningKey = new RsaSecurityKey(rsa)
            };
            new JwtSecurityTokenHandler().ValidateToken(jwtTokenString, validationParameters, out _);

            return jwtToken;
        }

        public static JwtSecurityToken ReadJwtToken(string jwtTokenString) => new JwtSecurityTokenHandler().ReadJwtToken(jwtTokenString);
    }
}
