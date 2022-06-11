#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Chat App/Chat App.csproj", "Chat App/"]
RUN dotnet restore "Chat App/Chat App.csproj"
COPY . .
WORKDIR "/src/Chat App"
RUN dotnet build "Chat App.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Chat App.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Chat App.dll"]