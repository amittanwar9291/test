FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS dotnet-prep
COPY . ./src/
RUN mkdir ./proj && cd ./src && \
  find . -type f -a \( -iname "*.sln" -o -iname "*.csproj" \) \
    -exec cp --parents "{}" ../proj/ \;


FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS dotnet-restore
WORKDIR /src
COPY --from=dotnet-prep ./proj .
RUN dotnet restore /ignoreprojectextensions:.dcproj

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS dotnet-publish
COPY --from=dotnet-restore ./root/.nuget ./root/.nuget
COPY --from=dotnet-restore ./src ./src/
COPY --from=dotnet-prep ./src ./src/
RUN dotnet publish "/src/RadioReport.MammaMX/RadioReport.MammaMX.API/RadioReport.MammaMX.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=dotnet-publish /app/publish .
ENTRYPOINT ["dotnet", "RadioReport.MammaMX.API.dll"]